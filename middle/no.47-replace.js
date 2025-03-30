// No. 47 値の入れ替え
// 異なる整数値を2つ入力し、それぞれ別の変数に格納する。
// そして、それらの変数の値を入れ替えた後、それぞれの変数の値を表示するプログラムを作成せよ。
// 単に順序を変えて表示するだけではダメ。必ず変数の値を入れ替えること。
// 下の実行例の場合、まず変数aに2、bに5が入力された状態から、aの値が5、bの値が2になるように入れ替える。

const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const inputs = {};
const newInputs = {};

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (Object.keys(inputs).length === 0) {
    inputs.a = number;
    rl.prompt();
  } else {
    inputs.b = number;
    newInputs.a = inputs.b;
    newInputs.b = inputs.a;
    console.log(`a = ${newInputs.a}, b= ${newInputs.b}`);
    rl.close();
  }
};

rl.on("line", processInput);
