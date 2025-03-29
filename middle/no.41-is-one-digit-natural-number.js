// No. 41 1桁の自然数?
// 整数値を入力させ、その値が一桁の自然数かそうでないか判定するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  const isNaturalNumber = (number) => {
    return number > 0 && number < 10 ? true : false;
  };

  console.log(
    `${number} is ${
      isNaturalNumber(number) ? "a single figure" : "not a single figure"
    }`
  );

  rl.close();
};

rl.on("line", processInput);
