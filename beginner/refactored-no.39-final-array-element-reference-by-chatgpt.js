// No. 39 もっと・配列要素の参照
// {3, 7, 0, 8, 4, 1, 9, 6, 5, 2}で初期化される大きさ10の整数型配列を宣言し、最初は参照する要素番号を0とする。
// この参照する要素番号の配列要素の値から次の要素番号の配列要素の値を引いた値を表示し、参照する要素番号を1増やす。
// この手順を9回繰り返すプログラムを作成せよ。（具体的にどのような手順かは実行例を見て考えよう。）

// 💡Point💡
// - リファクタリング
//   - 要件を満たすのに余計な変数の展開は不要
//   - 配列のi番目とi+1番目の値の差を出力するだけなのでループインデックスを使用するだけで良い

const arr = [3, 7, 0, 8, 4, 1, 9, 6, 5, 2];

for (let i = 0; i < 9; i++) {
  console.log(arr[i] - arr[i + 1]);
}
