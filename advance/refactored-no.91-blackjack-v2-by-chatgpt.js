// No. 91 ブラックジャックその2 ☆☆☆☆
// No.90で作ったブラックジャックゲームをさらに進化させよう。
// ブラックジャックでは、最初に配られた2枚の合計では足りない場合、21を超えない限り何枚でもカードを追加で引くことができる。
// 合計が16以下の場合はもう一枚カードを引き、17以上になったら止める、というルールで自動的にカードを引くプログラムを作成せよ。

// 💡Point💡
// - 煩雑していた処理を関数に切り分ける

// ブラックジャックの手札合計を計算する関数（Aceは11として扱い、超過すれば1にする）
const getHandValue = (hand) => {
  let sum = 0;
  let aceCount = 0;
  for (const card of hand) {
    let value = card;
    if (value > 10) {
      // J, Q, Kを10に
      value = 10;
    } else if (value === 1) {
      // Ace：初めは11としてカウント
      value = 11;
      aceCount++;
    }
    sum += value;
  }
  // 合計が21を超える場合、Aceを11から1に変換
  while (sum > 21 && aceCount > 0) {
    sum -= 10;
    aceCount--;
  }
  return sum;
};

// デッキを生成する関数（各カードは1～13の値、4スート分）
const createDeck = () => {
  const numbers = Array.from({ length: 13 }, (_, i) => i + 1);
  let deck = [];
  for (let i = 0; i < 4; i++) {
    deck = deck.concat(numbers);
  }
  return deck;
};

// デッキをシャッフルする（Fisher–Yatesアルゴリズム）
const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

let deck = createDeck();
shuffleDeck(deck);

// 初めに2枚配る：deckからpopで取り出す
const cardsInHand = [deck.pop(), deck.pop()];
let handValue = getHandValue(cardsInHand);

console.log(`初期手札: ${cardsInHand.join(" ")}  合計: ${handValue}`);

// 自動ヒット：合計が16以下なら、カードを追加で引く
while (handValue <= 16) {
  console.log("もう一枚引きます");
  cardsInHand.push(deck.pop());
  handValue = getHandValue(cardsInHand);
  console.log(`手札: ${cardsInHand.join(" ")}  合計: ${handValue}`);
}

console.log(handValue > 21 ? "バストです" : "これでOKです");
