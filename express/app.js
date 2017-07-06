var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Forma de leer variables de ambientes
var port = process.env.port || 3000;

var urlencodedParser = bodyParser.urlencoded({extended:false});
var jsonParser = bodyParser.json();

//download files ccs or html
app.use('/assets',express.static(__dirname+'/public'));

//carga una utilidad para hacer las vistas dinamicas
app.set('view engine','ejs');

app.use('/',function(req,res,next){
    console.log('Request Url:'+ req.url);
    next();
});

app.get('/',function(req,res){
    res.render('index');
});

app.get('/api',function(req,res){
    res.json({
        name:'gabriela',
        lastname:'ponceleon'
    });
});

//url con param
app.get('/person/:id',function(req,res){
    res.render('person',{id:req.params.id,Qstr: req.query.qstr}); //trabajar con querystring
    //res.send('<html><head><link href= assets/style.css type= text/css rel=stylesheet/></head><body><h1>Hola:'+req.params.id+'</h1></body></html>');
});

//post sin RestFull

app.post('/person',urlencodedParser,function(req,res){
    res.send('Thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson',jsonParser,function(req,res){
    res.send('Thank you for de Json data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen(port);