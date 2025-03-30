// No. 46 入場料
// 神山美術館の入場料金は、一人600円であるが、5人以上のグループなら一人550円、20人以上の団体なら一人500円である。
// 人数を入力し、入場料の合計を計算するプログラムを作成せよ。

const { rl, isNotInteger } = require("../utils/utils");

const PRICE = {
  basic: { count: 4, price: 600 },
  discount: { count: 5, price: 550 },
  specialDiscount: { count: 20, price: 500 },
};

const getAdmissionFee = (count) => {
  if (count <= PRICE["basic"]["count"]) {
    return count * PRICE["basic"]["price"];
  } else if (
    count >= PRICE["discount"]["count"] &&
    count < PRICE["specialDiscount"]["count"]
  ) {
    return count * PRICE["discount"]["price"];
  } else {
    return count * PRICE["specialDiscount"]["price"];
  }
};

rl.setPrompt("人数");
rl.prompt();

const processInput = (input) => {
  const peopleCount = Number(input.trim());

  if (isNotInteger(peopleCount)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  const admissionFee = getAdmissionFee(peopleCount);
  console.log(`料金：${admissionFee}`);

  rl.close();
};

rl.on("line", processInput);
