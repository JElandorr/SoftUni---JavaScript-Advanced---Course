function service() {
    const input = {
        product: document.getElementById("type-product"),
        description: document.getElementById("description"),
        client: document.getElementById("client-name"),
        phone: document.getElementById("client-phone"),
    };

    const lists = {
        received: document.getElementById("received-orders"),
        completed: document.getElementById("completed-orders"),
    };

    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.addEventListener("click", onSubmit);
    // console.log(submitBtn);

    function onSubmit(event) {
        event.preventDefault();
        // console.log(input.product.value);
        // console.log(input.description.value);
        // console.log(input.client.value);
        // console.log(input.phone.value);

        if (
            input.description.value == "" ||
            input.client.value == "" ||
            input.phone.value == ""
        ) {
            return;
        }

        const product = input.product.value;
        const description = input.description.value;
        const client = input.client.value;
        const phone = input.phone.value;

        input.product.value = "";
        input.description.value = "";
        input.client.value = "";
        input.phone.value = "";

        const div = document.createElement("div");
        div.className = "container";
        div.innerHTML = `
        <h2>Product type for repair: ${product}</h2>
        <h3>Client information: ${client}, ${phone}</h3>
        <h4>Description of the problem: ${description}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>
        `;

        const startRepBtn = div.querySelector(".start-btn");
        startRepBtn.addEventListener("click", startRepair);

        const finishRepBtn = div.querySelector(".finish-btn");
        finishRepBtn.addEventListener("click", finishRepair);

        lists.received.appendChild(div);

        function startRepair(event) {
            event.preventDefault();
            // console.log("started repair for:", `${client}`);
            lists.received.appendChild(div);
            finishRepBtn.disabled = false;
            startRepBtn.disabled = true;
        }

        function finishRepair() {
            event.preventDefault();
            // console.log("finished repair for:", `${client}`);
            startRepBtn.remove();
            finishRepBtn.remove();
            lists.completed.appendChild(div);
        }

        const clearBtn = document.querySelector(".clear-btn");
        clearBtn.addEventListener("click", onClear);

        function onClear(event) {
            event.preventDefault();
            div.remove();
        }
    }
}

service();
