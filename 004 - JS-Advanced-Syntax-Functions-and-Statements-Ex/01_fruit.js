function fruit(...input) {
  console.log(
    `I need $${((input[1] / 1000) * input[2]).toFixed(2)} to buy ${(
      input[1] / 1000
    ).toFixed(2)} kilograms ${input[0]}.`
  );
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
