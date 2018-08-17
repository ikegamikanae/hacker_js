'use strict';
// 課題５：アルゴリズム
// 配列の「合計」、「平均」、「最大値」、「最小値」、「小さい順」、「大きい順」を出力する

const algoOrg = [20, 31, 42, 13, 5, 38];

// 昇順
function bubbleSortAsc(arr) {
    const sortArr = arr.slice();
    for (let i = 0; i <= sortArr.length - 2; i++) {
        for (let j = i + 1; j <= sortArr.length - 1; j++) {
            if (sortArr[i] > sortArr[j]) {
                const tmp = sortArr[i];
                sortArr[i] = sortArr[j];
                sortArr[j] = tmp;
            }
        }
    }
    return sortArr;
}

// 降順
function bubbleSortDesc(arr) {
    const sortArr = arr.slice();
    for (let i = 0; i <= sortArr.length - 2; i++) {
        for (let j = i + 1; j <= sortArr.length - 1; j++) {
            if (sortArr[i] < sortArr[j]) {
                const tmp = sortArr[i];
                sortArr[i] = sortArr[j];
                sortArr[j] = tmp;
            }
        }
    }
    return sortArr;
}

// 合計値
function sum(arr) {
    let sum = 0;
    for (const a of arr) {
        sum = sum + a;
    }
    return sum;
}

// クイックソート:昇順
function quikSortAsc(arr) {
    const sortArr = arr.slice();
    let left = [];
    let right = [];
    const pivot = sortArr[0];

    // 1以下ならそのまま返す
    if (sortArr.length - 1 < 1) {
        return sortArr;
    } else {
        for (let i = 1; i < sortArr.length; i++) {
            if (sortArr[i] <= pivot) {
                left.push(sortArr[i]);
            } else {
                right.push(sortArr[i]);
            }
        }
    }
    left = quikSortAsc(left);
    right = quikSortAsc(right);
    return left.concat(pivot, right);
}

// クイックソート:降順
function quikSortDesc(arr) {
    const sortArr = arr.slice();
    let left = [];
    let right = [];
    const pivot = sortArr[0];

    // 1以下ならそのまま返す
    if (sortArr.length - 1 < 1) {
        return sortArr;
    } else {
        for (let i = 1; i < sortArr.length; i++) {
            if (sortArr[i] >= pivot) {
                left.push(sortArr[i]);
            } else {
                right.push(sortArr[i]);
            }
        }
    }
    left = quikSortDesc(left);
    right = quikSortDesc(right);
    return left.concat(pivot, right);
}

function getMaxValue(arr) {
    let maxValue = arr[0];
    for (const value of arr) {
        if (maxValue < value) {
            maxValue = value;
        }
    }
    return maxValue;
}

function getMinValue(arr) {
    let minValue = arr[0];
    for (const value of arr) {
        if (minValue > value) {
            minValue = value;
        }
    }
    return minValue;
}

const total = sum(algoOrg);
console.log("合計：" + total);
console.log("平均（小数点以下四捨五入）：" + Math.round(total / algoOrg.length));
console.log("最大値 : " + getMaxValue(algoOrg));
console.log("最小値 : " + getMinValue(algoOrg));
const algo1 = bubbleSortAsc(algoOrg);
console.log("小さい順（バブルソート）：" + algo1);
const algo2 = bubbleSortDesc(algoOrg);
console.log("大きい順（バブルソート）：" + algo2);
const algo4 = quikSortAsc(algoOrg);
console.log("小さい順（クイックソート）：" + algo4);
const algo5 = quikSortDesc(algoOrg);
console.log("大きい順（クイックソート）：" + algo5);
console.log("元々の配列:" + algoOrg);