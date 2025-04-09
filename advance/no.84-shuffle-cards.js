// No. 84 トランプを切る
// トランプをランダムに順番を変えて表示するプログラムを作成せよ。
// トランプは4つのスート（マーク）、1〜13までの数字の52枚である。
// トランプを表現する配列を作り、適当に順序を入れ替えていけばよい。
// 適当に順序を入れ替えるには、例えば2つの入れ替えるカードを乱数を使って選び、それらを入れ替える操作を何回も繰り返せばよい。

const suits = ["スペード", "ハート", "ダイヤ", "クラブ"];
const numbers = [...Array(13)].map((_, index) => index + 1);

let cards = [];
suits.forEach((suit) => {
  numbers.forEach((number) => cards.push(`${suit}${number}`));
});

let num = cards.length;
while (num) {
  let i = Math.floor(Math.random() * num);
  num--; // num = num - 1 → num = 3
  // 初期 [ 'スペード1', 'ハート1', 'ダイヤ1', 'クラブ1' ]
  let str = cards[num];
  // cards[3] = クラブ1 → str = クラブ1
  cards[num] = cards[i];
  //  i = 2, num = 3
  //  cards[3] = クラブ1, cards[2] = ダイヤ1
  // クラブ1の箇所にはダイヤ1が入る
  // [ 'スペード1', 'ハート1', 'ダイヤ1', 'ダイヤ1' ]
  cards[i] = str;
  // cards[2] = ダイヤ1, str = クラブ1
  // ダイヤ1の箇所にはクラブ1が入る
  // [ 'スペード1', 'ハート1', 'クラブ1', 'ダイヤ1' ]
}

cards.forEach((card, index) => {
  console.log(`${index}:${card}`);
});
