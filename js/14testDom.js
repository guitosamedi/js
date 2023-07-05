// récupération de la référence à un élément du DOM
const h1 = window.document.getElementById("h1");

// Modification des proprités de cet éléments
h1.innerText = "Mon nouveau texte";
h1.innerHTML = `<span>Test</span>`;
h1.setAttribute("class", "toto");
//h1.hidden = true;
console.log(`h1 : ` + h1);
//h1.remove();
 
//création d'un élément du dom
let h2 = document.createElement("h2");
h2.innerText = "Titre de niveau 2";
// Ajoute h2 en tant que dernier fils de body
document.body.appendChild(h2);
h2.title = "test de titre";
h2.id = "testid";

/* while (h2) {
  console.log("class de h2 : ", h2.constructor.name);
  // Remonte la chaîne des prototypes
  h2 = Object.getPrototypeOf(h2);
} */
// Récupère le premier élément du dom qui correspond au selecteur passé en argument
const li_3 = document.querySelector("header > nav > ul > li:nth-child(3)");
console.log(`li_3`, li_3);
// Récupère tous les éléments du dom qui correspondent au selecteur passé en argument
const lis = document.querySelectorAll("header > nav > ul > li");
console.log(`lis`, lis);
