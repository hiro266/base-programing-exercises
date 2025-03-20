// 整数値を入力させ、0から入力値まで数を1ずつ増やして表示するプログラムを作成せよ
const utils = require("./utils/utils");

utils.rl.question("整数を入力>", (input) => {
  const convertedNumber = Number(input);
  if (utils.isInteger(convertedNumber)) {
    console.log("整数を入力して下さい");
    utils.rl.close();
    return;
  }

  for (i = 0; i <= convertedNumber; i++) {
    console.log(i);
  }

  utils.rl.close();
});
