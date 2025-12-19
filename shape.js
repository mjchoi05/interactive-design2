// ===========================================================
// [그리기 함수들] - 여기에 코드를 채워넣으세요!
// ===========================================================

// 1. 고정될 몸통 (움직이지 않음)
function drawFirstShape_Fixed(pg) {
  pg.push(); // 스타일 설정 격리

  // 1. 픽셀 인식을 위한 강제 스타일 설정
  pg.stroke(255); // 흰색 선 (검은 배경에서 잘 보이게)
  pg.strokeWeight(3); // 두꺼운 선 (인식률 높임)
  pg.noFill(); // 채우기 없음
  pg.strokeCap(PROJECT);
  pg.strokeJoin(MITER);
  pg.translate(170, 0);

  pg.beginShape();
  pg.vertex(55.77, 0.51);
  pg.bezierVertex(
    55.77,
    0.51,
    30.330000000000002,
    2.01,
    34.07000000000001,
    34.18
  );
  pg.endShape();

  pg.beginShape();
  pg.vertex(64.37, 0.51);
  pg.bezierVertex(
    64.37,
    0.51,
    88.82000000000001,
    -0.19999999999999996,
    94.79,
    13.01
  );
  pg.bezierVertex(98.77000000000001, 20.61, 99.68, 26.22, 99.68, 26.22);
  pg.vertex(104.58000000000001, 30.56);
  pg.bezierVertex(
    104.58000000000001,
    30.56,
    107.28000000000002,
    47.019999999999996,
    106.73000000000002,
    48.65
  );
  pg.bezierVertex(
    106.73000000000002,
    48.65,
    97.14000000000001,
    62.4,
    96.78000000000002,
    66.02
  );
  pg.bezierVertex(
    96.78000000000002,
    66.02,
    95.33000000000001,
    96.6,
    95.33000000000001,
    97.67999999999999
  );
  pg.bezierVertex(
    95.33000000000001,
    97.67999999999999,
    80.13000000000001,
    105.27999999999999,
    81.22000000000001,
    116.32
  );
  pg.vertex(73.08000000000001, 106.91);
  pg.endShape();

  pg.beginShape();
  pg.vertex(76.16, 102.39);
  pg.vertex(58.06, 120.12);
  pg.endShape();

  pg.beginShape();
  pg.vertex(55.77, 120.12);
  pg.vertex(44.73, 107.09);
  pg.vertex(43.05, 96.23);
  pg.vertex(40.15, 90.62);
  pg.vertex(38.52, 73.07);
  pg.endShape();

  pg.beginShape();
  pg.vertex(35.27, 37.07);
  pg.bezierVertex(
    36.17,
    41.230000000000004,
    36.36000000000001,
    48.47,
    36.36000000000001,
    48.47
  );
  pg.vertex(32.02000000000001, 40.51);
  pg.bezierVertex(
    30.21000000000001,
    51,
    35.64000000000001,
    58.41,
    35.64000000000001,
    58.41
  );
  pg.vertex(36.36, 66.38);
  pg.endShape();

  pg.beginShape();
  pg.vertex(69.64, 45.57);
  pg.bezierVertex(69.64, 45.57, 75.43, 42.47, 83.39, 58.41);
  pg.endShape();

  pg.beginShape();
  pg.vertex(54.08, 45.33);
  pg.bezierVertex(54.08, 45.33, 44.31, 43.4, 42.32, 43.4);
  pg.endShape();

  pg.beginShape();
  pg.vertex(58.06, 43.4);
  pg.vertex(58.06, 73.07);
  pg.endShape();

  pg.beginShape();
  pg.vertex(62.23, 37.07);
  pg.vertex(61.14, 64.21);
  pg.endShape();

  pg.beginShape();
  pg.vertex(69.64, 67.28);
  pg.vertex(61.14, 75.06);
  pg.endShape();

  pg.beginShape();
  pg.vertex(54.08, 74.16);
  pg.vertex(58.06, 76.51);
  pg.endShape();

  pg.beginShape();
  pg.vertex(54.08, 97.32);
  pg.vertex(64.37, 97.32);
  pg.endShape();

  pg.beginShape();
  pg.vertex(79.96, 80.85);
  pg.vertex(78.87, 84.11);
  pg.endShape();

  pg.beginShape();
  pg.vertex(81.04, 93.16);
  pg.vertex(79.96, 96.6);
  pg.endShape();

  pg.beginShape();
  pg.vertex(106.81, 50.64);
  pg.vertex(109.99, 104.56);
  pg.endShape();

  pg.beginShape();
  pg.vertex(99.32, 91.17);
  pg.vertex(105.47, 87.19);
  pg.endShape();

  pg.beginShape();
  pg.vertex(114.88, 118.49);
  pg.bezierVertex(114.88, 118.49, 93.89, 136.22, 90.27, 166.44);
  pg.endShape();

  pg.beginShape();
  pg.vertex(87.92, 163.18);
  pg.bezierVertex(
    87.92,
    163.18,
    75.07000000000001,
    131.70000000000002,
    71.46000000000001,
    127.54
  );
  pg.endShape();

  pg.beginShape();
  pg.vertex(71.45, 129.89);
  pg.bezierVertex(71.45, 129.89, 60.96, 157.57, 61.14, 168.79);
  pg.bezierVertex(61.14, 168.79, 55.41, 178.2, 47.15, 165.9);
  pg.bezierVertex(47.15, 165.9, 38.17, 108.73, 38.53, 82.49000000000001);
  pg.endShape();

  pg.beginShape();
  pg.vertex(81.04, 169.69);
  pg.bezierVertex(80.5, 159.02, 71.45, 148.7, 71.45, 148.7);
  pg.endShape();
  pg.beginShape();
  pg.vertex(70.73, 180);
  pg.bezierVertex(70.73, 180, 69.46000000000001, 155.94, 70.73, 147.79);
  pg.vertex(64.37, 166.43);
  pg.vertex(64.37, 171.13);
  pg.vertex(70.73, 180);
  pg.endShape();

  pg.beginShape();
  pg.vertex(70.73, 180);
  pg.bezierVertex(70.73, 180, 73.08, 182.35, 74.89, 181.27);
  pg.bezierVertex(
    74.89,
    181.27,
    80.5,
    174.39000000000001,
    80.5,
    174.39000000000001
  );
  pg.bezierVertex(
    80.5,
    174.39000000000001,
    99.26,
    212.83,
    104.58,
    230.42000000000002
  );
  pg.endShape();

  pg.beginShape();
  pg.vertex(111.33, 89.18);
  pg.vertex(119.65, 140.36);
  pg.vertex(145.31, 140.36);
  pg.endShape();

  pg.beginShape();
  pg.vertex(145.31, 136.32);
  pg.bezierVertex(145.31, 136.32, 148.4, 142.73999999999998, 147.21, 145.35);
  pg.endShape();

  pg.beginShape();
  pg.vertex(112.99, 85.23);
  pg.bezierVertex(112.99, 85.23, 146.98, 111.92, 191.64, 113.27000000000001);
  pg.bezierVertex(215.16, 113.98, 246.06, 129.43, 246.06, 129.43);
  pg.bezierVertex(246.06, 129.43, 258.89, 134.18, 265.55, 132.04000000000002);
  pg.endShape();

  pg.beginShape();
  pg.vertex(65.39, 182.42);
  pg.bezierVertex(65.39, 182.42, 66.45, 236.6, 69.64, 241.35);
  pg.endShape();

  pg.beginShape();
  pg.vertex(34, 80.85);
  pg.vertex(33.7, 169.69);
  pg.vertex(58.07000000000001, 248);
  pg.bezierVertex(
    58.07000000000001,
    248,
    105.16000000000001,
    241.82,
    113,
    236.59
  );
  pg.bezierVertex(
    113,
    236.59,
    110.39,
    160.07999999999998,
    119.65,
    140.35000000000002
  );
  pg.endShape();

  pg.beginShape();
  pg.vertex(19.56, 140.81);
  pg.vertex(33.7, 91.17);
  pg.endShape();

  pg.beginShape();
  pg.vertex(213.25, 220.1);
  pg.vertex(213.25, 441.2);
  pg.vertex(71.45, 446.71);
  pg.vertex(0.58, 400.55);
  pg.vertex(22.38, 323.93);
  pg.endShape();

  pg.pop();
}

