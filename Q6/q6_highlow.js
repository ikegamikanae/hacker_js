'use strict';

// 課題６：High & Low
// ランダムに用意された0-100までの数字を当てる
// 数字を入力すれば正解が上か下か教えてくれる。
// 当たるまで続ける。当たったら終わり、入力回数が出力される。

function generateRandomNumber(first, last) {
    return first + Math.floor((last - first + 1) * Math.random());
}

let counter = 0;

function setMessageInput(str) {
    let userInput = window.prompt(str, "答えを入力してね");
    userInput = parseInt(userInput);
    counter++;
    return userInput;
}

// 答えを決める
const answer = generateRandomNumber(0, 100);
let outputMessage = "0-100の数字を入力してね。";
let userAnswer;
while (true) {
    userAnswer = setMessageInput(outputMessage);
    if (answer < userAnswer) {
        outputMessage = "もっと下だよ";
    } else if (answer === userAnswer) {
        outputMessage = "正解！";
        break;
    } else {
        outputMessage = "もっと上だよ";
    }
}

window.prompt(outputMessage + `・・・${counter}回目で当てました！`);