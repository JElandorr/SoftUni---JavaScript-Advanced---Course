function extractIncSubset(input) {
    let biggestNumber = 0;
    const result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggestNumber) {
            result.push(input[i]);
            biggestNumber = input[i];
        }
    }

    // console.log(result);
    return result;
}

extractIncSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncSubset([1, 2, 3, 4]);
extractIncSubset([20, 3, 2, 15, 6, 1]);
