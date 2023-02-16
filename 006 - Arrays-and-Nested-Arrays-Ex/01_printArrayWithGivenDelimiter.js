function printArrayWithGivenDelimiter(inputArr, delimiter) {
    console.log(inputArr.join(`${delimiter}`));
}

printArrayWithGivenDelimiter(["One", "Two", "Three", "Four", "Five"], "-");
printArrayWithGivenDelimiter(
    ["How about no?", "I", "will", "not", "do", "it!"],
    "_"
);
