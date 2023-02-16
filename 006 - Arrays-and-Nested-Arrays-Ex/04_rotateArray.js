function rotateArray(inputArr, cycles) {
    if (cycles === 0) {
        console.log(inputArr.join(` `));
        return;
    }

    let lastElement;

    for (let i = 0; i < cycles; i++) {
        lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
    }

    console.log(inputArr.join(` `));
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
