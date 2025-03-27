// No. 35 配列要素の参照
// {3, 7, 0, 8, 4, 1, 9, 6, 5, 2}で初期化される大きさ10の整数型配列を宣言し、整数値を入力させ、要素番号が入力値である配列要素の値を表示するプログラムを作成せよ。
// 入力値が配列の要素の範囲外であるかどうかのチェックは省略してよい。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const processInput = (input) => {
  const arr = Array(3, 7, 0, 8, 4, 1, 9, 6, 5, 2);
  const LOWER_LIMIT = 0;
  const UPPER_LIMIT = 9;
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (number < LOWER_LIMIT || number > UPPER_LIMIT) {
    console.log("0~9までの整数を入力して下さい");
    rl.prompt();
    return;
  }

  console.log(arr[number]);
  rl.close();
};

rl.on("line", processInput);
