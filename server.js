/*var http = require('http');
  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World\n");
  });
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
*/

var http =require('http');
var express=require('express');
var app = express();
var server = http.Server(app);

app.get('/', funtion(req, res)){
    res.sendFile(_dirname+'/index.html');
}}
server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running')
})