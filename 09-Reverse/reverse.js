/**
 * Escribe una funcion llamada reverse que acepte un string.
 * Debe retornar el string a la inversa.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

//Recorriendo el string
function reverse(str) {
    let stringReverse = "";
    let i = str.length;
    while(i>=0){
        stringReverse = stringReverse + str.charAt(i); //saco la letra q esta en el indice i y lo sumo al stringReverse
        i--;
    }
    return stringReverse;
}
//arrow function- se guardan como variables

let arrF = (str) => {
    let stringReverse = "";
    let i = str.length;
    while(i>=0){
        stringReverse = stringReverse + str.charAt(i); //saco la letra q esta en el indice i y lo sumo al stringReverse
        i--;
    }
    return stringReverse;
}
//transformando el string en array 
function reverse(str) {
    let stringRverse = str.split("").reverse().join("");
    return stringRverse;
}

//forma recursiva
function reverse(str) {
    if(str === "") return ""; //caso base
    return reverse(str.substr(1)) + str.charAt(0);

    /**
     * str(ola) + h;
     * str(la) + o;
     * str(a) + l;
     * str("") + a; una vez q llega al caso base va avisando  ysumando ""+a+l+o+h = "aloh"
     */
}
