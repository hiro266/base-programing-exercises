// No. 95 hit and blow その2 ☆☆☆☆☆
// No.94に続いて、ブローの数も数えて表示するプログラムを作成せよ。（No.94のプログラムをコピーして、それに追加するとよい。）

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

let primitiveInput, primitiveCollectNumber;

// ヒットの数を数える
const getHitCount = () => {
  const arrayInput = [...primitiveInput];

  const hitNums = arrayInput.filter((num, index) => {
    if (num === primitiveCollectNumber[index]) {
      return num;
    }
  });

  const unHitNums = arrayInput.filter((num, index) => {
    if (num !== primitiveCollectNumber[index]) {
      return num;
    }
  });

  primitiveInput = unHitNums;
  return hitNums.length;
};

const getBlowCount = () => {
  const arrayCollectNumber = [...primitiveCollectNumber];

  const blowNums = primitiveInput
    .map((num) => {
      if (arrayCollectNumber.indexOf(num) !== -1) {
        arrayCollectNumber.splice(arrayCollectNumber.indexOf(num), 1);
        return arrayCollectNumber.includes(num);
      }
    })
    .filter((num) => num !== undefined);

  return blowNums.length;
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

  primitiveInput = input.split("");
  primitiveCollectNumber = collectNumber.split("");

  const hitCount = getHitCount();
  const blowCount = getBlowCount();
  console.log(`${hitCount} hit, ${blowCount} blow`);
  rl.close();
};

rl.on("line", processInput);
