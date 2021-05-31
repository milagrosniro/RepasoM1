/**
 * Escribe una function llamada BinaryToDecimal que acepte string numerico 
 * y una base.
 * La funcion deberia retornar un numero entero. 
 * La idea es tomar un numero binario y "pasarlo" a un numero entero.
 * La formula para convertir un numero binario en decimal es: N * B ^ I 
 * Donde N es el numero B es la base e I es el indice.
 * Digamos que tenemos el binario "101" la formulara seria asi:
 * 1 * 2 ^ 2  +  0 * 2 ^ 1  +  1 * 2 ^ 0

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

/*
Pasos:
-transformar el string en un array y darlo vuelta
-iterarlo y en cada iteracion hacer la operacion = digito*base^posicion
-sumar los resultados de cada iteracion --> numero decimal
*/
function BinaryToDecimal(binary, base) {

 //transformo el string en un array y lo doy vuelta, 
 let binaryArrayReverse = binary.split("").reverse();
 console.log(binaryArrayReverse);

 //creo una variable sumatoria, que va a sumar el resultado de la operacion en cada digito del num enviado
 let sumatoria= 0;
 
 //itero sobre cada elemento del array
 
 for(let i=0;i<binaryArrayReverse.length; i++){
    //a cada digito lo multiplico por la base elevado a la posicion
   var num = binaryArrayReverse[i]*Math.pow(base,i);
   //sumo el rdo a la sumatoria
   sumatoria = sumatoria + num;
 }
//retorno la sumatoria total de todas las iteraciones
 return sumatoria;







/*
var binaryArray = binary.split("").reverse(); //[0,1]
var total = 0;

for(var i = 0; i<binaryArray.length; i++){
//N = array[i]
//B = base
//I = i
var numDec = binaryArray[i]*Math.pow(base,i);
console.log(numDec);
              //  1   *   2**0 = 1 

total = total + numDec
}    
    
   return total; */
}

// var numEntero=0;


// for(var i=0; i < array.length; i++){
//     if(binary[i]===1){
//         numEntero= numEntero + Math.pow(base,(array.length-1-i));
//     }
// }
// return numEntero;