const { expect } = require("chai");

const { choosingType } = require("./chooseYourCar");
const { brandName } = require("./chooseYourCar");
const { carFuelConsumption } = require("./chooseYourCar");

describe("Chose Your Car Tests", () => {
    it("choosingType() throws Error with wrong type", () => {
        let type = "Convertible";
        let color = "String";
        let year = 2011;
        expect(() => choosingType(type, color, year))
            .to.throw(Error)
            .with.property("message", "This type of car is not what you are looking for.");
    });
    it("choosingType() throws Error with wrong year", () => {
        let type = "Sedan";
        let color = "String";
        let year = 1899;
        expect(() => choosingType(type, color, year))
            .to.throw(Error)
            .with.property("message", "Invalid Year!");
    });
    it("choosingType() throws Error with wrong year", () => {
        let type = "Sedan";
        let color = "String";
        let year = 2023;
        expect(() => choosingType(type, color, year))
            .to.throw(Error)
            .with.property("message", "Invalid Year!");
    });
    it("choosingType() returns correct with happypath input", () => {
        let type = "Sedan";
        let color = "String";
        let year = 2011;
        expect(choosingType(type, color, year)).to.equal(
            `This ${color} ${type} meets the requirements, that you have.`
        );
    });
    it("choosingType() returns correct with year < 2010", () => {
        let type = "Sedan";
        let color = "String";
        let year = 2009;
        expect(choosingType(type, color, year)).to.equal(
            `This ${type} is too old for you, especially with that ${color} color.`
        );
    });
    it("brandName() returns what is expected when correct input is received", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index = 2;
        expect(brandName(array, index)).to.equal(`BMW, Toyota`);
    });
    it("brandName() throws Error when receive Empty Array for first parameter", () => {
        let array = [];
        let index = 2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive String for first parameter", () => {
        let array = `BMW, Toyota`;
        let index = 2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive Number for first parameter", () => {
        let array = 3;
        let index = 2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive Object for first parameter", () => {
        let array = { BMW: "35", Toyota: "36" };
        let index = 2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive function for first parameter", () => {
        let array = choosingType;
        let index = 2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive undefined for first parameter", () => {
        let array;
        let index = 2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive Boolean: true for first parameter", () => {
        let array = true;
        let index = 2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive Boolean: false for first parameter", () => {
        let array = true;
        let index = 2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });

    it("brandName() throws Error when receive wrong index for second parameter", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index = -2;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive String for second parameter", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index = `BMW, Toyota`;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive Object for second parameter", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index = { BMW: "35", Toyota: "36" };
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive Array for second parameter", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index = ["BMW", "Toyota", "Peugeot"];
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive function for second parameter", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index = choosingType;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive Boolean: true for second parameter", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index = true;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive Boolean: false for second parameter", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index = false;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("brandName() throws Error when receive undefined for second parameter", () => {
        let array = ["BMW", "Toyota", "Peugeot"];
        let index;
        expect(() => brandName(array, index))
            .to.throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() returns what is expected when correct input is received < 7l", () => {
        let distanceInKilometers = 100;
        let consumptedFuelInLitres = 6.456;
        let litersPerHundredKm = ((consumptedFuelInLitres / 100) * distanceInKilometers).toFixed(2);
        expect(carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).to.equal(
            `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`
        );
    });
    it("carFuelConsumption() returns litersPerHundredKm rounded to 1 digit after the decimal point", () => {
        let distanceInKilometers = 100;
        let consumptedFuelInLitres = 6.456;
        let litersPerHundredKm = ((consumptedFuelInLitres / 100) * distanceInKilometers).toFixed(1);
        expect(carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).to.not.equal(
            `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`
        );
    });
    it("carFuelConsumption() returns litersPerHundredKm rounded to 3 digit after the decimal point", () => {
        let distanceInKilometers = 100;
        let consumptedFuelInLitres = 6.456;
        let litersPerHundredKm = ((consumptedFuelInLitres / 100) * distanceInKilometers).toFixed(3);
        expect(carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).to.not.equal(
            `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`
        );
    });
    it("carFuelConsumption() returns what is expected when correct input is received with > 7l", () => {
        let distanceInKilometers = 100;
        let consumptedFuelInLitres = 8.456;
        let litersPerHundredKm = ((consumptedFuelInLitres / 100) * distanceInKilometers).toFixed(2);
        expect(carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).to.equal(
            `The car burns too much fuel - ${litersPerHundredKm} liters!`
        );
    });
    it("carFuelConsumption() returns what is expected when correct input is received with > 7l", () => {
        let distanceInKilometers = 100;
        let consumptedFuelInLitres = 8.456;
        let litersPerHundredKm = ((consumptedFuelInLitres / 100) * distanceInKilometers).toFixed(1);
        expect(carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).not.to.equal(
            `The car burns too much fuel - ${litersPerHundredKm} liters!`
        );
    });
    it("carFuelConsumption() returns what is expected when correct input is received with > 7l", () => {
        let distanceInKilometers = 100;
        let consumptedFuelInLitres = 8.456;
        let litersPerHundredKm = ((consumptedFuelInLitres / 100) * distanceInKilometers).toFixed(3);
        expect(carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).not.to.equal(
            `The car burns too much fuel - ${litersPerHundredKm} liters!`
        );
    });
    it("carFuelConsumption() throws Error when first parameter input is negative number", () => {
        expect(() => carFuelConsumption(-1, 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when first parameter input is not number: undefined", () => {
        expect(() => carFuelConsumption(undefined, 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when first parameter input is not number: String", () => {
        expect(() => carFuelConsumption("string", 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when first parameter input is not number: String: Empty", () => {
        expect(() => carFuelConsumption("", 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when first parameter input is not number: function", () => {
        expect(() => carFuelConsumption(brandName, 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when first parameter input is not number: Object", () => {
        expect(() => carFuelConsumption({ BMW: "35", Toyota: "36" }, 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when first parameter input is not number: Array", () => {
        expect(() => carFuelConsumption(["BMW", "Toyota", "Peugeot"], 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when first parameter input is not number: Boolean: true", () => {
        expect(() => carFuelConsumption(true, 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when first parameter input is not number: Boolean: false", () => {
        expect(() => carFuelConsumption(false, 2))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is negative number", () => {
        expect(() => carFuelConsumption(2, -1))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is not number: undefined", () => {
        expect(() => carFuelConsumption(2, undefined))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is not number: String", () => {
        expect(() => carFuelConsumption(2, "string"))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is not number: String: Empty", () => {
        expect(() => carFuelConsumption(2, ""))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is not number: function", () => {
        expect(() => carFuelConsumption(2, brandName))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is not number: Object", () => {
        expect(() => carFuelConsumption(2, { BMW: "35", Toyota: "36" }))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is not number: Array", () => {
        expect(() => carFuelConsumption(2, ["BMW", "Toyota", "Peugeot"]))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is not number: Boolean: true", () => {
        expect(() => carFuelConsumption(2, true))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
    it("carFuelConsumption() throws Error when second parameter input is not number: Boolean: false", () => {
        expect(() => carFuelConsumption(2, false))
            .throw(Error)
            .with.property("message", "Invalid Information!");
    });
});
