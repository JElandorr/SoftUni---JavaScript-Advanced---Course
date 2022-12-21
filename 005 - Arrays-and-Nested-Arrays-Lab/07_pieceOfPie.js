function pieceOfPie(inputArr, start, end) {
    const foundStartPie = inputArr.find((element) => element == start);
    // console.log(foundStartPie);
    const startIndex = inputArr.indexOf(foundStartPie);
    // console.log(startIndex);

    const foundEndPie = inputArr.find((element) => element == end);
    // console.log(foundEndPie);
    const endIndex = inputArr.indexOf(foundEndPie);
    // console.log(endIndex);

    const result = inputArr.slice(startIndex, endIndex + 1);
    // console.log(result);

    return result;
}

console.log(
    pieceOfPie(
        [
            "Pumpkin Pie",
            "Key Lime Pie",
            "Cherry Pie",
            "Lemon Meringue Pie",
            "Sugar Cream Pie",
        ],
        "Key Lime Pie",
        "Lemon Meringue Pie"
    )
);
console.log(
    pieceOfPie(
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
    )
);
