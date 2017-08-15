var express =require('express');

var app =express();

app.get('/',function(req,res){
	res.render('index.ejs',{'title':"Hello"})
});

app.get('/about',function(req,res){
	res.render('layout.ejs',
		{
			title:'Layout page',
			body:'<h2>Express layout</h2>',
			footer:'Node and Express collabo'
		});
});

app.get('/*',function(req,res){
	res.status(404).render('error.ejs',{title:"Error",body:"<h1>Resource not found</h1><p><a href='/about'>Vist home page</a></p>"});
});

console.log('server started');

app.listen('3000');