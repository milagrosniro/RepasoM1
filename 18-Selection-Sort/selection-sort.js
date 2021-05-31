/** Tiene dos subconjuntos: uno de los elem q estan ordenados y otros de los q no
 * El algoritmo va al subconjj q no esta ordenado y busca el valor minimo
 * y lo mueve al inicio del array, es decir al subconj de los q ya estan ordenados
 * asi hasta q este todo ordenado.
 * 
 * let min = 0;
 * se recorre el array buscando el numero mas pequeño, al encontrarlo
 * lo guardo ella var min y lo llevo al inicio del array
 * el subarray ordenado ahora tiene 
*/

function selectionSort(arr) {
  // construye un algoritmo de busqueda bubble sort
  
  for(let i=0; i<arr.length-1; i++){
    /**este bucle for separa el subconj de los ord de los desordenados */
    let posMin= i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]< arr[posMin]){
        posMin = j;
  /**Intercambiar el elem con valor min por la primera posic del arr
   * q todavia no esta ordenado
   */
}

}
let aux = arr[posMin];
arr[posMin] = arr[i];
arr[i] = aux;
  }
  return arr;
}
