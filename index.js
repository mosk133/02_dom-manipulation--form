let form = document.querySelector(".form__container");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let priority = document.getElementById("priority").value;
    let notesSection = document.querySelector(".notes");

    let newNoteContainer = document.createElement("div");
    newNoteContainer.className = "notes__item";

    let newArticle = document.createElement("article");
    newArticle.className = "notes__content";

    let newTitle = document.createElement("h3");
    newTitle.className = "notes__content-title";

    let newContentParagraph = document.createElement("p");
    newContentParagraph.className = "notes__content-text";

    let newPriority = document.createElement("p");
    newPriority.className = "notes__content-priority";

    if (priority === "select") {
        newPriority.textContent = "No Priority";
    } else {
        newPriority.textContent = priority;
    }    

    notesSection.appendChild(newNoteContainer);
    newNoteContainer.appendChild(newArticle);
    newArticle.appendChild(newTitle);
    newTitle.textContent = title;
    newArticle.appendChild(newContentParagraph);
    newContentParagraph.textContent = content;
    newArticle.appendChild(newPriority);

    form.reset();
});
