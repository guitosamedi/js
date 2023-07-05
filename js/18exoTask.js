import Task from "./classes/Task.js";
import createMarkup from "./utils/utils.js";

// création du formulaire
const form = createMarkup("form", "", document.getElementById("form"));
const label = createMarkup("label", "Tâche : ", form);
const input = createMarkup("input", "", form, [{ name: "type", value: "text" }]);
const submit = createMarkup("input", "", form, [{ name: "type", value: "submit" }, { name: "value", value: "Envoyer" }]);

// Gestion de l'événement submit du formulaire
form.onsubmit = function (event) {
  event.preventDefault();
  const input_value = input.value;
  // création d'une tâche 
  new Task(input_value);
}

/* const t1 = new Task("Faire du sport");
console.log(`Tache : `, t1); */
