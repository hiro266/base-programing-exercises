// No. 85 石取りゲーム ⭐️⭐️
// 最初に石の個数を入力し（10個以上とする）、二人のプレイヤーが交互に1〜3個ずつ石を取り、最後の1個を取った方が負けとなるゲームがある。
// このゲームプログラムを作成せよ。具体的には実行例を参照のこと。

const { rl, isNotInteger } = require("../utils/utils");

const MIN_STONES = 10;
const MIN_TAKE = 1;
const MAX_TAKE = 3;

rl.setPrompt("石の数を入力して下さい(10以上): ");
rl.prompt();

let initialStones; // ユーザーが入力した初期石数
let stonesLeft; // 現在の残り石数
let currentBattle = 0; // プレイヤーが実際に石を取った回数

// 現在のプレイヤーに合わせたプロンプトを設定する関数
const promptPlayerTurn = (playerNumber) => {
  rl.setPrompt(
    `プレイヤー${playerNumber}の番です\n何個取る（${MIN_TAKE}〜${MAX_TAKE}個）? `
  );
};

const processInput = (input) => {
  const num = Number(input.trim());

  // 整数チェック＆正の数であることのチェック
  if (isNotInteger(num) || num <= 0) {
    console.log("正の整数を入力して下さい");
    rl.prompt();
    return;
  }

  // 初回入力：石の総数
  if (initialStones === undefined) {
    if (num < MIN_STONES) {
      console.log("10以上の自然数を入力して下さい");
      rl.prompt();
      return;
    }
    initialStones = num;
    stonesLeft = num;
    console.log(`石の数: ${stonesLeft}`);
    // 最初はプレイヤー1のターン
    promptPlayerTurn(1);
    rl.prompt();
    return;
  }

  // ここからは各プレイヤーの手番の入力
  // 入力値が取れる個数(1〜3)であるかをチェック
  if (num < MIN_TAKE || num > MAX_TAKE) {
    console.log("1〜3個の中で取って下さい");
    rl.prompt();
    return;
  }

  // 現在のプレイヤー（プレイヤー1：偶数、プレイヤー2：奇数）
  const currentPlayer = currentBattle % 2 === 0 ? 1 : 2;

  // 指定個数を取り、残りの石数を更新
  stonesLeft -= num;

  // 反則負け：残りが0以下の場合
  if (stonesLeft <= 0) {
    console.log(`石の数: ${stonesLeft}\nプレイヤー${currentPlayer}の反則負け`);
    rl.close();
    return;
  }

  // 終了条件：残りが1個なら、相手が次で必ず最後の石を取るので現在のプレイヤーの勝ち
  if (stonesLeft === 1) {
    console.log(`石の数: ${stonesLeft}\nプレイヤー${currentPlayer}の勝ち`);
    rl.close();
    return;
  }

  // ゲーム継続：戦い回数を進め、結果と次のプレイヤーのプロンプトを出力
  currentBattle++;
  console.log(`石の数: ${stonesLeft}`);
  const nextPlayer = currentPlayer === 1 ? 2 : 1;
  promptPlayerTurn(nextPlayer);
  rl.prompt();
};

rl.on("line", processInput);
