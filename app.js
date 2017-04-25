var http = require('http');
var express = require('express');
var sql_query = require('./tools/sql_query.js');
	
var app = express();
app.set('port',process.env.Port||1337);	
app.get('/',function(req,res){
	console.log(sql_query);
	res.end(sql_query);
});
http.createServer(app).listen(app.get('port'),()=> { console.log('listening '+app.get('port'));});