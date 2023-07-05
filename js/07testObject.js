"use strict";
/**
 * Fonction constructeur appelée via this
 *  this qui représente l'instance en cours
 *  le retour est implicite et c'est une référence à l'instance qui
 * vient d'être créée
 *  Mise en place du mécanisme des prototypes
 * */
function Person(firstname, lastname) {
  // propriétés directes de type string
  this.firstname = firstname;
  this.lastname = lastname;

  this.specy = "Monster";
}
// Utilisation du prototype de la fonction constructeur

Person.prototype.introduceMyself = function () {
  console.log(
    `Bonjour, je m'appelle ${this.firstname} ${this.lastname} et j'appartiens à l'espèce ${this.specy}`
  );
};
Person.prototype.specy = "Human";
//Object.prototype.specy = "Animal";

/* instanciation via le mot clé new. C'est cette syntaxe qui permet de déclencher tous les mécanismes liés à la Programmation Orientéé Objet

*/
const bob = new Person("Bob", "Dylan");
const joe = new Person("Joe", "Star");
console.log(`bob : `, bob);
console.log(`Joe : `, joe);
// appel de la méthode introduceMyself depuis une instance
// le point indique que je fais appel à une propriété
bob.introduceMyself();
joe.introduceMyself();

function test() { }
const t = new test();
console.log(`t  : `, t);
console.log(`t.specy  : `, t.specy);

class Animal {
  constructor(name) {
    this.name = name;
  }
}
// objets littéraux (ou format json)qui ont largement remplacé le xml dans le cadre
// des fichiers de config et les web services
const filou = {
  name: "filou",
  race: "Batârd",
};
console.log(`filou.name`, filou.name);
console.log(`filou["name"]`, filou["name"]);

const regions = [
  {
    nom: "Île-de-France",
    code: "11",
    departements: [
      { "petit nom": "Paris" },
      { "petit nom": "Seine Saint Denis" },
    ],
  },
  {
    nom: "Centre-Val de Loire",
    code: "24",
  },
  {
    nom: "Bourgogne-Franche-Comté",
    code: "27",
  },
  {
    nom: "Normandie",
    code: "28",
  },
  {
    nom: "Hauts-de-France",
    code: "32",
  },
  {
    nom: "Grand Est",
    code: "44",
  },
  {
    nom: "Pays de la Loire",
    code: "52",
  },
  {
    nom: "Bretagne",
    code: "53",
  },
  {
    nom: "Nouvelle-Aquitaine",
    code: "75",
  },
  {
    nom: "Occitanie",
    code: "76",
  },
  {
    nom: "Auvergne-Rhône-Alpes",
    code: "84",
  },
  {
    nom: "Provence-Alpes-Côte d'Azur",
    code: "93",
  },
  {
    nom: "Corse",
    code: "94",
  },
  {
    nom: "Guadeloupe",
    code: "01",
  },
  {
    nom: "Martinique",
    code: "02",
  },
  {
    nom: "Guyane",
    code: "03",
  },
  {
    nom: "La Réunion",
    code: "04",
  },
  {
    nom: "Mayotte",
    code: "06",
  },
];
/* regions.sort((a, b) => a.code - b.code);
console.log(`regions`, regions); */
console.log(regions[0].departements[1]["petit nom"]);

class Product {
  // propriété privée. On ne pourra y accéder que via un get ou un set
  #price;
  #name;
  constructor(name, price) {
    this.#price = price;
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  set name(new_name) {
    this.#name = new_name;
  }
  get price() {
    //traitements éventuels ici (l'utilisateur courant a le droit de voir le prix ou il a un coeff spécifique, ...)
    return this.#price;
  }
  set price(new_price) {
    // traitemens éventuels ici
    this.#price = new_price;
  }
}
const p = new Product("Zyu4", 30);
console.log("Nom et prix :", p.name, p.price);
p.price = 100;
console.log(p.price);

