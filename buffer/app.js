var buffer = new Buffer('Hello','utf8'); //utf8 es por defecto; y lo inicalice con 5 letras
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[2]);

buffer.write('wo'); //sobreescribe 
console.log(buffer.toString()); 

//ES6

var buffer = new ArrayBuffer(8);//size en bytes

var view = new Int32Array(buffer); //trabajo con el buffer que cree anteriormente
view[0]=5;
view[1]=22;

console.log(view);
