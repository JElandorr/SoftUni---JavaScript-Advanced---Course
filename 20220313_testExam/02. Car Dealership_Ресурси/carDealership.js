class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsePower, price, mileage) {
        if (model == "") {
            throw new Error("Invalid input!");
        }

        if (Math.sign(horsePower) != 1 && Number.isInteger(horsePower)) {
            throw new Error("Invalid input!");
        }

        if (price < 0) {
            throw new Error("Invalid input!");
        }

        if (mileage < 0) {
            throw new Error("Invalid input!");
        }

        let car = {
            model: model,
            horsePower: horsePower,
            price: price,
            mileage: mileage,
        };

        this.availableCars.push(car);

        return `New car added: ${car.model} - ${
            car.horsePower
        } HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        // console.log("availabe cars, before selling:", this.availableCars);
        // console.log("=================");
        const soldCar = {};
        let foundCar = false;

        this.availableCars.forEach((element, index) => {
            if (element.model == model) {
                foundCar = true;
                if (element.mileage > desiredMileage) {
                    element.price = element.price - (element.price * 5) / 100;
                    if (element.mileage > desiredMileage + 40000) {
                        element.price =
                            element.price - (element.price * 5) / 100;
                    }
                }
                soldCar.model = element.model;
                soldCar.horsePower = element.horsePower;
                soldCar.price = element.price;

                this.totalIncome += element.price;
                this.soldCars.push(soldCar);
                this.availableCars.splice(index, 1);
            }
        });

        if (foundCar) {
            foundCar = false;
            return `${soldCar.model} was sold for ${soldCar.price}$`;
        } else {
            throw new Error(`${model} was not found!`);
        }
    }
}

let dealership = new CarDealership("SoftAuto");
console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
console.log(dealership.addCar("Audi A3", 120, 4900, 240000));
console.log(dealership.sellCar("Toyota Corolla", 230000));
console.log(dealership.sellCar("Mercedes C63", 110000));
