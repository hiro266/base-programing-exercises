// 引数に与えられた内容と同じ内容を持つ最初の配列要素のインデックスを返します。存在しない場合は -1 を返します。

// 配列の要素を検索するメソッド
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const index = fruits.indexOf("cherry");
console.log(index); // 2

// 存在しない場合は -1 を返す
const notFoundIndex = fruits.indexOf("fig");
console.log(notFoundIndex); // -1

// 応用: 引数にオブジェクト
const fruitsWithObjects = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "cherry", color: "red" },
];

const result = fruitsWithObjects.indexOf({ name: "banana", color: "yellow" });
console.log(result); // -1
// これは、オブジェクトの参照が異なるため、同じ内容のオブジェクトでも異なるものとして扱われるためです。

// ただし、参照が同じ場合は、同じ内容のオブジェクトとして扱われ該当するインデックスを返します。
// 参照が同じ = 同じメモリを参照

for (const fruit of fruitsWithObjects) {
  if (fruitsWithObjects.indexOf(fruit) === 1) {
    fruitsWithObjects.splice(fruitsWithObjects.indexOf(fruit), 1);
    console.log(fruitsWithObjects);
    // 該当データの要素を削除
    // [ { name: 'apple', color: 'red' }, { name: 'cherry', color: 'red' } ]
  }
}
