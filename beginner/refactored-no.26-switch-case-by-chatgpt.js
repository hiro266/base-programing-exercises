// No. 26 switch-case
// 整数値を入力させ、その値が1ならone、2ならtwo、3ならthree、それ以外ならothersと表示するプログラムをswicth-case文を使って作成せよ。

// 💡Point💡
// - 判定ケースが増えることを見越してオブジェクトによるマッピングに切り替える

const { rl, isNotInteger } = require("../utils/utils");

const messages = {
  1: "one",
  2: "two",
  3: "three",
};

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  console.log(`${messages[number] ?? "others"}`);
  rl.close();
};

rl.question("入力して下さい>", processInput);
