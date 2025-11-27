const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChaptersList() || [];
chaptersArray.forEach((chapter) => displayList(chapter));

function getChaptersList() {
    return JSON.parse(window.localStorage.getItem("myFavBOMList")) || [];
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function displayList(item) {
    const li = document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton = document.createElement('button');

    li.appendChild(listText);
    listText.textContent = item;
    li.appendChild(deleteButton);
    deleteButton.textContent = '❌';
    deleteButton.setAttribute("aria-label", "Close");
    list.appendChild(li);

    deleteButton.addEventListener('click', (event) => {
        deleteChapter(li.textContent);
        list.removeChild(li);
        input.focus();
    })
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    if (input.value.trim() !== "") {
        let scripture = input.value;
        chaptersArray.push(input.value);
        input.value = '';

        displayList(scripture);
    }
    else {
        input.focus();
    }
    setChapterList();
    input.value = "";
    input.focus();
})

