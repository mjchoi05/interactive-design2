let particles = [];
let pivots = {};

// 각도 변수
let targetAngles = { 2: 0, 3: 0, 4: 0, 5: 0 };
let currentAngles = { 2: 0, 3: 0, 4: 0, 5: 0 };

// 스케일 및 위치 제어 변수
let bodyScale = 1.0;
let baseEarDist = 60;

// 사용자 정의 위치 보정
let manualOffsetX = 0;
let manualOffsetY = 0;

let graphicAnchor = { x: 280, y: 100 };
let currentNosePos;

// ★★★ [손목 위치 저장용 변수] ★★★
let leftHandPos, rightHandPos;
let handEffectRadius = 100; // 손 주변 영향 범위
let handScatterStrength = 150; // 흩어지는 강도

// ★★★ [추가] 사과 충돌 효과 변수 ★★★
let appleCollisionActive = false;
let appleCollisionTime = 0;
let collapseDuration = 3000; // 3초 동안 무너짐

// ★ 1. 초기화 함수
function initBodySystem() {
  particles = [];

  currentNosePos = createVector(width / 2, height / 2 - 100);

  // 손 위치 초기화 (화면 밖으로)
  leftHandPos = createVector(-1000, -1000);
  rightHandPos = createVector(-1000, -1000);

  // 관절 중심점
  pivots[2] = createVector(390, 160);
  pivots[3] = createVector(170, 155);
  pivots[4] = createVector(310, 490);
  pivots[5] = createVector(235, 490);

  // 점 데이터 수집
  let pts_Fixed = getPointsFromShape(drawFirstShape_Fixed);
  let pts_RArm = getPointsFromShape(drawFirstShape_RArm);
  let pts_LArm = getPointsFromShape(drawFirstShape_LArm);
  let pts_RLeg = getPointsFromShape(drawFirstShape_RLeg);
  let pts_LLeg = getPointsFromShape(drawFirstShape_LLeg);
  let pts_Global = getPointsFromShape(drawSecondShape);

  let allPointsA = pts_Fixed.concat(pts_RArm, pts_LArm, pts_RLeg, pts_LLeg);
  if (allPointsA.length === 0)
    allPointsA.push(createVector(width / 2, height / 2));
  if (pts_Global.length === 0)
    pts_Global.push(createVector(width / 2, height / 2));

  let maxCount = Math.max(allPointsA.length, pts_Global.length);
  let end0 = pts_Fixed.length;
  let end1 = end0 + pts_RArm.length;
  let end2 = end1 + pts_LArm.length;
  let end3 = end2 + pts_RLeg.length;

  for (let i = 0; i < maxCount; i++) {
    let posA = allPointsA[i % allPointsA.length];
    let posB = pts_Global[i % pts_Global.length];
    let myPartID = 0;
    let originIndex = i % allPointsA.length;
    if (originIndex < end0) myPartID = 0;
    else if (originIndex < end1) myPartID = 2;
    else if (originIndex < end2) myPartID = 3;
    else if (originIndex < end3) myPartID = 4;
    else myPartID = 5;
    particles.push(new Particle(posA, posB, myPartID));
  }
}

// ★★★ [추가] 사과 충돌 트리거 함수 ★★★
function triggerAppleCollapse() {
  appleCollisionActive = true;
  appleCollisionTime = millis();
  console.log("🍎 사과 충돌! 픽셀 무너짐 시작");
}

// ★ 2. 그리기 함수
function drawBody(level, currentPose, fallingWords) {
  if (currentPose) {
    calculatePoseAnglesAndScale(currentPose);
  }
  for (let id = 2; id <= 5; id++) {
    currentAngles[id] = lerp(currentAngles[id], targetAngles[id], 0.1);
  }
  noStroke();
  fill(255);

  for (let p of particles) {
    p.update(level, fallingWords);
    p.display();
  }
}

