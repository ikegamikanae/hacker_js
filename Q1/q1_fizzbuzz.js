"use strict";
let num = window.prompt('数字を入力してください（正の値）');

try {
    // 整数値に変換
    num = parseInt(num);
    // 数値かどうか
    const flag = (Number.isInteger(num) && (num > 0));

    if (flag) {
        for (let i = 1; i <= num; i++) {
            let x = "";
            if (i % 3 === 0) {
                x = "Fizz";
            }

            if (i % 5 === 0) {
                x += "Buzz"
            }
            if (x === "") {
                x = i;
            }
            console.log(x);
        }
    } else {
        console.log("0より大きい数値を入力してください");
    }
} catch (e) {
    console.log(e.message);
}