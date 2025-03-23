// No. 23 -5以上10未満
// 整数値を入力させ、その値が-5以上10未満であればOK、そうでなければNGと表示するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");
const LOWER_LIMIT = -5;
const UPPER_LIMIT = 10;

rl.question("入力して下さい>", (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (number >= LOWER_LIMIT && number < UPPER_LIMIT) {
    console.log("OK");
  } else {
    console.log("NG");
  }

  rl.close();
});
