// No. 53 素因数分解
// 自然数の入力値を素因数分解して結果を表示するプログラムを作成せよ。
// まず2で割り切れる間は割っていき、2で割り切れなくなったら3で、と、割る数を1ずつ大きくしながら繰り返す。

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("自然数を入力して下さい");
rl.prompt();

const processInput = (input) => {
  let number = Number(input.trim());
  let currentPrime = 2;
  const primeNumbers = [];

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  while (number !== 1) {
    if (number % currentPrime === 0) {
      primeNumbers.push(currentPrime);
      number = number / currentPrime;
    } else {
      currentPrime++;
    }
  }

  console.log(primeNumbers);

  rl.close();
};

rl.on("line", processInput);
