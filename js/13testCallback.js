function success() {
  console.log(`C'est gagné !`);
}
function failed() {
  console.log(`T'es un looser !`);
}
/**
 * playLoto est une fonction de haut niveau, elle utilise des callbacks
 * @param {Callback} win
 * @param {Callback} loose
 */
function playLoto(s, f) {
  if (Math.random() > 0.5) s();
  else f();
}

playLoto(success, failed);
