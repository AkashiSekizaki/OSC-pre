document.getElementById("calcButton").addEventListener("click", function () {
  // 行列AとBを2x2配列で取得
  const A = [
    [
      Number(document.getElementById("a11").value),
      Number(document.getElementById("a12").value),
    ],
    [
      Number(document.getElementById("a21").value),
      Number(document.getElementById("a22").value),
    ],
  ];

  const B = [
    [
      Number(document.getElementById("b11").value),
      Number(document.getElementById("b12").value),
    ],
    [
      Number(document.getElementById("b21").value),
      Number(document.getElementById("b22").value),
    ],
  ];

  // 結果用の配列C
  const C = [
    [0, 0],
    [0, 0],
  ];

  // 2x2のループで計算
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }

  // 結果を表示
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      <p>${C[0][0]} ${C[0][1]}</p>
      <p>${C[1][0]} ${C[1][1]}</p>
    `;
});
