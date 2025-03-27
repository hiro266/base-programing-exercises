// No. 33 入力値抜き
// 整数値を入力させ、1から9まで、入力値以外を表示するプログラムを作成せよ。

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

  for (i = LOWER_LIMIT; i <= UPPER_LIMIT; i++) {
    if (i !== number) console.log(i);
  }

  rl.close();
};

rl.on("line", processInput);
