function juice(arr){
    let juiceFlavours = {};
    let juiceBottles = {};

    function createBottle(flavour){
        if(juiceFlavours[flavour] >= 1000){
            if(!juiceBottles[flavour]){
                juiceBottles[flavour] = 0
            };
            let bottles = Math.floor(juiceFlavours[flavour] / 1000);
            juiceBottles[flavour] += bottles;
            juiceFlavours[flavour] -= (bottles * 1000);            
        }

    };

    for (let line of arr) {
        let [flavour, qty] = line.split(' => ');
        // console.log(flavour);
        // console.log(qty);
        if(!juiceFlavours[flavour]){
            juiceFlavours[flavour] = 0
        };
        juiceFlavours[flavour] += Number(qty);
        createBottle(flavour);
    };

    for (const flavour in juiceBottles) {
        console.log(flavour + ' => ' + juiceBottles[flavour]);
    };
};

juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);
console.log('********************');
juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);