export default class Task {
  constructor(i_name, i_done = false) {
    // propriétés
    this.name = i_name;
    this.done = i_done;

    // appel de la fonction render
    this.dom_elts = this.render();
    // gestion des événements avec la "liaison / binding" de this sur handleEvents si on utilise le mot clé function
    //this.handleEvents = this.handleEvents.bind(this);
    this.handleEvents();
  }
  validate() {
    this.done = true;
  }
  unvalidate() {
    this.done = false;
  }

  handleEvents() {
    // ATTENTION, si la fonction gestionnaire d'événement est déclarée avec le mot clé "function", this représente l'instance appelante, c'est à dire elt_btn_delete. En revanche, si on a utilisé une fonction fléchée, alors this représentera l'instance en cours de Task
    this.dom_elts.elt_btn_delete.onclick = () => {
      console.log(`click sur le bouton de suppression`);
      this.dom_elts.elt_article.remove();
    };
  }
  render() {
    const elt_article = this.createMarkup(
      "article",
      "",
      document.querySelector("#tasks")
    );
    const elt_title = this.createMarkup("h2", this.name, elt_article);
    const elt_btn_validate = this.createMarkup(
      "button",
      "Valider",
      elt_article
    );
    const elt_btn_delete = this.createMarkup(
      "button",
      "Supprimer",
      elt_article
    );

    return {
      elt_article: elt_article,
      elt_title: elt_title,
      elt_btn_validate: elt_btn_validate,
      elt_btn_delete: elt_btn_delete,
    };
  }
  /**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
   * @param {String} markup_name
   * @param {String} text
   * @param {domElement} parent
   * @param {Array} attributes  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
  createMarkup(markup_name, text, parent, attributes = []) {
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
}
