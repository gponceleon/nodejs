exports = function(){
    console.log('hello'); // rompi la refecia y ya no funciona el require
}

console.log(exports);
console.log(module.exports);

// para solvertar esto se puede mutar la variable export