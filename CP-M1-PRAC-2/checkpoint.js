// ----- IMPORTANTE -----

// IMPORTANTE!: Se les brindarán las implementaciones ya realizadas en las
// homeworks de Queue, LinkedList y BinarySearchTree. Sobre dichas implementaciónes
// van a tener que agregar nuevos métodos o construir determinadas funciones
// explicados más abajo. Pero todos los métodos ya implementados en las homeowrks
// no es necesario que los vuelvan a definir.

const { Queue, LinkedList, Node, BinarySearchTree } = require("./DS.js");

// ----- Closures -----

// EJERCICIO 1
// Implementar la funcion 'exponencial' que recibe un parametro entero 'exp'
// y retorna una una funcion, nos referiremos a esta ultima como funcion hija,
// y a 'exponencial' como la funcion padre, la funcion hija debe de recibir
// un parametro y retornar dicho parametro elevado al parametro 'exp' de
// la funcion padre original 'exponencial'
// Ejemplo:
// > var sqrt = exponencial(2);
// > sqrt(2);
// < 4
// > sqrt(3); --> 3 * 3
// < 9
// > sqrt(4); --> 4 * 4
// < 16
function exponencial(exp) {
  return function base(base){
    return Math.pow(base, exp)
  }
}

// ----- Recursión -----

// EJERCICIO 2
// Crear la funcion 'direcciones':
// La funcion debe retornar un string de los movimientos Norte(N), Sur(S), Este(E), Oeste(O)
// que se deben realizar, para llegar al destino de un laberinto dado.
//
// Ejemplo: dado el siguiente laberinto:
// let laberintoExample = {
//     N: 'pared',
//     S: {
//         N: 'pared',
//         S: 'pared',
//         E: {
//             N: 'destino',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         },
//         O: {
//             N: 'pared',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         }
//     },
//     E: 'pared',
//     O: 'pared'
// }
// El retorno de la funcion 'direcciones' debe ser 'SEN', ya que el destino se encuentra
// haciendo los movimientos SUR->ESTE->NORTE
// Aclaraciones: el segundo parametro que recibe la funcion ('direccion') puede ser pasado vacio (null)
function direcciones(laberinto, direccion = "") {

  for(let camino in laberinto){
    if(laberinto[camino] === 'destino'){
      return direccion + camino;
    }
    else if(typeof laberinto[camino] === "object"){
      direccion = direccion + camino;
      direcciones(laberinto[camino], direccion)
    }
  }
}

// EJERCICIO 3
// Crea la funcion 'deepEqualArrays':
// Dado que las comparaciones en javascript aveces son un problema como con el siguiente ejemplo:
// [0,1,2] === [0,1,2] => false // puede probarlo en la consola
// con objetos o arrays identicos surge la necesidad de comparar en 'profundidad' arrays u objetos
// en este caso la funcion solo va a ser pensada para recibir arrays,
// pero estos pueden tener multiples niveles de anidacion, y la funcion deepEqualArrays debe
// comparar cada elemento, sin importar la profundidad en la que este
// Ejemplos:
// deepEqualArrays([0,1,2], [0,1,2]) => true
// deepEqualArrays([0,1,2], [0,1,2,3]) => false
// deepEqualArrays([0,1,[[0,1,2],1,2]], [0,1,[[0,1,2],1,2]]) => true


  function deepEqualArrays(arr1, arr2) {
    if(arr1.length !== arr2.length) return null;
    
    for(let i=0; i<arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false
       
      }
      return true;
    }
     
  }


// ----- LinkedList -----

// Deben completar la siguiente implementacion 'OrderedLinkedList'(OLL)
// que es muy similar a las LinkedList vistas en clase solo que
// los metodos son distintos y deben de estar pensados para conservar la lista
// ordenada de mayor a menor.
// ejemplos:
// head --> 5 --> 3 --> 2 --> null
// head --> 4 --> 3 --> 1 --> null
// head --> 9 --> 3 --> -1 --> null

// Las dos clases principales ya van a estar implementadas a continuacion:
function OrderedLinkedList() {
  this.head = null;
}

// notar que Node esta implementado en el archivo DS

// Y el metodo print que permite visualizar la lista:
OrderedLinkedList.prototype.print = function () {
 let current = this.head;
 let print = "Head";
 while(current){
print = print + " ---> " + current;
current= current.next;
 }
 return print + "---> null";
};

