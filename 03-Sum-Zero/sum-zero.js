/**
 * Escribe una function llamada sumZero que acepte un array de numeros 
 * enteros ordenado. La function deberia encontrar el primer par de 
 * numeros que sumados den 0. Retorna un array que incluya los dos 
 * numeros encontrados o undefined si el par no existe..

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */
//[0,1,2,0]
function sumZero(arr) {
    let arrNumSumZero= [];
    //[0,1,2,0]
   
for(let i=0; i<arr.length; i++){
    for(let j=arr.length-1; j>0; j--){
        if(i!== j && arr[i] + arr[j] === 0){
       return  arrNumSumZero.push(arr[i], arr[j])
        }
    }
}
 return undefined;











// let sumZeroArray = [];

// for(var i = 0; i<arr.length; i++){
//     for(var j=i+1; j<arr.length; j++){
//         if(arr[i]+arr[j] === 0){
//             sumZeroArray.push(arr[i], arr[j])
//         }
//     }
// }

// return undefined;


// var arrayNum = [];

// for(var i = 1; i<arr.length; i++){
// if((arr[i] + arr[i+1]) === 0){
//     arrayNum.push(arr[i] + arr[i+1])
//     return arrayNum;
// }
// return undefined;
// }
    
        // let resultado = [];
        // for (let i = 0; i < arr.length - 1; i++) {
        //     for (let j = i + 1; j < arr.length; j++) {
        //         if (arr[i] + arr[j] === 0) {
        //             resultado.push(arr[i], arr[j])
        //             return resultado
        //         }
        //     }
        // }
        // return undefined 
    
}
console.log(sumZero([-2,-1,0,2,3]))
