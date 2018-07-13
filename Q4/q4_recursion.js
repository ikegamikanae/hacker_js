"use strict";
/**
 * 課題４：再帰
 * 入力された値までの数字を全部足した結果を出力。
 * 再帰処理を使ってプログラムを作成 -> 再帰処理:自分自身を呼び出す関数
 */

function sumNum(n) {
    if (n > 0) {
        return n + sumNum(n - 1);
    } else {
        return 0;
    }
}

let num = window.prompt("全部足すから数字を入力してね。");
num = parseInt(num);
console.log("足し算の結果：" + sumNum(num));