// No. 45 タクシー料金
// 初乗り料金が1700mまで610円、それ以降は313mごとに80円のタクシーがある。
// このタクシーに乗った距離をm単位で入力し、料金を計算するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

const BASIC_CHARGE = { distance: 1700, price: 610 };
const ADDITIONAL_CHARGE = { distance: 313, price: 80 };

rl.setPrompt("距離");
rl.prompt();

const getPrice = (number) => {
  const { distance: basicDistance, price: basicPrice } = BASIC_CHARGE;
  const { distance: addDistance, price: addPrice } = ADDITIONAL_CHARGE;

  if (number <= basicDistance) {
    return basicPrice;
  } else {
    const totalPrice =
      basicPrice + Math.ceil((number - basicDistance) / addDistance) * addPrice;
    return totalPrice;
  }
};

const processInput = (input) => {
  const distance = Number(input.trim());

  if (isNotInteger(distance)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  const price = getPrice(distance);
  console.log(`金額 ${price}`);

  rl.close();
};

rl.on("line", processInput);