// EJERCICIO 4
// Crea el metodo 'add' que debe agregar nodos a la OLL de forma que la misma se conserve ordenada:
// Ejemplo:
// > LL.print()
// < 'head --> null'
// > LL.add(1)
// > LL.print()
// < 'head --> 1 --> null'
// > LL.add(5)
// > LL.print()
// < 'head --> 5 --> 1 --> null'
// > LL.add(4)
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'

OrderedLinkedList.prototype.add = function (val) {
let node = new Node(val);
//si esta vacia, agregar el nodo en el head o
//si el valor del head es mayor o igual al del node
  if(!this.head || this.head.value >= node.value){
   //hago que el siguiente del nodo  sea el this.head
   //y el this head referencie tenga el valor de node
    node.next= this.head;
    this.head = node;
  }
//creo un puntero que recorrera la OLL
  let current = this.head;
//mientras current tenga un sig y el valor de current sea menor al del nodo a agregar
//muevo el punter
  while(current.next){
    if(current.next.value < node.value){
      current = current.next
    }
   else{
 //si current.next > nodo    
//guardo en aux el current.next, al current.next le asigno el valor de node y al current.next.next el de aux  
    let aux = current.next;
    current.next = node;
    current.next.next = aux;
  }

  }
  return OrderedLinkedList();
};


// EJERCICIO 5
// Crea el metodo 'removeHigher' que deve devolver el valor mas alto de la linked list
// removiendo su nodo corresponidente:
// Ejemplo:
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeHigher = function () {
  //si la lista esta vacia que retorne null
  if(!this.head) return null;
   //creo una var de puntero 
   let current = this.head;
   //creo un "valor maximo" 
    let higher = current.next;

//si tiene solo un valor, el valor max sera el del this.head, por lo q retirna ese valor
  if(!current) {
    higher = current;
    return higher
  }
  
//mientras el puntero tenga un sig, 
  while(current.next){
//comparo el puntero con el num max, si es menor, que el puntero siga recorriendo la LL    
    if(current < higher){
      current = current.next
    }else{
//si el puntero es > al num max, guardo el valor de current en el num max    
//y sigo recorriendo  
      higher = current;
      current.next;
    }
  }
 //cuando termine de recorrer la LL, llamo a la funcion remove con el valor max 
  LinkedList.prototype.remove(higher.value);
  return higher.value;
};

// EJERCICIO 6
// Crea el metodo 'removeLower' que debe devolver el valor mas bajo de la linked list
// removiendo su nodo corresponidente:
// Ejemplo:
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeLower = function () {
  if(!this.head) return null;

  let current = this.head;
  let minim = current.next;

  if(!current.next){
    minim = current;
    return minim.value;
  }

  while(current.next){
    if(current > minim){
      current.next;
    }
    minim = current;
    current.next;
  }
  LinkedList.prototype.remove(minim.value);
  return minim.value;

};

// ----- QUEUE -----

// EJERCICIO 7
// Implementar la funcion multiCallbacks:
// la funcion multiCallbacks recibe dos arrays de objetos cuyas propiedades son dos,
// 'cb' que es una funcion, y 'time' que es el tiempo estimado de ejecucion de dicha funcion
// este ultimo representado con un integer como se muestra acontinuacion:
// let cbsExample = [
//     {cb:function(){}, time: 2},
//     {cb:function(){}, time: 3}
// ]
// De manera que lo que nuestra funcion 'multiCallbacks' debe de ir ejecutando las funciones
// sin pasarle parametros pero debe ir alternando las funciones de cbs1 y cbs2
// segun cual de estas se estima que tarde menos, retornando un arreglo de resultados
// de las mismas en el orden que fueron ejecutadas
// Ejemplo:
// > let cbs1 = [
//       {cb:function(){return '1-1'}, time: 2},
//       {cb:function(){return '1-2'}, time: 3}
//   ];
// > let cbs2 = [
//       {cb:function(){return '2-1'}, time: 1},
//       {cb:function(){return '2-2'}, time: 4}
//   ];
// > multiCallbacks(cbs1, cbs2);
// < ["2-1", "1-1", "1-2", "2-2"];

