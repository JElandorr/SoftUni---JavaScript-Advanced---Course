function sortingNumbers(input) {
    input.sort((a, b) => a - b);

    const result = [];

    const firstHalf = input.slice(0, input.length / 2);
    const secondHalf = input.slice(input.length / 2);

    for (let i = 0; i < Math.ceil(input.length / 2); i++) {
        if (firstHalf[i] != undefined) {
            result.push(firstHalf[i]);
        }

        if (secondHalf[secondHalf.length - (1 + i)] != undefined) {
            result.push(secondHalf[secondHalf.length - (1 + i)]);
        }
    }

    // console.log(result);
    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
