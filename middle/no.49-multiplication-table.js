// No. 49 九九
// 九九の表を、2重の繰り返しを使って表示するプログラムを作成せよ。
// 2重の繰り返しを使わず単に表示するだけではダメ。値の間はタブ(\t)を使って間をあけること。

// 被乗数 * 乗数
const multiplicand = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 被乗数
const multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 乗数

multiplicand.forEach((multiplicandValue) => {
  multiplier.forEach((multiplierValue) => {
    process.stdout.write(`${multiplicandValue * multiplierValue}\t`);
  });
  process.stdout.write("\n");
});
