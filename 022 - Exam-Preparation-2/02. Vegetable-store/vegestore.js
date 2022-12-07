class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let typeArray = [];

        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(" ");
            quantity = Number(quantity);
            price = Number(price);

            const product = this.availableProducts.find((v) => v.type == type);

            if (product == undefined) {
                this.availableProducts.push({ type, quantity, price });
                typeArray.push(type);
            } else {
                product.quantity += quantity;
                if (product.price < price) {
                    product.price = price;
                }
            }
        }

        return `Succesfully added ${typeArray.join(", ")}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const vegetable of selectedProducts) {
            let [type, quantity] = vegetable.split(" ");
            quantity = Number(quantity);

            const product = this.availableProducts.find((v) => v.type == type);

            if (product == undefined) {
                throw new Error(
                    `${type} is not available in the store, your current bill is ${totalPrice}.`
                );
            }

            if (product.quantity >= quantity) {
                totalPrice += quantity * product.price;
                product.quantity -= quantity;
            } else {
                throw new Error(
                    `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${totalPrice}.`
                );
            }
        }
    }

    rottingVegetables(type, quantity) {}

    revision() {}
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
    vegStore.loadingVegetables([
        "Okra 2.5 3.5",
        "Beans 10 2.8",
        "Celery 5.5 2.2",
        "Celery 0.5 2.5",
    ])
);
