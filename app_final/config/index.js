var configValues  = require('./config');
module.exports={
    getDbConnectionString:function(){
        return 'mongodb://test:test@localhost:27017/toDoApp?authSource=admin';
    }
}