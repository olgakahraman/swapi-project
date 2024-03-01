const results = document.querySelector("#results");




// added Event Listener to buttons in navbar
document.querySelector("#pillNav2").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});