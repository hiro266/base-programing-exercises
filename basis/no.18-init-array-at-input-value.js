// 要素数10の整数型の配列を宣言し、整数値を入力させ、すべての配列の要素を入力値として、すべての要素の値を表示するプログラムを作成せよ。

const utils = require("./utils/utils");
const { rl, isInteger } = utils;

rl.question("整数を入力>", (input) => {
  const convertedNumber = Number(input);
  if (isInteger(convertedNumber)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  [...Array(10).keys()].map(() => console.log(convertedNumber));

  rl.close();
});
