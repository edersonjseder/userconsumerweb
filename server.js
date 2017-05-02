var http = require("http"),
    port = process.env.PORT || 1881;  
var gzippo = require('gzippo');
var express = require('express');
var app = express();	
 
var server = http.createServer(function(request,response){  
    response.writeHeader(200, {"Content-Type": "text/plain"});  
    response.write("Hello HTTP!");  
    response.end();  
});

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
 
server.listen(port);  
console.log("Server Running on "+port+".\nLaunch http://localhost:"+port);