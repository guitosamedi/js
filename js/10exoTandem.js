/**
 * Class bike
 */
class Bike {
  /**
   * Constructeur
   * @param {String} brand
   * @param {String} model
   * @param {Number} weight
   */
  constructor(brand, model, weight) {
    this.brand = brand;
    this.model = model;
    this.weight = weight;
  }
  /**
   * Renvoie dans la console
   * @returns void
   */
  pedal() {
    console.log(`Je pédale !`);
  }
}

/**
 * Class Tandem hérite de Bike
 */
class Tandem extends Bike {
  // Déclaration d'une propriété de classe avec le mot clés "static"
  static seat_number = 2;
  // method overriding
  pedal() {
    console.log(`Nous sommes ${Tandem.seat_number} à pédaler`);
  }
}

const bike = new Bike("toto", "tata", "3kg");
const tandem = new Tandem("tandemBike", "docilib", "5kg");
console.log(`Appel de la méthode pedal depuis bike`);
bike.pedal();
console.log(`Appel de la méthode pedal depuis tandem`);
tandem.pedal();
