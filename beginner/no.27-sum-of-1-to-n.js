// No. 27 1からnまでの和
// 整数値を入力させ、1からその値までの総和を計算して表示するプログラムを作成せよ。ただし、0以下の値を入力した場合は0と表示する。

const { rl, isNotInteger } = require("../utils/utils");
const initialValue = 0;

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (number <= 0) {
    console.log(0);
    rl.close();
    return;
  }

  const arr = [...Array(number).keys()].map((i) => i + 1);
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  console.log(sum);

  rl.close();
};

rl.question("入力して下さい>", processInput);
