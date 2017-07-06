var fs = require('fs');
var zlib = require('zlib');
//var read = fs.createReadStream(__dirname+'/greet.txt',{encoding:'utf8',highWaterMark: 16*1024});

var read = fs.createReadStream(__dirname+'/greet.txt');
var write = fs.createWriteStream(__dirname+'/greetcopy.txt');
var compress = fs.createWriteStream(__dirname+'/greet.txt.gz');

/*
read.on('data',function(chunk){
    console.log(chunk);
    write.write(chunk);
});*/ //forma de leer y escribir sin pipes


var gzip = zlib.createGzip(); //comprime los stream
read.pipe(write); //es mas simple y rapido 

read.pipe(gzip).pipe(compress);

