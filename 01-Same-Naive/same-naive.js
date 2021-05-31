/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es 
 * igual al cuadrado de valor del segundo array. 
 * La frecuencia debe ser la misma.

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

//1)Comparar si tienen el mismo tamaño   
//2)ordenar los valores dos array de menor a mayor
//3) Comparar valores de ambos

//1) Comparar si tienen el mismo tamaño
//2) iterar un array y preguntar si en el indexof(i) el valor es el que corresponde

// arr1 = [1, 4, 9, 16 ]
// arr2 = [1,2,3,4]

// function same(arr1, arr2){
//     if(arr1 !== arr2.length){
//         return false
//     }

//     for(var i=0; i<arr2.length; i++){
//         var nroAlCuadrado = arr2[i]**arr2[i];
//         if(arr1.indexOf(nroAlCuadrado) === -1){
//             return false;
//         }else{
//             return true;
//         }
//     }
// }

function same(arr1, arr2) {

    // arr1 = [1, 4, 9, 16 ]
    // arr2 = [1,2,3,4]

    /******************OPCION 1 FUNCIONA!!! */
    /*
    //comparo la longitud de los array
    if(arr1.length !== arr2.length){
        return false;
    }
    
    //ordeno los array de menor a mayor
    arr1.sort(function(a,b){
        return a-b;
    })
    
    arr2.sort(function(a,b){
        return a-b;
    })
    
    //si el arr1 es true y el arr2 es true y la multiplicacion de cada indice el arr2 x su mismo numero es igual al arr1
    //el map forma un nuevo array con el resultado de la funcion en cada itereacion.
    //comparo el arr2.map con el arr1 y a cada array lo transformo en string para poder compararlos, sino no se puede.
    return !!arr1 && !!arr2 && arr2.map(function(x){
        return x*x;
    }).join() === arr1.join();
        */
    /******************************OPCION 2  FUNCIONA *******/
    
    if(arr1.length !== arr2.length){
        return false;
    }

    arr1.sort(function(a,b){return a-b});
    arr2.sort(function(a,b){return a-b});

    for(let i = 0; i<arr2.length; i++){
        let nro = arr2[i] * arr2[i]; console.log(nro);
        if(arr1.indexOf(nro) === -1){
            return false;
        } 
        arr1.splice(arr1.indexOf(nro),1);
        }return true;

        
        
    

    /**************OPCION 3 FUNCIONA*******************/
    /*
    // arr1 = [1, 4, 9, 16 ]
    // arr2 = [1,2,3,4]

    if (arr1.length !== arr2.length) {
        return false;
    }

    //itero el arr2 que es el que tiene los numero mas bajos
    for (var i = 0; i < arr2.length; i++) {
        //console.log(arr2[i]*arr2[i])
        //en cada iteracion creo una variable en la que se pida que muestre el indice del numero pasado entre (arr2[i]*arr2[i]) en el arr1
        //si el numero no esta en el arr1 el resultado que da el metodo indexOf es -1 y pido q retorne false 
        var nroAlCuadrado = arr1.indexOf(arr2[i] * arr2[i]);
        if (nroAlCuadrado === -1) {
            return false;
        }
        //si se encuentra el nro buscado en el indexOf, en el arr1 elimino el numero que figura en el indice de nroAlCuadrado,
        //esto se hace para evitar que un mismo valor sea igual para difentes numeros.  
        arr1.splice(nroAlCuadrado, 1); //eliminar un valor desde el indice nroAlCuadrado
    }

    return true;
*/
    /**********************OPCION 4 FUNCIONA */


    //array1.IndexOf(4) --> busca el valor 4 y retorna en que indice se encuentra.
    //cuando el numero no esta en el array devuleve -1

    //splice, saca un numero del array. Cunado encuentre el numero lo saca, para 
    //que no se repita si esta dos veces.
/*
    if(arr1.length !== arr2.length){
        return false
    }
    for (let i = 0; i < arr2.length; i++) {
        if (Math.pow(arr2[i], 2) !== arr1[i]) {
            return false
        }
    }
    return true;

*/

/*******************OPCION 5 FUNCIONA */
/*
    //Saber que ambos arrays tienen el mismo length
      if (arr1.length !== arr2.length) {
        return false;
      }

      for (let i = 0; i < arr2.length; i++) {
        let correctIndex = arr1.indexOf(arr2[i] ** 2);
         // esto tira la ubicacion del numero  
        //      1**2 = 1 --> como esta va a tirar el valor                                
        if (correctIndex === -1) {
          return false;
        }
        arr1.splice(correctIndex, 1); //extraigo el valor del correctIndex para q no se repita
      }
      return true;

*/
}
