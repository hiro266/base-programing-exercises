// No. 88 big or small
// コンピュータは1から99の数字をランダムに選ぶ（正解値と呼ぶ）。プレイヤは値を入力し、正解値と一致すればクリアとなり値を入力した回数を表示する。
// 一致しなければ正解値が入力値より大きいか小さいかを表示する。この数当てゲームプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");
const correctNumber = Math.ceil(Math.random() * 99);
let answerNumber = 0;

rl.prompt();

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  answerNumber++;

  if (number !== correctNumber) {
    if (number > correctNumber) {
      console.log("それより小さいです");
    } else {
      console.log("それより大きいです");
    }
    rl.prompt();
    return;
  }

  console.log(`正解!!${answerNumber}でクリア`);

  rl.close();
};

rl.on("line", processInput);
