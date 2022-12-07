function solve() {
    const input = {
        title: document.getElementById("title"),
        name: document.getElementById("recipientName"),
        message: document.getElementById("message"),
    };

    const lists = {
        mails: document.getElementById("list"),
        sent: document.getElementsByClassName("sent-list"),
        deleted: document.getElementsByClassName("delete-list"),
    };

    // console.log(lists.sent[0]);
    // console.log(lists.deleted[0]);

    document.getElementById("add").addEventListener("click", addMail);

    document.getElementById("reset").addEventListener("click", resetMail);

    function addMail(event) {
        event.preventDefault();
        // console.log("Add is clicked!");

        const mailTitle = input.title.value;
        const mailName = input.name.value;
        const mailMessage = input.message.value;

        if (mailTitle == "" || mailName == "" || mailMessage == "") {
            return;
        }

        const mailElementLi = document.createElement("li");
        mailElementLi.innerHTML = `
            <h4>Title: ${mailTitle}</h4>
            <h4>Recipient Name: ${mailName}</h4>
            <span>${mailMessage}</span>
            <div id="list-action">        
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>

        `;
        // console.log(mailElementLi);

        const sendBtn = mailElementLi.querySelector("#send");
        // console.log(sendBtn);
        sendBtn.addEventListener("click", sendMail);

        const deleteBtn = mailElementLi.querySelector("#delete");
        deleteBtn.addEventListener("click", deleteMail);

        lists.mails.appendChild(mailElementLi);

        input.title.value = "";
        input.name.value = "";
        input.message.value = "";

        function sendMail(event) {
            event.preventDefault();
            // console.log(lists.sent);
            mailElementLi.innerHTML = `
            <span>To: ${mailName}</span>
            <span>Title: ${mailTitle}</span>
            <div>
                <button type="submit" id="delete">Delete</button>
            </div>
            `;
            const deleteBtn = mailElementLi.querySelector("#delete");
            deleteBtn.addEventListener("click", deleteMail);
            lists.sent[0].appendChild(mailElementLi);

            function deleteMail(event) {
                event.preventDefault();
                mailElementLi.innerHTML = `
                <span>To: ${mailName}</span>
                <span>Title: ${mailTitle}</span>
                `;
                lists.deleted[0].appendChild(mailElementLi);
            }
        }

        function deleteMail(event) {
            event.preventDefault();
            mailElementLi.innerHTML = `
            <span>To: ${mailName}</span>
            <span>Title: ${mailTitle}</span>
            `;
            lists.deleted[0].appendChild(mailElementLi);
        }
    }

    function resetMail(event) {
        event.preventDefault();
        // console.log("Reset is clicked!");
        input.title.value = "";
        input.name.value = "";
        input.message.value = "";
    }
}
solve();
