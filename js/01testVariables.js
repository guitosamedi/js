// déclaration avec let, const ou var et une assignation avec =
let i;
var z;
console.log(`z : `, z);
console.log(`z = ${z}`);
console.log(`Type de i `, typeof i);
i = 12;
console.log(`i = ${i}`);
console.log(`Type de i `, typeof i);
i = "Hello";
console.log(`i = ${i}`);
console.log(`Type de i `, typeof i);
i = false;
console.log(`i = ${i}`);
console.log(`Type de i `, typeof i);

i = null;
console.log(`i = ${i}`);
console.log(`Type de i `, typeof i);

{
  let j = 1;
  console.log(`j dans le bloc = ${j}`);
}
//let j;
//console.log(`j dans le contexte global (en dehors de tout bloc) = ${j}`);

{
  let j = 12;
}
z = 1;

// Transtypage de number ou de string vers boolean
let k = -1.2; // faux si égal à 0
k = "0"; // faux si = ""
console.log(`k`, !!k);

// string vers number
let l = "123"; //si comporte autre chose que des caractères numériques : NaN
console.log(`l`, +l);

const m = "Hello";
m = "Hello";
console.log(`m :  `, m);
