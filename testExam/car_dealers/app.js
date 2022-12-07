window.addEventListener("load", solve);

function solve() {
    const input = {
        make: document.getElementById("make"),
        model: document.getElementById("model"),
        productionYear: document.getElementById("year"),
        fuel: document.getElementById("fuel"),
        originalCost: document.getElementById("original-cost"),
        sellPrice: document.getElementById("selling-price"),
    };

    const carsInventory = document.getElementById("table-body");

    const publishBtn = document.getElementById("publish");
    publishBtn.addEventListener("click", publish);

    const soldCars = document.getElementById("cars-list");

    let totalProfit = 0;

    function publish(event) {
        event.preventDefault();
        // console.log("publish is clicked!");

        const make = input.make.value;
        const model = input.model.value;
        const productionYear = input.productionYear.value;
        const fuel = input.fuel.value;
        const originalCost = input.originalCost.value;
        const sellPrice = input.sellPrice.value;

        if (
            make == "" ||
            model == "" ||
            productionYear == "" ||
            fuel == "" ||
            Number(originalCost) > Number(sellPrice)
        ) {
            return;
        }

        input.make.value = "";
        input.model.value = "";
        input.productionYear.value = "";
        input.fuel.value = "";
        input.originalCost.value = "";
        input.sellPrice.value = "";

        const tr = document.createElement("tr");
        tr.className = "row";
        tr.innerHTML = `
                        <td>${make}</td>
                        <td>${model}</td>
                        <td>${productionYear}</td>
                        <td>${fuel}</td>
                        <td>${originalCost}</td>
                        <td>${sellPrice}</td>
                        <td>
                            <button class="action-btn edit">Edit</button>
                            <button class="action-btn sell">Sell</button>
                        </td>
        `;

        const editBtn = tr.getElementsByClassName("edit").item(0);
        editBtn.addEventListener("click", edit);
        // console.log(editBtn);

        const sellBtn = tr.getElementsByClassName("sell").item(0);
        sellBtn.addEventListener("click", sell);
        // console.log(sellBtn);

        carsInventory.appendChild(tr);

        function edit() {
            // console.log("editBtn is clicked!");
            input.make.value = make;
            input.model.value = model;
            input.productionYear.value = productionYear;
            input.fuel.value = fuel;
            input.originalCost.value = originalCost;
            input.sellPrice.value = sellPrice;
            tr.remove();
        }

        function sell() {
            const profit = Number(sellPrice) - Number(originalCost);
            totalProfit += profit;
            document.getElementById("profit").textContent =
                totalProfit.toFixed(2);
            // console.log("sellBtn is clicked!");
            const li = document.createElement("li");
            li.className = "each-list";
            li.innerHTML = `
            <span>${make} ${model}</span>
            <span>${productionYear}</span>
            <span>${profit}</span>
            `;
            soldCars.appendChild(li);
            tr.remove();
        }
    }
}
