var grettings = require('./greetings.json');

var greet = function(){
    console.log(grettings.en);
};


module.exports = greet;