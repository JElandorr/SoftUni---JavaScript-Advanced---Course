function returnFirstLast(input) {
    // console.log(input);
    // console.log(...input);
    const first = Number(input[0]);
    const last = Number(input[input.length - 1]);

    const result = first + last;

    return result;
}

console.log(returnFirstLast(["20", "30", "40"]));
console.log(returnFirstLast(["5", "10"]));
