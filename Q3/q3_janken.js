/**
 * 課題３：コンピューターとじゃんけんするプログラムを作ろう
 * 勝負がつくまでやる
 */

function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

let comp;
let user;
let game;
const janken = ["ぐー", "ちょき", "ぱー"];

do {
    game = true;
    comp = rand(0, 2);
    // ユーザー
    user = window.prompt("じゃんけん・・・(0:ぐー / 1:ちょき / 2:ぱー )");
    user = parseInt(user);
    if (user >= 0 && user <= 2) {
        let name;
        console.log("コンピューター：" + janken[comp]);
        console.log("あなた：" + janken[user]);
        switch (user - comp) {
            case -2:
                name = "コンピューター";
                break;
            case -1:
                name = "あなた";
                break;
            case 0:
                name = "あいこでしょ！";
                game = false;
                break;
            case 1:
                name = "コンピューター";
                break;
            case 2:
                name = "あなた";
                break;
        }

        if (game) {
            console.log(`${name}の勝ち！`)
        } else {
            console.log(name);
        }
    } else {
        console.log("0,1,2の数字をいれてね。");
        game = false;
    }

} while (!game);