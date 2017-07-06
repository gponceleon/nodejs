var util = require('util');

function Minutes (){ 
    this.minute_id=1;
    this.minute_description=`Minuta de prueba`;
    
};

Minutes.prototype.creation = function(){
    console.log(`La minuta ${this.minute_id} fue creada`);

};

function PresidentialMinutes(){
    Minutes.call(this);
    this.date='23/05/2015';
};

util.inherits(PresidentialMinutes,Minutes);
var pm= new PresidentialMinutes();
pm.creation();
