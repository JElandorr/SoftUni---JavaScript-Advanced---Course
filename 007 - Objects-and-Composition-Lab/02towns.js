function towns(input) {
    const townRegistry = {};

    for (const element of input) {
        const townProps = element.split(" <-> ");
        const name = townProps[0];
        const pop = Number(townProps[1]);

        if (townRegistry[name] == undefined) {
            townRegistry[name] = pop;
        } else {
            townRegistry[name] += pop;
        }
    }

    for (const town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);
    }
}

towns([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);
console.log("----------------");
towns([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);
