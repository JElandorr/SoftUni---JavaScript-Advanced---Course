function convert(input) {
    let [inches] = input;
    inches = Number(inches);

    let cm = inches * 2.54;

    console.log("cm", cm);
}

convert(["15"]);
