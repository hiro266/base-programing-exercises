// No. 52 閏年
// 西暦を入力したらその年が閏（うるう）年かどうかを判定するプログラムを作成せよ。
// なお、4で割り切れる年のうち、100で割り切れないか、400で割り切れる年は閏年である。

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("西暦を入力して下さい");
rl.prompt();

const processInput = (input) => {
  const year = Number(input.trim());

  if (isNotInteger(year)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year}年は閏年である`);
  } else {
    console.log(`${year}年は閏年ではない`);
  }

  rl.close();
};

rl.on("line", processInput);
