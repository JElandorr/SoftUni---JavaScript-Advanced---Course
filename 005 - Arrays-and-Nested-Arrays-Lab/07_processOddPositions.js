function processOddpositions(inputArr) {
    let result = [];
    inputArr.find((element, index) => {
        if (index % 2 != 0) {
            result.unshift(element * 2);
        }
    });

    return result.join(` `);
    // console.log(result.join(` `));
}

processOddpositions([10, 15, 20, 25]);
processOddpositions([3, 0, 10, 4, 7, 3]);
