const results = document.querySelector("#results");
let darkMode = localStorage.getItem("darkMode");
const toggleBtn = document.querySelector("#toggleBtn");
const filmRequest = "https:swapi.tech/api/films/";

function loading() {
  results.innerHTML =
    '<i class="loading fas fa-circle-notch fa-spin fa-sw"></i>';
}

//  we will grub the filmsrequest and retrieve the data and dsplay films

  fetch(filmRequest)
  
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let output = `<div class="row">`;
    let films = document.querySelector("#films");

    console.log(data);
    data.result.forEach((item) => {
      output += `
      <div class="col-md-4" id="cardElement">
      <div class="card p-3 m-3 " >
      <h5 class = "card-title text-center"><strong>${item.properties.title}</strong></h5>
      <br />
      <p class= "card-title "><strong>Director:</strong> ${item.properties.director}</p>
      <p class= "card-title "><strong>Producer:</strong> ${item.properties.producer}</p>
      <p class= "card-title "><strong>Release date:</strong> ${item.properties.release_date}</p>
      </div></div>
      `;
    });

    output = output + `</div>`;
    films.innerHTML = output;
  });


// we will grub the link to retrieve the data and display information depening on value
async function asyncFetch(value) {
  const res = await fetch(`https:swapi.tech/api/${value}/`);
  const data = await res.json();

  displayResults(data, value);
}

function displayResults(data, value) {
  let output = `<div class="row ">`;
  let header = document.querySelector("#header");
  console.log(data);
  if (value === "people") {
    header = `<h1 class="text-center" id="#header"><i class="fa-solid fa-people-group rotating"></i> ${value}</h1>`;
    data.results.forEach((item) => {
      output += `
      <div class="col-md-4 " id="cardElement">
      <div class="card p-3 m-3 " >
      <h6 class = "card-title text-center">${item.name}</h6>

      </div></div>
      `;
    });
  }
  if (value === "planets") {
    header = `<h1 class="text-center" id="#header"><i class="fa-solid fa-earth-americas rotating"></i> ${value}</h1>`;
    data.results.forEach((item) => {
      output += `
      <div class="col-md-4" id="cardElement">
      <div class="card p-3 m-3" >
      <h6 class = "card-title text-center">${item.name}</h6>


      </div></div>
      `;
    });
  }
  if (value === "starships") {
    header = `<h1 class="text-center" id="#header"><i class="fa-solid fa-shuttle-space rotating"></i> ${value}</h1>`;
    data.results.forEach((item) => {
      output += `
      <div class="col-md-4" id="cardElement">
      <div class="card p-3 m-3">
      <h6 class = "card-title text-center">${item.name}</h6>
      </div></div>


      `;
    });
  }

  output = header + output + `</div>`;
  results.innerHTML = output;
}

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();

  lightenText.classList.add("unselected");
  darkenText.classList.remove("unselected");
  toggleBtn.classList.add("toggled");
}

toggleBtn.addEventListener("click", () => {
  let body = document.querySelector("body");
  darkMode = localStorage.getItem("darkMode");

  if (toggleBtn.classList.contains("toggled")) {
    disableDarkMode();

    toggleBtn.classList.remove("toggled");
    body.classList.remove("dark");
    localStorage.setItem("darkMode", null);

    lightenText.classList.remove("unselected");
    darkenText.classList.add("unselected");
  } else {
    toggleBtn.classList.add("toggled");
    body.classList.add("dark");
    localStorage.setItem("darkMode", "unselected");
    enableDarkMode();
    lightenText.classList.add("unselected");
    darkenText.classList.remove("unselected");
  }
});

// added Event Listener to buttons in navbar to show value to asyncFetch function
document.querySelector("#pillNav2").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
  loading();
});
