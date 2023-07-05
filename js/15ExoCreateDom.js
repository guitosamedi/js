/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Object} attribute  (doit comprendre les propriétés name et value)
 * @returns domElement
 */
/* function createMarkup(markup_name, text, parent, attribute) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  if (attribute && attribute.hasOwnProperty("name") && attribute.hasOwnProperty("value")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}
// Création des éléments du  DOM via la fonction createMarkup
const header = createMarkup('header', "", document.body);
const nav = createMarkup('nav', '', header);
for (let i = 0; i < 4; i++) {
  createMarkup('button', `Item ${i + 1}`, header);
}
document.querySelector("button").style.color = "red"; */

/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Array} attributes  (doit comprendre les propriétés name et value)
 * @returns domElement
 */
function createMarkup(markup_name, text, parent, attributes = []) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  attributes.forEach((attribute) => {
    if (
      attribute &&
      attribute.hasOwnProperty("name") &&
      attribute.hasOwnProperty("value")
    ) {
      markup.setAttribute(attribute.name, attribute.value);
    }
  });

  return markup;
}
// Création des éléments du  DOM via la fonction createMarkup
const header = createMarkup("header", "", document.body);
const nav = createMarkup("nav", "", header);
for (let i = 0; i < 4; i++) {
  createMarkup("button", `Item ${i + 1}`, nav, [
    { name: "class", value: "danger" },
    { name: "id", value: "danger" + i },
  ]);
}
document.querySelector("button").style.color = "red";
