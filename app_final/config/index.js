var configValues  = require('./config');
module.exports={
    getDbConnectionString:function(){
        return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds151062.mlab.com:51062/apptodo';
    }
}