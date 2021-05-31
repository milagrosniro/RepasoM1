/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function averagePair(arr, num) {

//recorro el array con dos punteros
for(let i=0; i<arr.length; i++){
//el puntero i empieza desde la posicion 0
    for(let j=arr.length-1; j>0; j--){
//cada vez que se cambie de posicion el puntero i, se recorre el array con un puntero j
//que va desde la ultima posicion hasta la posicion 0
//de esta manera se puede realizar comparaciones, operaciones, etc con todos los numeros
        let average= (arr[i]+arr[j])/2;
        console.log(average);
//mientras la posicion de i y j no sean la misma, realizo la operacion        
        if(i !== j && average === num){
            return true;
        }
    }
}
    return false;
}

var arr= [4,4,5,7,10];