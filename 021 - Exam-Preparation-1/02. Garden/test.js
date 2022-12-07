function christmass(date) {
    // console.log(date);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getYear();

    const christmassDay = 25;
    const christmassMonth = 11;

    const christmas = new Date(year + 1900, christmassMonth, christmassDay);

    let isChristmass = false;
    if (day === christmassDay || month === christmassMonth) {
        isChristmass = true;
    }

    // return isChristmass;
    return christmas;
}

console.log(christmass(new Date(2013, 11, 24)));
console.log(christmass(new Date(2013, 0, 23)));
console.log(christmass(new Date(3000, 11, 24)));
console.log(christmass(new Date(2080, 10, 25)));
