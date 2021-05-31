class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // El metodo push nos permite insertar un nuevo valor AL FINAL

  /**creo un nodo con el valor q quiero agregar */
    let newNode = Node(val);

  /**?? si la LL esta vacia, agrego el newNode en el this.head */  
    if(!this.head){
      this.head = newNode(val);
      this.length++
      return this.head(val);
    }
/**si no esta vacia, referencia al tail, el valor del this.head, para arrancar a recorrer la LL desde el head */
    this.tail = this.head;
/**mientras el tail tenga un siguiente, voy recorriendo la LL cambiando la referencia del tail al sig de tail */
    while(this.tail.next){
      this.tail = this.tail.next;
    }
/**cuando tail ya no tenga un siguiente (vamos a estar parados en el ultimo nodo de la LL), al sig de tail le referencia el nvo nodo */
    this.tail.next = newNode(val);
    this.length++;
    return this.tail.next(val);
  }

  pop() {
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL

    if(!this.head) return null;

    this.tail = this.head;

    if(!this.tail.next){
      let aux= this.tail;
      this.tail = null;
    this.length--;
      return aux;
    }

    while(this.tail.next.next){
      this.tail = this.tail.next;
    }
    let aux = this.tail.next; //variable q voy a eliminar 
    this.tail.next = null;
    this.length--;
    return aux; 
  }

  shift() {
    // El metodo shift nos permite eliminar un nuevo valor AL PRINCIPIO
    if(!this.head) return null;

    if(!this.head.next){
      let aux = this.head;
      this.head = null;
      this.length--;
      return aux;
    }

    let aux= this.head;
    this.head = this.head.next;
    this.length--;
    return aux;
  }

  unshift(data) {
    // Esto insertara un nuevo valor AL PRINCIPIO
    let newNode = Node(data);
    if(!this.head){
      this.head = newNode(data);
    }
    this.tail = this.head;
    this.head = newNode(data);
    this.head.next = this.tail;
    this.length++;
    return this.head(data);
  }
/**Buscar un nodo segun un indice enviado por arg
 * ?? si el indice es <0 o es amyor o igual al tamaño o la LL esta vacia, retornar null
 * sino creo un contador (que es el q debera coincidir con el index) y un tail= this.head, pa empezar a recorrer la LL desde el head
 * mientras haya algo en el tail, pregunto si el contador coindice con el indice, si es asi, revuelvo el valor del tail en ese moemento
 * sino, sigo recorriendo y aumento un valor del count
 * si al salir del while no councidieron el index con el count, retorna null
 */
  get(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
  
    if(index < 0 || index >= this.length || !this.head){
      return null;
    }

    let count = 0;
    this.tail = this.head;
   

    while(this.tail){
      if(count === index){
        return this.tail;
      } this.tail = this.tail.next;
      count++;
    }
 return null;
  }

  set(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
    let nodeSearch = this.get(index);
    
    if(nodeSearch){
      nodeSearch.value = data;
      return true
    }

    }
  

  insert(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista

      /* funcion para agregar*/
      let nodeSearch = this.get(index);
    if(nodeSearch!== null){
      let newNode = new Node(data);
      let b = nodeSearch.next;
      let c= newNode(data);
      nodeSearch.next = c;
      c.next= b;
  }
  return null;
}

  remove(index) {
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista
    /**?? si el index es <0 o > a la longitud de la LL o si la LL esta vacia, retirnar null */
    if(index < 0 || index >= this.length || !this.head){
      return null;
    }
    
    /**si el index coindice con el 0--> aplicar al funcion que saca el primer elem de la LL, idem con el utlimo */
    if(index===0){ this.length--;
    return this.shift();}
    if(index === this.length-1) {
      this.length--;
      return this.pop();
    }

    /**sino, guardar en una variable el nodo anterior al nodo que quiero eliminar, esto lo hago llamando a this.get(index-1)
     * luego guardo el valor a remover con el valor dle sig del nodo q busque anteriormente
     * luego al valor del nodo previous le aisgno el valor dle siguiente al nodo a eliminar.
     */
    let previous = this.get(index-1);
    let nodeRemove = previous.next;
    previous = nodeRemove.next;
    this.length--;
    return nodeRemove


   
  }

  reverse() {
    // revierte esta lista //creo una nueva lista invertida
    let reverseLL = new SinglyLinkedList();
    if(!this.head) return null;
    //recorro toda la lista hasta el ultimo nodo
    
    let nodePush = this.pop();
    while(!nodePush){

      reverseLL.push(nodePush.value);
    }

    return reverseLL();

  }
}
