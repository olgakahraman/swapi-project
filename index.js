const results = document.querySelector("#results");

async function asyncFetch(value) {
  const res = await fetch(`https:swapi.tech/api/${value}/`);
  const data = await res.json();
  displayResults(data, value);
}


function displayResults(data, value) {
  let output = "";
  console.log(data);
  if (value === "people") {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3" >
      <h4 class = "card-title text-center">${item.name}</h4>
      </div>
      `;
    });
  }
  if (value === "planets") {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3" >
      <h4 class = "card-title text-center">${item.name}</h4>
      </div>
      `;
    });
  }
  if (value === "starships") {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3">
      <h4 class = "card-title text-center">${item.name}</h4>
      </div>
      `;
    });
  }

  results.innerHTML = output;
}


// added Event Listener to buttons in navbar
document.querySelector("#pillNav2").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});