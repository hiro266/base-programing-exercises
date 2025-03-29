// No. 44 通貨換算
// 換算したい金額（円単位）と1ドル何円かを整数値で入力すると、
// 入力した金額が何ドル何セントか計算して表示するプログラムを作成せよ。
// 1セントは1/100ドルである。結果は整数値でよい（1セント未満の端数切り捨て）。

const { rl, isNotInteger } = require("../utils/utils");

const MAX_INPUT = 2;
const numbers = [];

const decimalPart = (num) => {
  let decPart = num - (num >= 0 ? Math.floor(num) : Math.ceil(num));
  return decPart.toFixed(2);
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

  if (numbers.length >= MAX_INPUT) {
    const [yen, yenPerDollar] = numbers;
    const convertedDollar = (yen / yenPerDollar).toFixed(2);
    const dollarRemovedDecimal = Math.trunc(convertedDollar);
    const cent = decimalPart(convertedDollar, 6) * 100;

    console.log(`${yen}円は${dollarRemovedDecimal}ドル${cent}セント`);

    rl.close();
  } else {
    rl.prompt();
  }
};

rl.on("line", processInput);
