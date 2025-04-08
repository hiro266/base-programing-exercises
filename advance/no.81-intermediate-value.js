// No. 81 中間値
// ３つの整数値を入力させ、3つの値のうち2番目に大きい値を表示するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("1つ目の整数を入力して下さい");
rl.prompt();

const numbers = [];

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  numbers.push(number);
  if (numbers.length < 3) {
    rl.setPrompt(`${numbers.length + 1}つ目の整数を入力して下さい`);
    rl.prompt();
    return;
  }
  numbers.sort((a, b) => a - b);
  console.log(numbers[1]);

  rl.close();
};

rl.on("line", processInput);
