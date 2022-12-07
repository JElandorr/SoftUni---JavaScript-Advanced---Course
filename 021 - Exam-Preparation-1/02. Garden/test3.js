function binary(num) {
    if (num == 0) {
        return "0";
    } else {
        let bin = [];

        while (num > 0) {
            let a = num % 2;
            let b = Math.floor(num / 2);
            bin.unshift(a);
            num = b;
        }

        return bin.join("");
    }
}

console.log(binary(0));
// console.log(binary(10));
// console.log(binary(5));
// console.log(binary(6));
// console.log(binary(345));
// console.log(binary(174));

// binary(174);
// binary(10);
// binary(5);
// binary(6);
// binary(345);
