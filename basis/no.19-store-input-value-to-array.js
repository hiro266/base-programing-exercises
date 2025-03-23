// 要素数5の整数型の配列を宣言し、すべての配列に対して順に入力された整数値を代入し、すべての要素の値を表示するプログラムを作成せよ。

const utils = require("./utils/utils");
const { rl, isNotInteger } = utils;

rl.prompt();

const arr = [...Array(5)];
let currentCount = 0;
let inputCount = arr.length - 1;

rl.on("line", (input) => {
  const convertedNumber = Number(input);

  if (isNotInteger(convertedNumber)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (currentCount >= inputCount) {
    arr.splice(currentCount, 1, convertedNumber);
    arr.map((i) => console.log(i));
    rl.close();
    return;
  } else {
    arr.splice(currentCount, 1, convertedNumber);
    currentCount++;
    rl.prompt();
  }
});
