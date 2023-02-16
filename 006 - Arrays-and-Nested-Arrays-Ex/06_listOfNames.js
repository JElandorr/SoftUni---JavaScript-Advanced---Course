function listOfNames(input) {
    input.sort((a, b) => a.localeCompare(b));
    // console.log(input.join(`\n`));
    let counter = 1;
    input.forEach((element) => {
        console.log(`${counter}.${element}`);
        counter++;
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
