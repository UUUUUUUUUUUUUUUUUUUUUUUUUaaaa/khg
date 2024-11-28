const today = new Date();
const day = today.getDay();
const hours = today.getHours();
const minutes = today.getMinutes();
document.querySelector('data').innerHTML = `${today}`;