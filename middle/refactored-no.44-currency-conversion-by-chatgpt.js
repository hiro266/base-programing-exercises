// No. 44 通貨換算
// 換算したい金額（円単位）と1ドル何円かを整数値で入力すると、
// 入力した金額が何ドル何セントか計算して表示するプログラムを作成せよ。
// 1セントは1/100ドルである。結果は整数値でよい（1セント未満の端数切り捨て）。

// 💡Point💡
// - 1度目と2度目のプロンプトメッセージの切り替え
// - 換算処理の簡略化

const { rl, isNotInteger } = require("../utils/utils");

const MAX_INPUT = 2;
const numbers = [];

// 1度目と2度目のプロンプトメッセージ
const promptMessages = ["何円？", "1ドルは何円？"];
rl.setPrompt(promptMessages[0] + " ");
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
    const totalDollars = (yen / yenPerDollar).toFixed(2); // 小数点2桁まで
    const dollars = Math.floor(totalDollars); // 小数点切り捨て
    const cents = Math.ceil((totalDollars - dollars) * 100); // 小数点切り上げ

    console.log(`${yen}円は${dollars}ドル${cents}セント`);

    rl.close();
  } else {
    rl.setPrompt(promptMessages[1] + " ");
    rl.prompt();
  }
};

rl.on("line", processInput);
