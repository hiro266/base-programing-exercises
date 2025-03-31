// No. 48 繰り返し計算
// 最初に2以上の整数値を入力し、次の規則で計算し、計算回数と計算結果を表示し、計算結果が1になるまで繰り返すプログラムを作成せよ。
// 規則：ある値が偶数ならその値を1/2にする。奇数ならその値を3倍して1を足す。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();
let n;

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (number < 2) {
    console.log("2以上の整数を入力して下さい");
    rl.prompt();
    return;
  }

  n = number;
  while (n !== 1) {
    console.log(n);

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
  }
  console.log(n);

  rl.close();
};

rl.on("line", processInput);
