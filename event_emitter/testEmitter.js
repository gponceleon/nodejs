var Emitter = require('events'); //se usa el emitter de NodeJS
var config = require('./configFile').events;
var emtr = new Emitter();

emtr.on(config.GREET,function(){
    console.log('Paso el evento');
});

emtr.on(config.GREET,function(){
    console.log('Algo ocurrio');
});

console.log('Hello!');
emtr.emit(config.GREET);