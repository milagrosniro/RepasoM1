/**
 * Dado dos strings, escribe una function para determinar si el 
 * segundo string es un anagrama de el primero.
 * Deberia retornar true si cada letra en el primer string se encuentra 
 * en el segundo string.
 * Un anagrama consiste en crear una palabra a partir de la 
 * reordenación de las letras de otra palabra. 
 * Como cinema y iceman.

 * @param {string} first - esto es un string.
 * @param {string} second - esto es un string.
 * @returns {boolean} - deberia retornar true o false.
 */

function validAnagram(first, second) {

if(first.length !== second.length){
    return false;
}
for(let i=0; i<first.length; i++){
    var letter = first[i]
    if(second.indexOf(letter)=== -1){
        return false
    }
        second.replace(letter, "");
        
    }
    return true;


// var firstArray = first.split("");
// var secondArray = second.split("");
// if(firstArray.length !== secondArray.length){
//     return false;
// }

// for(var i = 0; i<firstArray.length; i++){

// //si en el secondArray existe el valor de firstArray[i]
// var letra = firstArray[i];
// console.log(letra);
// if(secondArray.indexOf(letra) === -1){
//     return false
// }
// }
// return true;
}
