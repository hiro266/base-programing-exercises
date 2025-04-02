// Object.fromEntries() は、配列の各要素を「キーと値のペア」に変換して、オブジェクトとして返す
// Object.entries()の逆の処理を行う

// ステップ 1: 配列がある
const entries = [
  ["id", "abc123"],
  ["policyNumber", true],
  ["insuranceType", false],
];

// ステップ 2: Object.fromEntries() を呼び出す
const setting = Object.fromEntries(entries);

// ステップ 3: 戻り値の構造を確認する
console.log(setting);
// {
//   id: "abc123",
//   policyNumber: true,
//   insuranceType: false,
// }

// ステップ 4: 利用方法の例
// - キーと値を一つずつ取り出して処理
for (const [key, value] of Object.entries(setting)) {
  console.log(`キー: ${key}, 値: ${value}`);
}

// ステップ 5: filter や map での利用
// 1.Object.entries(setting) で [key, value] のペアの配列を作る
// 2. filter() で、値 (value) の型が "boolean" のペアだけを残す
// 3. map() で、キー (key) だけを抽出する
const booleanKeys = Object.entries(setting)
  .filter(([_, value]) => typeof value === "boolean")
  .map(([key]) => key);
console.log(booleanKeys);
// ["policyNumber", "insuranceType"]
