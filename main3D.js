let totalCollisions = 0;
let morphThreshold = 100;
let currentProgress = 0;

let video,
  poseNet,
  poses = [];
let collisions = [],
  words = [];
let sentenceIndex = 0;
let isEndingPhase = false;

// ★★★ 사과 문장 관리 변수 ★★★
let hasSeenApple = false;
let isAppleSentence = false;

// ★★★ 엔딩 화면 관리 변수 ★★★
let showEnding = false;
let endingStartTime = 0;
let endingFadeDuration = 2000; // 2초 동안 페이드인

// 3D 카메라 제어 변수
let rotationX = 0,
  rotationY = 0;
let targetRotX = 0,
  targetRotY = 0;
let camDistance = 800,
  targetCamDistance = 800;

// ★★★ WordParticle 클래스 (setup보다 위에 위치해야 에러가 안 납니다) ★★★
class WordParticle {
  constructor(txt, x, y) {
    this.txt = txt;
    // 텍스트 생성 위치: 화면 위쪽 보이지 않는 곳(-800)
    this.pos = createVector(map(x, 0, 100, -100, -100), -800);
    this.z = random(-300, 300);
    this.vel = createVector(random(-1, 1), random(3, 5), 0);
    this.dead = false;
    this.isAppleWord = txt === "사과" || txt.includes("사과");
    this.shakeOffset = createVector(0, 0, 0);
  }

  update() {
    this.pos.add(this.vel);

    // 사과 단어 흔들림
    if (this.isAppleWord) {
      this.shakeOffset.set(random(-2, 2), random(-2, 2), random(-2, 2));
    }

    // 선(사람 그래픽)과의 충돌 체크
    if (frameCount % 2 === 0 && collisions.length > 0) {
      for (let cp of collisions) {
        let d = dist(this.pos.x, this.pos.y, this.z, cp.x, cp.y, cp.z || 0);
        if (d < 100) {
          // 충돌 범위 증가: 45 → 80
          this.dead = true;
          totalCollisions++; // 충돌 시 모핑 게이지 상승

          console.log("텍스트 충돌 단어:", this.txt, "거리:", d);

          // ★★★ 사과 단어 충돌 시 파티클 무너짐 효과 트리거 ★★★
          if (this.isAppleWord) {
            hasSeenApple = true;
            if (typeof triggerAppleCollapse !== "undefined") {
              triggerAppleCollapse();
              console.log("사과 충돌");
            }
          }

          return;
        }
      }
    }

    // 하단 소멸점
    if (this.pos.y > 800) this.dead = true;
  }

  draw() {
    push();
    let finalZ = this.z + (this.isAppleWord ? this.shakeOffset.z : 0);
    translate(
      this.pos.x + (this.isAppleWord ? this.shakeOffset.x : 0),
      this.pos.y + (this.isAppleWord ? this.shakeOffset.y : 0),
      finalZ
    );

    let depth = map(abs(finalZ), 0, 300, 1.2, 0.6);
    let alpha = map(abs(finalZ), 0, 300, 255, 120);

    ambientMaterial(255);
    if (this.isAppleWord) emissiveMaterial(255, 100, 100, alpha);
    else emissiveMaterial(255, 255, 255, alpha);

    textFont(myFont);
    textSize(20 * depth);
    textAlign(CENTER, CENTER);
    text(this.txt, 0, 0);
    pop();
  }
}

function preload() {
  myFont = loadFont("AppleSDGothicNeoSB.ttf");
}

function setup() {
  // 1. 캔버스 생성 (중앙 블랙박스 크기에 맞춤)
  let canvas = createCanvas(600, 450, WEBGL);
  canvas.parent("canvas-container");
  pixelDensity(1);

  perspective(PI / 3, width / height, 0.1, 10000);
  // 2. ★ 텍스트가 안 뜰 때 가장 중요한 부분: 데이터 로드 ★
  console.log("데이터 로딩 시도...");
  if (typeof sentences !== "undefined" && sentences.length > 0) {
    initFullText(); // 이 함수가 실행되어야 글자가 나타납니다.
    console.log("텍스트 데이터 로드 성공:", sentences.length, "문장");
  } else {
    console.error(
      "에러: sentences 데이터가 정의되지 않았거나 비어있습니다. text.js를 확인하세요."
    );
  }

  // 3. 기존 PoseNet 및 시스템 초기화
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  poseNet = ml5.poseNet(video, () => console.log("PoseNet 로드 완료"));
  poseNet.on("pose", (results) => {
    poses = results;
  });

  initBodySystem();
  spawnSentence();
}

