function positiveNegative(input) {
    let currentItem;
    let result = [];

    for (let i = 0; i <= input.length - 1; i++) {
        if (input[i] < 0) {
            result.unshift(input[i]);
        } else {
            result.push(input[i]);
        }
    }

    return result;
}

console.log(positiveNegative([7, -2, 8, 9]));
console.log(positiveNegative([3, -2, 0, -1]));
