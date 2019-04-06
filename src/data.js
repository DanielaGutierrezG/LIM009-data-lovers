/* Manejo de data */

const average = (pokemons,peso)=>{

let newarray=[];
 let suma = 0;
 let promedio;

 for(let i=0; i<pokemon.length; i++){
 newarray.push(parseFloat((pokemon[i].weight).slice(0,-2)));
 suma += newarray[i];
 }

 promedio = suma/newarray.length;
 return promedio;

 }
window.average = average;