// 양 끝에 텍스트를 배치하는 핵심 함수
function initFullText() {
  const leftIdx = document.getElementById("left-indices");
  const rightTxt = document.getElementById("right-sentences");

  if (!leftIdx || !rightTxt) {
    console.error(
      "에러: HTML에 left-indices 또는 right-sentences ID를 가진 div가 없습니다."
    );
    return;
  }

  // 왼쪽 열에는 번호, 오른쪽 열에는 문장을 세로로 나열
  leftIdx.innerHTML = sentences
    .map(
      (_, i) =>
        `<div id="idx-${i}" class="side-item inactive-unit">LOG_${nf(
          i + 1,
          3
        )}</div>`
    )
    .join("");

  rightTxt.innerHTML = sentences
    .map(
      (s, i) => `<div id="txt-${i}" class="side-item inactive-unit">${s}</div>`
    )
    .join("");
}

function draw() {
  background(0); // 그래픽 영역은 순수 블랙

  // ★★★ 엔딩 화면 표시 ★★★
  if (showEnding) {
    let elapsed = millis() - endingStartTime;
    let alpha = map(elapsed, 0, endingFadeDuration, 0, 255);
    alpha = constrain(alpha, 0, 255);

    push();
    fill(255, alpha);
    textFont(myFont);
    textSize(60);
    textAlign(CENTER, CENTER);
    text("FIN", 0, 0);
    pop();

    return; // 엔딩 화면에서는 다른 것 그리지 않음
  }

  // 고개 제어 업데이트
  updateHeadControl();

  rotationX = lerp(rotationX, targetRotX, 0.05);
  rotationY = lerp(rotationY, targetRotY, 0.05);
  camDistance = lerp(camDistance, targetCamDistance, 0.1);

  push();
  camera(
    sin(rotationY) * camDistance,
    sin(rotationX) * camDistance * 0.5,
    cos(rotationY) * camDistance,
    0,
    0,
    0,
    0,
    1,
    0
  );

  // 충돌용 좌표 갱신
  collisions = [];
  if (typeof particles !== "undefined" && particles.length > 0) {
    for (let i = 0; i < particles.length; i += 5) {
      collisions.push(particles[i].currentPos);
    }
    // 디버깅: 첫 프레임에만 로그 출력
    if (frameCount === 1) {
      console.log("충돌 감지 활성화:", collisions.length, "개의 충돌 포인트");
    }
  } else {
    if (frameCount === 1) {
      console.error("❌ particles 배열이 정의되지 않았거나 비어있습니다!");
    }
  }

  // 텍스트 로직
  for (let i = words.length - 1; i >= 0; i--) {
    words[i].update();
    words[i].draw();
    if (words[i].dead) words.splice(i, 1);
  }

  currentProgress = constrain(totalCollisions / morphThreshold, 0, 1);
  let currentPose = poses.length > 0 ? poses[0].pose : null;
  drawBody(currentProgress, currentPose, words);
  pop();

  updateDOM();
}

