//Modules dependencies

var express =require('express');
var stylus =require('stylus');
var nib =require('nib');
var _dirname="nodeapp";


//set variable for port number

var portnumber= 3000;

//initialize express
 var app=express();
 console.log("Expresss has been initialized");

 //compile function

 function compile(str,path) {
 	return stylus(str).set('filename',path).use(nib())
 }

 //set view folder

 app.set('views',_dirname+'/views');
 //app.set('views', path.join(__dirname, 'views')); 


 //Initialize Jade
 app.set('views engine','jade');
 console.log('Jade has been initialized');


 //Stylus Middleware
 app.use(express.logger('dev'));
 app.use(stylus.middleware(
	 {
	     
	     src:_dirname+'/public',
	     compile:compile
	 }
 ));

 app.use(express.static(_dirname+'/public'));


 //render index page

 app.get('/', function(req,res){
    res.render('index',
    {title: "welcome"});
 });


 app.listen(portnumber);
 console.log('Server is now running on port number:'+portnumber);




