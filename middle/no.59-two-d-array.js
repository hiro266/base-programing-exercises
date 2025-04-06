// No. 59 行列の和
// 3x3行列の和を求めて表示するプログラムを作成せよ。行列の値は2次元配列で表現し、繰り返しを使って計算すること。
// 3x3行列とは縦3つ、横3つの9つの要素(値)をひとまとめにして扱うものである。
// 2つの3x3行列の和は次式のように、それぞれ同じ位置にある値を足したものとして計算できる。
// 例えばa12という要素は、1行目2列目の要素という意味である。それぞれ同じ位置にある要素を足せばよい。

const towDArray = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
];

const calc = (towDArray) => {
  const result = [];

  towDArray[0].forEach((filstElement, filstIndex) => {
    towDArray[1].forEach((secondElement, secondIndex) => {
      if (filstIndex === secondIndex) {
        result.push(filstElement + secondElement);
      }
    });
  });
  return result;
};

const sum = calc(towDArray);
sum.forEach((s, index) => {
  if ((index + 1) % 3 === 0) {
    process.stdout.write(`${s}\n`);
  } else {
    process.stdout.write(`${s}\t`);
  }
});
