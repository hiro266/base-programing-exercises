// 整数値を入力させ、その入力値を表示するプログラムを作成せよ。

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("input number:", (answer) => {
  console.log(`your number is ${answer}`);

  rl.close();
});