// ==========================================
// [Particle 클래스]
// ==========================================
class Particle {
  constructor(posA, posB, partID) {
    this.posA = posA.copy();
    this.posB = posB;
    this.partID = partID;
    this.currentPos = posA.copy();
    this.targetBody = posA.copy();

    this.velocity = createVector(0, 0);
    this.gravity = createVector(0, 0.5);
  }

  update(level, fallingWords) {
    // 사과 충돌 시 무너짐 효과
    if (appleCollisionActive) {
      let elapsed = millis() - appleCollisionTime;

      if (elapsed < collapseDuration) {
        this.velocity.add(this.gravity);
        this.currentPos.add(this.velocity);
        this.velocity.x += random(-0.5, 0.5);

        if (this.currentPos.y > height + 100) {
          this.velocity.y = 0;
        }

        return;
      } else {
        appleCollisionActive = false;
        this.velocity.set(0, 0);
      }
    }

    // 1. 기본 회전
    let baseX, baseY;
    if (this.partID >= 2 && this.partID <= 5) {
      let myPivot = pivots[this.partID];
      let angle = currentAngles[this.partID];
      let x = this.posA.x - myPivot.x;
      let y = this.posA.y - myPivot.y;
      let rx = x * cos(angle) - y * sin(angle);
      let ry = x * sin(angle) + y * cos(angle);
      baseX = rx + myPivot.x;
      baseY = ry + myPivot.y;
    } else {
      baseX = this.posA.x;
      baseY = this.posA.y;
    }

    let relX = (baseX - graphicAnchor.x) * bodyScale;
    let relY = (baseY - graphicAnchor.y) * bodyScale;

    let noseX = currentNosePos ? currentNosePos.x - width / 2 : 0;
    let noseY = currentNosePos ? currentNosePos.y - height / 2 : 0;

    let finalX = relX + noseX + manualOffsetX;
    let finalY = relY + noseY + manualOffsetY;

    this.targetBody.set(finalX, finalY);

    // 2. 상호작용
    let isInteracting = false;

    // 손바닥 효과
    let currentHandRadius = handEffectRadius * bodyScale;

    let distLeft = dist(
      this.targetBody.x,
      this.targetBody.y,
      leftHandPos.x,
      leftHandPos.y
    );
    if (distLeft < currentHandRadius) {
      this.targetBody.x += random(-handScatterStrength, handScatterStrength);
      this.targetBody.y += random(-handScatterStrength, handScatterStrength);
    }

    let distRight = dist(
      this.targetBody.x,
      this.targetBody.y,
      rightHandPos.x,
      rightHandPos.y
    );
    if (distRight < currentHandRadius) {
      this.targetBody.x += random(-handScatterStrength, handScatterStrength);
      this.targetBody.y += random(-handScatterStrength, handScatterStrength);
    }

    // 텍스트 효과
    if (fallingWords) {
      let textEffectRadius = 50 * bodyScale;
      let textPushForce = 50;

      for (let w of fallingWords) {
        let d = dist(this.targetBody.x, this.targetBody.y, w.pos.x, w.pos.y);
        if (d < textEffectRadius) {
          let angle = atan2(
            this.targetBody.y - w.pos.y,
            this.targetBody.x - w.pos.x
          );
          let force = map(d, 0, textEffectRadius, textPushForce, 0);

          this.targetBody.x += cos(angle) * force;
          this.targetBody.y += sin(angle) * force;
          isInteracting = true;
        }
      }
    }

    // 3. 괴물 모핑 - posB 사용
    let bRelX = (this.posB.x - graphicAnchor.x) * bodyScale;
    let bRelY = (this.posB.y - graphicAnchor.y) * bodyScale;
    let targetBVector = createVector(
      bRelX + noseX + manualOffsetX,
      bRelY + noseY + manualOffsetY
    );

    let finalTarget = p5.Vector.lerp(this.targetBody, targetBVector, level);

    // 4. 이동 속도
    let moveSpeed = isInteracting ? 0.05 : 0.1;
    this.currentPos.lerp(finalTarget, moveSpeed);

    // 5. 진동
    if (level > 0.05) {
      let shake = level * 3 * bodyScale;
      this.currentPos.x += random(-shake, shake);
      this.currentPos.y += random(-shake, shake);
    }
  }

