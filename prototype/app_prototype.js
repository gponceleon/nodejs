var EventEmitter = require('events');
var util = require('util');

function  Greetr () {
    this.greeting='Hello World!';
}

//simula la herencia de objetos
util.inherits(Greetr,EventEmitter); //todos los objetos creados de Greetr acceden a EventEmitter

Greetr.prototype.greeet = function(data){
    console.log(this.greeting+' : '+ data);
    this.emit('greet',data); //se pasa la data y se puede pasar a todos los listener
}

var greeter1=new Greetr();

greeter1.on('greet',function(data){
    console.log('Someone do something: '+data);
});

greeter1.greeet('Gabriela');
