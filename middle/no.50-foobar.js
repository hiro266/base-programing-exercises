// No. 50 foobar
// 1から100までの値を繰り返しで表示するが、
// 3の倍数の時はfoo、5の倍数の時はbarと数字の代わりに表示するプログラムを作成せよ。
// なお、3と5の両方の倍数の時はfoobarと表示される。

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
