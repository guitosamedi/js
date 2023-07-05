/**
 * Class CustomString qui étend String
 */
class CustomString extends String{
  split(limiter){
    const initial_table =  super.split(limiter);
    // Utilisation de map pour créer le deuxième tableau qui ajoute le limiter sauf sur le dernier élément
    const final_table = initial_table.map((elt,index)=>{
      if(index === (initial_table.length - 1)) return elt;
      return elt + limiter;
    });
    return [
      initial_table,
      final_table
    ]
  }
}
const hello = new CustomString("Hello World");
console.log(`resultat : `, hello.split("o"));
