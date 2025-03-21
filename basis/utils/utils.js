// readline 初期化
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({
  input,
  output,
  prompt: "入力して下さい> ",
});

// 入力値が整数以外かを検証
const isInteger = (input) => {
  return Number.isNaN(input) || !Number.isInteger(input);
};

module.exports = { rl, isInteger };
