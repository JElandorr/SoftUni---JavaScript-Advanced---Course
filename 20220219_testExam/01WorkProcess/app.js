function solve() {
    const input = {
        firstName: document.querySelector("#fname"),
        lastName: document.querySelector("#lname"),
        email: document.querySelector("#email"),
        birthDate: document.querySelector("#birth"),
        position: document.querySelector("#position"),
        salary: document.querySelector("#salary"),
    };

    // console.log(input.firstName);

    const hireBtn = document.querySelector("#add-worker");
    hireBtn.addEventListener("click", onHire);

    const tbody = document.querySelector("#tbody");

    const sum = document.querySelector("#sum");

    let totalBudget = 0;

    function onHire(e) {
        e.preventDefault();

        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const email = input.email.value;
        const birthDate = input.birthDate.value;
        const position = input.position.value;
        const salary = Number(input.salary.value);

        if (
            firstName == "" ||
            lastName == "" ||
            email == "" ||
            birthDate == "" ||
            position == "" ||
            salary == ""
        ) {
            return;
        }

        input.firstName.value = "";
        input.lastName.value = "";
        input.email.value = "";
        input.birthDate.value = "";
        input.position.value = "";
        input.salary.value = "";

        const employee = document.createElement("tr");
        employee.innerHTML = `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${birthDate}</td>
            <td>${position}</td>
            <td>${salary}</td>
            <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
        </tr>`;

        const firedBtn = employee.querySelector(".fired");
        firedBtn.addEventListener("click", onFired);

        const editBtn = employee.querySelector(".edit");
        editBtn.addEventListener("click", onEdit);

        tbody.appendChild(employee);
        const employeeAnnualSalary = salary * 12;
        totalBudget += employeeAnnualSalary;
        document.querySelector("#sum").textContent = totalBudget.toFixed(2);

        function onFired() {
            // console.log("Fired is clicked");
            employee.remove();
            totalBudget -= employeeAnnualSalary;
            document.querySelector("#sum").textContent = totalBudget.toFixed(2);
        }

        function onEdit() {
            // console.log("Edit is clicked");
            employee.remove();

            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.email.value = email;
            input.birthDate.value = birthDate;
            input.position.value = position;
            input.salary.value = salary;

            totalBudget -= employeeAnnualSalary;
            document.querySelector("#sum").textContent = totalBudget.toFixed(2);
        }
    }
}
solve();
