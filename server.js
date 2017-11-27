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
	if (err) {
			console.log(err);
	}
	res.send({
    "result": "ok",
    "clothes": result
    });
	});
});


app.get('/price-check', function(req, res){
  // console.log(req.query)
  let item = req.query.item;
  let size = req.query.size;
  let quantity = req.query.quantity;
  console.log(item, size, quantity);

  let querry = (connection.query('SELECT * FROM warehouse WHERE in_store < ?', quantity));
  console.log(querry);
  if (quantity > 3) {
    res.send({
      "result": "ok",
      "total_price": "390"
  });
  } else if (quantity < 3) {
    res.send({"result":"please order at least 3, one for yourself, two for your friends"})
  } else if (connection.query('SELECT * FROM warehouse WHERE in_store < ?', quantity)) {
    res.send({
      "result": "error, we don't have enough items in store"
  });
  };
});

app.get('/toomuch',function(req, res){
  res.send(toomuch.html)
});

app.listen(8080, () => console.log('RUNNING at "http://localhost:8080"'));