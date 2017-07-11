var postgres = require('pg');
var config = require('./DBConfig.json');

const pool = new postgres.Pool(config);

pool.on('error',function(err,ciente){
    console.error('idle client error',err.message,err.stack);
});

module.exports.query = function(text,values,callback){
    console.log('query:',text,values);
    return pool.query(text,values,callback);
};

module.exports.connect = function(callback){
    return pool.connect(callback);
};






