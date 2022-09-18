function cooking(...input) {
  let material = input[0];
  console.log(material);

  let current = material;
  console.log(current);
  let actions = {
    chop: current / 2,
    dice: Math.sqrt(current),
    spice: current++,
    bake: current * 3,
    fillet: current - (current * 20) / 100,
  };

  for (let i = 1; i <= input.length - 1; i++) {
    current = actions[input[i]];
    console.log(current);
  }
}

cooking("32", "chop", "chop", "chop", "chop", "chop");
cooking("9", "dice", "spice", "chop", "bake", "fillet");
