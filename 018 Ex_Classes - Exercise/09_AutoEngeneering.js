function auto(listArr){
    let autoBrands = {};

    for (let element of listArr) {
        let [brand, model, qty] = element.split(' | ');
        if(!autoBrands.hasOwnProperty(brand)){
            autoBrands[brand] = {};
        };
        if(!autoBrands[brand].hasOwnProperty(model)){
            autoBrands[brand][model] = 0;
        };
        autoBrands[brand][model] += Number(qty);
    };

    for (let brand in autoBrands) {
        console.log(brand)
        Object
            .entries(autoBrands[brand])
            .forEach(element => console.log(`###${element[0]} -> ${element[1]}`));
    };

};

auto(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);