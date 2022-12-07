window.addEventListener("load", solve);

function solve() {
    const input = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        age: document.getElementById("age"),
        gender: document.getElementById("genderSelect"),
        dishInfo: document.getElementById("task"),
        counter: document.getElementById("progress-count"),
    };

    const lists = {
        inprogress: document.getElementById("in-progress"),
        completed: document.getElementById("finished"),
    };

    const submitBtn = document.getElementById("form-btn");
    submitBtn.addEventListener("click", inprogress);
    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", clear);

    let inprogressCounter = 0;

    function inprogress(event) {
        console.log("inprogress is clicked!");
        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const age = input.age.value;
        const gender = input.gender.value;
        const dishInfo = input.dishInfo.value;

        if (
            firstName == "" ||
            lastName == "" ||
            age == "" ||
            gender == "" ||
            dishInfo == ""
        ) {
            return;
        }

        const li = document.createElement("li");
        li.className = "each-line";
        li.innerHTML = `<article>
                            <h4>${firstName} ${lastName}</h4>
                            <p>${gender}, ${age}</p>
                            <p>Dish description: ${dishInfo}</p>
                        </article>
                        <button class='edit-btn'>Edit</button>
                        <button class='complete-btn'>Complete</button>`;

        lists.inprogress.appendChild(li);

        const editBtn = li.querySelector(".edit-btn");
        editBtn.addEventListener("click", edit);
        const completeBtn = li.querySelector(".complete-btn");
        completeBtn.addEventListener("click", completed);

        function edit() {
            // console.log("edit is clicked!");
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.age.value = age;
            input.gender.value = gender;
            input.dishInfo.value = dishInfo;

            li.remove();
            inprogressCounter--;
            input.counter.textContent = inprogressCounter;
        }

        function completed() {
            // console.log("complete is clicked!");
            lists.completed.appendChild(li);
            editBtn.remove();
            completeBtn.remove();
            inprogressCounter--;
            input.counter.textContent = inprogressCounter;
        }

        inprogressCounter++;
        input.firstName.value = "";
        input.lastName.value = "";
        input.age.value = "";
        input.gender.value = "";
        input.dishInfo.value = "";
        input.counter.textContent = inprogressCounter;
    }

    function clear() {
        // console.log("clear is clicked!");
        document.getElementById("finished").innerHTML = "";
    }
}