// 2. 오른팔)
function drawFirstShape_RArm(pg) {
  pg.push();
  pg.stroke(255);
  pg.strokeWeight(3);
  pg.noFill();
  pg.translate(370, 120);

  pg.beginShape();
  pg.vertex(46.19, 0.03);
  pg.bezierVertex(46.19, 0.03, 48.33, 31.87, 56.65, 34.72);
  pg.endShape();

  pg.beginShape();
  pg.vertex(46.19, 26.88);
  pg.bezierVertex(
    46.19,
    26.88,
    47.849999999999994,
    35.67,
    52.839999999999996,
    36.379999999999995
  );
  pg.endShape();

  pg.beginShape();
  pg.vertex(49.51, 42.57);
  pg.bezierVertex(49.51, 42.57, 55.21, 112.19, 56.64, 117.9);
  pg.endShape();

  pg.beginShape();
  pg.vertex(0.54, 58.03);
  pg.bezierVertex(
    0.54,
    58.03,
    10.329999999999998,
    153.92000000000002,
    17.93,
    171.26
  );
  pg.vertex(0.54, 324.15);
  pg.bezierVertex(0.54, 324.15, 27.63, 335.08, 26.68, 335.56);
  pg.bezierVertex(26.68, 335.56, 56.64, 178.28, 56.64, 178.28);
  pg.vertex(61.02, 147.53);
  pg.bezierVertex(61.970000000000006, 129.71, 61.02, 129.18, 61.02, 129.18);
  pg.endShape();

  pg.pop();
}

//  왼팔)
function drawFirstShape_LArm(pg) {
  pg.push();
  pg.stroke(255);
  pg.strokeWeight(3);
  pg.noFill();
  pg.translate(140, 125);

  pg.beginShape();
  pg.vertex(37.8, 8.78);
  pg.vertex(37.839999999999996, 178.52);
  pg.vertex(37.73, 230.09);
  pg.vertex(27.129999999999995, 325.83);
  pg.vertex(0.5599999999999952, 331.5);
  pg.vertex(7.179999999999995, 256.82);
  pg.bezierVertex(
    7.179999999999995,
    256.82,
    6.389999999999988,
    247.38,
    10.34,
    237.78
  );
  pg.bezierVertex(10.34, 237.78, 4.16, 138.28, 4.16, 138.28);
  pg.vertex(13.51, 14.23);
  pg.vertex(30.75, 0.38);
  pg.endShape();

  pg.pop();
}

