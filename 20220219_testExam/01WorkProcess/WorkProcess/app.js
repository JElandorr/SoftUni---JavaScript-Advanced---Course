function solve() {
    //To do!
    const form = document.querySelector("form");
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");

    const salaryBudget = document.getElementById("sum");

    const addBtn = document.getElementById("add-worker");
    addBtn.addEventListener("click", onAddWorker);

    const tbody = document.getElementById("tbody");

    const workerData = {};
    const workersData = [];

    let sum = 0;

    function onAddWorker(e) {
        e.preventDefault();

        if (
            !firstName.value == "" ||
            !lastName.value == "" ||
            !email.value == "" ||
            !birth.value == "" ||
            !position.value == "" ||
            !salary.value == ""
        ) {
            workerData.firstName = firstName.value;
            workerData.lastName = lastName.value;
            workerData.email = email.value;
            workerData.birth = birth.value;
            workerData.position = position.value;
            workerData.salary = salary.value;
            workerData.id = JSON.stringify(workerData);
        } else {
            return;
        }

        workersData.push(workerData);

        createElement(workerData);

        form.reset();
    }

    function createElement(workerData) {
        const tr = document.createElement("tr");
        tr.setAttribute("id", workerData.id);
        tr.innerHTML = `
            <td>${workerData.firstName}</td>
            <td>${workerData.lastName}</td>
            <td>${workerData.email}</td>
            <td>${workerData.birth}</td>
            <td>${workerData.position}</td>
            <td>${Number(workerData.salary).toFixed(2)}</td>
        `;

        const td = document.createElement("td");
        const firedBtn = document.createElement("button");
        firedBtn.className = "fired";
        firedBtn.textContent = "Fired";
        firedBtn.addEventListener("click", deleteElement);
        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editElement);
        td.appendChild(firedBtn);
        td.appendChild(editBtn);
        tr.appendChild(td);

        tbody.appendChild(tr);

        sum += Number(workerData.salary);
        salaryBudget.textContent = sum.toFixed(2);

        function deleteElement(e) {
            tr.remove();
            const data = JSON.parse(e.target.parentElement.parentElement.id);
            sum -= Number(data.salary);
            salaryBudget.textContent = sum.toFixed(2);
        }

        function editElement(e) {
            tr.remove();

            const data = JSON.parse(e.target.parentElement.parentElement.id);

            firstName.value = data.firstName;
            lastName.value = data.lastName;
            email.value = data.email;
            birth.value = data.birth;
            position.value = data.position;
            salary.value = data.salary;

            sum -= Number(data.salary);
            salaryBudget.textContent = sum.toFixed(2);
        }
    }
}
solve();
