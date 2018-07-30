var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step11-localstorage.html")
});

app.listen(1234);
console.log("webserver is now live on http://localhost:1234")

