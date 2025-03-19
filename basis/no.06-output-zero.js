// 整数値を入力させ、値が0ならzeroと表示するプログラムを作成せよ。

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({
  input,
  output,
});

async function checkZero(answer) {
  if (answer === "0") {
    console.log(`入力された整数: zero`);
  } else {
    console.log(`入力された整数: ${answer}`);
  }
}

function outputEntry() {
  rl.question("整数を入力> ", async function (answer) {
    await checkZero(answer);
    rl.close();
  });
}

outputEntry();
