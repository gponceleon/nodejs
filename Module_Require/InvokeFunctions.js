//IIFE

var firstname='Gaby'; //esta variable no se afecta debido al scope

(function (lastaname){

    var firstname= 'Gabriela';
    console.log(firstname);
    console.log(lastaname);
}('Ponceleon')); //se crea la funcion e inmediatamente se ejecuta (se parece a un modulo)


console.log(firstname);