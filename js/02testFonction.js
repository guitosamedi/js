/**
 * affiche helloWorld dans la console
 * Elle n'attend pas de paramètres
 * @returns void
 */
function test() {
  console.log(`HelloWorld`);
}
// appel de fonction
test();
// référence à la fonction
test;
/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns Number
 */
function add(a, b) {
  //paramètres

  // traitements
  return a + b;
}
console.log(`resultat add : `, add);

const b = add; // b a maintenant la même référence que add (b alias de add)
console.log(b(8, 2)); //arguments

const c = add(8, 9); // appel de la fonction. On stocke le retour de la fonction
console.log(`c : `, c);

const i = 12;
const j = i; // quand on manipule des types primitifs (string, boolean, number), l'assignation est un passage par valeur sinon, l'assignation est un passage par référence

// la signature d'une fonction : son nom, ses paramètres et son retour
afficheNomDeFamille("Gonzalez"); // appel de la fonction avec le paramètre "Gonzalez"

function afficheNomDeFamille(nom) {
  // définition de la fonction
  console.log(nom);
}
