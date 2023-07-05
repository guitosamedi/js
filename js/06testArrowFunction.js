/* function add(a, b) {
  return a + b;
} */
const add = (a, b) => a + b;
console.log(`retour de add(5,6)`, add(5, 6));

const helloName = (name) => "Bonjour, " + name;
console.log(helloName("Bob"));
const helloLater = () => {
  //console.log(`Hello 2 secondes plus tard`);
};

window.setTimeout(helloLater, 2000); // non bloquant
console.log(`Exécution de la ligne 14`);

/* let i = 0;
const intervalID = window.setInterval(() => {
  console.log(i);
  if (i == 5) clearInterval(intervalID);
  i = i + 1;
}, 1000); */

function afficheI(i) {
  setTimeout(function () {
    if (i < 6) {
      console.log(`i : `, i);
      afficheI(i + 1);
    }
  }, 1000);
}
afficheI(1);
