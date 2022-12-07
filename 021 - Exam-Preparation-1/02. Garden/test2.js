function countTrue(arr) {
    let index = 0;

    if (arr.length) {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === true) {
                index++;
            }
        }
        return index;
    } else {
        return 0;
    }
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
