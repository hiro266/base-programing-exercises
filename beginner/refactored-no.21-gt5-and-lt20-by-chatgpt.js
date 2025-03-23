// No. 21 5より大きく20より小さい
// 整数値を入力させ、その値が5よりも大きく、かつ、20よりも小さければOKと表示するプログラムを作成せよ。

// 💡Point💡
// - マジックナンバーの定数化で意味を明確にする

const { rl, isNotInteger } = require("../utils/utils");
const LOWER_BOUND = 5;
const UPPER_BOUND = 20;

rl.prompt();

rl.on("line", (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (number > LOWER_BOUND && number < UPPER_BOUND) {
    console.log("OK");
    rl.close();
    return;
  } else {
    rl.prompt();
  }
});
