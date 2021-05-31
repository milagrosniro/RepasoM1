class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // escribe un metodo que inserte un nodo al final
    let newNode = Node(value);
    //si no hay nada en el arbol
    if (!this.root) {
      this.root = newNode(value);
    }

    //si el valor es mayor al valor donde me encuentro
    if (value > this.value) {
      //voy a la dcha y si no hay nada ahi, guardo el valor
      if (!this.right) {
        this.right = newNode(value);
      } else {
        //si hay algo, hago llamada recursiva con this.right
        return this.right.insert(value);
      }
    }

    if (!this.left) {
      this.left = newNode(value);
    } else {
      return this.left.insert(value);
    }
  }


  /**MANERA LARGA NO RECURSIVA */

  insert(value) {
    /*Creo un Nodo que guarde el valor enviado por arg */
    let newNode = Node(value);

    /**si el arbol esta vacio, guardo el newNode en la raiz y retorno el Nodo agregado */
    if (!this.root) {
      this.root = newNode(value);
      return newNode(value);
    }
    /*Creo una variable que guarde la raiz, ya que este valor se va a ir modificando, ya que va a ir recorriendo la razi de todos los subarboles*/
    let current = this.root;
    /**Mientras el arbol donde este parada no este vacio ... */
    while (current) {
      /*?? si el valor del nuevodo es menor al de la raiz del arbol donde estoy parada*/
      if (newNode.value < current.value) {
        /**voy a la izq y ?? si hay algo ahi.. */
        if (this.left) {
          /**si hay algo, muevo el current al hijo izq */
          current = current.left;
        } else {
          /**si esta vacio, coloco el nuevo Nodo ahi , retorno el nuevo Nodo para cortar el bucle*/
          this.left = newNode(value);
          return newNode(value);
        }
      }
      /**idem que izq */
      if (this.right) {
        current = current.right;
      } else {
        this.right = newNode(value);
        return newNode(value);
      }
    }
  }

  find(value) {
    // escribe un metodo que busque un nodo especifico

    /**?? si el arbol esta vacio, que retorne falso */
    if (!this.root) {
      return false;
    }
    /**si el valor pasado por parametro es igual al valor donde estoy parado retorno true */
    if (value === this.value) {
      return true
    }
    /**si el valor es mayo al valor donde estoy parado, voy a la derecha y ?? si esta vacia retorno False, sino hago recursiva con el valor desde this.right */
    if (value > this.value) {
      if (!this.right) {
        return false
      };
      return this.right.find(value);
    }
    if (value < this.value) {
      return !!this.left && this.left.find(value);
    }
  }

  /**RESOLCION LARGA */

  find(value) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {

      if (value === current.value) {
        return true
      }
      if (value > current.value) {
        if (!current.right) { return false }
        else if (value === current.right.value) {
          return true;
        }
        else {
          current = current.right;
        }

      }
      if (!current.left) { return false }
      else if (value === current.left.value) {
        return true;
      }
      else { current = current.left }
    }
  }

  size() {
    // escribe un metodo que determine el largo del arbol
    if (!this.root) return 0;
    if (!this.right && !this.left) return 1;
    if (this.right && !this.left) return 1 + this.right.size();
    if (!this.right && this.left) return 1 + this.left.size();
    if (this.right && this.left) return 1 + this.right.size() + this.left.size();
  }



  // 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
  // corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
  // corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
  // corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
  // corre breadth-first cuando breadthFirstForEach() es ejecutado

  //recorrer por ancho, el primero que agrego es el primero que saco (queue)
  /**
   * se recorre en niveles, aca el problema es que los hnos no se conocen. Para esto hay q usar una estructra paralela guardando los valores
   * (array o queue). El orden tiene q ser root-izq-derecha
   * voy al root y guardo su valor en un array, lugo anota el de izq y el de dcha
   * y guarda los valores.
   * luego hace lo mismo con el arbol de izq y luego con el de derecha
   * 
   */



  /**
   * Recorrer el arbol a lo ancho, para esto es necesario guardar lo valores en un array o queue ya que se recorre(raiz-izq-der) y los hnos no se conocen
   * primero se pregunta si el arbol esta vacio, si no esta vacio guardo la raiz en un array (guardado en una variable) donde ire guardando los datos para despues usarlos y ordenarlos en otro.
   * Mientras el array tenga algun valor em la var donde tenia a la raiz, guardo el primer elemento del array.
   * en el array donde uran los datos ordenados, pusheo el valor de la variable que guarde. 
   * Una vez pusheado eso, voy al arbol hijo izq si existe lo pusheo al primer array, idem con el dcho (de etsa manera el array tendra valores hasta que haya recorrido todo el arbol) 
   * Al final, la funcion retorna el array con los datos.
   */
  breadthFirstForEach() {

    //si la raiz del arbol esta vacia dovlver 0
    if (!this.root) return 0;
    let queue = []; //array donde ire guardando los nodos para sacarle la info
    let data = []; //array donde ira la info

    //guardo en la variable current el root y lo pusheo a la queue
    let current = this.root
    queue.push(current);

    //mientras la qeue tenga alfo en la lksta
    while (queue.length) {
      //currente es igual al primer valor de la queue 
      current = queue.shift();
      //pusheo ese valor a la lista data
      data.push(current.value);

      //luego pregunto su hay algo en el current.left (ya que el current es un arbol), si hay lo pusheo a la queue
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

    }
    //cuando ya no haya nada en la queue retornar el array con la data-
    return data;

  }
  /**
   * Recorre el arbol de manera vertical, recibe como arg, un currente por default(this.root) y  la forma de recorrerlo
   * 1)Pregunto si el arbol esta vacio
   * 2)Luego, realizo un switch para recorrer el arbol, si el arg es:
   * "pre-order" (this-L-R) --> consologeo el valor de la raiz, luego hago una recursiva para el arbol hijo que esta a la izq y luego para el q esta a la derecga
   * solo que en esos casos el current sera el del arbol correspondiente
   * asi con los diferentes tipos de recorrido
   */
  depthFirstForEach(current = this.root, arg) {
    // escribe el metodo depthFirstForEach

    if (!current) return 0;

    switch (arg) { //this-left-right
      case "pre-order": {
        console.log(this.value);
        if (current.left) return this.depthFirstForEach(current.left, arg);
        if (current.right) return this.depthFirstForEach(current.right, arg);

        break;
      }
      case "pre-order": {// l-r-t
        if (current.left) return this.depthFirstForEach(current.left, arg);
        if (current.right) return this.depthFirstForEach(current.right, arg);
        console.log(this.value);
        break;
      }
      default: {

        if (current.left) return this.depthFirstForEach(current.left, arg);
        console.log(this.value);
        if (current.right) return this.depthFirstForEach(current.right, arg);
        break;

      }
    }
  }
}
