function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }
  // retourne un objet littéral qui a pour propriétés getBalance et setBalance
  return {
    getBalance,
    setBalance,
  };
}
// account aura pour type le type du retour de la fonction soit un objet
// par un mécanisme de "closure" ou "fermeture", on a accès dans le scope global,  via des fonctions,  à la variable balance
const account = makeBankAccount();
account.setBalance(100);
//console.log(`balance `, balance);
console.log(`balance `, account.getBalance());
