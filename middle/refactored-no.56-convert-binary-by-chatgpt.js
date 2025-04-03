// No. 56 2進数変換
// 0〜65535の整数値を入力させ、入力値を16桁の2進数に変換して表示するプログラムを作成せよ。

// 💡Point💡
// - 0埋めを簡素化(padStart)

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

  const convertBinary = number.toString(2).padStart(16, "0");
  console.log(convertBinary);

  rl.close();
};

rl.on("line", processInput);
