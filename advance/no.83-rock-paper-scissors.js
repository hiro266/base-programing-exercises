// No. 83 じゃんけん5回勝負
// 次の仕様のじゃんけんプログラムを作成せよ。
// ・人間は、グー、チョキ、パーをそれぞれ0、1、2の数字で入力する。
// ・コンピュータは乱数を使って出す手を選ぶ。乱数の使い方は演習資料の高度なテクニック集を見よ。
// ・5回勝負として、人間とコンピュータの勝った回数を数え、勝敗がつくたびに1回ずつ表示する。あいこは決着がつくまで再勝負。
//   途中でどちらかが3勝しても、5回最後まで勝負を続ける。
// ・指定された範囲以外の値を入力したら負けにする

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("あなたの手を選んでください(グー0、チョキ1、パー2):");
rl.prompt();

let currentBattle = 0;
const LOWEST_BATTLE_TIMES = 5;
let myVictoryNumber = 0;
let opponentVictoryNumber = 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const processInput = (input) => {
  const myOutput = Number(input.trim());

  if (isNotInteger(myOutput)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  if (myOutput < 0 || myOutput > 2) {
    console.log("そんな手はありません。あなたの負け");
    console.log(`あなた${myVictoryNumber}勝、わたし${opponentVictoryNumber}勝`);
    rl.close();
    return;
  }

  // 相手の手
  const opponentOutput = getRandomInt(3);

  switch (myOutput) {
    case 0: // グー
      switch (opponentOutput) {
        case 0:
          console.log("コンピューターはグー\nあいこ");
          rl.prompt();
          break;
        case 1:
          console.log("コンピューターはチョキ\nあなたの勝ち");
          myVictoryNumber++;
          currentBattle++;
          rl.prompt();
          break;
        case 2:
          console.log("コンピューターはパー\nわたしの勝ち");
          opponentVictoryNumber++;
          currentBattle++;
          rl.prompt();
          break;
      }
      break;
    case 1: // チョキ
      switch (opponentOutput) {
        case 0:
          console.log("コンピューターはグー\nわたしの勝ち");
          opponentVictoryNumber++;
          currentBattle++;
          rl.prompt();
          break;
        case 1:
          console.log("コンピューターはチョキ\nあいこ");
          rl.prompt();
          break;
        case 2:
          console.log("コンピューターはパー\nあなたの勝ち");
          myVictoryNumber++;
          currentBattle++;
          rl.prompt();
          break;
      }
      break;
    case 2: // パー
      switch (opponentOutput) {
        case 0:
          console.log("コンピューターはグー\nあなたの勝ち");
          myVictoryNumber++;
          currentBattle++;
          rl.prompt();
          break;
        case 1:
          console.log("コンピューターはチョキ\nわたしの勝ち");
          opponentVictoryNumber++;
          currentBattle++;
          rl.prompt();
          break;
        case 2:
          console.log("コンピューターはパー\nあいこ");
          rl.prompt();
          break;
      }
      break;
  }

  const isValidRule = (
    currentBattle,
    myVictoryNumber,
    opponentVictoryNumber
  ) => {
    return (
      currentBattle >= LOWEST_BATTLE_TIMES &&
      (myVictoryNumber >= 3 || opponentVictoryNumber >= 3)
    );
  };

  if (isValidRule(currentBattle, myVictoryNumber, opponentVictoryNumber)) {
    console.log(
      `\nあなた${myVictoryNumber}勝、わたし${opponentVictoryNumber}勝`
    );
    console.log(
      myVictoryNumber > opponentVictoryNumber
        ? "あなたの総合勝利です。参りました。"
        : "わたしの総合勝利です。参ったか。"
    );
    rl.close();
    return;
  } else {
    rl.prompt();
  }
};

rl.on("line", processInput);
