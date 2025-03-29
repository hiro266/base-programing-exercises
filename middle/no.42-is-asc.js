// No. 42 小さい順?
// 整数値を3つ入力させ、それらの値が小さい順（等しくてもよい）に並んでいるか判定し、
// 小さい順に並んでいる場合はOK、そうなっていない場合はNGと表示するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

const MAX_INPUT = 3;
const numbers = [];

const isAsc = (numbers) => {
  const sortedNumbers = numbers.toSorted((a, b) => a - b);
  return JSON.stringify(numbers) === JSON.stringify(sortedNumbers);
};

rl.prompt();

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  numbers.push(number);

  if (numbers.length < MAX_INPUT) {
    rl.prompt();
  } else {
    console.log(`${isAsc(numbers) ? "OK" : "NG"}`);
    rl.close();
  }
};

rl.on("line", processInput);
