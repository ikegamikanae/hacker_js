'use strict';
// 課題３：コンピューターとじゃんけんするプログラムを作ろう
// 勝負がつくまでやる

function generateRandomNumber(first, last) {
    return first + Math.floor((last - first + 1) * Math.random());
}

let computer;
let user;
let winner = "";
const janken = ["ぐー", "ちょき", "ぱー"];

while (!winner) {
    computer = generateRandomNumber(0, 2);
    // ユーザー
    user = window.prompt("じゃんけん・・・(0:ぐー / 1:ちょき / 2:ぱー )");
    user = parseInt(user);
    if (user >= 0 && user <= 2) {
        console.log("コンピューター：" + janken[computer]);
        console.log("あなた：" + janken[user]);
        switch (user - computer) {
            case -2:
            case 1:
                winner = "コンピューター";
                break;
            case -1:
            case 2:
                winner = "あなた";
                break;
            case 0:
                break;
        }

        if (winner) {
            console.log(`${winner}の勝ち！`)
        } else {
            console.log("あいこでしょ！");
        }
    } else {
        console.log("0,1,2の数字をいれてね。");
    }
};