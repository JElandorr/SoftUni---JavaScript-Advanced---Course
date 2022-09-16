function solve(data, param){
    let dataArr = Array.from(data);
    // console.log(dataArr);



    class Tickets{
        destination;
        price;
        status;

        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for(const line of dataArr){
        let [destination, price, status] = line.split('|');
        price = Number(price);
        result.push(new Tickets(destination, price, status));
    };

    result.sort((a,b) => {
        if(param == 'destination'){
            return a.destination.localeCompare(b.destination);
        } else if (param == 'status'){
            return a.status.localeCompare(b.status);
        } else {
            return a.price - b.price;
        }
    });

    return result;
};
console.log('Run1');
solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);
console.log('********************************');

console.log('Run2');

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
);