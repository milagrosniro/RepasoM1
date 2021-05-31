/**
 * Escribe una funcion llamada isPalindrome que reciba un string.
 * Debe retornar true si la string es un palindromo.
 * Osea si se lee igual de derecha a izquierda, como neuquen.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

function isPalindrome(str) {
    let strReverse = str.split("").reverse().join("");
    if(strReverse === str){
        return true;
    }else{
        return false;
    }
}

/**Arrow Function */

let isPalindrome = (str) =>{
    let strReverse = str.split("").reverse().join("");
    if(strReverse === str){
        return true;
    }else{
        return false;
    }
}

/**Recursividad */
function isPalindrome(str){
    if(str.length === 0) return true;
    
    let last = str.length-1;
    if(str[0] === str[last]){
 return isPalindrome(str.substr(1, last-1));
    }
    else{
        return false;
    }
}