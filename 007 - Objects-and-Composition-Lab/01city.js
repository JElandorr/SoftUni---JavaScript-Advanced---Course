function city(name, population, treasury) {
    const newCity = {};

    newCity.name = name;
    newCity.population = population;
    newCity.treasury = treasury;

    return newCity;
}

console.log(city("Tortuga", 7000, 15000));
console.log(city("Santo Domingo", 12000, 23500));
