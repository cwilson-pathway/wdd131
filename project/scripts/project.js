const hambButton = document.querySelector("#hamb-button");
const navigation = document.querySelector("#navigation");

hambButton.addEventListener("click", () => {
    addActiveStatus(navigation);
    addActiveStatus(hambButton);
});

function addActiveStatus(object) {
    object.classList.toggle("active");
}