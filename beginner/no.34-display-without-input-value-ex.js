// No. 34 入力値抜き改
// 整数値を入力させ、1から9まで、入力値と入力値+1以外を表示するプログラムを作成せよ。
// 入力値が9の場合は9のみ表示しない。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const processInput = (input) => {
  const LOWER_LIMIT = 1;
  const UPPER_LIMIT = 9;
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (number < LOWER_LIMIT || number > UPPER_LIMIT) {
    console.log("1~9までの整数を入力して下さい");
    rl.prompt();
    return;
  }

  for (let i = LOWER_LIMIT; i <= UPPER_LIMIT; i++) {
    if (i === number || i === number + 1) continue;
    console.log(i);
  }

  rl.close();
};

rl.on("line", processInput);
