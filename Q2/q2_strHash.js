'use strict';
/**
 * 課題２：文字列に含まれる単語の数を、単語ごとに数える
 * 例："no js no life" -> 出力：{no:2, js:1, life:1}
 * ユーザーからの入力を受け付けて出力するようなプログラムを書く
 */

let inStr = window.prompt("単語数を数えます。英文を入力してください");
// 全角スペースを半角に変換
inStr = inStr.replace(/\p{blank}/, " ");
const inWord = inStr.split(" ");

const countWord = {};
for (const word of inWord) {
    if (countWord[word]) {
        countWord[word] += 1;
    } else {
        countWord[word] = 1;
    }
}
// 単語の数を出力
const countWordText = Object.keys(countWord).map(key => `${key}: ${countWord[key]}`).join(', ');
console.log(`文章 "${inStr}" に出てくる単語とその数 \n {${countWordText}}`);