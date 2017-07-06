'use strict';

var Greetr = require('./greeting');
var greet1= new Greetr();
greet1.on('greet',function(data){
    console.log(`Someone do something:${data}`);
});

greet1.greet('Gaby');


