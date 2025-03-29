// No. 42 小さい順?
// 整数値を3つ入力させ、それらの値が小さい順（等しくてもよい）に並んでいるか判定し、
// 小さい順に並んでいる場合はOK、そうなっていない場合はNGと表示するプログラムを作成せよ。

// 💡Point💡
// - 昇順判定の方法をループによる比較に変更
//   - 昇順かを確認するだけなら、ソートしたりJSON変換するのは不要でパフォーマンスに悪影響
//   - 1. 計算量の増加: ソート処理と隣接要素の比較だと隣接要素の比較の方が効率的
//   - 2. 無駄なリソース消費: 配列サイズが大きい場合、ソートや JSON変換にかかる計算資源（CPU時間やメモリ）が無駄に消費
// - グローバル変数との区別
//   - グローバル変数numbers と isAscの引数として渡すnumbersを区別する

const { rl, isNotInteger } = require("../utils/utils");

const MAX_INPUT = 3;
const numbers = [];

const isAsc = (arr) => {
  return arr.every(
    (value, index, array) => index === 0 || array[index - 1] <= value
  );
  // 配列全ての要素に対して実行し、全てtrueならtrueを返し、一つでもfalseならfalseを返す
  // [1, 2, 3]
  // 1. value = 1, index = 0, array = [1,2,3]
  //   index === 0 に当てはまるため true
  // 2. value = 2, index = 1, array = [1,2,3]
  //   array[1 - 1] が 2以下
  //   array[0] = 1
  //   1 が 2以下に該当するため true
  // 3. value = 3, index = 2, array = [1,2,3]
  //   array[2 - 1] が 3以下
  //   array[1] = 2
  //   2 が 3以下に該当するため true
  // 4. 全ての要素がtrueのため最終的な返値がtrueになる
};

rl.prompt();

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  numbers.push(number);

  if (numbers.length < MAX_INPUT) {
    rl.prompt();
  } else {
    console.log(isAsc(numbers) ? "OK" : "NG");
    rl.close();
  }
};

rl.on("line", processInput);
