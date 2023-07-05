let i = 1;
function a() {
  let j = 2;
  b();
  function b() {
    {
      let k = 3;
      console.log("k : ", k);
    }
    let l = 4;
    console.log("l : ", l);
  }
}
a();

/**
 * Contexte global, accès à  : i, a()
 * Contexte de la fonction a, accès à : i, a(), j, b()
 * Contexte de la fonction b, accès à : i, a(), j, b(), l
 * Contexte du bloc de code dans b, accès à : i, a(), j, b(), k
 *
 */
