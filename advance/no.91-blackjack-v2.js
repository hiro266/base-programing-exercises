// No. 91 ブラックジャックその2 ☆☆☆☆
// No.90で作ったブラックジャックゲームをさらに進化させよう。
// ブラックジャックでは、最初に配られた2枚の合計では足りない場合、21を超えない限り何枚でもカードを追加で引くことができる。
// 合計が16以下の場合はもう一枚カードを引き、17以上になったら止める、というルールで自動的にカードを引くプログラムを作成せよ。

const sumTotalCardInHand = (currentCards) => {
  return currentCards.reduce((acc, currentCard, currentIndex) => {
    if (currentIndex === 1 && acc > 10) acc = 10;
    if (currentIndex === 1 && acc === 1) acc = 11;

    let convertedCart = currentCard > 10 ? 10 : currentCard;

    if (convertedCart === 1) convertedCart = 11;
    if (currentIndex > 1 && convertedCart === 11 && acc > 11) convertedCart = 1;
    return acc + convertedCart;
  });
};

const suits = ["スペード", "ハート", "ダイヤ", "クラブ"];
const numbers = [...Array(13)].map((_, index) => index + 1);
const cards = suits.flatMap((suits) => numbers.map((num) => num));

let num = cards.length;
const cardsInHand = [];
let cardIndex = 0;

while (num) {
  let i = Math.floor(Math.random() * num);
  num--;
  let str = cards[num];
  cards[num] = cards[i];
  cards[i] = str;
}

// cardsInHand.push(5, 1, 1, 7);
cardsInHand.push(cards[cardIndex]);
cardIndex++;
cardsInHand.push(cards[cardIndex]);

let totalCardInHand = sumTotalCardInHand(cardsInHand);
cardsInHand.forEach((c) => process.stdout.write(`${c} `));
process.stdout.write(`: 合計${totalCardInHand}\n`);

while (totalCardInHand <= 16) {
  console.log("もう一枚引きます");
  cardIndex++;
  cardsInHand.push(cards[cardIndex]);
  totalCardInHand = sumTotalCardInHand(cardsInHand);
  cardsInHand.forEach((c) => process.stdout.write(`${c} `));
  process.stdout.write(`: 合計${totalCardInHand}\n`);
}

console.log(totalCardInHand > 21 ? "バストです" : "これでOKです");
