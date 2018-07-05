/**
 * 課題６：High & Low
 * ランダムに用意された0-100までの数字を当てる
 * 数字を入力すれば正解が上か下か教えてくれる。
 * 当たるまで続ける。当たったら終わり、入力回数が出力される。
 */

/**
 * ランダムな値を返す
 */
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

let counter = 0;
let game;

function setMsgNum(str) {
    let num = window.prompt(str, "答えを入力してね");
    num = parseInt(num);
    counter++;
    return num;
}

// 答えを決める
const answer = rand(0, 100);
let dispMsg;
let userAns;
dispMsg = "0-100の数字を入力してね。";
do {
    game = false;
    userAns = setMsgNum(dispMsg);
    if (answer < userAns) {
        dispMsg = "もっと下だよ";
    } else if (answer === userAns) {
        dispMsg = "正解！";
        game = true;
        break;
    } else {
        dispMsg = "もっと上だよ";
    }
} while (!game);

window.prompt(dispMsg + `・・・${counter}回目で当てました！`);