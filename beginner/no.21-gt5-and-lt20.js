// No. 21 5より大きく20より小さい
// 整数値を入力させ、その値が5よりも大きく、かつ、20よりも小さければOKと表示するプログラムを作成せよ。

const { rl, isInteger } = require("../utils/utils");

rl.prompt();

rl.on("line", (input) => {
  const number = Number(input.trim());

  if (isInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (number > 5 && number < 20) {
    console.log("OK");
    rl.close();
    return;
  } else {
    rl.prompt();
  }
});
