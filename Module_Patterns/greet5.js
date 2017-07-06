var greeting = 'Hola Mundo, patron 5';

function greet(){
    console.log(greeting);
}

module.exports = {  //solo exporto la funcion pro no se cambia la variable (private)
    greet:greet
}