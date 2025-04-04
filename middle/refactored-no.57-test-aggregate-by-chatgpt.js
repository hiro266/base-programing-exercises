// No. 57 テスト集計
// まず受験者数を入力させ、次に受験者数ごとに英語、数学、国語の点数をスペースで区切って入力させる
// （具体的な入力方法は下記のscanfの使い方の説明、および入力データの中身を見よ）。
// 入力が終了したら、英語、数学、国語の平均点、および各受験生の合計点を計算して表示するプログラムを作成せよ。
// 受験者数は100人までとする。
// なお、データの個数とデータはファイルからリダイレクトで入力させればよいので、入力のためのメッセージは不要である（実行例を参照すること）。

// 💡Point💡
// 1. 返値を必要としない配列のループにはforEachを利用すると、意図が明確になる
// 2. 平均点数計算関数の改善
//   - 各受験生の各科目の点数は、record[subject] で直接取得できるので、switch-case は使わなくて実装できる
//   - 例：record["english"]
// 3. 不要なコードの削除
//   - 「受験者数」は不要なため slice で除外してから処理する

const fs = require("fs");
const readlineSync = require("readline-sync");

const dataOptions = ["examSmall.data", "examMiddle.data", "examLarge.data"];
const index = readlineSync.keyInSelect(dataOptions, "ファイルを指定して下さい");

if (index === -1) return;

// 選択されたファイルを同期的に読み込む（小さいファイルの場合に有効）
const fileContent = fs.readFileSync(`./data/${dataOptions[index]}`, "utf8");

// 改行コード（Windows/Linux両対応）で分割して一行ずつ処理する
const lines = fileContent.split(/\r?\n/);

const candidates = [];

lines.slice(1).forEach((line) => {
  const formattedLine = line.trim().split(" ");
  const english = Number(formattedLine[0]);
  const math = Number(formattedLine[1]);
  const japanese = Number(formattedLine[2]);
  const sum = english + math + japanese;
  candidates.push({ english, math, japanese, sum });
});

const getAverage = (records, subject) => {
  return (
    records
      .map((record) => record[subject])
      .reduce((acc, current) => acc + current) / records.length
  );
};

const englishAve = Math.floor(getAverage(candidates, "english"));
const mathAve = Math.floor(getAverage(candidates, "math"));
const japaneseAve = Math.floor(getAverage(candidates, "japanese"));

console.log(`平均点 英語:${englishAve}, 数学:${mathAve}, 国語:${japaneseAve}`);
candidates.forEach((candidate, index) => {
  console.log(`${index}: ${candidate.sum}`);
});
