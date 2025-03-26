// No. 28 nの階乗
// 整数値を入力させ、その値の階乗を表示するプログラムを作成せよ。
// ただし、0以下の値を入力した場合は1と表示する。

const { rl, isNotInteger } = require("../utils/utils");

const initialValue = 1;

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (number <= 0) {
    console.log(1);
    rl.close();
    return;
  }

  const arr = [...Array(number).keys()].map((i) => i + 1);
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue
  );
  console.log(sum);

  rl.close();
};

rl.question("入力して下さい>", processInput);
