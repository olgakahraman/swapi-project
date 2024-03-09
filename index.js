const results = document.querySelector("#results");


const filmRequest = "https:swapi.tech/api/films/";



//  we will grub the filmsrequest and retrieve the data and dsplay films
fetch(filmRequest).then((response)=>{
  return response.json();
  
}).then((data) => {
   let output = `<div class="row">`;
  let films = document.querySelector("#films");
  console.log(data);
 data.result.forEach((item)=>{
   output += `
      <div class="col-4">
      <div class="card p-3 m-3 " >
      <h6 class = "card-title text-center">${item.properties.title}</h6>
      </div></div>
      `;
 }
 )
 output = output + `</div>`
  films.innerHTML = output;
})

// we will grub the link to retrieve the data and display information depening on value 
async function asyncFetch(value) {
  const res = await fetch(`https:swapi.tech/api/${value}/`);
  const data = await res.json();
 
  displayResults(data, value);
};


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


toggleBtn.addEventListener("click", (event) => {
  event.preventDefault();
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

// added Event Listener to buttons in navbar to show value to asyncFetch function 
document.querySelector("#pillNav2").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});
