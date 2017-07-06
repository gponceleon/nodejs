//objects and method

var obj = { // simple object
    greet: 'Hello Word!'
};

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet'; // the key 
console.log(obj[prop]);

//functions and arrays

var arr = [];

//arr.push('hello'); puede ser cualquier cosa
arr.push(function (){
    console.log('Lograste colocar una funcion')
});
arr.push(function (){
    console.log('Lograste colocar una funcion 1')
});

arr.forEach(function(item){ //sirve para ejecutar las funciones dentro de array 
    item();
});