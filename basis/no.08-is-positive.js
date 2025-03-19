// 整数値を入力させ、値が正であればpositiveと表示するプログラムを作成せよ。ただし0は正には含まない。

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

  if (Math.sign(convertedNumber) === 1) {
    console.log(`Positive: ${convertedNumber}`);
  } else {
    console.log(`Negative: ${convertedNumber}`);
  }
  rl.close();
});
