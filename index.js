const results = document.querySelector("#results");

async function asyncFetch(value) {
  const res = await fetch(`https:swapi.tech/api/${value}/`);
  const data = await res.json();
  displayResults(data, value);
}


// added Event Listener to buttons in navbar
document.querySelector("#pillNav2").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});