// No. 59 行列の和
// 3x3行列の和を求めて表示するプログラムを作成せよ。行列の値は2次元配列で表現し、繰り返しを使って計算すること。
// 3x3行列とは縦3つ、横3つの9つの要素(値)をひとまとめにして扱うものである。
// 2つの3x3行列の和は次式のように、それぞれ同じ位置にある値を足したものとして計算できる。
// 例えばa12という要素は、1行目2列目の要素という意味である。それぞれ同じ位置にある要素を足せばよい。

// 💡Point💡
// 1. 2重ループの廃止
//  - 既存：2つの行列を入れ子にしてループ、indexが一致した場合のみ加算
//  - 新規：引数に2つの行列を別々に渡して、同じindexの要素同士を加算

const twoDArray = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
];

// 対応する要素の和を計算する関数
const calcMatrixSum = (matrix1, matrix2) => {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result.push(matrix1[i] + matrix2[i]);
  }
  return result;
};

// 2つの行列の和（1次元配列で表現）
const sum = calcMatrixSum(twoDArray[0], twoDArray[1]);

sum.forEach((s, index) => {
  if ((index + 1) % 3 === 0) {
    process.stdout.write(`${s}\n`);
  } else {
    process.stdout.write(`${s}\t`);
  }
});
