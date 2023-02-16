function magicMatrices(input) {
    const sums = {
        hor1: 0,
        hor2: 0,
        hor3: 0,
        d1: 0,
        d2: 0,
    };

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            sums.hor1 += input[i][j];
        }
    }

    console.log(sums);

    console.log(`------------------`);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
