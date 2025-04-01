// No. 51 お支払い
// 指定した金額を100円玉と10円玉と1円玉だけで、できるだけ少ない枚数で支払いたい。
// 金額を入力するとそれぞれの枚数を計算して表示するプログラムを作成せよ。

// 💡Point💡
// 1. 算術演算による枚数計算
//   - whileで逐次減産は金額が大きい場合に効率が悪くなる
//   - 整数除算と剰余を使う計算量が一定でコードもシンプルに

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("金額を入力して下さい");
rl.prompt();

const processInput = (input) => {
  let money = Number(input.trim());

  if (isNotInteger(money)) {
    console.log("整数で入力して下さい");
    rl.prompt();
    return;
  }

  if (money < 0) {
    console.log("プラスの金額を入力して下さい");
    rl.prompt();
    return;
  }

  const oneHundredCount = Math.floor(money / 100);
  money = money % 100;
  const tenCount = Math.floor(money / 10);
  money = money % 10;
  const oneCount = money;

  console.log(
    `100円玉${oneHundredCount}枚, 10円玉${tenCount}枚, 1円玉${oneCount}枚`
  );

  rl.close();
};

rl.on("line", processInput);
