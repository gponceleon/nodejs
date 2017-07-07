var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/todos/:uname',function(req,res){

        Todos.find({username:req.params.uname},function(err,result){
            if(err) throw err;

            res.send(result);
        });
    });

    app.get('/api/todo/:idTodo',function(req,res){
        Todos.findById({_id:req.params.idTodo},function(err,todo){
            if(err) throw err;

            res.send(todo);
        })
    });

    app.post('/api/todo',function(req,res){
        if(req.body.id){

            Todos.findByIdAndUpdate({_id:req.body.id},
            {todo:req.body.todo,
            isDone:req.body.isDone,
            hasAttachment:req.body.hasAttachment}, function(err, todo){
                if(err)throw err;

                res.send('Success');
            });
        }else{
            var newTodo = Todos({
                username:'test',
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            });

            newTodo.save(function(err){
                res.send('Success');
            });
        }
    });

    app.delete('/api/todo',function(req,res){
        Todos.findByIdAndRemove(req.body.id,function(err){
            if (err) throw err;
            res.send('Success');
        });
    })
}