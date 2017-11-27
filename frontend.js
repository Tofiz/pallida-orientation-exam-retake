'use strict'
console.log('hello');
function ajax(method, url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.onload = function(){
			callback( JSON.parse(xhr.responseText) )
	};
	xhr.send();
};

function createTHead(headerName) {
	var table = document.querySelector("table");
	var header = table.createTHead();
	var row = header.insertRow(0);
	var cell = row.insertCell(0);
	cell.innerHTML = `<b>${headerName}</b>`;
}


function creatTable(result) {
	console.log("here comes the table")
	createTHead()

}

ajax('GET', 'http://localhost:8080/warehouse', creatTable);
console.log("ajax is sent")