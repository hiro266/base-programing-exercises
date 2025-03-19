// 整数値を入力させ、値が0ならzero、0でなければnot zeroと表示するプログラムを作成せよ。

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({
  input,
  output,
});

rl.question("整数を入力>", (input) => {
  if (input === "0") {
    console.log(`入力された整数: zero`);
  } else {
    console.log(`入力された整数: not zero`);
  }
  rl.close();
});
