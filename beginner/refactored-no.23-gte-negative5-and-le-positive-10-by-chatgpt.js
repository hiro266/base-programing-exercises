// No. 23 -5以上10未満
// 整数値を入力させ、その値が-5以上10未満であればOK、そうでなければNGと表示するプログラムを作成せよ。

// 💡Point💡
// - 入力処理の関数化
//  - 処理内容が独立した関数としてまとまるとテストがしやすくなり、拡張や保守が容易になる
// - バリデーションロジックの関数化
//  - バリデーションのロジックが独立することで、読みやすさ・再利用性・テストのしやすさが向上
// - 三項演算子
//  - コード量が減るので条件がシンプルな場合は読みやすくできる

const { rl, isNotInteger } = require("../utils/utils");
const LOWER_LIMIT = -5;
const UPPER_LIMIT = 10;

const isInRange = (num) => num >= LOWER_LIMIT && num < UPPER_LIMIT;

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.close();
    return;
  }

  console.log(isInRange(number) ? "OK" : "NG");
  rl.close();
};

rl.question("入力して下さい>", processInput);
