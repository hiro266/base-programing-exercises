// No. 56 2進数変換
// 0〜65535の整数値を入力させ、入力値を16桁の2進数に変換して表示するプログラムを作成せよ。
const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (number < 0 || number > 65535) {
    console.log("0〜65535の整数を入力して下さい");
    rl.prompt();
    return;
  }

  let convertBinary = number.toString(2);

  if (convertBinary.length !== 16) {
    convertBinary = "0".repeat(16 - convertBinary.length) + convertBinary;
  }
  console.log(convertBinary);

  rl.close();
};

rl.on("line", processInput);
