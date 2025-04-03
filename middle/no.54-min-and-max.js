const readlineSync = require("readline-sync");

const dataOptions = ["smallData", "middleData", "largeData"];
const index = readlineSync.keyInSelect(dataOptions, "ファイルを指定して下さい");

const dataMapping = {
  smallData: [268, 682, 676, 492, 723, 858, 962, 804, 556, 128],
  middleData: [
    110, 176, 879, 499, 362, 843, 226, 484, 506, 20, 122, 435, 959, 970, 558,
    28, 154, 893, 197, 130, 596, 30, 949, 957, 622, 967, 439, 224, 61, 152, 988,
    868, 291, 559, 349, 219, 955, 931, 169, 592, 981, 514, 226, 482, 511, 277,
    543, 902, 129, 344,
  ],

  largeData: [
    952, 23, 82, 506, 5, 828, 490, 164, 456, 392, 468, 484, 676, 251, 480, 105,
    528, 267, 943, 155, 473, 456, 615, 664, 100, 624, 386, 951, 16, 574, 335,
    589, 716, 161, 621, 723, 241, 590, 761, 577, 136, 664, 996, 910, 833, 100,
    323, 566, 646, 545, 854, 264, 162, 663, 730, 509, 639, 505, 830, 843, 296,
    925, 837, 785, 784, 542, 613, 287, 512, 555, 710, 599, 270, 10, 360, 364,
    384, 385, 116, 153, 456, 898, 700, 827, 809, 486, 120, 480, 887, 59, 93,
    773, 900, 925, 346, 361, 289, 323, 369, 780,
  ],
};

if (index === -1) return;

const selectedData = dataMapping[dataOptions[index]];

const getMaxAndMin = (selectedData) => {
  const min = Math.min(...selectedData);
  const max = Math.max(...selectedData);

  return { min, max };
};

const { min, max } = getMaxAndMin(selectedData);
console.log(`最小値 = ${min}, 最大値 = ${max}`);
