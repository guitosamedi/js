const fruits = ["Fruit de la passion", "Cerise", "Pomme", "Kiwi"];
//const fruits = new Array("Cerise", "Pomme", "Fruit de la passion");
console.log(`fruits`, fruits);
console.log(`Taille du tableau :`, fruits.length);

// Ajout d'un élément à un tableau
console.log(fruits.push("Fraise"));

console.log(`fruits[1]`, fruits[1]);
// parcours du tableau fruits
fruits.forEach((fruit, index) => {
  console.log(`fruit (index/valeur):`, index, fruit);
});

const fruitsLi = fruits.map((fruit) => `<li>${fruit}</li>`);
console.log(`fruitsLi : `, fruitsLi);

// utilisation de filter - je veux juste les fruits qui contiennent a
const fruitsA = fruits.filter((fruit) => fruit.includes("a"));
console.log(`fruitsA`, fruitsA);

//fruits.sort();
// Classement par ordre de taille de chaîne de caractère
console.log(`fruits`, fruits);
fruits.sort((a, b) => {
  console.log(`a.length - b.length`, a.length - b.length);
  return a.length - b.length;
});
console.log(`fruits`, fruits);
