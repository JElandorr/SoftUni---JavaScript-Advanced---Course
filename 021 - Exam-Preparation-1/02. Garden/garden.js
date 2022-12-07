class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error(`Not enough space in the garden.`);
        }

        const plant = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantiy: 0,
        };

        this.plants.push(plant);

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plantNotFound = true;
        let plantRipen;
        for (const plant of this.plants) {
            if (plant.plantName == plantName) {
                plantNotFound = false;
                plantRipen = plant;
            }
        }

        if (plantNotFound) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plantRipen.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        plantRipen.ripe = true;
        plantRipen.quantity += quantity;

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }

        if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plantNotFound = true;
        let plantToHarvest;
        for (const plant of this.plants) {
            if (plant.plantName == plantName) {
                plantNotFound = false;
                plantToHarvest = plant;
            }
        }

        if (plantNotFound) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!plantToHarvest.ripe) {
            throw new Error(
                `The ${plantName} cannot be harvested before it is ripe.`
            );
        }

        const plantHarvested = {
            plantName: plantToHarvest.plantName,
            quantity: plantToHarvest.quantity,
        };
        this.plants = this.plants.filter((x) => x.plantName != plantName);
        this.spaceRequired -= plantToHarvest.quantity;
        this.storage.push(plantHarvested);

        return `The ${plantHarvested.plantName} has been successfully harvested.`;
    }

    generateReport() {
        const plantsInGarden = [];

        for (const plant of this.plants) {
            plantsInGarden.push(plant.plantName);
        }

        plantsInGarden.sort(a, (b) => a.localeCompare(b));

        let storageReport;

        if (this.storage.length === 0) {
            storageReport = `Plants in storage: The storage is empty.`;
        } else {
            let storageReportArr = [];
            for (const plant of this.storage) {
                storageReportArr.push(`${plant.plantName} (${plant.quantity})`);
            }
            storageReport = `Plants in storage: ${storageReportArr.join(", ")}`;
        }

        return (
            `The garden has ${this.spaceAvailable} free space left.`,
            `Plants in the garden: ${plantsInGarden.join(", ")}`,
            storageReport
        );
    }
}

const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("olive", 50));
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("orange", 4));
console.log("=================================");
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("olive", 30));
console.log("=================================");
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("cucumber", -5));
console.log("=================================");
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("raspberry", 10));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("olive"));
console.log("=================================");
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("raspberry", 10));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("raspberry"));
console.log("=================================");
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
