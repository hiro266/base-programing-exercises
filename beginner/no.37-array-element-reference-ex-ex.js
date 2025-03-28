// No. 37 続々・配列要素の参照
// {3, 7, 0, 8, 4, 1, 9, 6, 5, 2}で初期化される大きさ10の整数型配列を宣言し、整数値を入力させ、要素番号が入力値の配列要素の値を参照し、さらにその参照した値を要素番号とする配列要素の値を参照して表示するプログラムを作成せよ。
// 入力値が配列の要素の範囲外であるかどうかのチェックは省略してよい。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const arr = Array(3, 7, 0, 8, 4, 1, 9, 6, 5, 2);
const LOWER_LIMIT = 0;
const UPPER_LIMIT = 9;

const processInput = (input) => {
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

  const indexValue = arr[number];
  console.log(`value = ${arr[indexValue]}`);

  rl.prompt();
};

rl.on("line", processInput);
