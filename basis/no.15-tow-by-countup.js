// 整数値を入力させ、0から入力値を超えない値まで2ずつ増やして表示するプログラムを作成せよ。
const utils = require("./utils/utils");
const { rl, isNotInteger } = utils;

rl.question("整数を入力>", (input) => {
  const convertedNumber = Number(input);
  if (isNotInteger(convertedNumber)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  for (i = 0; i <= convertedNumber; i += 2) {
    console.log(i);
  }

  rl.close();
});