  display() {
    let pSize = 1.5 * bodyScale;
    rect(this.currentPos.x, this.currentPos.y, pSize, pSize);
  }
}

// ==========================================
// [유틸] 포즈 계산
// ==========================================
function calculatePoseAnglesAndScale(pose) {
  let confidenceThreshold = 0.2;

  if (pose.leftWrist && pose.leftWrist.confidence > 0.2) {
    let tx = width - pose.leftWrist.x - width / 2;
    let ty = pose.leftWrist.y - height / 2;
    leftHandPos.set(tx, ty);
  } else {
    leftHandPos.set(-2000, -2000);
  }

  if (pose.rightWrist && pose.rightWrist.confidence > 0.2) {
    let tx = width - pose.rightWrist.x - width / 2;
    let ty = pose.rightWrist.y - height / 2;
    rightHandPos.set(tx, ty);
  } else {
    rightHandPos.set(-2000, -2000);
  }

  if (pose.nose && pose.nose.confidence > 0.2) {
    let targetNose = createVector(width - pose.nose.x, pose.nose.y);
    currentNosePos.lerp(targetNose, 0.1);
  }

  let lEar = pose.leftEar;
  let rEar = pose.rightEar;
  if (lEar && rEar && lEar.confidence > 0.1 && rEar.confidence > 0.1) {
    let distEars = dist(lEar.x, lEar.y, rEar.x, rEar.y);
    let targetScale = distEars / baseEarDist;
    targetScale = constrain(targetScale, 0.5, 3.0);
    bodyScale = lerp(bodyScale, targetScale, 0.1);
  }

  let rS = pose.rightShoulder;
  let rE = pose.rightElbow;
  if (
    rS.confidence > confidenceThreshold &&
    rE.confidence > confidenceThreshold
  ) {
    let dy = rE.y - rS.y;
    let dx = rE.x - rS.x;
    targetAngles[2] = constrain(atan2(dy, dx) - PI / 2, -1.6, 0.5);
  }

  let lS = pose.leftShoulder;
  let lE = pose.leftElbow;
  if (
    lS.confidence > confidenceThreshold &&
    lE.confidence > confidenceThreshold
  ) {
    let dy = lE.y - lS.y;
    let dx = lE.x - lS.x;
    targetAngles[3] = constrain((atan2(dy, dx) - PI / 2) * -1, -1.0, 1.6);
  }

  let rH = pose.rightHip;
  let rK = pose.rightKnee;
  if (
    rH.confidence > confidenceThreshold &&
    rK.confidence > confidenceThreshold
  ) {
    let dy = rK.y - rH.y;
    let dx = rK.x - rH.x;
    targetAngles[4] = constrain((atan2(dy, dx) - PI / 2) * -1, -1.0, 1.0);
  }

  let lH = pose.leftHip;
  let lK = pose.leftKnee;
  if (
    lH.confidence > confidenceThreshold &&
    lK.confidence > confidenceThreshold
  ) {
    let dy = lK.y - lH.y;
    let dx = lK.x - lH.x;
    targetAngles[5] = constrain((atan2(dy, dx) - PI / 2) * -1, -1.0, 1.0);
  }
}

function getPointsFromShape(renderFunction) {
  let pg = createGraphics(600, 1200);
  pg.pixelDensity(1);
  pg.background(0);
  renderFunction(pg);
  pg.loadPixels();

  let pts = [];
  let step = 3;
  for (let x = 0; x < pg.width; x += step) {
    for (let y = 0; y < pg.height; y += step) {
      if (pg.pixels[(x + y * pg.width) * 4] > 100) {
        pts.push(createVector(x, y));
      }
    }
  }
  return pts;
}
