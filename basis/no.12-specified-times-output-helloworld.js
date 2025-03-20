// 整数値を入力させ、その値の回数だけHello World!を繰り返して表示するプログラムを作成せよ。

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({
  input,
  output,
});

rl.question("整数を入力>", (input) => {
  const convertedNumber = Number(input);

  if (Number.isNaN(convertedNumber) || !Number.isInteger(convertedNumber)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  for (i = 0; i < convertedNumber; i++) {
    console.log("Hello World!");
  }

  rl.close();
});
