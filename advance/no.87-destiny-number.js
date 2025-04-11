// No. 87 運命数 ☆☆
// カバラ数秘術という簡単な占いがある。
// 誕生日を年（西暦）・月・日で表し、それぞれの数字を足し合わせる。
// 合計した数字が10以上であれば、再びすべての桁の数字を足し合わせる。
// これを1桁の数字になるまで繰り返し、得られた数字を運命数とする。
// ただし、計算途中で11、22、33のようにゾロ目の数字になった場合は、それを運命数とする。
// 例：2015年12月23日→2+0+1+5+1+2+2+3=16→1+6=7
// 運命数を計算するプログラムを作成せよ。

const { rl } = require("../utils/utils");

rl.setPrompt("誕生日をYYYYMMDDの形式で入力してください");
rl.prompt();

const sumDigits = (birthday) => {
  return String(birthday)
    .split("")
    .map((value) => Number(value))
    .reduce((acc, current) => {
      return acc + current;
    });
};

const isRepdigit = (sumCopy) => {
  const str = String(sumCopy);
  return str.split("").every((s) => s === str[0]);
};

const processInput = (birthday) => {
  if (birthday.length !== 8) {
    console.log("YYYYMMDD形式で入力して下さい");
    rl.prompt();
    return;
  }
  const sum = sumDigits(birthday);
  let sumCopy = sum;

  while (sumCopy >= 10 && !isRepdigit(sumCopy)) {
    sumCopy = sumDigits(sumCopy);
  }

  console.log(sumCopy);
  rl.close();
};

rl.on("line", processInput);
