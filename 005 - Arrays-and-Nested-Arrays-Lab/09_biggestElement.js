function biggestElement(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        input[i].sort((a, b) => a - b);
        result.push(input[i][input[i].length - 1]);
    }

    result.sort((a, b) => a - b);

    return result[result.length - 1];
    // console.log(result[result.length - 1]);
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145],
]);
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
]);
