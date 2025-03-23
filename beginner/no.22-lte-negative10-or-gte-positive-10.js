// No. 22 -10以下または10以上
// 整数値を入力させ、その値が-10以下、または、10以上であればOKと表示するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");
const FIRST_BOUND = -10;
const SECOND_BOUND = 10;

rl.prompt();

rl.on("line", (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (number <= FIRST_BOUND || number >= SECOND_BOUND) {
    console.log("OK");
    rl.close();
    return;
  } else {
    rl.prompt();
  }
});
