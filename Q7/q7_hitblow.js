'use strict';
// 課題７：hit & blow
//  ランダムに用意された4桁の数字を当てる
//  正解の数字は0-9、同じ数字は重複しない4桁
//  入力された4桁の数字の回答と正解を比べて、
//  ・数字と桁位置の両方が同じ：Hit
//  ・数字だけが同じで桁位置が異なる：Blow


let counter = 0;
const ans = makeDigitNum(4);
console.log(ans);
// const ans = [0, 1, 2, 3];
let user;
let dispMsg = "4桁の数字を当ててみて。";
do {
    user = setMsgNum(dispMsg);
    // 答えとユーザの回答を比較
    const result = chkAns(ans, user);
    dispMsg = `${result.hit}hit, ${result.blow}blow`;
    if (result.hit === 4) {
        // 完全に正解→ループを抜ける
        break;
    }
} while (!(ans === user));

window.prompt(dispMsg + `・・・正解！${counter}回目で当てました！`);

/**
 * ランダムな値を返す
 */
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

/**
 * n個の要素を持つ配列（値はランダムな１桁の整数）を作成
 */
function makeDigitNum(n) {
    const resultArr = [];
    const length = 10;
    const start = 0;
    const num = Array.apply(null, new Array(10)).map(function (v, i) {
        return start + i;
    });
    for (let j = length - 1; j >= (length - n); j--) {
        // とりあえずの配列作成
        const idx = rand(0, j);
        const getNum = num.splice(idx, 1);
        resultArr.push(getNum[0]);
        console.log("getNum:" + getNum);
    }
    console.log("makeDigitNum:");
    console.log(resultArr);
    return resultArr;

}


/**
 * 回答を確認
 */
function chkAns(ans, user) {
    const chkResult = {};
    chkResult.hit = 0;
    chkResult.blow = 0;
    // 配列のメソッド：indexOfを使って比較
    for (const key in ans) {
        const val = ans[key];
        const index = user.indexOf(val);
        console.log("key:" + key);
        console.log("index:" + index);
        if (Number(key) === index) {
            // hit
            chkResult.hit += 1;
            console.log("hit!");
        } else if (!(index === -1)) {
            // blow
            chkResult.blow += 1;
        }
    }

    return chkResult;
}
// メッセージ出力＋回答受け取り
function setMsgNum(str) {
    const num = window.prompt(str, "答えを入力してね");
    // num = parseInt(num);
    // 受け取った数値を配列にする
    let inArr = num.split("");
    inArr = inArr.map(function (inArr) {
        return Number(inArr);
    });
    if (!(inArr.length === 4)) {
        window.prompt("4桁の数字を入力してください。");
        console.error("入力エラー");
        return;
    }
    console.log(inArr);

    counter++;
    return inArr;
}