/**
 * Déclaration de la fonction constructeur
 *
 * */
/* function Circle(radius, name) {
  // propriétés
  this.radius = radius;
  this.name = name;
}
Circle.prototype.area = function () {
  return this.pi * this.radius * this.radius;
};
Circle.prototype.pi = 3.14; */

// Sucre syntaxique
class Circle {
  // static pour les propriétés de classe
  static pi = 3.14;
  constructor(radius = 2, name = "cercle") {
    // propriétés
    this.radius = radius;
    this.name = name;
  }
  // ajout de la fonction area au prototype de Circle
  area(unit = "m²") {
    return Circle.pi * this.radius * this.radius + unit;
  }
}
console.log(`Circle.pi `, Circle.pi);

const small_circle = new Circle(2, "Petit Cercle");
const big_circle = new Circle(4, "Grand Cercle");
const other_circle = new Circle();

console.log(`other_circle`, other_circle);
console.log(`small_circle`, small_circle);
console.log(`big_circle`, big_circle);
console.log(`aire de small_circle`, small_circle.area());
console.log(`aire de big_circle`, big_circle.area("cm²"));
