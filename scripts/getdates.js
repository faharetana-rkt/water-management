const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `&copy;${today.getFullYear()}`;