// Sets and loads number of reviews for each time the page loads.

let numMessages = Number(window.localStorage.getItem("numMessages")) || 0;

numMessages++;

localStorage.setItem("numMessages", numMessages);