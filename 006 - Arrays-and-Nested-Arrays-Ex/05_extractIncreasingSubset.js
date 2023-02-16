function extractIncSubset(input) {
    let biggestNumber = 0;
    const result = [];

    input.forEach((element) => {
        if (element >= biggestNumber) {
            result.push(element);
            biggestNumber = element;
        }
    });

    // console.log(result);
    return result;
}

extractIncSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncSubset([1, 2, 3, 4]);
extractIncSubset([20, 3, 2, 15, 6, 1]);
