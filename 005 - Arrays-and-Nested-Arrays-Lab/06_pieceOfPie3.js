function pieceOfPie3(inputArr, start, end) {
    let foundStartIndex;
    let foundEndIndex;
    let startFound = false;
    let result = [];
    const foundStartPie = inputArr.find((element, index) => {
        if (element == start) {
            foundStartIndex = index;
            startFound = true;
        }

        if (element == end) {
            foundEndIndex = index;
            result.push(element);
            startFound = false;
        }

        if (startFound) {
            result.push(element);
        }
    });

    return result;
}

pieceOfPie3(
    [
        "Pumpkin Pie",
        "Key Lime Pie",
        "Cherry Pie",
        "Lemon Meringue Pie",
        "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
);
pieceOfPie3(
    [
        "Apple Crisp",
        "Mississippi Mud Pie",
        "Pot Pie",
        "Steak and Cheese Pie",
        "Butter Chicken Pie",
        "Smoked Fish Pie",
    ],
    "Pot Pie",
    "Smoked Fish Pie"
);
