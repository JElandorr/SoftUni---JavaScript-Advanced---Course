function addRemoveElements(commandArr) {
    let result = [];
    let counter = 0;

    commandArr.forEach((element) => {
        counter++;
        if (element == "add") {
            result.push(counter);
        } else {
            result.pop();
        }
    });

    if (result.length === 0) {
        console.log(`Empty`);
    } else {
        console.log(result.join(`\n`));
    }
}

addRemoveElements(["add", "add", "add", "add"]);
addRemoveElements(["add", "add", "remove", "add", "add"]);
addRemoveElements(["remove", "remove", "remove"]);
