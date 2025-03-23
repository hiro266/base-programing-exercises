// 整数値を入力させ、入力値が0でなければ再度入力させ、0であれば終了するプログラムを作成せよ。

const utils = require("./utils/utils");
const { rl, isNotInteger } = utils;

rl.prompt();

rl.on("line", (input) => {
  const convertedNumber = Number(input);

  if (isNotInteger(convertedNumber)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  if (convertedNumber === 0) {
    console.log(`input number: ${convertedNumber}`);
    rl.close();
    return;
  } else {
    console.log(`input number: ${convertedNumber}`);
    rl.prompt(); // 次の入力へ
  }
});
