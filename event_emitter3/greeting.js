'use strict';

var em = require('events');

module.exports = class Greetr extends em{
  constructor(){
    super();
    this.greeting = 'Hello world!';
  }

  greet(data){
      console.log(`${this.greeting} : ${data}`);
      this.emit('greet',data);
  }

};
