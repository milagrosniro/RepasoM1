/**
 * Escribe una funcion llamada power que reciba una base y un exponente.
 * Debera retornar la base por el exponente. Similar a como funciona 
 * Math.pow();
 * No deberia fijarme los casos negativos

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function power(base, exp) {
    if((base|| exp) <= 0) return 0;
    return base*exp;
}

//arrowFunction

let power = (base,exp) =>{
    if((base|| exp) <= 0) return 0;
    return base*exp;
}