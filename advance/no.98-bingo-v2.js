// No. 98 ビンゴその2 ☆☆☆☆☆
// No.97で作ったビンゴカードで、ビンゴの抽選をするプログラムを作ろう。1〜75の数字をランダムな順番で1つずつ選んでいく。選んだ数字がカードにあれば、その数字のマス目を開ける。空いたマス目が縦横斜めのいずれかに5つ並べばビンゴとなり終了する。抽選の経過がわかるように表示を工夫しよう。

const shuffleCards = (numbers) => {
  let returnCards = numbers;
  let num = returnCards.length;
  while (num) {
    let i = Math.floor(Math.random() * num);
    num--;
    let str = returnCards[num];
    returnCards[num] = returnCards[i];
    returnCards[i] = str;
  }
  return returnCards;
};

const generateBingoCard = () => {
  const returnBingoCards = [];
  let tmpArray = [];
  while (extractedCards.length > 0) {
    tmpArray.push(extractedCards.shift());
    if (tmpArray.length === 5) {
      returnBingoCards.push(tmpArray);
      tmpArray = [];
    }
  }
  return returnBingoCards;
};

const numbers = [...Array(75)].map((_, i) => i + 1);
const shuffledCards = shuffleCards(numbers);
const extractedCards = shuffledCards.slice(0, 25);
const bingoCards = generateBingoCard();

// --------- 上記は初期化 ---------

const reShuffledCards = shuffleCards(numbers);

// 一致したら数値を0に、不一致なら何もしないでそれぞれの結果をboolで返す
const handleNumberIfExists = (number) => {
  for (const row of bingoCards) {
    const idx = row.indexOf(number);
    if (idx !== -1) {
      row.splice(idx, 1, "0");
      return true;
    }
  }
  return false;
};

// 全て"0"かを確認
const isAllZero = (currentValue) => currentValue === "0";

// 縦のBINGO判定
const isVerticalBingo = (bingoCards) => {};

// 横のBINGO判定
const isHorizontalBingo = (bingoCards) => {
  console.log("isHorizontalBingo 発火");
  for (const row of bingoCards) {
    if (row.every(isAllZero)) return true;
  }
};

// 斜めのBINGO判定
const isDiagonalBingo = (bingoCards) => {};

let count = 1;
const interval = setInterval(function () {
  const number = reShuffledCards.shift();
  const numberExisted = handleNumberIfExists(number);

  //	--- 出力処理 ---
  console.log(`${count}個目: ${number}`);
  console.log(`${numberExisted ? "あった!!" : "なかった..."}`);
  bingoCards.forEach((dimensional) => console.log(dimensional.join("\t")));
  console.log("-----------------------------------");
  //	--- 出力処理 ---
  count++;
  if (isHorizontalBingo(bingoCards)) {
    //   if (isVerticalBingo(bingoCards) && isHorizontalBingo(bingoCards) && isDiagonalBingo(bingoCards)) {
    console.log("***** BINGO *****");
    clearInterval(interval);
  }
}, 1000);
