function sequence(n, k) {
    let result = [];
    let nextElement = 0;

    result.push(1);

    for (let i = 0; i < n - 1; i++) {
        for (let j = 1; j < k + 1; j++) {
            if (result[result.length - j] !== undefined) {
                nextElement += result[result.length - j];
            }
        }

        result.push(nextElement);
        nextElement = 0;
    }

    return result;
}

sequence(6, 3);
sequence(8, 2);
