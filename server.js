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
var bodyParser= require('body-parser');

/*classwork 8*/

var mongo=require('mongodb');
/*var db, uri ="mongodb://localhost:27017";*/

url="mongodb://"+process.env.IP+":27017";
mongo.MongoClient.connect(url,{useNewUrlParser:true},function(err, client){
    if(err){
        console.log("Could not connect to Mongodo");
    } else{
        db=client.db('simple-node');
    }
    
});

var save = function(form_data){
    db.createCollection('users', function(err,collection){});
    var collection=db.collection('users');
    collection.save(form_data);
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var server = http.Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
})
server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running')
})

/*classwork 7*/

app.get('/form', function(req, res){
    res.sendFile(__dirname+'/form.html');
})
app.post('/submit_user', function(req, res){
    console.log(req.body);
    save(req.body);
    res.status('200');
})



app.get('/system/about', function(req, res) {
    res.sendFile(__dirname+'/about.html');
})
app.post('/', function(req, res){
    var username = req.body.username;
    var email = req.body.email;
    console.log("post received: %s %s", username, email);
})
server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running')
})
  

