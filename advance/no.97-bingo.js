// No. 97 ビンゴその1 ☆☆☆
// ビンゴゲームのカードを作るプログラムを作ろう。
// 縦5マス、横5マス、計25マスのそれぞれに1〜75までの数字をランダムに配置する。同じ番号は2回以上配置しない。
// 作成したカードは、実行例のようにタブ(\t)を開けて表示すること。
// ※一般的なビンゴカードは、縦の5列それぞれは1〜15、16〜30、31〜45、46〜60、61〜75のそれぞれの数字のうち5つずつを配置し、
// 中央のマスはフリーとしているが、ここでは簡単のためにこのようにしている。余裕があれば一般的なカードを作ってるとよいだろう。

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

const initNumbers = [...Array(75)].map((_, i) => i + 1);
const shuffledCards = shuffleCards(initNumbers);
const extractedCards = shuffledCards.slice(0, 25);
const bingoCards = generateBingoCard();

bingoCards.forEach((dimensional) => console.log(dimensional.join("\t")));
