// Object.entries() は、オブジェクトの各プロパティを「キーと値のペア」に変換して、配列として返す
// Object.fromEntries()の逆の処理を行う

// ステップ 1: オブジェクトがある
const setting = {
  id: "abc123",
  policyNumber: true,
  insuranceType: false,
};

// ステップ 2: Object.entries() を呼び出す
const entries = Object.entries(setting);

// ステップ 3: 戻り値の構造を確認する
console.log("ステップ3: ", entries);
// [
//   ["id", "abc123"],
//   ["policyNumber", true],
//   ["insuranceType", false],
// ];

// ステップ 4: 利用方法の例
// - キーと値を一つずつ取り出して処理
for (const [key, value] of Object.entries(setting)) {
  console.log(`ステップ4: キー: ${key}, 値: ${value}`);
}

// [応用] ステップ 5: filter や map での利用
// 1.Object.entries(setting) で [key, value] のペアの配列を作る
// 2. filter() で、値 (value) の型が "boolean" のペアだけを残す
// 3. map() で、キー (key) だけを抽出する
const booleanKeys = Object.entries(setting)
  .filter(([_, value]) => typeof value === "boolean")
  .map(([key]) => key);

console.log("ステップ5: ", booleanKeys);
// ["policyNumber", "insuranceType"]

// [応用]ステップ 6: オブジェクトの各プロパティをfilterしてオブジェクトを返す
const tmp = Object.fromEntries(
  Object.entries(setting).filter(([key, _]) => key.endsWith("Number"))
);
console.log("ステップ6: ", tmp);
// { policyNumber: true }
