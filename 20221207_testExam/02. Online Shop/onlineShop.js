class OnlineShop {
    //TODO Implement this class

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        console.log("at loading start: ", this.products);
        console.log("this.warehouseSpace at loading end: ", this.warehouseSpace);

        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }

        const newProduct = {
            productName: product,
            productQuantity: quantity,
        };

        this.products.push(newProduct);

        this.warehouseSpace -= spaceRequired;
        console.log("at loading end: ", this.products, quantity);
        console.log("this.warehouseSpace at loading end: ", this.warehouseSpace);
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        console.log("at quantityCheck start: ", this.products);
        console.log("this.warehouseSpace at quantityCheck start:", this.warehouseSpace);

        let isNotFound = true;
        let currentProduct;

        this.products.forEach((eProduct) => {
            if (eProduct.productName === product) {
                isNotFound = false;
                currentProduct = eProduct;
            }
        });

        if (isNotFound) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        if (minimalQuantity <= currentProduct.productQuantity) {
            return `You have enough from product ${product}.`;
        } else {
            let difference = minimalQuantity - currentProduct.productQuantity;
            currentProduct.productQuantity = minimalQuantity;
            console.log("at quantityCheck end: ", this.products);

            console.log("this.warehouseSpace at quantityCheck end:", this.warehouseSpace);
            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        console.log("at sell start: ", this.products);
        console.log("this.warehouseSpace at sell start: ", this.warehouseSpace);

        let isNotFound = true;
        let currentProduct;

        this.products.forEach((eProduct) => {
            if (eProduct.productName === product) {
                isNotFound = false;
                currentProduct = eProduct;
            }
        });

        if (isNotFound) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else {
            currentProduct.productQuantity--;

            const newSale = {
                productName: currentProduct.productName,
                productQuantity: 1,
            };

            this.sales.push(newSale);

            console.log("at sell end: ", this.products);
            console.log("this.warehouseSpace at sell end: ", this.warehouseSpace);

            return `The ${product} has been successfully sold.`;
        }
    }

    revision() {
        let index = 0;

        const revisionReport = [];

        this.sales.forEach((sale) => index++);

        const salesReport = `You sold ${index} products today!`;

        revisionReport.push(salesReport);

        revisionReport.push(`Products in the warehouse:`);

        this.products.forEach((product) => {
            const inventoryReport = `${product.productName}-${product.productQuantity} more left`;
            revisionReport.push(inventoryReport);
        });

        return revisionReport.join("\n");
    }
}

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.revision());
