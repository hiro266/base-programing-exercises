// No. 47 値の入れ替え
// 異なる整数値を2つ入力し、それぞれ別の変数に格納する。
// そして、それらの変数の値を入れ替えた後、それぞれの変数の値を表示するプログラムを作成せよ。
// 単に順序を変えて表示するだけではダメ。必ず変数の値を入れ替えること。
// 下の実行例の場合、まず変数aに2、bに5が入力された状態から、aの値が5、bの値が2になるように入れ替える。

// 💡Point💡
// 1. オブジェクトによる管理から個別変数への変更
//   - 分割代入を使って入れ替えるほうがシンプル
//   - 入力回数をオブジェクトのキー数で見る必要がなくなる

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("1つ目の整数を入力して下さい");
rl.prompt();

let a, b;

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (a === undefined) {
    rl.setPrompt("2つ目の整数を入力して下さい");
    rl.prompt();
    a = number;
  } else {
    b = number;
    [a, b] = [b, a];
    console.log(`a = ${a}, b= ${b}`);
    rl.close();
  }
};

rl.on("line", processInput);
