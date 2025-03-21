// 整数値を入力させ、入力値から0まで数を1ずつ減らして表示するプログラムを作成せよ。
const utils = require("./utils/utils");
const { rl, isInteger } = utils;

rl.question("整数を入力>", (input) => {
  const convertedNumber = Number(input);
  if (isInteger(convertedNumber)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  for (i = convertedNumber; i >= 0; i--) {
    console.log(i);
  }

  rl.close();
});
