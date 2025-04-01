// No. 51 お支払い
// 指定した金額を100円玉と10円玉と1円玉だけで、できるだけ少ない枚数で支払いたい。
// 金額を入力するとそれぞれの枚数を計算して表示するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

rl.setPrompt("金額を入力して下さい");
rl.prompt();

let money,
  oneHundredCount = 0,
  tenCount = 0,
  oneCount = 0;

const processInput = (input) => {
  money = Number(input.trim());

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

  while (money >= 100) {
    money = money - 100;
    oneHundredCount = oneHundredCount + 1;
  }

  while (money >= 10) {
    money = money - 10;
    tenCount = tenCount + 1;
  }

  while (money >= 1) {
    money = money - 1;
    oneCount = oneCount + 1;
  }

  console.log(
    `100円玉${oneHundredCount}枚, 10円玉${tenCount}枚, 1円玉${oneCount}枚`
  );

  rl.close();
};

rl.on("line", processInput);
