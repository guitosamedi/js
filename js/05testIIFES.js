/* La fonction anonyme immédiate permet d'isoler mes variables qui ne seront 
pas importées en tant que variables globales */
const getI = (function () {
  // code ici
  console.log(`Dans la Fonction Immédiate Anonyme`);
  let i = 1;
  function getI() {
    return i;
  }
  return getI;
})();
