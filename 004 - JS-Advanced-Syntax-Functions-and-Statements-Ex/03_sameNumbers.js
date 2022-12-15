function solve(input){
    let arrNumber = Array.from(String(input), Number);
    let arrString = Array.from(String(input));
    let counter = 0;
    let areSame = false;
    let sum = 0;
    for(let i = 0; i <= arrString.length - 1; i++){
        if(arrString[i] === arrString[0]){
            counter++;
        };
        sum += Number(arrNumber[i]);

    };
    if(counter === arrString.length){
        areSame = true;
    };
    console.log(areSame);
    console.log(sum);
};

solve(123654);
solve(3333333);