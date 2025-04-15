// No. 94 hit and blow その1 ☆☆☆
// hit and blowという数当てゲームがある。
// 出題者は0〜9999の範囲の数字を正解として選ぶ。
// 次に、解答者は予想する数字を言う。
// 出題者は同じ桁（位置）に同じ数字があればヒット、桁は違うが同じ数字があればブローとして数え、ヒットとブローの数を答える（3桁以下の数字は頭に0が付いているものとする）。
// 例えば、次のようになる：
// 正解:1234 予想:1234 → 4ヒット（＝クリア）
// 正解:1234 予想:5678 → 0ヒット0ブロー
// 正解:1234 予想:1892 → 1ヒット1ブロー
// 正解:0034 予想:3400 → 0ヒット4ブロー
// 正解:1222 予想:1234 → 2ヒット0ブロー（ヒットはブローより優先して判定する）
// 正解:1112 予想:1221 → 1ヒット2ブロー

// このゲームを3回に分けて作ってみよう。まず、コンピュータは正解となる4つの数字をランダムに選ぶ（同じ数字を何回使ってもよいし、0で始まってもよい）。
// 次に、プレイヤーに4桁の数字を入力させる。そして、ヒットの数を数え、表示するプログラムを作成せよ。

const { rl } = require("../utils/utils");

// コンピュータが正解を決定する関数
const getCollectNumber = () => {
  let num = Math.floor(Math.random() * 9999);
  if (num < 1000) {
    const str = String(num);
    num = str.padStart(4, "0");
  }
  return String(num);
};
const collectNumber = getCollectNumber();
console.log("collectNumber", collectNumber);

// 入力値とコンピュータが決定した値が一致しているかを判定する
const isEqual = (number) => {
  return number === collectNumber;
};

// ヒットの数を数える
const getHitCount = (input) => {
  const arrayInput = input.split("");
  const arrayCollectNumber = collectNumber.split("");

  return arrayInput.filter(
    (arrNum, index) => arrNum === arrayCollectNumber[index]
  ).length;
};

// 対話開始
rl.setPrompt("4桁の数字を入力");
rl.prompt();

const processInput = (input) => {
  if (isEqual(input)) {
    console.log("4hit\nクリア!!");
    rl.close();
    return;
  }

  const hitCount = getHitCount(input);
  console.log(`${hitCount} hit`);
  rl.close();
};

rl.on("line", processInput);
