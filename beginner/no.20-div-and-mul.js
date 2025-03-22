// 整数値を2つ入力させ、1つめの値を2つめの値で割った結果を表示し、続けてその結果に2つめの値を掛けた結果を表示するプログラムを作成せよ。
// 計算はすべて整数型で行うこと（割り切れない場合は自動的に小数点以下が切り捨てられる）。

const utils = require("../utils/utils");
const { rl, isInteger } = utils;

rl.prompt();

let currentCount = 1;
const maxCount = 2;

let inputList = [];

rl.on("line", (input) => {
  const convertedNumber = Number(input);

  if (isInteger(convertedNumber)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (currentCount < maxCount) {
    inputList.push(convertedNumber);
    currentCount++;
    rl.prompt();
  } else {
    inputList.push(convertedNumber);
    console.log(calc(inputList));
    rl.close();
  }
});

const calc = (inputList) => {
  const [first, second] = inputList;

  const divisionValue = Math.trunc(first / second);
  const multiplicationValue = divisionValue * second;
  return `result: ${divisionValue}\nresult: ${multiplicationValue}`;
};
