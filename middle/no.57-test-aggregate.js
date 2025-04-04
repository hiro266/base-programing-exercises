// No. 57 テスト集計
// まず受験者数を入力させ、次に受験者数ごとに英語、数学、国語の点数をスペースで区切って入力させる
// （具体的な入力方法は下記のscanfの使い方の説明、および入力データの中身を見よ）。
// 入力が終了したら、英語、数学、国語の平均点、および各受験生の合計点を計算して表示するプログラムを作成せよ。
// 受験者数は100人までとする。
// なお、データの個数とデータはファイルからリダイレクトで入力させればよいので、入力のためのメッセージは不要である（実行例を参照すること）。

const fs = require("fs");
const readlineSync = require("readline-sync");

const dataOptions = [
  "examSmall.data",
  "examMiddle.data",
  "examLarge.data",
  "tmp.data",
];
const index = readlineSync.keyInSelect(dataOptions, "ファイルを指定して下さい");

if (index === -1) return;

// 選択されたファイルを同期的に読み込む（小さいファイルの場合に有効）
const fileContent = fs.readFileSync(`./data/${dataOptions[index]}`, "utf8");

// 改行コード（Windows/Linux両対応）で分割して一行ずつ処理する
const lines = fileContent.split(/\r?\n/);

const candidates = [];

lines.map((line, index) => {
  if (index === 0) return;

  const formattedLine = line.trim().split(" ");
  const english = Number(formattedLine[0]);
  const math = Number(formattedLine[1]);
  const japanese = Number(formattedLine[2]);
  const sum = english + math + japanese;

  const candidate = {
    english,
    math,
    japanese,
    sum,
  };

  candidates.push(candidate);
});

const getAverrage = (records, subject) => {
  return (
    records
      .map((record) => {
        switch (subject) {
          case "english":
            return record.english;
          case "math":
            return record.math;
          case "japanese":
            return record.japanese;
        }
      })
      .reduce((acc, current) => acc + current) / candidates.length
  );
};

const englishAve = Math.floor(getAverrage(candidates, "english"));
const mathAve = Math.floor(getAverrage(candidates, "math"));
const japaneseAve = Math.floor(getAverrage(candidates, "japanese"));

console.log(`平均点 英語:${englishAve}, 数学:${mathAve}, 国語:${japaneseAve}`);
candidates.map((candidate, index) => {
  console.log(`${index}: ${candidate.sum}`);
});
