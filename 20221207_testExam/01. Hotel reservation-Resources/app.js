window.addEventListener("load", solve);

function solve() {
    const form = document.querySelector("form");

    const ulInfoList = document.querySelector("section#info-reservations ul");

    const ulCompleteList = document.querySelector("section#confirm-reservations ul");

    const h1Verification = document.getElementById("verification");

    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", onNext);

    function onNext(e) {
        e.preventDefault();

        h1Verification.innerHTML = "";
        h1Verification.textContent = "";

        const formData = new FormData(form);

        const reservationData = {
            firstName: formData.get("first-name"),
            lastName: formData.get("last-name"),
            dateIn: formData.get("date-in"),
            dateOut: formData.get("date-out"),
            people: formData.get("people-count"),
        };

        if (
            reservationData.firstName == "" ||
            reservationData.lastName == "" ||
            reservationData.dateIn == "" ||
            reservationData.dateOut == "" ||
            reservationData.people == "" ||
            new Date(reservationData.dateIn) >= new Date(reservationData.dateOut)
        ) {
            console.log("All fields are required!");
            return;
        }

        // const dateIn = new Date(reservationData.dateIn);
        // const dateOut = new Date(reservationData.dateOut);

        // function dateInIsBefore(date1, date2) {
        //     return date1 < date2;
        // }

        // if (!dateInIsBefore(dateIn, dateOut)) {
        //     console.log("dateIn is not before dateOut");
        //     return;
        // }

        form.reset();

        console.log("reservationData", reservationData);

        const li = document.createElement("li");
        li.className = "reservation-content";

        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = `Name: ${reservationData.firstName} ${reservationData.lastName}`;

        const pDateIn = document.createElement("p");
        pDateIn.textContent = `From date: ${reservationData.dateIn}`;
        const pDateOut = document.createElement("p");
        pDateOut.textContent = `To date: ${reservationData.dateOut}`;
        const pPeople = document.createElement("p");
        pPeople.textContent = `For ${reservationData.people} people`;

        const buttonEdit = document.createElement("button");
        buttonEdit.className = "edit-btn";
        buttonEdit.textContent = "Edit";
        buttonEdit.addEventListener("click", onEdit);

        const buttonContinue = document.createElement("button");
        buttonContinue.className = "continue-btn";
        buttonContinue.textContent = "Continue";
        buttonContinue.addEventListener("click", onContinue);

        const buttonConfirm = document.createElement("button");
        buttonConfirm.className = "confirm-btn";
        buttonConfirm.textContent = "Confirm";
        buttonConfirm.addEventListener("click", onConfirm);

        const buttonCancel = document.createElement("button");
        buttonCancel.className = "cancel-btn";
        buttonCancel.textContent = "Cancel";
        buttonCancel.addEventListener("click", onCancel);

        article.appendChild(h3);
        article.appendChild(pDateIn);
        article.appendChild(pDateOut);
        article.appendChild(pPeople);
        li.appendChild(article);
        li.appendChild(buttonEdit);
        li.appendChild(buttonContinue);

        ulInfoList.appendChild(li);

        nextBtn.setAttribute("disabled", true);

        console.log('document.querySelector(".info-list > li")', document.querySelector(".info-list > li"));

        function onEdit(e) {
            ulInfoList.innerHTML = "";

            document.getElementById("first-name").value = reservationData.firstName;
            document.getElementById("last-name").value = reservationData.lastName;
            document.getElementById("date-in").value = reservationData.dateIn;
            document.getElementById("date-out").value = reservationData.dateOut;
            document.getElementById("people-count").value = reservationData.people;

            nextBtn.removeAttribute("disabled");
        }

        function onContinue(e) {
            li.remove();
            li.removeChild(buttonEdit);
            li.removeChild(buttonContinue);
            li.appendChild(buttonConfirm);
            li.appendChild(buttonCancel);

            ulCompleteList.appendChild(li);
        }

        function onConfirm(e) {
            console.log("Confirm is Clicked!");
            ulCompleteList.innerHTML = "";

            h1Verification.textContent = "Confirmed.";
            h1Verification.setAttribute("class", "reservation-confirmed");
            nextBtn.removeAttribute("disabled");
        }

        function onCancel(e) {
            console.log("Cancel is Clicked!");
            ulCompleteList.innerHTML = "";
            h1Verification.textContent = "Cancelled.";

            h1Verification.setAttribute("class", "reservation-cancelled");
            nextBtn.removeAttribute("disabled");
        }
    }
}
