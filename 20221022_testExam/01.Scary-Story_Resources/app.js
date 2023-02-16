window.addEventListener("load", solve);

function solve() {
    //TODO ....

    let divMain = document.getElementById("main");
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let age = document.getElementById("age");
    let title = document.getElementById("story-title");
    let genre = document.getElementById("genre");
    let story = document.getElementById("story");

    let form = document.querySelector("form");

    let ulPreviewList = document.getElementById("preview-list");

    let publishBtn = document.getElementById("form-btn");
    publishBtn.addEventListener("click", onPublish);

    function onPublish() {
        if (
            firstName.value == "" ||
            lastName.value == "" ||
            age.value == "" ||
            title.value == "" ||
            story.value == ""
        ) {
            return;
        }

        const storyData = {
            firstName: firstName.value,
            lastName: lastName.value,
            age: age.value,
            title: title.value,
            genre: genre.value,
            story: story.value,
        };

        form.reset();

        const li = document.createElement("li");
        li.setAttribute("class", "story-info");

        const article = document.createElement("article");

        const h4Name = document.createElement("h4");
        h4Name.textContent = `Name: ${storyData.firstName} ${storyData.lastName}`;

        const pAge = document.createElement("p");
        pAge.textContent = `Age: ${storyData.age}`;

        const pTitle = document.createElement("p");
        pTitle.textContent = `Title: ${storyData.title}`;

        const pGenre = document.createElement("p");
        pGenre.textContent = `Genre: ${storyData.genre}`;

        const pStory = document.createElement("p");
        pStory.textContent = `${storyData.story}`;

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("class", "save-btn");
        saveBtn.textContent = "Save Story";

        const editBtn = document.createElement("button");
        editBtn.setAttribute("class", "edit-btn");
        editBtn.textContent = "Edit Story";

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete-btn");
        deleteBtn.textContent = "Delete Story";

        article.appendChild(h4Name);
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(pStory);
        article.appendChild(saveBtn);
        article.appendChild(editBtn);
        article.appendChild(deleteBtn);

        li.appendChild(article);

        ulPreviewList.appendChild(li);

        publishBtn.disabled = true;

        saveBtn.addEventListener("click", onSave);
        function onSave() {
            // console.log("onSave is clicked!");
            const h1 = document.createElement("h1");
            h1.textContent = `Your scary story is saved!`;

            divMain.innerHTML = "";
            divMain.appendChild(h1);
        }

        editBtn.addEventListener("click", onEdit);
        function onEdit() {
            // console.log("onEdit is clicked!");
            li.remove();

            firstName.value = storyData.firstName;
            lastName.value = storyData.lastName;
            age.value = storyData.age;
            title.value = storyData.title;
            genre.value = storyData.genre;
            story.value = storyData.story;

            publishBtn.disabled = false;
            saveBtn.disabled = true;
            editBtn.disabled = true;
            deleteBtn.disabled = true;
        }

        deleteBtn.addEventListener("click", onDelete);
        function onDelete() {
            // console.log("onDelete is clicked!");
            li.remove();
        }
    }
}
