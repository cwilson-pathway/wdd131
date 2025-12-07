const year = document.querySelector("#currentyear");
const modified = document.querySelector("#modified")
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

document.getElementById("modified").innerHTML = document.lastModified;