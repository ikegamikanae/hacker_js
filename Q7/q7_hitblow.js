// 課題７：hit & blow
//  ランダムに用意された4桁の数字を当てる
//  正解の数字は0-9、同じ数字は重複しない4桁
//  入力された4桁の数字の回答と正解を比べて、
//  ・数字と桁位置の両方が同じ：Hit
//  ・数字だけが同じで桁位置が異なる：Blow

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
    const num = [];
    for (let i = 0; i < n; i++) {
        num[i] = rand(0, 9);
    }

    return num;

}
let counter = 0;

/**
 * 回答を確認
 */
function chkAns(ans, user) {
    let chkResult;
    // 配列のメソッド：indexOfを使って比較
    for (const i in ans) {
        const index = user.indexOf(ans[i]);
        if (index > 0) {

        } else {

        }

    }

    return chkResult;
}
// メッセージ出力＋回答受け取り
function setMsgNum(str) {
    const num = window.prompt(str, "答えを入力してね");
    // 受け取った数値を配列にする
    let inArr = num.split("");
    if (!(inArr.length === 4)) {
        window.prompt("4桁の数字を入力してください。");
        console.error("入力エラー");
        return;
    }
    inArr = parseInt(inArr);

    counter++;
    return inArr;
}

const ans = makeDigitNum[3];
let user;
const dispMsg = "4桁の数字を当ててみて。";
do {
    user = setMsgNum(dispMsg);
    // 答えとユーザの回答を比較
    const result = chkAns(ans, user);
    // 完全に正解ではない場合→比較結果を出力

    // 完全に正解→ループを抜ける

} while (!(ans === user));

window.prompt(dispMsg + `・・・${counter}回目で当てました！`);