// No. 40 even or odd
// 整数値を入力させ、その値が偶数ならばeven、奇数ならばoddと表示するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  console.log(`is ${number % 2 === 0 ? "even" : "odd"}`);

  rl.close();
};

rl.on("line", processInput);
