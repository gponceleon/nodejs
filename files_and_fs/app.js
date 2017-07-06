var fs = require('fs'); //file system

 var greet = fs.readFileSync(__dirname + '/greet.txt','utf8'); // metodo sincrono de leer 

 console.log(greet);

 var greet2 = fs.readFile(__dirname + '/greet.txt','utf8', //asincronamente
 function(err,data){
    console.log(data);
 });

 console.log('Done!')