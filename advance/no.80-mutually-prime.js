// No. 80 互いに素 ☆
// 2つの正の整数値を入力させ、互いに素であるか判定するプログラムを作成せよ。
// なお、2つの正の整数が互いに素とは、1以外に共通公約数を持たない関係のことである。

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("1つ目の整数を入力して下さい");
rl.prompt();

let fitstInput, secondInput;
const fitstPrimeNumbers = [];
const secondPrimeNumbers = [];

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (fitstInput === undefined) {
    fitstInput = number;
    rl.setPrompt("2つ目の整数を入力して下さい");
    rl.prompt();
    return;
  }
  secondInput = number;

  let firstDivider = 2;
  let secondDivider = 2;

  while (fitstInput !== 1) {
    if (fitstInput % firstDivider === 0) {
      fitstInput = fitstInput / firstDivider;
      fitstPrimeNumbers.push(firstDivider);
    } else {
      firstDivider = firstDivider + 1;
    }
  }

  while (secondInput !== 1) {
    if (secondInput % secondDivider === 0) {
      secondInput = secondInput / secondDivider;
      secondPrimeNumbers.push(secondDivider);
    } else {
      secondDivider = secondDivider + 1;
    }
  }

  const hasValue = fitstPrimeNumbers.some((value) =>
    secondPrimeNumbers.includes(value)
  );

  console.log(hasValue ? "互いに素でない" : "互いに素");

  rl.close();
};

rl.on("line", processInput);
