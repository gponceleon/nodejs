// prototype: es una forma de crear clases y metodos como JAVA

function Person(firstname,lastname){

    this.lastname=lastname;
    this.firstname=firstname;
}

Person.prototype.greet = function(){
    console.log('Hola,'+this.firstname+' '+this.lastname);
};


var gabriela = new Person ('Gabriela','Ponceleon'); //nuevo objeto "instanciado" de la clase Person
console.log(gabriela.firstname);
gabriela.greet();

var amaro= new Person ('Amaro','Duarte');
amaro.greet();

console.log(gabriela.__proto__); //ver el tipo del prototype