// 整数値を入力させ、その値を絶対値にして表示するプログラムを作成せよ。（できれば変数の値を絶対値に変えるようにせよ）

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

  console.log(`absolute value is: ${Math.abs(input)}`);

  rl.close();
});
