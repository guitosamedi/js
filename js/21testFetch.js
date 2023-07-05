import createMarkup from "./utils/utils.js";
import University from "./classes/University.js";

const form = document.querySelector("form");
let universities = [];
let section_univ = document.querySelector("#universities");

form.onsubmit = async function (e) {
  console.log(`Dans onsubmit`);
  e.preventDefault();
  let country = document.querySelector("#country").value;
  console.log(`country`, country);
  // appel du endpoint via fetch
  universities = await getUniversities(country);
  // On vide tous les éléments qui seraient déjà dans la section universities
  section_univ.innerHTML = "";
  universities.forEach(univ => {
    new University(univ.name, univ.web_pages);
  })
}

function getUniversities(country) {
  return fetch(`http://universities.hipolabs.com/search?country=${country}`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Le serveur ne répond pas !");
      } else return response.json();
    })
    .then((univs) => {
      
      return univs;
    })
    .catch((error) => console.log(`Erreure attrapée : `, error));
}

// Gestion de l'événement submit du formulaire pour qu'il ne recharge pas la page 

/* const api = fetch("http://universities.hipolabs.com/search")
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("Le serveur ne répond pas !");
    } else return response.json();
  })
  .then((data) => console.log(`contenu du resolve de la promesse : `, data))
  .catch((error) => console.log(`Erreure attrapée : `, error));

let fieldset = createMarkup("fieldset", null, form, [{name:"id", value:"select-fieldet"}])
let select = createMarkup("select", null, fieldset, [
  { name: "name", value: `country-select` },
]);

for (let item of api.then(data => data.json())) {
  createMarkup("option", `${item.country}`, select, [
    { name: "value", value: "" },
  ]);
} */ 