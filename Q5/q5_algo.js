/**
 * 課題５：アルゴリズム
 */
const algoOrg = [20, 31, 42, 13, 5, 38];

// 昇順
function bubbleAsc(arr) {
    const sortArr = arr;
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
function bubbleDesc(arr) {
    const sortArr = arr;
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
function sumAve(arr) {
    let sum = 0;
    for (const a of arr) {
        sum = sum + a;
    }
    return sum;
}

// クイックソート:昇順
function quikAsc(arr) {
    const sortArr = arr;
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
                // console.log("left: " + left);
            } else {
                right.push(sortArr[i]);
                // console.log("right: " + right);
            }
        }
    }
    left = quikAsc(left);
    right = quikAsc(right);
    return left.concat(pivot, right);
}

// クイックソート:降順
function quikDesc(arr) {
    const sortArr = arr;
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
                // console.log("left: " + left);
            } else {
                right.push(sortArr[i]);
                // console.log("right: " + right);
            }
        }
    }
    left = quikDesc(left);
    right = quikDesc(right);
    return left.concat(pivot, right);
}

const algoBs = algoOrg;

// 合計
const total = sumAve(algoOrg);
console.log("合計：" + total);
console.log("平均（小数点以下四捨五入）：" + Math.round(total / algoOrg.length));
// 最大値
console.log("最大値：" + Math.max.apply(null, algoOrg));
// 最小値
console.log("最小値：" + Math.min.apply(null, algoOrg));
// 小さい順
const algo1 = bubbleAsc(algoBs);
console.log("小さい順（バブルソート）：" + algo1);
// 大きい順
const algo2 = bubbleDesc(algoBs);
console.log("大きい順（バブルソート）：" + algo2);
// クイックソートで並べ替え
const algo4 = quikAsc(algoOrg);
console.log("小さい順（クイックソート）：" + algo4);
const algo5 = quikDesc(algoOrg);
console.log("大きい順（クイックソート）：" + algo5);