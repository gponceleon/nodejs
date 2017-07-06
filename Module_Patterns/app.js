// Primer Patron
var greet = require('./greet1');

greet(); // se llama asi porque se sobreescribio el exports y ya la variable tiene la funcion

// Segundo Patron
var greet2 = require('./greet2').greet; //se puede llamar asi por que se añadio la propiedad

greet2(); // y ahora es una funcion

// Tercer patron

var greet3 = require('./greet3');
greet3.greeting='Estoy probado';
greet3.greet(); // ya es el objeto 

var greet3b = require('./greet3'); /// no se crea un objeto nuevo, cada variable apunta 
                                    // al primer objeto que se creo
greet3b.greet(); 

// Cuarto patron 

var greet4 = require('./greet4');
var grtr = new greet4(); //ahora greet4 es la funcion constructor
grtr.greet();

// creo otro objeto y cambio 
 var greet4b = require('./greet4');
 var grtrb = new greet4b();
 grtrb.greeting='Cambio?';
 grtrb.greet();

 //Quinto patron

 var greet5 = require('./greet5');
 greet5.greeting='Se podra cambiar?'; // no se puede cambiar la variabe esta privada
 greet5.greet();