function updateDOM() {
  // 1. 그래픽 안의 숫자 업데이트 (이건 잘 된다면 패스)
  const idxElem = document.getElementById("current-index");
  const progElem = document.getElementById("progress-text");
  if (idxElem) idxElem.innerText = nf(sentenceIndex + 1, 2);
  if (progElem) progElem.innerText = Math.floor(currentProgress * 100) + "%";

  // 2. 하이라이트 로직 (이 부분이 핵심입니다)

  // 모든 인덱스와 텍스트에서 'active-unit'을 제거하고 'inactive-unit'을 넣음
  const allItems = document.querySelectorAll(".side-item");
  allItems.forEach((el) => {
    el.classList.remove("active-unit");
    el.classList.add("inactive-unit");
  });

  // 현재 인덱스에 해당하는 왼쪽 번호와 오른쪽 텍스트를 찾음
  const curIdx = document.getElementById(`idx-${sentenceIndex}`);
  const curTxt = document.getElementById(`txt-${sentenceIndex}`);

  if (curIdx && curTxt) {
    // 하이라이트 클래스 추가
    curIdx.classList.add("active-unit");
    curIdx.classList.remove("inactive-unit");

    curTxt.classList.add("active-unit");
    curTxt.classList.remove("inactive-unit");

    // [선택 사항] 현재 하이라이트된 문장으로 화면을 부드럽게 스크롤해줌
    // 사용자가 스크롤을 직접 할 거라면 이 줄은 지워도 됩니다.
    // curTxt.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function updateHeadControl() {
  if (poses.length > 0) {
    let pose = poses[0].pose;
    if (pose.nose.confidence > 0.5) {
      // 고개 회전 매핑
      targetRotY = map(pose.nose.x, 0, 640, PI / 3, -PI / 3);
      // 고개 기울기 매핑
      let midEyeY = (pose.leftEye.y + pose.rightEye.y) / 2;
      targetRotX = map(pose.nose.y - midEyeY, 15, 60, -0.4, 0.6);
    }
  }
}

function spawnSentence() {
  if (typeof sentences === "undefined" || sentences.length === 0) return;

  // ★★★ 마지막 문장에 도달하면 엔딩 시작 ★★★
  if (sentenceIndex >= sentences.length - 1) {
    // 파티클 무너뜨리기
    if (typeof triggerAppleCollapse !== "undefined") {
      triggerAppleCollapse();
    }
    // 3초 후 엔딩 화면 표시
    setTimeout(() => {
      showEnding = true;
      endingStartTime = millis();
    }, 3000);
    return;
  }

  let txt = sentences[sentenceIndex];

  // ★★★ 현재 문장이 사과 문장인지 체크 ★★★
  isAppleSentence = txt.includes("사과");

  let parts = txt.split(" ");
  let spacing = 40;
  let startX = random(50, 400);

  parts.forEach((word, i) => {
    words.push(new WordParticle(word, startX + i * spacing, -50));
  });

  sentenceIndex = (sentenceIndex + 1) % sentences.length;
  setTimeout(spawnSentence, 6000);
}

function keyPressed() {
  if (key === "s" || key === "S") {
    // ★★★ 사과 문장에서는 스킵 불가 ★★★
    if (isAppleSentence) {
      console.log("사과 문장에서는 스킵할 수 없습니다!");
      return;
    }

    if (typeof sentences !== "undefined" && sentences.length > 0) {
      // ★★★ 아직 사과를 안 봤다면 무조건 사과 문장으로 ★★★
      if (!hasSeenApple) {
        let appleSentences = [];
        for (let i = sentenceIndex + 1; i < sentences.length; i++) {
          if (sentences[i].includes("사과")) {
            appleSentences.push(i);
          }
        }

        if (appleSentences.length > 0) {
          sentenceIndex = appleSentences[floor(random(appleSentences.length))];
        } else {
          console.log("사과 문장을 먼저 봐야 합니다!");
          return;
        }
      } else {
        // ★★★ 사과를 이미 봤다면 일반 랜덤 스킵 ★★★
        if (sentenceIndex < sentences.length - 1) {
          sentenceIndex = floor(random(sentenceIndex + 1, sentences.length));
        }
      }

      // 기존 단어들 제거
      words = [];
      // 새 문장 즉시 생성
      let txt = sentences[sentenceIndex];
      isAppleSentence = txt.includes("사과");

      let parts = txt.split(" ");
      let spacing = 40;
      let startX = random(50, 400);
      parts.forEach((word, i) => {
        words.push(new WordParticle(word, startX + i * spacing, -50));
      });

      // 스킵한 문장으로 스크롤
      const curTxt = document.getElementById(`txt-${sentenceIndex}`);
      if (curTxt) {
        curTxt.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }
}

// ★ windowResized()가 삭제되어 창 크기를 바꿔도 캔버스 크기가 유지됩니다.
