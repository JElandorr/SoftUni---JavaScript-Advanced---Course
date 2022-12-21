function equalNeighbors(input) {
    let counter = 0;
    let prev = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === input[i][j + 1]) {
                counter++;
            }

            if (prev[j] === input[i][j]) {
                counter++;
            }
        }
        prev = input[i];
    }

    // console.log(counter);
    return counter;
}

equalNeighbors([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
]);

equalNeighbors([
    ["test", "yes", "yo", "ho"],
    ["well", "done", "yo", "6"],
    ["not", "done", "yet", "5"],
]);
