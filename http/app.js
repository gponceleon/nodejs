var http=require('http');
var fs = require('fs');

http.createServer(function(req,res){

//simple routing 
if(req.url==='/'){
    //return a HTML
    fs.createReadStream(__dirname+'/index.html','utf8').pipe(res); //mas rapido
}else if (req.url ==='/api'){
    res.writeHead(200,{
    'Content-Type':'text/html'});
    //var html = fs.readFileSync(__dirname+'/index.html','utf8');
    /*var message = 'Hola Gabriela';
    html = html.replace('{Message}',message);
    res.end(html);*/ //dinamic template
    //return a JSON
    var obj ={
        firstname:'Gabriela',
        lastname:'Ponceleon'
        };

    res.end(JSON.stringify(obj));

}else{
    res.writeHead(404);
    res.end();
}
}).listen(1337,'192.168.12.114');