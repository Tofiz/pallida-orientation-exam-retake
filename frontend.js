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


function creatTable(result) {
	let table = document.querySelector('.table');
	let htmlString = '<tr>';
	result.clothes.forEach(function(e) {
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
	sendOrder();
};



function sendOrder() {
	let item = document.querySelector('.selectitem');
	let size = document.querySelector('.selectsize');
	let quantity = document.querySelector('.inputquantity')

	
	let button = document.querySelector('.button');
	button.addEventListener('click', function(){
		console.log(item.value)
		console.log(size.value)
		console.log(quantity.value)
		ajax('GET', `http://localhost:8080/price-check?item=${item.value}&size=${size.value}&quantity=${quantity.value}`, null);
	});
};


ajax('GET', 'http://localhost:8080/warehouse', creatTable);
console.log("ajax is sent")