function biggerHalf(input) {
    input.sort((a, b) => a - b);

    let result = [];
    let numberOfElements = 0;

    if (input.length % 2 === 0) {
        numberOfElements = input.length / 2;
    } else {
        numberOfElements = Math.ceil(input.length / 2);
    }

    for (let i = 1; i <= numberOfElements; i++) {
        result.unshift(input.pop());
    }

    // console.log(result);
    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
