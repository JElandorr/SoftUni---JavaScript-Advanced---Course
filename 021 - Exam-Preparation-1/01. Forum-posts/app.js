window.addEventListener("load", solve);

function solve() {
    console.log("it works!");
    const input = {
        title: document.getElementById("post-title"),
        category: document.getElementById("post-category"),
        content: document.getElementById("post-content"),
    };

    const lists = {
        review: document.getElementById("review-list"),
        published: document.getElementById("published-list"),
    };

    const publishBtn = document.getElementById("publish-btn");
    publishBtn.addEventListener("click", publish);
    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", clear);

    console.log(input);
    console.log(lists);
    const editInProgress = false;

    function publish(event) {
        event.preventDefault();
        console.log("publish clicked!");

        const title = input.title.value;
        const category = input.category.value;
        const content = input.content.value;

        if (title == "" || category == "" || content == "") {
            return;
        }

        // create new post
        const li = document.createElement("li");
        li.className = "rpost";
        li.innerHTML = `<article>
                            <h4>${title}</h4>
                            <p>Category: ${category}</p>
                            <p>Content: ${content}</p>
                        </article>
                        <button class='action-btn edit'>Edit</button>
                        <button class='action-btn approve'>Approve</button>`;
        // add functionality to buttons
        const editBtn = li.querySelector(".edit");
        editBtn.addEventListener("click", edit);
        const approveBtn = li.querySelector(".approve");
        approveBtn.addEventListener("click", approve);

        // append new post to the review board

        lists.review.appendChild(li);
        // clear input fields
        input.title.value = "";
        input.category.value = "";
        input.content.value = "";
        function edit(event) {
            // console.log(event.currentTarget, "edit is clicked!");
            // read list item contents
            // populate input fields with values

            input.title.value = title;
            input.category.value = category;
            input.content.value = content;

            // remove list item from list
            li.remove();
        }

        function approve(event) {
            console.log(event.currentTarget, "approved is clicked!");
            // move list item from review board to approved board
            lists.published.appendChild(li);
            // remove action buttons
            editBtn.remove();
            approveBtn.remove();
        }
    }

    function clear() {
        console.log("clear clicked!");
        // set approved board HTML to empty list
        lists.published.innerHTML = "";
    }
}
