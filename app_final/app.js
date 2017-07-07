var express =require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var appController = require('./controllers/apiController');
var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname+'/public'));

app.set('view engine','ejs');

app.get('/api/',function(req,res){
        console.log('entre');
    });

mongoose.connect(config.getDbConnectionString());
setupController(app);
appController(app);
app.listen(port);