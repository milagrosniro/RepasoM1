/**
 * Va comparando de izq-->dcha y compara a lso elem q estan al lado
 *Empieza con el elem en la posic 1, ya que el que esta en la 0 no tiene con quien compararse
creamos una var aux donde almacenamos en cada iteracion el elem que queremos mover
y una var j que es la posicion donde estara el elem con el q comparamos
Mientras la posicion j >=0 y el elemento q este en esa posciion sea mayo al aux
 Desplazamos el elemn q esta en la posicion j a la dcha, a la posicion j+1
 

*/
function insertionSort(arr) {
  // construye un algoritmo de busqueda insertion sort

for(let i= 1; i<arr.length; i++){
  let aux = arr[i];
  let j= i-1
  
  while(j >= 0 && arr[j] > aux ){
    //pasamos al elem que esta en j+1 a la izq
    arr[j+1] = arr[j];
    //ahora j vale uno menos para poder comparar el aux con el otro elem q esta a la izq
    //asi sucesivamente hasta q j<0 o no el valor q este en esa posic sea mayor a uax
    j = j-1 
  }
  //en ese caso colocamos a la dcha del arr[j], es decir en j+1 al valor del aux
  arr[j+1] = aux;
  
}
return arr;
}
