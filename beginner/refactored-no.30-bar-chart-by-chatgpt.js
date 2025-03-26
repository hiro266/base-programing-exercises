// No. 30 棒グラフ
// 整数値を入力させ、その個数だけ*を表示するプログラムを作成せよ。
// 入力値が0以下の値の場合は何も書かなくてよい。

// 💡Point💡
// - 文字列の生成に配列を使用しなくても便利メソッド repeat で実現可能

const { rl, isNotInteger } = require("../utils/utils");

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  number > 0 && console.log("*".repeat(number));

  rl.close();
};

rl.question("入力して下さい>", processInput);