// 4. 오른다리 (ID: 4)
function drawFirstShape_RLeg(pg) {
  pg.push();
  pg.stroke(255);
  pg.strokeWeight(3);
  pg.noFill();

  pg.translate(270, 440);

  pg.beginShape();
  pg.vertex(60.64, 0.15);
  pg.vertex(58.14, 8.370000000000001);
  pg.bezierVertex(58.14, 8.370000000000001, 84.71, 143.72, 90.18, 156.85);
  pg.bezierVertex(90.18, 156.85, 104.41, 195.16, 104.41, 195.16);
  pg.vertex(121.92, 359.36);
  pg.vertex(78.13000000000002, 353.89);
  pg.vertex(58.130000000000024, 197.35999999999999);
  pg.bezierVertex(58.13, 197.35999999999999, 46.39, 192.98, 42.01, 144.82);
  pg.bezierVertex(37.63, 86.66, 0.41, 43.6, 0.41, 43.6);
  pg.endShape();

  pg.beginShape();
  pg.vertex(78.14, 353.89);
  pg.vertex(78.14, 386.73);
  pg.vertex(154.77, 386.73);
  pg.vertex(143.82, 359.36);
  pg.vertex(121.93, 359.36);
  pg.endShape();

  pg.pop();
}

// 5. 왼다리 (ID: 5)
function drawFirstShape_LLeg(pg) {
  pg.push();
  pg.stroke(255);
  pg.strokeWeight(3);
  pg.noFill();

  pg.translate(200, 440);

  pg.beginShape();
  pg.vertex(0.49, 0.09);
  pg.vertex(10.9, 53.9);
  pg.vertex(21.76, 213.71);
  pg.vertex(25.19, 250.93);
  pg.vertex(25.19, 348.35);
  pg.vertex(31.6, 359.3);
  pg.vertex(76.48, 359.3);
  pg.vertex(76.48, 333.03);
  pg.vertex(63.35, 211.52);
  pg.vertex(58.5, 51.73);
  pg.vertex(65.15, 43.53);
  pg.endShape();

  pg.beginShape();
  pg.vertex(65.15, 359.3);
  pg.vertex(73.83, 391.04);
  pg.vertex(4.74, 391.04);
  pg.vertex(1.28, 365.87);
  pg.vertex(31.6, 359.3);
  pg.endShape();

  pg.pop();
}

