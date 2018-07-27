'use strict';
const inputNum = window.prompt('数字を入力してください（正の値）');

try {
    fizzbuzz(inputNum);
} catch (e) {
    console.log(e.message);
}

function fizzbuzz(num) {
    num = parseInt(num);
    const isPositiveInteger = (Number.isInteger(num) && (num > 0));

    if (!isPositiveInteger) {
        console.log("0より大きい数値を入力してください");
        return;
    }
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
}