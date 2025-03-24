// No. 25 -10未満?、-10以上0未満?、0以上?
// 整数値を入力させ、その値が-10未満ならrange 1、-10以上0未満であればrange 2、0以上であればrange 3、と表示するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (number < -10) {
    console.log("range1");
  } else if (number >= -10 && number < 0) {
    console.log("range2");
  } else {
    console.log("range3");
  }

  rl.close();
};

rl.question("入力して下さい>", processInput);
