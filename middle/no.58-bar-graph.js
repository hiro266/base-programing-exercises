// No. 58 棒グラフ
// 0以上の整数値を5つ入力させ、それぞれの値に対して、次の形式でグラフを描くプログラムを作成せよ。
// 形式：左端に値を表示し、適切に空白を空けて":"を書く（:で揃えるためにタブ\tを使うとよい）。
// その後ろに値の数だけ*を描くが、5個おきに空白を１つ入れる。具体例は下記の実行例を参照すること。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const numbers = [];

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  numbers.push(number);
  if (numbers.length < 5) {
    rl.prompt();
    return;
  }

  numbers.forEach((number) => {
    const bar = [];
    for (let i = 1; i <= number; i++) {
      if (i % 5 === 0) {
        bar.push("* ");
      } else {
        bar.push("*");
      }
    }

    console.log(`${number}\t:${bar.join("")}`);
  });

  rl.close();
};

rl.on("line", processInput);
