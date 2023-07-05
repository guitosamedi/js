let i = 12;
try {
  console.log(`i : `, i);
} catch (error) {
  const h1 = document.createElement("h1");
  h1.innerText = "Attention, le codeur js ne sait pas déclarer des variables !!!";
  document.body.appendChild(h1);
  console.error(error);
}
function add (a,b) {
  if (typeof(a) != "number") throw new Error("Veuillez entrer un nombre");
  return a / b;
}
try {
  console.log(`result :`, add("qsdfsqdf",2));
} catch (error) {
  const h1 = document.createElement("h1");
  h1.innerText = "Attention, on ne peut diviser qu'un nombre !!!";
  document.body.appendChild(h1);
  console.error(error);
}



