/**
 * Déclaration de la classe Cake
 */
class Cake {
  /**
   *
   * @param {String} name
   * @param {String} recipe
   */
  constructor(name, recipe) {
    // propriétés
    this.name = name;
    this.recipe = recipe;
  }
  showRecipe() {
    console.log(`Recette : `, this.recipe);
  }
}

// Instanciation
const cake1 = new Cake(
  "Alizés",
  "Aucune idée  mais il y a du fruit de la passion !"
);
//cake1.showRecipe();

// Classe  WeddingCakes qui hérite de cake
class WeddingCake extends Cake {
  /**
   *
   * @param {String} name
   * @param {String} recipe
   * @param {Number} stair
   */
  constructor(name, recipe, stair) {
    // appel du constructeur de la classe parent avec les bons arguments
    super(name, recipe);

    // déclaration des propriétés propres à cette classe
    this.stair = stair;
  }
  // Polymorphisme : c'est à dire que la méthode "showRecipe" garde le même nom mais ne fait pas la même chose en fonction de la classe utilisée
  showRecipe() {
    super.showRecipe();
    console.log(`à monter sur ${this.stair} étages`);
  }
}
const cake2 = new WeddingCake("Mistral", "Recette de gateau de mariage", 72);
cake2.showRecipe();
console.log(`cake2 : `, cake2);
