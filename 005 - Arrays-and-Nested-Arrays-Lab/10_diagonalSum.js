function diagonalSum(input) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < input.length; i++) {
        // console.log(input[i][i]);
        sum1 += input[i][i];
    }

    for (let i = 0; i < input.length; i++) {
        sum2 += input[i][input.length - 1 - i];
    }

    console.log(`${sum1} ${sum2}`);
}

diagonalSum([
    [20, 40],
    [10, 60],
]);
diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
]);
