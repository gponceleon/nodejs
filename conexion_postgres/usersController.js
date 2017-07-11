var bodyParser = require('body-parser');

module.exports=function(app,pool){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.route("/users")
       .post(function(req,res){
        pool.query('INSERT INTO USERS (USERNAME,PASSWORD,LOCKED) VALUES ($1,$2,$3)',[req.body.username,req.body.password,req.body.locked],function(err,result){
            if(err){
                console.error('error running query', err);
                res.send('Error creating users');
            }else{
                res.send('Success');
            }
         });
    })
    .get(function(req,res){
        pool.query('SELECT USERNAME,LOCKED,CREATION_DATE FROM USERS',[],function(err,result){

            if(err){
                console.error('error running query', err);
                res.send('Error listing users');
            }else{
                if(typeof result == 'undefined'){
                    res.send('No users');
                }else{
                    res.send(result.rows);
                }
            }
        });
    });

    app.route("/users/:username")
        .get(function(req,res){
            pool.query('SELECT USERNAME,LOCKED,CREATION_DATE FROM USERS WHERE USERNAME=$1',[req.params.username],
            function(err,result){
                if(err){
                     console.error('error running query', err);
                     res.send('Error listing user');
                }else{
                    if(typeof result == 'undefined'){
                         res.send('User does not exist');
                    }else{
                        res.send(result.rows);
                    }
                }
            });
        })
        .delete(function(req,res){
                pool.query('DELETE FROM USERS WHERE USERNAME=$1',[req.params.username],
            function(err,result){
                if(err){
                     console.error('error running query', err);
                     res.send('Error listing user');
                }else{
                    if(typeof result == 'undefined'){
                         res.send('User does not exist');
                    }else{
                        res.send('Succes');
                    }
                }
            });
        }) 
        .patch(function(req,res){
              pool.query('UPDATE USERS SET PASSWORD=$2 WHERE USERNAME=$1',[req.params.username,req.body.password],
            function(err,result){
                if(err){
                     console.error('error running query', err);
                     res.send('Error listing user');
                }else{
                    if(typeof result == 'undefined'){
                         res.send('User does not exist');
                    }else{
                        res.send('User updated');
                    }
                }
            });
        });

};