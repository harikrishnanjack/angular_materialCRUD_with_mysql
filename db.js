var mysql=require("mysql");
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud'
});
connection.connect(function(err,data){
    if(err) throw err;
    else
    console.log("connected successfully");
});
module.exports=connection;