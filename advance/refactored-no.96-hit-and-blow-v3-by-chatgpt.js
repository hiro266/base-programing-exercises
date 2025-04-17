// No. 96 hit and blow その3 ☆☆☆☆☆
// No.95に続いて、正解と一致するまで繰り返して予想させるようにしてゲームを完成させよう。

const { rl, isNotInteger } = require("../utils/utils");

// 正解数字生成：0～9999 の数字を4桁（頭に0を付ける）の文字列として返す
const getCorrectNumber = () => {
  let num = Math.floor(Math.random() * 10000);
  return String(num).padStart(4, "0");
};

const correctNumber = getCorrectNumber();
console.log("正解:", correctNumber); // デバッグ用

// 正解と入力の各桁を配列に分解
const answerDigits = correctNumber.split("");
let answersCount = 1;

rl.setPrompt(`${answersCount}回目\n4桁の数字を入力: `);
rl.prompt();

// ヒットとブローを同時に計算する関数
const calcHitAndBlow = (guessDigits, answerDigits) => {
  let hit = 0;
  // 各数字の出現回数をカウントするオブジェクトを作成
  const countGuess = {};
  const countAnswer = {};

  // 位置ごとにヒットを判定
  for (let i = 0; i < guessDigits.length; i++) {
    if (guessDigits[i] === answerDigits[i]) {
      hit++;
    }
    countGuess[guessDigits[i]] = (countGuess[guessDigits[i]] || 0) + 1;
    countAnswer[answerDigits[i]] = (countAnswer[answerDigits[i]] || 0) + 1;
  }
  // 全体の各数字ごとの最小出現数を合計（これがhitとblowの合計）
  let totalMatch = 0;
  for (const digit in countGuess) {
    totalMatch += Math.min(countGuess[digit], countAnswer[digit] || 0);
  }
  const blow = totalMatch - hit;
  return { hit, blow };
};

const processInput = (input) => {
  const trimmedInput = input.trim();

  // 入力の長さチェック（4桁固定とする）
  if (trimmedInput.length !== 4 || isNotInteger(trimmedInput)) {
    console.log("4桁の整数を入力して下さい");
    rl.prompt();
    return;
  }

  // ヒットとブローの計算
  const guessDigits = trimmedInput.split("");
  if (trimmedInput === correctNumber) {
    console.log("4 hit\nクリア!!");
    rl.close();
    return;
  }

  const { hit, blow } = calcHitAndBlow(guessDigits, answerDigits);
  console.log(`${hit} hit, ${blow} blow`);

  answersCount++;
  rl.setPrompt(`${answersCount}回目\n4桁の数字を入力: `);
  rl.prompt();
};

rl.on("line", processInput);
