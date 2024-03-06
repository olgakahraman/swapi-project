const results = document.querySelector("#results");

async function asyncFetch(value) {
  const res = await fetch(`https:swapi.tech/api/${value}/`);
  const data = await res.json();
  displayResults(data, value);
}

function displayResults(data, value) {
  let output = `<div class="row">`;
  console.log(data);
  if (value === "people") {
    data.results.forEach((item) => {
      output += `
      <div class="col-4">
      <div class="card p-3 m-3 " >
      <h6 class = "card-title text-center">${item.name}</h6>
      </div></div>
      `;
    });
  }
  if (value === "planets") {
    data.results.forEach((item) => {
      output += `
      <div class="col-4">
      <div class="card p-3 m-3" >
      <h6 class = "card-title text-center">${item.name}</h6>
      </div></div>
      `;
    });
  }
  if (value === "starships") {
    data.results.forEach((item) => {
      output += `
      <div class="col-4  ">
      <div class="card p-3 m-3">
      <h6 class = "card-title text-center">${item.name}</h6>
      </div></div>


      `;
    });

  }

  output = output + `</div>`;
  results.innerHTML = output;
}

toggleBtn.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (toggleBtn.classList.contains("toggled")) {
    toggleBtn.classList.remove("toggled");
    body.classList.remove("dark");
    lightenText.classList.remove("unselected");
    darkenText.classList.add("unselected");
  } else {
    toggleBtn.classList.add("toggled");
    body.classList.add("dark");
    lightenText.classList.add("unselected");
    darkenText.classList.remove("unselected");
  }
});

// added Event Listener to buttons in navbar
document.querySelector("#pillNav2").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});
