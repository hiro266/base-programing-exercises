// No. 90 ブラックジャックその1
// トランプをシャッフルするプログラムはNo.84で作成した。これを使って、ブラックジャックゲームを作ってみよう。
// ブラックジャックは、最初に2枚のカードを配り、2〜10は数字通り、JとQとKは10、Aは1か11として合計し21に近いほど勝ちとなるが、21を超えると負け（バストと呼ぶ）というゲームである。
// まず最初にトランプをシャッフルし、2枚を先頭から順番に引き、それらのカードの数字（マークは無視してよい）と合計値を表示するプログラムを作成せよ。

const suits = ["スペード", "ハート", "ダイヤ", "クラブ"];
const numbers = [...Array(13)].map((_, index) => index + 1);
const cards = suits.flatMap((suits) => numbers.map((num) => num));

let num = cards.length;
while (num) {
  let i = Math.floor(Math.random() * num);
  num--;
  let str = cards[num];
  cards[num] = cards[i];
  cards[i] = str;
}

const first = cards[0] > 10 ? 10 : cards[0];
const second = cards[1] > 10 ? 10 : cards[1];

let sumNumber = first + second;
if (sumNumber > 21 && first === 1) {
  sumNumber = 1 + second;
}

if (sumNumber > 21 && second === 2) {
  sumNumber = first + 1;
}

console.log(`${first} ${second} : ${sumNumber}`);
