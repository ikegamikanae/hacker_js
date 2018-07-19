'use strict'
//
// 課題８：ハッシュ内変換
// hashの中に入った文字列の値"foo"を、"uryyyy!!"に変換する関数を作れ。
// hash自体が入れ子構造、入れ子の末端は、必ず、"text"をキーとした値が入る。
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

// "text"を探して"foo"があれば"uryyyy"に変換
function seekWords(obj) {
  for (const o in obj) {
    if (o === "text") {
      const txt = obj[o].replace(/foo/g, "uryyyy!!");
      obj[o] = txt;
      // return;
    } else {
      seekWords(obj[o]);
    }
  }
}

// console.dir(hash);
seekWords(hash);
console.log(JSON.stringify(hash));