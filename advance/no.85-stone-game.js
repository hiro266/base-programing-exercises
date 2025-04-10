// No. 85 石取りゲーム ⭐️⭐️
// 最初に石の個数を入力し（10個以上とする）、二人のプレイヤーが交互に1〜3個ずつ石を取り、最後の1個を取った方が負けとなるゲームがある。
// このゲームプログラムを作成せよ。具体的には実行例を参照のこと。

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("石の数を入力して下さい(10以上)");
rl.prompt();

let stones;
let times = 1;

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (number < 10) {
    console.log("10以上の自然数を入力して下さい");
    rl.prompt();
    return;
  }

  if (stones === undefined) {
    stones = number;
    rl.setPrompt("プレイヤー1の番です\n何個取る（1〜3個）?");
    rl.prompt();
    return;
  }

  times = times + 1;

  if (times % 2 === 1) {
    rl.setPrompt("プレイヤー1の番です\n何個取る（1〜3個）?");
    rl.prompt();
    return;
  } else {
    rl.setPrompt("プレイヤー2の番です\n何個取る（1〜3個）?");
    rl.prompt();
    return;
  }

  rl.close();
};

rl.on("line", processInput);
