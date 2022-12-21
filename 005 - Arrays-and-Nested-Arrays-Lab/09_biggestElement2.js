function biggestElement2(input) {
    let result = [];

    input.forEach((element) => {
        element.sort((a, b) => a - b);
        result.push(element[element.length - 1]);
    });

    result.sort((a, b) => a - b);

    return result[result.length - 1];
    // console.log(result[result.length - 1]);
}

biggestElement2([
    [20, 50, 10],
    [8, 33, 145],
]);
biggestElement2([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
]);
