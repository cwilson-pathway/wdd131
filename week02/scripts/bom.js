const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', (event) => {
    event.preventDefault();

    if (input.value.trim() !== "") {
        const scripture = input.value;
        input.value = '';

        const li = document.createElement('ul');
        const listText = document.createElement('span');
        const deleteButton = document.createElement('button');

        li.appendChild(listText);
        listText.textContent = scripture;
        li.appendChild(deleteButton);
        deleteButton.innerHTML = '<button aria-label="Close" id="close-button">❌</button>';
        list.appendChild(li);

        deleteButton.addEventListener('click', (event) => {
            list.removeChild(li);
            input.focus();
        })
    }
    else {
        input.focus();
    }
})

