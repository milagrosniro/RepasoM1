/**Muy Eficiente!
 * Divide y Triunfaras!!
 * Cada iteracion va a ir dividiendo el subconjunto en 2 para ir odrnenandolo entre ellos
 * La manera de ordenarlo esta basada ene l concepto de Pivote
 * Se elije un elem al azar como pivote y se van a ir ordenando los elem segun si son > o < al pivote
 * (si un elem es < va a la izq. si es > a su dcha)
 * Asi hasta que el length de los subconjutos sea <=1
 * Luego, se realiza la ordenacion con respecto al pivote
 * 
 * 
 * Creo un pivote
 * Creo dos array uno izq otro dcho
 * Forma recursiva: caso corte; cuando el array es <=1 que retorne el array
 * recorro el array y voy colocando a la dcha o izq segun corresponda
 * (si el pivote es al zara, preguntar si hay un numero q sea = alpivote y este enuna posicion diferente al pivote y ordenarlo)
 * llamar recurivamente la funcion con cada array concatenando en el medio al pivote
 */

function quickSort(arr) {
  // construye un algoritmo de busqueda bubble sort
 /*
  if(arr.length<=1) return arr;

  let pivote = arr[0];
  let left = [];
  let right = [];

  for(let i=1; i<arr.length; i++){
    if(arr[i]< pivote){
      left.push(arr[i])
    }
    right.push([arr[i]])
  }
  return quickSort(left).concat(pivote, quickSort(right))
*/

let posPivote = Math.floor(arr.length/2);
let pivote = arr[Math.floor(arr.length/2)];
let left = [];
let right = [];

if(arr.length>1){
  for(let i=0; i<arr.length; i++){
    if(arr[i]< pivote){
      left.push(arr[i])
    }
    else if(arr[i]> pivote){
      right.push(arr[i])
    }
    else if(arr[i]=== pivote && i !== posPivote){
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivote, quickSort(right));
}
  return arr;
  
}
