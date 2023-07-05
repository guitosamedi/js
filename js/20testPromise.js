/**
 * Exemple de fonction qui retourne instance de promesse
 * @returns Promise
 */
function testPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (Math.random() > 0.9) {
        // Cas favorable
        resolve("Promesse 1 tenue : Tout va bien");
      } else reject("Promesse 1 non tenue : C'est la cata");
    }, 2000);
  });
}
/**
 * Exemple de fonction qui retourne instance de promesse
 * @returns Promise
 */
function testPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (Math.random() > 0.1) {
        // Cas favorable
        resolve("Promesse 2 tenue : Tout va bien ");
      } else reject("Promesse 2 non tenue : C'est la cata");
    }, 2000);
  });
}
/**
 * Exemple de fonction qui retourne instance de promesse
 * @returns Promise
 */
function testPromise3() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (Math.random() > 0.1) {
        // Cas favorable
        resolve("Promesse 3 tenue : Tout va bien ");
      } else reject("Promesse 3 non tenue : C'est la cata");
    }, 2000);
  });
}
/* testPromise()
  .then((msg) => {
    console.log(`msg issu de la promesse tenue `, msg);
    return testPromise2();
  })
  .then((msg) => {
    console.log(`msg issu de la promesse tenue `, msg);
    return testPromise3();
  })
  .then((msg) => {
    console.log(`msg issu de la promesse tenue `, msg);
  })
  .catch(error => {
    console.error(error);
  }) */

async function testAppelPromise() {
  try {
    const msg1 = await testPromise();
    // si le code ci-dessous est exécuté, c'est que la promesse de testPromise a été tenue
    const msg2 = await testPromise2();
    // si le code ci-dessous est exécuté, c'est que la promesse de testPromise a été tenue
    const msg3 = await testPromise3();
    // si le code ci-dessous est exécuté, c'est que la promesse de testPromise a été tenue
    console.log(msg1, msg2, msg3);
  } catch (error) {
    console.error("Erreur attrapée : ", error);
  }
}
testAppelPromise();
