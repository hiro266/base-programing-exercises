const { rl, isNotInteger } = require("../utils/utils");

rl.prompt();

const processInput = (input) => {
  const number = Number(input.trim());

  if (isNotInteger(number)) {
    console.log("整数を入力して下さい");
    rl.prompt();
    return;
  }

  rl.close();
};

rl.on("line", processInput);
