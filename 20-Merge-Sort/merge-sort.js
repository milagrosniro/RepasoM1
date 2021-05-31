/**Muy EFICIENTE
 * divide y venceras
 * 
 * Divide en mitades iguales el subarray y este a su vez en mitades
 * asi hasta que arr.length=1
 * Luego, va juntando los arr por parejas y las une y a estas las va uniendo hasta formas l arr ordenado
 * 
 *  
 * 
 * Hacer una funcion que ordene los array divididos :
 * A cada array le asigno un index
 * declaro un array que sera el q tiene lo elem ordenados.
 * Mientras el idnex de cada array sea menor a su longitud
 * los comparo y coloco el valor mas pequeño en el array, 
 * esa funcion debe retornar la concatenacion del array izq(sin el index) con el dcho(sin el index)
 * 
 */

 function mergeSort(arr) {
  
  if(arr.length <= 1){ return arr}
  
  let middle= Math.floor(arr.length/2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle); // desde middle en adelante(contando a middle)

return merge(mergeSort(left), mergeSort(right))
  

}
//FUNCION QUE ORDENA Y UNE LOS ARRAY
function merge(left, right){
  let ordArray =[];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      ordArray.push(left[leftIndex]);
      leftIndex++;
    }
    else{
      ordArray.push(right[rightIndex]);
      rightIndex++
    }

  }
  //cuando termine de recorrer y comparar los array, uno: el array ordenado + el array de la izq desde el lefIndex y el de la dcha desde le leftIndex
  return ordArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}