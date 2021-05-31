/**
 * Escribe una funcion llamada productOfArray que reciba un array y 
 * mutiplique cada elemento con el siguiente.
 * Debe retornar el total de la multiplicacion de todos los elementos.

 * @param {Array} arr - esto es un array.
 * @returns {Number} - deberia retornar un number.
 */

 function productOfArray(arr) {
    let result= 1;
    for(let i=0; i<arr.length;i++){
        result = result * arr[i];
        //console.log(result)
    }
    return result;
}

//arrowFunction

let productOfArray = (arr) =>{
    let result= 1;
    for(let i=0; i<arr.length;i++){
        result = result * arr[i];
        //console.log(result)
    }
    return result;
}
/**RECURSIVIDAD */

function productOfArray(arr){
    if(arr.length === 0) return "array vacio";
    if(arr.length === 1) return arr[0];
    
    return arr.shift()*productOfArray(arr());

}
[1,2,3,4]