// No. 29 5つの合計
// 整数値を5回入力させ、それらの値の合計を表示するプログラムを繰り返しを使って作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const inputList = [];
const INPUT_COUNT = 5;
const INITIAL_VALUE = 0;

rl.on("line", (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  inputList.push(number);

  if (inputList.length >= INPUT_COUNT) {
    const sumValue = inputList.reduce(
      (acc, currentValue) => acc + currentValue,
      INITIAL_VALUE
    );
    console.log(sumValue);
    rl.close();
  } else {
    rl.prompt();
  }
});
