'use strict'

const express = require('express');
const mysql = require('mysql');

let app = express();

app.use( express.static( __dirname + '/' ) );

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'retake'
});

connection.connect();

app.get('/warehouse', function(req, res){
	connection.query('SELECT * FROM warehouse', function(err, result) {
		// console.log(result)
	if (err) {
			console.log(err)
	}
	res.send(result);
	});
});


app.listen(8080, () => console.log('RUNNING at "http://localhost:8080"'));