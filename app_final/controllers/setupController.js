var Todos = require('../models/todoModel');
module.exports = function(app){

    app.get('/api/setupTodos',function(req,res){

        //iniciar la BD
        var starterTodos =[
            {username:'test',todo:'clean the room', isDone:false,hasAttachment:false },
            {username:'test',todo:'Buy food', isDone:false,hasAttachment:false },
            {username:'test',todo:'Do the math homework', isDone:false,hasAttachment:false }
        ];

        Todos.create(starterTodos,function(err,results){
            res.send(results);
        });
    });
}