// No. 93 宇宙の人 ☆☆☆
// まず開始値と終了値をそれぞれ入力させる。
// 次に、開始値から終了値まで順に、3の倍数と3のつく数字のときは頭に"aho"と付けて表示するプログラムを作成せよ。
// 開始値と終了値の値の妥当性（例えば終了値の方が開始値よりも大きいか）チェックは省略してよい。

const { rl, isNotInteger } = require("../utils/utils");

let startNumber, lastNumber;

rl.setPrompt("開始値を入力して下さい");
rl.prompt();

const hasMultipleOfThreeOrThreeWithNumber = (number) => {
  const str = String(number);
  return number % 3 === 0 || str.includes("3");
};

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (startNumber === undefined) {
    startNumber = number;
    rl.setPrompt("終了値を入力して下さい");
    rl.prompt();
    return;
  }

  lastNumber = number;

  console.log(`start: ${startNumber}`);
  console.log(`last: ${lastNumber}`);

  for (let i = startNumber; i <= lastNumber; i++) {
    hasMultipleOfThreeOrThreeWithNumber(i)
      ? console.log(`aho ${i}`)
      : console.log(i);
  }
  rl.close();
};

rl.on("line", processInput);
