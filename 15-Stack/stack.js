class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack { //last in first out
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  /**PASOS
   * Crear un nodo con el valor
   * si esta vacia, stetear el primero y ultimo nodo con el nodo nuevo
   * Si no esta vacia, crear una variable current= this.first
   * trasnformar el primer nodo con el valor del nuevo nodo
   * 
   * Pongo al ULTIMO valor de la stack
   */
  push(val){
    let node = new Node(val);
     if(!this.size) {
       this.first = node;
       this.last = node;
       this.size++;
     }
     //si tiene algo, crear como el sig de node=this.first
     //y setear this.first = node 
     node.next = this.first;
     this.first = node;
    //  let current = this.first;
    //  this.first = node;
    //  while(current){
    //    current = current.next;
     //}
     this.size++;
     return node;
  }

  /**
   * si esta vacia reyurn null
   * Crear una var temporal con el valor de this.first
   * si hay solo un nodo, setear this.first=null
   * si hay mas de un nodo setear this.first para que sea el proximo
  Saco el ULTIMO valor de la stack 
  */
  pop(){
      if(!this.size) return null;
      if(!this.first === this.last){
        this.last = null;
        return this.size--;
      }
//definir el nodo que sera eliminado
      let remove = this.first;
//definir un nodo que sera el primero ahora.
      
      this.first = this.first.next;
      this.size--;
      return remove.val;

      // let aux = this.last;
      // this.last= null
      // let current = this.first;
      // while(current.next){
      //   current = current.next;
      // }
      // current = this.last;
      // this.size--;
      // return aux;

  }
}