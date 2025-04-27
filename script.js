// 「計算する」ボタンを取得し、クリックイベントを設定
document.getElementById("calcButton").addEventListener("click", function () {
  // 入力された行列Aを配列にまとめる
  const A = [
    [
      Number(document.getElementById("a00").value),
      Number(document.getElementById("a01").value),
    ],
    [
      Number(document.getElementById("a10").value),
      Number(document.getElementById("a11").value),
    ],
  ];

  // 入力された行列Bを配列にまとめる
  const B = [
    [
      Number(document.getElementById("b00").value),
      Number(document.getElementById("b01").value),
    ],
    [
      Number(document.getElementById("b10").value),
      Number(document.getElementById("b11").value),
    ],
  ];

  // 計算結果用の配列Cを初期化
  const C = [
    [0, 0],
    [0, 0],
  ];

  // どの演算（足し算 or 引き算）が選ばれているかを取得する
  const operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;

  // 2重ループで行列の各要素を計算する
  for (let i = 0; i < 2; i++) {
    // 行ループ
    for (let j = 0; j < 2; j++) {
      // 列ループ

      // 選ばれた演算に応じて、計算方法を分岐
      if (operation === "add") {
        C[i][j] = A[i][j] + B[i][j]; // 足し算
      } else if (operation === "subtract") {
        C[i][j] = A[i][j] - B[i][j]; // 引き算
      }
    }
  }

  // 計算結果を表示するdivを取得
  const resultDiv = document.getElementById("result");

  // 結果を2行で表示する
  resultDiv.innerHTML = `
    <p>${C[0][0]} ${C[0][1]}</p>
    <p>${C[1][0]} ${C[1][1]}</p>
  `;
});
