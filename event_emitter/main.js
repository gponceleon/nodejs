const read = require('readline');
var Emitter = require('./emitter');

var emtr = new Emitter();

const readline = read.createInterface({
    input:process.stdin,
    output: process.stdout
});

readline.question('Que evento quieres crear ', (answer)=>{
    console.log(answer);

    emtr.on(answer, function(){
        console.log('Que bueno elegiste leer');
    });

    console.log('Ahora ejecutare lo que seleccionaste');
        emtr.emit(answer);
    readline.close();
})


