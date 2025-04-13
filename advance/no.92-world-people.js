// No. 92 世界の人
// 1から50まで順に表示していくが、3の倍数と3のつく数字のときは頭に"aho"と付けて表示するプログラムを作成せよ。

const hasMultipleOfThreeOrThreeWithNumber = (number) => {
  const str = String(number);
  return number % 3 === 0 || str.includes("3");
};

for (let i = 1; i <= 50; i++) {
  hasMultipleOfThreeOrThreeWithNumber(i)
    ? console.log(`aho ${i}`)
    : console.log(i);
}