function multiCallbacks(cbs1, cbs2) {
  // destructuramos los argumentos en un solo array -->
  // lo ordenamos por tiempo, le pasamos dos variables que nos ayudaran a ordenarlo por tiempo -->
  // map te devuelve un array de la misma longitud anterior. Recibe una funcion -->

//creo el array donde iran ordenados los multiCbs
let arrayCbs= []

//concateno los dos arrays en uno
let cbs1And2 = cbs1.concat(cbs2);
//console.log(cbs1And2)

//ordeno el array de objetos de menor a mayor segun la prop time
cbs1And2.sort(function(a, b) {
  return a.time - b.time;
}); //array ordenado

//itero el array de ovjetos y en cada iteracion pusheo la prop cb de cada obj en el arraysCbs
// cbs1And2.map(function(obj) {
//  arrayCbs.push(obj.cb()); 
// })

for(let i=0; i<cbs1And2.length; i++){
  let cb= cbs1And2[i].cb();
  arrayCbs.push(cb);
}
return arrayCbs;
}

// ----- BST -----

// EJERCICIO 8
// Implementar el metodo 'toArray' en el prototype del BinarySearchTree
// que devuelva los valores del arbol en una array ordenado
// Ejemplo:
//     32
//    /  \
//   8   64
//  / \
// 5   9
// resultado:[5,8,9,32,64]

BinarySearchTree.prototype.toArray = function () {
  //creo el array donde iran los valores ordenados
  let array= [];
//si hay algo a la izq, recursiono en la izq 
  if(this.left){
    array.concat(this.left.toArray()) ;
  }
//si no hay nada en la izq, concateno el valor de la raiz (this.value)  
array.concat(this.value);

//luego ?? si hay algo a la dcha y si es asi recursiono en la dcha
if(this.right){
  array.concat(this.right.toArray())
}
//si no ha nada a la dcha ni izq, retorno el array
return array;
};

// ----- Algoritmos -----

// Ejercicio 9
// Implementar la funcion 'primalityTest' que dado un valor numerico entero
// debe de retornar true or false dependiendo de si este es primo o no.
// Puede que este es un algoritmo que ya hayan implementado pero entenderan
// que es un algoritmo que segun la implementacion puede llegar a ser muy costoso
// para numeros demasiado grandes, asi que vamos a implementarlo mediante un metodo
// derivado de Trial Division como el que se muestra aca:
// https://en.wikipedia.org/wiki/Primality_test
// Si bien esta no es la mejor implementacion existente, con que uds puedan
// informarse sobre algoritmos, leerlos de un pseudocodigo e implemnterlos alcanzara

/**NUMERO PRIMO: número entero que es mayor de 0 y tiene 2 divisores, el 1 y el mismo. */
function primalityTest(num) {
  // if(num <= 3) return num;
  // if((num%2 ===0)|| (num%3 ===0)) return false;

  // let contar = 5;

  // while(Math.pow(cuenta,2)<= num){
  //   if(num%count === 0 || nume % (coun))
  // }
}

// EJERCICIO 10
// Implementa el algoritmo conocido como 'quickSort', que dado un arreglo de elemntos
// retorn el mismo ordenado de 'mayor a menor!'
// https://en.wikipedia.org/wiki/Quicksort

function quickSort(array) {

  let pivote = array[Math.floor(array.length/2)];
  let posicionPiv =Math.floor(array.length/2);
  let left= [];
  let right = [];

  for(let i=0; i<array.length; i++){
    if(array[i] < pivote){
      left.push(pivote)
    }
    else if(array[i]> pivote || pivote === array[i] && i !== posicionPiv){
      right.push(pivote);
    }
     quickSort(left).concat(pivote, quickSort(right))
  }
return array;
}

// ----- EXTRA CREDIT -----

// EJERCICIO 11
// Implementa la función 'reverse', que recibe un numero entero como parametro
// e invierte el mismo.
// Pero Debería hacer esto sin convertir el número introducido en una cadena, o un array
// Ejemplo:
// > reverse(123);
// < 321
// > reverse(95823);
// < 32859

function reverse(num, lastNum = 0) {
  let newNum = 0;

  // while(num!== 0){
  //   lastNum = num %10;
  //   newNum = newNum*10 + lastNum;
  //   num = Math.floor(num/10);
  // }
 // return num

 if(num=== 0) return num;
 lastNum = num %10;
   newNum = newNum*10 + lastNum;
    num = Math.floor(num/10);
    reverse(num, lastNum)
}

module.exports = {
  exponencial,
  direcciones,
  deepEqualArrays,
  OrderedLinkedList,
  multiCallbacks,
  primalityTest,
  quickSort,
  reverse,
  Queue,
  LinkedList,
  Node,
  BinarySearchTree,
};
