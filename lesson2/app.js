var express =require('express');

var app = express();

app.get('/about/:title',function(req,res){
	res.send('<h1>'+req.params.title+'</h1>');
});

app.get('/*',function(req,res){
	res.send('<h1>Home Page</h1>');
});

console.log('Server has started on localhost:3000');

app.listen('3000','127.0.0.1');