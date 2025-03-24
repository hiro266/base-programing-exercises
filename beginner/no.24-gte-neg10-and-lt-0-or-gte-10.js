// No. 24 -10以上0未満、または、10以上
// 整数値を入力させ、その値が-10以上0未満、または、10以上であればOK、そうでなければNGと表示するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");
const LOWER_RANGE = [-10, 0];
const BOUND = 10;

const isInRange = (num) =>
  (num >= LOWER_RANGE[0] && num < LOWER_RANGE[1]) || num >= BOUND;

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  console.log(isInRange(number) ? "OK" : "NG");
  rl.close();
};

rl.question("入力して下さい>", processInput);
