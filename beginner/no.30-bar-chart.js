// No. 30 棒グラフ
// 整数値を入力させ、その個数だけ*を表示するプログラムを作成せよ。
// 入力値が0以下の値の場合は何も書かなくてよい。

const { rl, isNotInteger } = require("../utils/utils");

const str = [];

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  for (i = 1; i <= number; i++) {
    str.push("*");
  }
  console.log(str.join(""));

  rl.close();
};

rl.question("入力して下さい>", processInput);
