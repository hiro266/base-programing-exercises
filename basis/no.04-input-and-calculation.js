// 整数値を入力させ、その入力値を3倍した計算結果を表示するプログラムを作成せよ。

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("input number:", (input) => {
  const answer = input * 3;
  console.log(`answer=${answer}`);

  rl.close();
});
