var express=require("express");
var bodyParser=require("body-parser");
var cors=require("cors");
var app=express();
var employee=require('./routes/employee');
app.use('/employee',employee);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.listen(3000,function(){
    console.log("server running @3000")
});

