function greatestCommonDivisor(...input){

    input.sort((a, b) => (a - b));
    let previousGcd;
    let gcd;
    let i = input[0];

    while(i >= 1){
        console.log(input[0] % i);
        console.log(input[1] % i);
        if(input[0] % i === 0 && input[1] % i === 0){
            gcd = i;
            console.log(gcd);
            break;
        };
        i--;
    };
};

greatestCommonDivisor(15, 5);
console.log('**************');
greatestCommonDivisor(2154, 458);
console.log('**************');
greatestCommonDivisor(13561, 17);