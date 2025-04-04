// chunk 配列を指定したサイズの小さな配列（チャンク）に分割するための便利な関数
// _.chunk(array, [size=1])
//   - array: 分割したい元の配列
//   - size: 各チャンクの最大の要素数。デフォルトは1

const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5, 6, 7];
const chunks = _.chunk(numbers, 3);
console.log(chunks);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
