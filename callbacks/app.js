function greet(callback){
    console.log('Hello!');
    var data ={
        name:'Gabriela Ponceleon'
    };
    callback(data);
}

greet(function(data){
    console.log('Callback is calling');
    console.log(data);
});

greet(function(data){
    console.log('Another Callback is calling');
    console.log(data.name);
});