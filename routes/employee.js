var express=require("express");
var bodyParser=require("body-parser");
var cors=require("cors");
const image2base64 = require('image-to-base64');
var db=require('../db');
var router=express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
router.use(cors());


//get
router.get('/get',function(req,res,next){
    var sql=`select * from employee`;
    db.query(sql,function(err,rows,fields){
        if(err){
            console.log("something wrong");
        }
        else{
            res.json(rows);
        }
    })
})
//get by id
router.get('/:id',function(req,res,next){
    var id=req.params.id;
    var sql=`select * from employee where id="${id}"`;
    db.query(sql,function(err,rows,fields){
        if(err){
            console.log("something wrong");
        }
        else{
            res.json(rows[0]);
        }
    })
})
//post data
router.post('/create',function(req,res,next){
    image2base64(req.body.image) // you can also to use url
    .then(
        (response) => {
            console.log(response); //cGF0aC90by9maWxlLmpwZw==
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )
var name=req.body.name;
var position=req.body.position;

var salary=req.body.salary;

    
var sql=`INSERT INTO employee(name, position, salary) VALUES ("${name}","${position}","${salary}")`;
db.query(sql,function(err,data){
    if(err){
        res.send("something happened")
    }
    else{
        res.json({data:'inserted successfully'});
    }

})
});
//delete
router.post('/delete',function(req,res,next){
    var id=req.body.id;
    var sql=`delete from employee where id="${id}"`;
    db.query(sql,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.json({data:"Record deleted"});
        }
    })
});

//update
router.put('/update',function(req,res,next){
    var name=req.body.name;
    var position=req.body.position;
    var salary=req.body.salary;
    var id=req.params.id;

var sql=`UPDATE employee SET name="${name}",position="${position}",salary="${salary}" WHERE id="${id}"`;
db.query(sql,function(err,data){
    if(err) throw err;
    else
    res.send({data:'update success'})
})
    
//     db.query(`update employee set name=?,position=?,salary=? where id=?`,
//     [req.body.name,req.body.position,req.body.salary,req.body.id],function(err,results,fields){
// if(err) throw err;
// res.end(JSON.stringify(results));


//     })



})









module.exports=router;