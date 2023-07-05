import createMarkup, { test } from "./utils/utils.js";

const btn = document.querySelector("button");
const a = document.querySelector("a");

// gestion de l'événement click - asynchrone par essence
btn.onclick = manageBtnClick;

function manageBtnClick(event) {
  console.log(`clic sur le bouton`);
  createMarkup("p", "Lorem ipsum ....", document.body);
}
test(); 
