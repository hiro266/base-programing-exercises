// No. 83 じゃんけん5回勝負
// 次の仕様のじゃんけんプログラムを作成せよ。
// ・人間は、グー、チョキ、パーをそれぞれ0、1、2の数字で入力する。
// ・コンピュータは乱数を使って出す手を選ぶ。乱数の使い方は演習資料の高度なテクニック集を見よ。
// ・5回勝負として、人間とコンピュータの勝った回数を数え、勝敗がつくたびに1回ずつ表示する。あいこは決着がつくまで再勝負。
//   途中でどちらかが3勝しても、5回最後まで勝負を続ける。
// ・指定された範囲以外の値を入力したら負けにする

// 💡Point💡
// 1. 勝敗判定をロジックで簡素化しswitch-case文を削除

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("あなたの手を選んでください(グー0、チョキ1、パー2): ");
rl.prompt();

let currentBattle = 0;
const LOWEST_BATTLE_TIMES = 5;
let myVictoryNumber = 0;
let opponentVictoryNumber = 0;
const hands = ["グー", "チョキ", "パー"]; // 数値に対応する手

const getRandomInt = (max) => Math.floor(Math.random() * max);

const processInput = (input) => {
  const myOutput = Number(input.trim());

  // 入力の検証
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

  // コンピューターの手を乱数で取得
  const opponentOutput = getRandomInt(3);

  // 勝敗判定： (myOutput - opponentOutput + 3) % 3 を計算
  // 0 → あいこ, 2 → あなたの勝ち, 1 → コンピューターの勝ち
  const result = (myOutput - opponentOutput + 3) % 3;
  let message = "";

  if (result === 0) {
    message = `コンピューターは${hands[opponentOutput]}\nあいこ`;
  } else if (result === 2) {
    message = `コンピューターは${hands[opponentOutput]}\nあなたの勝ち`;
    myVictoryNumber++;
    currentBattle++;
  } else if (result === 1) {
    message = `コンピューターは${hands[opponentOutput]}\nわたしの勝ち`;
    opponentVictoryNumber++;
    currentBattle++;
  }

  console.log(message);

  // 終了条件の判定（5回以上の勝負が終わり、なおかつどちらかが3勝していれば終了）
  if (
    currentBattle >= LOWEST_BATTLE_TIMES &&
    (myVictoryNumber >= 3 || opponentVictoryNumber >= 3)
  ) {
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
  }

  rl.prompt();
};

rl.on("line", processInput);
