class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  //enqueue: Agrega un valor a la queue.
    // Respeta el orden existente.
  enqueue(val){
   
  let node = new Node(val);

  if(!this.size){
    this.first = node;
    this.last = node;
    this.size++;
    
  }
  this.last.next = node;
  this.last = node;

  this.size++;
  return this;


      
  }
//ELIMINAR el primer elemento
  dequeue(){
    
    if(!this.size){
      return null;
    }
    let valueRemoved = this.first;
  
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return valueRemoved;
  }
}