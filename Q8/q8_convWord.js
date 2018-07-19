'use strict'
//
// 課題８：ハッシュ内変換
// hashの中に入った文字列の値"foo"を、"uryyyy!!"に変換する関数を作れ。
// ただし、hashの中には、hash自体が入れ子構造になっているとする。
// 条件として、入れ子の末端は、必ず、"text"をキーとした値が入るようになっている。
const hash = {
  main: {
    first: {
      text: 'foobar',
    },
    second: {
      text: 'fizzbuzz',
      child: {
        text: 'foobar',
      },
    },
  },
  sub: {
    first: {
      text: 'fizzbuzz',
      child: {
        text: 'foobar',
      },
    },
    second: {
      third: {
        text: 'barfoo',
        child: {
          text: 'foobar',
        },
      },
      forth: {
        child: {
          text: 'jit_foo_foo',
        },
      },
    },
  },
  text: 'foofava',
}

// "text"を探す　→　"foo"があれば"uryyyy"に変換
// 再帰処理？
