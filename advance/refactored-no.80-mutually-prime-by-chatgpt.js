// No. 80 互いに素 ☆
// 2つの正の整数値を入力させ、互いに素であるか判定するプログラムを作成せよ。
// なお、2つの正の整数が互いに素とは、1以外に共通公約数を持たない関係のことである。

// 💡Point💡
// 1. 素因数分解処理の関数化

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("1つ目の整数を入力して下さい: ");
rl.prompt();

let firstInput, secondInput;

// 与えられた正の整数を素因数分解し、素因数（重複あり）の配列として返す関数
const getPrimeFactors = (num) => {
  const factors = [];
  let divisor = 2;
  let current = num; // 元の値を破壊しないように局所変数を使用
  while (current !== 1) {
    if (current % divisor === 0) {
      factors.push(divisor);
      current = current / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
};

const processInput = (input) => {
  const number = Number(input.trim());
  if (isNotInteger(number) || number <= 0) {
    console.log("正の整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (firstInput === undefined) {
    firstInput = number;
    rl.setPrompt("2つ目の整数を入力して下さい: ");
    rl.prompt();
    return;
  }
  secondInput = number;

  // それぞれの素因数分解を行う
  const firstPrimeFactors = getPrimeFactors(firstInput);
  const secondPrimeFactors = getPrimeFactors(secondInput);

  // 少なくとも1つの共通の素因数（1以外）があれば、互いに素ではない
  const haveCommonFactor = firstPrimeFactors.some((factor) =>
    secondPrimeFactors.includes(factor)
  );

  console.log(haveCommonFactor ? "互いに素でない" : "互いに素");
  rl.close();
};

rl.on("line", processInput);
