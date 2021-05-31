const { Queue, Node, LinkedList, BinarySearchTree } = require('./DS.js');

// --------- ¡No modificar nada arriba de esta línea! ----------

// ----- EJERCICIO 1 ------
// Recursión:
// Escribir una función que, a partir de un arreglo
// (que en cada posición puede tener un único elemento u otro array),
// retorne otro arreglo sin anidaciones dentro.

// Ejemplo:
// arrayDeEjemplo = [1, 2, [3, 4], 5, [6, 7, 8]];
// recursiveArrayPrint(arrayDeEjemplo) --> retorna [1, 2, 3, 4, 5, 6, 7, 8]
function recursiveArrayPrint(array, arr = []) {
	// Tu código acá
for(let i=0; i<array.length; i++){
    if(Array.isArray(array[i])){
        recursiveArrayPrint(array[i],arr);
    }else{
        arr.push(array[i]);
    }
}
return arr;
}

recursiveArrayPrint([1, 2, [3, 4], 5, [6, 7, 8]]);

/**OTRA FORMA DE RECURSIVIDAD */

function recursiveArrayPrint(){
    let arr=[];
    return function iteracion(array){
        for(let i=0; i<array.length; i++){
            if(Array.isArray(array[i])){
                iteracion(array[i])
            }
            else{
                arr.push(array[i])
            }
        }
        return arr;
    }
}

let recursive = recursiveArrayPrint();
recursive([1, 2, [3, 4], 5, [6, 7, 8]]);

// ----- EJERCICIO 2 ------
// Closures:
// Implementar la función closureSum que recibe un parámetro (numFijo)
// y retorna otra función, la cual también debe recibir un parámetro
// y devolver la suma de este último parámetro con numFijo.

// Ejemplo 1:
// var sumaCinco = closureSum(5);
// sumaCinco(2);  --> Devolverá 7 (Ya que 2 + 5 = 7)
// sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)

// Ejemplo 2:
// var sumaDiez = closureSum(10);
// sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
// sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)
function closureSum(numFijo) {
	return function suma(num){
        return numFijo + num;
    }
}

/* ----- EJERCICIO 3 ------
Implementar el metodo 'toArray' en el prototype del BinarySearchTree
que devuelva los valores del arbol en un array ordenado
Ejemplo:
//	   32
//    /  \
//   8   64
//  / \
// 5   9
// resultado: [5,8,9,32,64] */
function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null
  
  }

BinarySearchTree.prototype.toArray = function () { //??????????
	// if(!this.value) return null;
    // let array=[]

    // if(this.value && !this.left && this.right) return array.push(this.value); //caso de corte

    // if(this.left && this.value > this.left){
    //     this.left.toArray();
    // }
    // else if(this.right && this.value > this.right){
    //     this.right.toArray();
    // }

    // return array;
let array=[];
var cb = function(value){
     array.push(value);
}
this.depthFirstForEach(cb);
return array;

};

// ----- EJERCICIO 4 ------
// Dado un ID de un curso y un objeto que contiene estudiantes,
// encontrar cuántos estudiantes están inscriptos en dicho curso.
// Utilizar recursión para iterar.
// Recordá modificar los parámetros que recibe la función si es necesario.

// El objeto de estudiantes es como el siguiente:

var estudiantes = {
	3320943: {
		nombre: 'Persona',
		apellido: 'Apellido',
		mail: 'mail@mail.com',
		cursos: {
			1: 'Cocina',
			2: 'Mecánica'
		}
	},
	90234: {
		nombre: 'Persona',
		apellido: 'Apellido',
		mail: 'mail@mail.com',
		cursos: {
			2: 'Mecánica'
		}
	},
	929340: {
		nombre: 'Persona',
		apellido: 'Apellido',
		mail: 'mail@mail.com',
		cursos: {
			2: 'Mecánica'
		}
	},
	123123: {
		nombre: 'Persona',
		apellido: 'Apellido',
		mail: 'mail@mail.com',
		cursos: {
			1: 'Cocina',
		}
	}
}



function recorrerAlumno(idCurso, objeto) {
//creo contador
    let contador = 0;
//itero el objeto, en esta iteracion clave es el nombre de cada objeto 
    for(let clave in objeto){
//esto muestra el curso  que corresponde  al codigo para poder compararlo, si coincide devuelve el nombre dle codigo
//si no coincide devuelve undefined.      
        let codigoCursoAlumno = objeto[clave].cursos[idCurso];
        if(codigoCursoAlumno !== undefined){
            contador = contador + 1; // si ocinciden que se sume un valor del contador
        }

    }
return contador; //retorna contador.
}

   

// ----- EJERCICIO 5 ------
// Implementar la función crearQueues, que recibe un array con anidaciones como parámetro.
// Crear dos queues: una para guardar números impares y otra para los pares.
// La función crearQueues debe retornar un objeto que contenga dos propiedades, cada una con su respectivo Queue.

// Ejemplo del objeto esperado:
// {
// 	par: (acá va la queue de números pares),
// 	impar: (acá va la queue de números impares)
// }

// El array que se va a recibir como parámetro
// es similar al siguiente: [1, 3, 5, 7, 8, 3, 2, 1, [3, 1, 2, 4, 6, 8, 3, 9]];
// Recorrerlo usando recursión.


function crearQueues(arr) {
	let arraySimple = recursiveArrayPrint(arr);
    let queuePares = [];
    let queueImp =[];

    for (let i=0; i<arraySimple.length; i++){
        if(arraySimple[i] % 2 === 0){
            queuePares.push(arraySimple[i]);
        }else{
            queueImp.push(arraySimple[i]);
        }
    }
    let obj = {};
    obj["par"] = queuePares;
    obj["impar"] = queueImp;
    return obj;
}

crearQueues([1, 3, 5, 7, 8, 3, 2, 1, [3, 1, 2, 4, 6, 8, 3, 9]])

// --------- ¡No modificar nada debajo de esta línea! ----------

module.exports = {
	recursiveArrayPrint,
	closureSum,
	BinarySearchTree,
	recorrerAlumno,
	crearQueues,
};
