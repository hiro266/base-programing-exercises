// 整数値を2つ入力させ、それらの値の和、差、積、商と余りを求めるプログラムを作成せよ。なお、差と商は1つ目の値から2つ目の値を引いた、あるいは割った結果とする。余りは無い場合も0と表示するのでよい。
// なお、2つ目の入力値に0を入力すると実行時エラー(Floating point exception)でプログラムが終了する（0で割れないので）。

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({
  input,
  output,
  prompt: "入力して下さい> ",
});

rl.prompt();

let inputCount = 0;
const maxInputs = 2;

let inputList = [];

rl.on("line", (input) => {
  console.log(`受け取った入力 [${inputCount + 1}回目]: ${input}`);
  inputList.push(input);
  inputCount++;

  if (inputCount >= maxInputs) {
    const result = calc(inputList);
    console.log(result);
    rl.close();
  } else {
    rl.prompt(); // 次の入力へ
  }
});

function calc(inputList) {
  const [firstInput, secondInput] = inputList;
  const convertedNumberFirstInput = Number(firstInput);
  const convertedNumberSecondInput = Number(secondInput);

  if (convertedNumberSecondInput === 0) {
    throw new Error("ZeroDivisionError");
  }

  const sum = convertedNumberFirstInput + convertedNumberSecondInput;
  const subtraction = convertedNumberFirstInput - convertedNumberSecondInput;
  const multiplication = convertedNumberFirstInput * convertedNumberSecondInput;
  const division = convertedNumberFirstInput / convertedNumberSecondInput;
  const remainder = convertedNumberFirstInput % convertedNumberSecondInput;

  return `和:${sum}\n差: ${subtraction}\n積: ${multiplication}\n商: ${division}, 余り: ${remainder}`;
}
