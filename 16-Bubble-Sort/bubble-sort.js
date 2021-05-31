/**Compara el elemento conla derecha e intercambia sus posiciones si estan desordenados
 * Hacer dos for;
 * uno para indicar las veces que vamos a recorrer el array.
 * Aca las veces que recorremos el array segua length-1 ya que el ultimo elem ya estaria ordenado d epor si
 * otro para decir las comparaciones que vamos haciendo
 * Aca las veces que haremos la comparacion sera una menos que la de arriba pq ya se ha ido ordenando un elemento (length-1-i)
*/

function bubbleSort(arr) {
  // construye un algoritmo de busqueda bubble sort

  let swap = true; //esto significa que han habido cambios

  while(swap===true){
    swap= false; //esto significa que no es neceario hacer mas cambios
    //cuando no ingrese al if del segundo for (en ninguna iteracion del priemr for), se mantendra en swap=false, lo q significa q no es necesario hacer mas cambios
    for(let i=0; i<length-1;i++){
      for(let j=0;j<length-i;j++){
        if(arr[j] > arr[j+1]){
          let aux= arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = aux;
          swap= true; //esto significa que han habido cambios
        }
      }  
    }
  }
  return arr;
}
