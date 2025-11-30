// Sets and loads number of reviews for each time the page loads.

let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;

numReviews++;

localStorage.setItem("numReviews", numReviews);