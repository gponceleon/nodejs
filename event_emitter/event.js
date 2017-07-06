var Emitter = require('./emitter'); //uso un emitter creado por mi

var emtr = new Emitter();

emtr.on('greet',function(){
    console.log('Paso el evento');
});

emtr.on('greet',function(){
    console.log('Algo ocurrio');
});

console.log('Hello!');
emtr.emit('greet');


