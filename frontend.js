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


var table = document.querySelector('table')
// var th = document.querySelector('th')

function creatTable(result) {
	let htmlString = '<tr>';
	result.forEach(function(e) {
		// console.log(e);
				htmlString += `<tr><td>${e.item_name}</td>
											 <td>${e.manufacturer}</td>
											 <td>${e.category}</td>
											 <td>${e.size}</td>
											 <td>${e.unit_price}</td>
											 </tr>`;
											 htmlString + '</tr>';
	});
	table.innerHTML += htmlString;

};

ajax('GET', 'http://localhost:8080/warehouse', creatTable);
console.log("ajax is sent")