// 6.전체 변신 모양
function drawSecondShape(pg) {
  pg.push(); // 스타일 설정 격리

  // 1. 픽셀 인식을 위한 강제 스타일 설정
  pg.stroke(255); // 흰색 선 (검은 배경에서 잘 보이게)
  pg.strokeWeight(3); // 두꺼운 선 (인식률 높임)
  pg.noFill(); // 채우기 없음
  pg.strokeCap(PROJECT);
  pg.strokeJoin(MITER);

  // 2. 위치 보정 (필요 시 주석을 풀고 숫자를 조정하세요)
  // pg.translate(100, 0);

  // --- 변환된 코드 시작 ---

  pg.beginShape();
  pg.vertex(184.4, 281.1);
  pg.vertex(178.3, 291.8);
  pg.bezierVertex(178.3, 291.8, 164.5, 360.9, 163.7, 367.8);
  pg.bezierVertex(163.7, 367.8, 156.8, 371.6, 156.8, 371.6);
  pg.vertex(130.7, 398.5);
  pg.vertex(106.9, 500.5);
  pg.vertex(96.9, 504.3);
  pg.bezierVertex(96.9, 504.3, 82.3, 554.2, 77.7, 556.5);
  pg.bezierVertex(77.7, 556.5, 55.4, 588, 55.4, 588);
  pg.vertex(9.4, 623.3);
  pg.vertex(7.9, 629);
  pg.vertex(28.7, 615.6);
  pg.vertex(34.0, 611.6);
  pg.vertex(33.4, 620);
  pg.bezierVertex(33.4, 620, 42.7, 607.9, 42.7, 606);
  pg.bezierVertex(42.7, 606, 50.8, 599.2, 50.8, 599.2);
  pg.vertex(52.0, 606.7);
  pg.bezierVertex(52.0, 606.7, 58.2, 594.6, 60.4, 589.6);
  pg.bezierVertex(60.4, 589.6, 66.9, 580, 66.9, 580);
  pg.vertex(70.0, 586.2);
  pg.vertex(75.3, 580.6);
  pg.vertex(75.9, 568.2);
  pg.bezierVertex(75.9, 568.2, 86.8, 553, 93.3, 549.8);
  pg.vertex(97.3, 552.9);
  pg.vertex(102.6, 547.0);
  pg.bezierVertex(102.6, 547.0, 91.1, 557.3, 109.1, 515.3);
  pg.bezierVertex(109.1, 515.3, 123.7, 450.6, 127.8, 446.6);
  pg.bezierVertex(131.8, 442.6, 136.2, 445.7, 136.2, 445.7);
  pg.vertex(144.0, 439.8);
  pg.bezierVertex(144.0, 439.8, 132.2, 433.6, 134.4, 423.9);
  pg.bezierVertex(134.4, 423.9, 156.5, 396.5, 156.5, 396.5);
  pg.bezierVertex(156.5, 396.5, 164.9, 405.2, 164.0, 411.7);
  pg.bezierVertex(163.1, 418.2, 156.5, 422.6, 156.5, 422.6);
  pg.vertex(167.1, 434.7);
  pg.bezierVertex(167.1, 434.7, 172.7, 439.7, 169.0, 440.9);
  pg.bezierVertex(169.0, 440.9, 156.2, 451.8, 156.2, 451.8);
  pg.vertex(162.1, 459.6);
  pg.bezierVertex(162.1, 459.6, 167.7, 456.5, 168.6, 458.7);
  pg.bezierVertex(168.6, 458.7, 176.1, 474.3, 176.1, 474.3);
  pg.bezierVertex(108.6, 564.2, 142.2, 693.6, 142.2, 693.6);
  pg.bezierVertex(142.2, 693.6, 148.3, 794.3, 100.1, 824.4);
  pg.vertex(101.4, 827.7);
  pg.bezierVertex(101.4, 827.7, 120.4, 814.3, 120.8, 808.3);
  pg.vertex(124.1, 815.2);
  pg.bezierVertex(124.1, 815.2, 128, 800.9, 130.4, 792.5);
  pg.vertex(134.3, 784.7);
  pg.vertex(141.2, 791);
  pg.bezierVertex(141.2, 791, 135.5, 781.4, 139.1, 770.4);
  pg.bezierVertex(139.1, 770.4, 147.8, 755.2, 147.8, 755.2);
  pg.vertex(146.9, 747.1);
  pg.vertex(154.4, 740.2);
  pg.vertex(150.5, 734.2);
  pg.bezierVertex(150.5, 734.2, 152.6, 717.2, 161.8, 708.2);
  pg.bezierVertex(161.8, 708.2, 124.5, 609.6, 164.7, 546);
  pg.bezierVertex(164.7, 546, 200.5, 711.9, 256.8, 794.4);
  pg.endShape();

  pg.beginShape();
  pg.vertex(327.5, 248.8);
  pg.vertex(337.4, 254.5);
  pg.vertex(351.6, 238.2);
  pg.bezierVertex(351.6, 238.2, 377.2, 248.1, 391.3, 223.3);
  pg.vertex(429.6, 89.9);
  pg.vertex(436.0, 96.3);
  pg.vertex(433.2, 104.1);
  pg.bezierVertex(433.2, 104.1, 488.6, 43.8, 494.2, 45.2);
  pg.bezierVertex(494.2, 45.2, 490.5, 49.7, 491.7, 51.3);
  pg.bezierVertex(492.9, 52.9, 498.2, 60.2, 498.2, 60.2);
  pg.bezierVertex(498.2, 60.2, 492.2, 54.2, 487.3, 58.2);
  pg.bezierVertex(482.4, 62.2, 425.8, 110.7, 399.8, 230.8);
  pg.vertex(353.8, 268.8);
  pg.vertex(359.9, 279.5);
  pg.bezierVertex(359.9, 279.5, 373.7, 348.6, 374.5, 355.5);
  pg.bezierVertex(375.3, 362.4, 381.4, 359.3, 381.4, 359.3);
  pg.vertex(407.5, 386.2);
  pg.vertex(431.3, 488.2);
  pg.vertex(441.3, 492.0);
  pg.bezierVertex(441.3, 492.0, 455.9, 541.9, 460.5, 544.2);
  pg.bezierVertex(460.5, 544.2, 482.8, 575.7, 482.8, 575.7);
  pg.vertex(528.8, 611.0);
  pg.vertex(530.3, 616.7);
  pg.vertex(509.5, 603.3);
  pg.vertex(504.2, 599.3);
  pg.vertex(504.8, 607.7);
  pg.bezierVertex(504.8, 607.7, 495.5, 595.6, 495.5, 593.7);
  pg.bezierVertex(495.5, 593.7, 487.4, 586.9, 487.4, 586.9);
  pg.vertex(486.2, 594.4);
  pg.bezierVertex(486.2, 594.4, 480.0, 582.3, 477.8, 577.3);
  pg.bezierVertex(477.8, 577.3, 471.3, 567.7, 471.3, 567.7);
  pg.vertex(468.2, 573.9);
  pg.vertex(462.9, 568.3);
  pg.vertex(450.9, 554.6);
  pg.bezierVertex(450.9, 554.6, 442.7, 545.2, 436.1, 542.1);
  pg.vertex(434.3, 528.6);
  pg.vertex(415.4, 528.6);
  pg.bezierVertex(415.4, 528.6, 423.3, 520.0, 415.4, 494.4);
  pg.bezierVertex(415.4, 494.4, 414.4, 438.2, 410.3, 434.1);
  pg.bezierVertex(406.2, 430.0, 401.9, 433.2, 401.9, 433.2);
  pg.vertex(394.1, 427.3);
  pg.bezierVertex(394.1, 427.3, 405.9, 421.1, 403.7, 411.4);
  pg.bezierVertex(401.5, 401.8, 381.6, 384, 381.6, 384);
  pg.bezierVertex(381.6, 384, 373.2, 392.7, 374.1, 399.2);
  pg.bezierVertex(375.0, 405.7, 381.6, 410.1, 381.6, 410.1);
  pg.vertex(371.0, 422.2);
  pg.bezierVertex(371.0, 422.2, 365.4, 427.2, 369.1, 428.4);
  pg.bezierVertex(369.1, 428.4, 381.9, 439.3, 381.9, 439.3);
  pg.vertex(376.0, 447.1);
  pg.bezierVertex(376.0, 447.1, 370.4, 444.0, 369.5, 446.2);
  pg.bezierVertex(369.5, 446.2, 362.0, 461.8, 362.0, 461.8);
  pg.bezierVertex(429.5, 551.7, 395.9, 681.1, 395.9, 681.1);
  pg.bezierVertex(395.9, 681.1, 389.8, 781.8, 438.0, 811.9);
  pg.vertex(436.7, 815.2);
  pg.bezierVertex(436.7, 815.2, 417.7, 801.8, 417.3, 795.8);
  pg.vertex(414.0, 802.7);
  pg.bezierVertex(414.0, 802.7, 410.1, 788.4, 407.7, 780);
  pg.vertex(403.8, 772.2);
  pg.vertex(396.9, 778.5);
  pg.bezierVertex(396.9, 778.5, 402.6, 768.9, 399, 757.9);
  pg.bezierVertex(395.4, 746.9, 390.3, 742.7, 390.3, 742.7);
  pg.vertex(391.2, 734.6);
  pg.vertex(383.7, 727.7);
  pg.vertex(387.6, 721.7);
  pg.bezierVertex(387.6, 721.7, 397.1, 707.3, 387.9, 698.3);
  pg.bezierVertex(387.9, 698.3, 399.5, 579, 359.3, 515.5);
  pg.bezierVertex(359.3, 515.5, 356.5, 713.6, 300.2, 796.2);
  pg.endShape();

  pg.beginShape();
  pg.vertex(190.4, 259.9);
  pg.bezierVertex(190.4, 259.9, 195.8, 274.5, 185, 269.5);
  pg.vertex(175, 257.8);
  pg.bezierVertex(175, 257.8, 143.8, 252, 137.5, 243.7);
  pg.bezierVertex(137.5, 243.7, 108.8, 182.9, 109.2, 172.1);
  pg.bezierVertex(109.6, 161.3, 116.7, 85.1, 119.6, 84.7);
  pg.endShape();

  pg.beginShape();
  pg.vertex(110.9, 90.1);
  pg.bezierVertex(110.9, 90.1, 104.2, 113.4, 97.2, 108.8);
  pg.bezierVertex(97.2, 108.8, 64.3, 75.1, 73.5, 63.9);
  pg.endShape();

  pg.beginShape();
  pg.vertex(68.9, 73.8);
  pg.bezierVertex(68.9, 73.8, 38.9, 48.8, 42.7, 40.1);
  pg.endShape();

  pg.beginShape();
  pg.vertex(42.3, 57);
  pg.bezierVertex(42.3, 57, 29.7, 39.7, 23.1, 40.1);
  pg.bezierVertex(16.5, 40.5, -0.2, 53, -0.2, 53);
  pg.vertex(-0.2, 59.2);
  pg.bezierVertex(-0.2, 59.2, 14.8, 33, 42.3, 66.3);
  pg.vertex(96.1, 120.4);
  pg.bezierVertex(96.1, 120.4, 100.7, 214.9, 110.9, 229.8);
  pg.bezierVertex(110.9, 229.8, 121.5, 238.1, 121.5, 238.1);
  pg.bezierVertex(121.5, 238.1, 175.6, 283, 176.4, 284.3);
  pg.endShape();

  pg.beginShape();
  pg.vertex(209.5, 276.2);
  pg.vertex(203.6, 284.4);
  pg.vertex(203.6, 299.9);
  pg.vertex(191.7, 310);
  pg.vertex(191.7, 323);
  pg.vertex(197.1, 328.3);
  pg.vertex(191.7, 337.2);
  pg.vertex(185.8, 363.8);
  pg.vertex(185.8, 378);
  pg.vertex(176.4, 388.1);
  pg.vertex(179.3, 403.5);
  pg.vertex(176.4, 418.9);
  pg.vertex(187.0, 428.5);
  pg.vertex(181.1, 443.8);
  pg.vertex(181.7, 455.6);
  pg.vertex(191.7, 473.9);
  pg.vertex(183.5, 487.5);
  pg.vertex(168.7, 510.6);
  pg.bezierVertex(168.7, 510.6, 184.7, 562.7, 189.1, 565.0);
  pg.bezierVertex(189.1, 565.0, 203.6, 638.4, 203.6, 638.4);
  pg.bezierVertex(203.6, 638.4, 212.5, 679.8, 214.8, 679.8);
  pg.bezierVertex(217.1, 679.8, 227.2, 693.4, 227.2, 693.4);
  pg.vertex(227.2, 725.4);
  pg.bezierVertex(227.2, 725.4, 242.6, 737.8, 245.5, 748.5);
  pg.bezierVertex(245.5, 748.5, 256.7, 768.6, 256.7, 768.6);
  pg.vertex(259.2, 776.3);
  pg.endShape();

  pg.beginShape();
  pg.vertex(323.8, 258);
  pg.bezierVertex(323.8, 258, 336.7, 308.5, 338, 329.5);
  pg.bezierVertex(339.2, 350.5, 345.4, 379.4, 338, 394.2);
  pg.bezierVertex(330.6, 409, 340.5, 438.6, 336.8, 446.6);
  pg.bezierVertex(333.1, 454.6, 338, 431.2, 327.6, 491.6);
  pg.bezierVertex(317.1, 552, 330.1, 551.7, 329.4, 554.3);
  pg.bezierVertex(328.7, 556.9, 331.9, 574.2, 328.2, 589);
  pg.bezierVertex(324.5, 603.8, 320.8, 711.6, 320.8, 711.6);
  pg.vertex(288.1, 784.9);
  pg.endShape();

  pg.beginShape();
  pg.vertex(336.1, 264.8);
  pg.bezierVertex(336.1, 264.8, 359.5, 335.1, 359.5, 346.1);
  pg.bezierVertex(359.5, 346.1, 347.8, 407.7, 347.8, 407.7);
  pg.bezierVertex(347.8, 407.7, 355.8, 443.4, 347.8, 468.1);
  pg.bezierVertex(339.8, 492.7, 336.1, 539.6, 336.1, 539.6);
  pg.bezierVertex(336.1, 539.6, 345.7, 600, 341.5, 605.5);
  pg.bezierVertex(337.3, 611, 335.5, 679.4, 328.1, 695.5);
  pg.endShape();

  pg.beginShape();
  pg.vertex(222.7, 276.2);
  pg.bezierVertex(222.7, 276.2, 176.8, 495.9, 191.7, 548.9);
  pg.endShape();

  pg.beginShape();
  pg.vertex(236.9, 288.8);
  pg.bezierVertex(236.9, 288.8, 195.6, 492.2, 252.3, 737.4);
  pg.endShape();

  pg.beginShape();
  pg.vertex(291.7, 276.2);
  pg.bezierVertex(291.7, 276.2, 315.1, 398.5, 291.7, 473.7);
  pg.bezierVertex(268.3, 548.9, 291.7, 749.2, 291.7, 749.2);
  pg.vertex(271.4, 784.9);
  pg.endShape();

  pg.beginShape();
  pg.vertex(304.7, 270.5);
  pg.bezierVertex(304.7, 270.5, 318.1, 356.6, 314.8, 432.4);
  pg.bezierVertex(311.5, 508.2, 304.7, 641.9, 304.7, 641.9);
  pg.bezierVertex(304.7, 641.9, 306.3, 727.2, 300.2, 749.1);
  pg.endShape();

  pg.beginShape();
  pg.vertex(315.3, 270.5);
  pg.bezierVertex(315.3, 270.5, 339.8, 337.5, 330.5, 383.1);
  pg.bezierVertex(321.3, 428.7, 321.9, 480.2, 321.9, 480.2);
  pg.vertex(315.3, 530.6);
  pg.endShape();

  pg.beginShape();
  pg.vertex(232, 281.1);
  pg.bezierVertex(232, 281.1, 156.8, 252.5, 227.1, 682);
  pg.endShape();

  pg.beginShape();
  pg.vertex(261.5, 284.4);
  pg.bezierVertex(261.5, 284.4, 255.3, 722, 271.4, 743.6);
  pg.endShape();

  pg.beginShape();
  pg.vertex(247.4, 215.5);
  pg.bezierVertex(247.4, 215.5, 239.4, 235.8, 232, 238.9);
  pg.bezierVertex(232, 238.9, 195.4, 239.5, 197.1, 222.3);
  pg.bezierVertex(198.7, 205, 222.8, 195.2, 222.8, 195.2);
  pg.vertex(237.4, 206.3);
  pg.endShape();

  pg.beginShape();
  pg.vertex(292.3, 234.6);
  pg.bezierVertex(292.3, 234.6, 307, 246.3, 314.7, 234.6);
  pg.bezierVertex(322.5, 222.9, 311.4, 196.4, 296.6, 195.2);
  pg.bezierVertex(281.8, 194, 267.0, 211.2, 271.3, 222.9);
  pg.bezierVertex(275.6, 234.6, 278.1, 254.9, 287.9, 255.6);
  pg.bezierVertex(297.7, 256.3, 315.2, 240.1, 315.2, 240.1);
  pg.vertex(323.9, 225.4);
  pg.endShape();

  pg.beginShape();
  pg.vertex(237.3, 217.6);
  pg.bezierVertex(237.3, 217.6, 217.7, 198.9, 205.7, 212.4);
  pg.endShape();

  pg.beginShape();
  pg.vertex(260.4, 212.5);
  pg.bezierVertex(260.4, 212.5, 257, 250.6, 259.3, 255.5);
  pg.bezierVertex(259.3, 255.5, 270.2, 277.1, 274.5, 276.1);
  pg.bezierVertex(274.5, 276.1, 324.3, 259.8, 332.7, 235.7);
  pg.bezierVertex(341.1, 211.7, 314.6, 182, 307.8, 177.4);
  pg.bezierVertex(301, 172.8, 275.1, 185.1, 271.4, 191.3);
  pg.bezierVertex(267.7, 197.5, 265.9, 201.8, 265.9, 201.8);
  pg.endShape();

  pg.beginShape();
  pg.vertex(252.3, 264.8);
  pg.bezierVertex(252.3, 264.8, 238.1, 269.4, 232, 270.5);
  pg.bezierVertex(232, 270.5, 195.5, 268.5, 188.8, 250.6);
  pg.bezierVertex(182.1, 232.7, 176.2, 212.4, 197, 195.1);
  pg.bezierVertex(217.8, 177.8, 232, 177.5, 232, 177.5);
  pg.bezierVertex(232, 177.5, 254.6, 188.3, 256.8, 183.4);
  pg.bezierVertex(259, 178.5, 265.9, 187.1, 265.9, 187.1);
  pg.vertex(260.4, 205);
  pg.endShape();

  pg.beginShape();
  pg.vertex(249.8, 240);
  pg.bezierVertex(249.8, 240, 221.6, 262.9, 205.7, 258);
  pg.endShape();

  pg.beginShape();
  pg.vertex(265.9, 249.4);
  pg.bezierVertex(265.9, 249.4, 268.3, 266.7, 278.8, 264.8);
  pg.endShape();

  pg.beginShape();
  pg.vertex(278.8, 152.6);
  pg.bezierVertex(278.8, 152.6, 269.6, 142.1, 265.9, 144);
  pg.bezierVertex(265.9, 144, 247.4, 144, 247.4, 144);
  pg.vertex(242.4, 153.9);
  pg.vertex(259.3, 153.9);
  pg.vertex(281.9, 158.8);
  pg.bezierVertex(281.9, 158.8, 277.0, 172.4, 265.9, 174.2);
  pg.bezierVertex(265.9, 174.2, 242.4, 167.4, 242.4, 167.4);
  pg.endShape();

  pg.beginShape();
  pg.vertex(232, 162.3);
  pg.vertex(222.8, 169.3);
  pg.bezierVertex(222.8, 169.3, 210.6, 165, 221.6, 152);
  pg.bezierVertex(221.6, 152, 200.7, 165.5, 217.0, 174.4);
  pg.vertex(205.8, 180.9);
  pg.vertex(188.8, 174.4);
  pg.vertex(179.6, 177.5);
  pg.vertex(188.8, 180.9);
  pg.vertex(197.0, 184);
  pg.vertex(188.8, 197.6);
  pg.endShape();

  pg.beginShape();
  pg.vertex(288, 149.6);
  pg.bezierVertex(288, 149.6, 314.4, 133.6, 314.7, 156.4);
  pg.bezierVertex(314.7, 156.4, 292.3, 152.3, 297.2, 162.3);
  pg.bezierVertex(302.1, 172.4, 310.7, 169.3, 310.7, 169.3);
  pg.vertex(328, 165);
  pg.bezierVertex(328, 165, 371.6, 198.4, 354.5, 226.4);
  pg.endShape();

  pg.beginShape();
  pg.vertex(237.3, 144.1);
  pg.bezierVertex(237.3, 144.1, 233.6, 122.5, 188.7, 107);
  pg.bezierVertex(143.8, 91.6, 168.7, 22.6, 168.7, 22.6);
  pg.endShape();

  pg.beginShape();
  pg.vertex(286.8, 140.3);
  pg.bezierVertex(286.8, 140.3, 297.3, 117.7, 343.8, 84.7);
  pg.bezierVertex(343.8, 84.7, 355.2, 22.6, 355.2, 22.6);
  pg.endShape();

  // 나머지 짧은 선들
  pg.beginShape();
  pg.vertex(291.7, 276.2);
  pg.vertex(267.1, 293.1);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.8, 284.6);
  pg.vertex(266.2, 301.5);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.8, 301.5);
  pg.vertex(266.2, 318.4);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.8, 293.1);
  pg.vertex(266.2, 310);
  pg.endShape();
  pg.beginShape();
  pg.vertex(291.3, 310);
  pg.vertex(266.7, 326.9);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.3, 318.4);
  pg.vertex(265.7, 335.3);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.3, 335.3);
  pg.vertex(265.7, 352.2);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.3, 326.9);
  pg.vertex(265.7, 343.7);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.8, 343.7);
  pg.vertex(266.2, 360.6);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.9, 352.2);
  pg.vertex(265.3, 369.1);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.9, 369.1);
  pg.vertex(265.3, 385.9);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.9, 360.6);
  pg.vertex(265.3, 377.5);
  pg.endShape();
  pg.beginShape();
  pg.vertex(291.3, 377.5);
  pg.vertex(266.7, 394.4);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.3, 385.9);
  pg.vertex(265.7, 402.8);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.3, 402.8);
  pg.vertex(265.7, 419.7);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.3, 394.4);
  pg.vertex(265.7, 411.3);
  pg.endShape();
  pg.beginShape();
  pg.vertex(292.2, 411.3);
  pg.vertex(267.6, 428.1);
  pg.endShape();
  pg.beginShape();
  pg.vertex(291.3, 419.7);
  pg.vertex(266.7, 436.6);
  pg.endShape();
  pg.beginShape();
  pg.vertex(291.3, 436.6);
  pg.vertex(266.7, 453.5);
  pg.endShape();
  pg.beginShape();
  pg.vertex(291.3, 428.1);
  pg.vertex(266.7, 445);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.8, 445);
  pg.vertex(266.2, 461.9);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.9, 453.5);
  pg.vertex(265.3, 470.4);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.9, 470.4);
  pg.vertex(265.3, 487.2);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.9, 461.9);
  pg.vertex(265.3, 478.8);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.2, 491.5);
  pg.vertex(264.6, 508.3);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.2, 483);
  pg.vertex(264.6, 499.9);
  pg.endShape();
  pg.beginShape();
  pg.vertex(291, 499.9);
  pg.vertex(266.4, 516.8);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.1, 508.3);
  pg.vertex(265.5, 525.2);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.1, 525.2);
  pg.vertex(265.5, 542.1);
  pg.endShape();
  pg.beginShape();
  pg.vertex(290.1, 516.8);
  pg.vertex(265.5, 533.7);
  pg.endShape();
  pg.beginShape();
  pg.vertex(289.6, 533.7);
  pg.vertex(265, 550.5);
  pg.endShape();
  pg.beginShape();
  pg.vertex(288.7, 542.1);
  pg.vertex(264.1, 559);
  pg.endShape();
  pg.beginShape();
  pg.vertex(288.7, 559);
  pg.vertex(264.1, 575.9);
  pg.endShape();
  pg.beginShape();
  pg.vertex(288.7, 550.5);
  pg.vertex(264.1, 567.4);
  pg.endShape();
  pg.beginShape();
  pg.vertex(233.4, 280.4);
  pg.vertex(258, 297.3);
  pg.endShape();
  pg.beginShape();
  pg.vertex(234.3, 288.9);
  pg.vertex(258.9, 305.8);
  pg.endShape();
  pg.beginShape();
  pg.vertex(234.3, 305.8);
  pg.vertex(258.9, 322.6);
  pg.endShape();
  pg.beginShape();
  pg.vertex(234.3, 297.3);
  pg.vertex(258.9, 314.2);
  pg.endShape();
  pg.beginShape();
  pg.vertex(233.9, 314.2);
  pg.vertex(258.5, 331.1);
  pg.endShape();
  pg.beginShape();
  pg.vertex(234.8, 322.6);
  pg.vertex(259.4, 339.5);
  pg.endShape();
  pg.beginShape();
  pg.vertex(234.8, 339.5);
  pg.vertex(259.4, 356.4);
  pg.endShape();
  pg.beginShape();
  pg.vertex(234.8, 331.1);
  pg.vertex(259.4, 348);
  pg.endShape();
  pg.beginShape();
  pg.vertex(231.2, 348);
  pg.vertex(255.8, 364.8);
  pg.endShape();
  pg.beginShape();
  pg.vertex(232.2, 356.4);
  pg.vertex(256.8, 373.3);
  pg.endShape();
  pg.beginShape();
  pg.vertex(232.2, 373.3);
  pg.vertex(256.8, 390.2);
  pg.endShape();
  pg.beginShape();
  pg.vertex(232.2, 364.8);
  pg.vertex(256.8, 381.7);
  pg.endShape();
  pg.beginShape();
  pg.vertex(231.2, 381.7);
  pg.vertex(255.8, 398.6);
  pg.endShape();
  pg.beginShape();
  pg.vertex(232.2, 390.2);
  pg.vertex(256.8, 407);
  pg.endShape();
  pg.beginShape();
  pg.vertex(232.2, 407);
  pg.vertex(256.8, 423.9);
  pg.endShape();
  pg.beginShape();
  pg.vertex(232.2, 398.6);
  pg.vertex(256.8, 415.5);
  pg.endShape();
  pg.beginShape();
  pg.vertex(228.8, 415.5);
  pg.vertex(253.4, 432.4);
  pg.endShape();
  pg.beginShape();
  pg.vertex(229.7, 423.9);
  pg.vertex(254.3, 440.8);
  pg.endShape();
  pg.beginShape();
  pg.vertex(229.7, 440.8);
  pg.vertex(254.3, 457.7);
  pg.endShape();
  pg.beginShape();
  pg.vertex(229.7, 432.4);
  pg.vertex(254.3, 449.3);
  pg.endShape();
  pg.beginShape();
  pg.vertex(230.8, 449.3);
  pg.vertex(255.4, 466.1);
  pg.endShape();
  pg.beginShape();
  pg.vertex(231.7, 457.7);
  pg.vertex(256.3, 474.6);
  pg.endShape();
  pg.beginShape();
  pg.vertex(231.7, 474.6);
  pg.vertex(256.3, 491.5);
  pg.endShape();
  pg.beginShape();
  pg.vertex(231.7, 466.1);
  pg.vertex(256.3, 483);
  pg.endShape();
  pg.beginShape();
  pg.vertex(230.3, 483);
  pg.vertex(254.9, 499.9);
  pg.endShape();
  pg.beginShape();
  pg.vertex(231.2, 491.5);
  pg.vertex(255.8, 508.3);
  pg.endShape();
  pg.beginShape();
  pg.vertex(231.2, 508.3);
  pg.vertex(255.8, 525.2);
  pg.endShape();
  pg.beginShape();
  pg.vertex(231.2, 499.9);
  pg.vertex(255.8, 516.8);
  pg.endShape();

  pg.pop();
}
