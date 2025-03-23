// 整数値を2つ入力させ、1つめの値を2つめの値で割った結果を表示し、続けてその結果に2つめの値を掛けた結果を表示するプログラムを作成せよ。
// 計算はすべて整数型で行うこと（割り切れない場合は自動的に小数点以下が切り捨てられる）。

// 💡Point💡
// - 定数は大文字スネークケース
// - 現在は何回目のinputなのかを変数で管理するのではなく、inputsの要素数で判断できる
//  - before: let currentCount = 0 → currentCount++;
//  - after: inputs.push() → inputs.length
// - calc関数ではあくまで値のみを返して、返した先で出力フォーマットを決める
//  - 責務の分担
// - inputをnumberにcastするときにtrimで両端スペースを削除
// - inputsへのpushはif文の外で実行
//  - if else どちらでも実行する処理のため

const { rl, isNotInteger } = require("../utils/utils");

const MAX_INPUTS = 2; // 入力数の上限
const inputs = [];

rl.prompt();

const calc = (first, second) => {
  // 第一引数を第二引数で割り、余りは切り捨て
  const divisionResult = Math.trunc(first / second);
  // 割り算の結果に第二引数を掛ける
  const multiplicationResult = divisionResult * second;
  return { divisionResult, multiplicationResult };
};

rl.on("line", (input) => {
  const number = Number(input.trim());

  // 入力値が整数でない場合、エラーメッセージを表示して終了
  if (isNotInteger(number)) {
    console.error("整数を入力して下さい");
    rl.close();
    return;
  }

  inputs.push(number);

  if (inputs.length < MAX_INPUTS) {
    rl.prompt();
  } else {
    const { divisionResult, multiplicationResult } = calc(inputs[0], inputs[1]);
    console.log(`result: ${divisionResult}`);
    console.log(`result: ${multiplicationResult}`);
    rl.close();
  }
});
