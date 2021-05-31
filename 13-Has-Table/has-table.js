class HashTable {
  constructor() {
    this.numBackets = 35;
    this.buckets = [];
  }

  hash(key) {
    // do something...
    let code= 0;

    for(let i=0; i<key.length; i++){
      code = code + charCodeAt(i);
    }
    return code % this.buckets;
  }

  //Guardar y buscar valores por key. Envio una Key(tiene q ser un string) y tiene q devolver su valor
//GUardar un valor en un bucket
  set(key, value) {
    // do something...
    let index = this.hash(key); //devuelve el lugar del array donde tengo que guardar el par key-value
    if(this.buckets[index] === undefined){
      this.buckets[index] = {};
      this.buckets[index][key] = value;
    }
    this.buckets[index][key] = value;
  }


  get(key) {
    // Este metodo nos devuelve el value dentro de cada objeto de buckets.
    let index = this.hash(key);
    return this.buckets[index][key];
  }

  hasKey(key) {
    // Este metodo devuelve true o false si la key indicada se encuentra en nuestra hash table.
    let index = this.hash(key);
    if(this.buckets[index].hasOwnProperty(key)) return true;
    return false;
  }

  key() {
    // Nos permite obtener todas las key dentro de nuestra hash table
    // let keys = Object.keys(this.buckets); 
    // return keys; 


    /**Progr Imperativa */
    let keys= [];

    //el forEach recorre un array de Objetos y realiza una funcion en cada obj
    this.buckets.forEach(function(obj){
      //en cada objeto quiero que me devuelva el nombre de la prop de cada objeto (key)
      for(var key in obj){
        keys.push(key)
      }
    })
     return keys;

  }


  value() {

     Object.value(this.buckets).forEach(function(key){
      var values = this.buckets[key]["nombre la prop q quiero sacar el valor"];
      array.push(values)
    })
    return array;
  }
}
