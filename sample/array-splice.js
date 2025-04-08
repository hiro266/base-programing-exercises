// 配列から配列の一部を削除し、新しい配列を返す(破壊的メソッド)

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(0, 1); // 先頭の要素を削除
console.log(fruits); // ['banana', 'cherry', 'date', 'elderberry']

fruits.splice(1, 2); // 2番目から2つの要素を削除
console.log(fruits); // ['banana','elderberry']

fruits.splice(-1, 1); // 最後の要素を削除
console.log(fruits); // ['banana']
