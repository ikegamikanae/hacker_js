'use strict';
const userInput = window.prompt('数字を入力してください（正の値）');

try {
    fizzbuzz(userInput);
} catch (e) {
    console.log(e.message);
}

function fizzbuzz(input) {
    input = parseInt(input);
    const isPositiveInteger = (Number.isInteger(input) && (input > 0));

    if (!isPositiveInteger) {
        console.log("0より大きい数値を入力してください");
        return;
    }
    for (let i = 1; i <= input; i++) {
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
