var showMoney = 0;
var dollar = 1;
var quarter =.25;
var dime = .10;
var nickel = .05;
var dimecount = 0;
var quartercount = 0;
var nickelcount = 0;
var dollarcount = 0;
var pennycount = 0;
var divid = 0;
var amount = 0;
$(document).ready(function(){

	loadItems();
	
	/*$('#add-button').click(function (event){
		
		$.ajax({
			type: 'POST',
			url: 'http://localhost:8080/item',
			data: JSON.stringify({
				name: $('#add-last-name').val(),
				price: $('#add-company').val(),
				quantity: $('#add-phone').val()
			}),
			headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			'datatype': 'json',
			success: function(item) {
				var newItemDiv = $('#newItem');
				
				var itemInfo = '<div style="border: .5px solid black" class="col-md-4">'
					itemInfo += '<p>';
					itemInfo += item.id + '<br>';
					itemInfo += '<br>'
					itemInfo += item.name + '<br>';
					itemInfo += '<br>'
					itemInfo += item.price + '<br>';
					itemInfo += '<br>'
					itemInfo += 'Quantity List: ' + item.quantity + '<br>';
					itemInfo += '<br>'
					itemInfo += '</p>'
					itemInfo += '</div>'

				newItemDiv.append(itemInfo);		
				
			},
			error: function() {
				alert('FAILURE');
			}
		})		
	});*/

	$('#div1').on('click', function() {

		var result = 1
		$('#item-display').val(result)
        divid = result;
	});

	$('#div2').on('click', function() {

		var result = 2
		$('#item-display').val(result)
        divid = result;
	});

	$('#div3').on('click', function() {

		var result = 3
		$('#item-display').val(result)
        divid = result;
	});

	$('#div4').on('click', function() {

		var result = 4
		$('#item-display').val(result)
        divid = result;
	});

	$('#div5').on('click', function() {

		var result = 5
		$('#item-display').val(result)
        divid = result;
	});

	$('#div6').on('click', function() {

		var result = 6
		$('#item-display').val(result)
        divid = result;
	});

	$('#div7').on('click', function() {

		var result = 7
		$('#item-display').val(result)
        divid = result;
	});

	$('#div8').on('click', function() {

		var result = 8
		$('#item-display').val(result)
        divid = result;
	});

	$('#div9').on('click', function() {

		var result = 9
		$('#item-display').val(result)
        divid = result;
	});
	
	$('#add-dollar').on('click', function() {

		var result = showMoney + dollar
		var count = dollarcount + 1
		$('#show-money').val(result)
		dollarcount = count
		showMoney = result

	});

	$('#add-quarter').on('click', function() {

		var result = showMoney + quarter
		var count = quartercount + 1
		$('#show-money').val(result)
		quartercount = count
		showMoney = result

	});

	$('#add-dime').on('click', function() {

		var result = showMoney + dime
		var count = dimecount + 1
		$('#show-money').val(result)
		dimecount = count
		showMoney = result

	});

	$('#add-nickel').on('click', function() {

		var result = showMoney + nickel
		var count = nickelcount + 1
		$('#show-money').val(result)
		nickelcount = count
		showMoney = result

	});

	$('#change-return').on('click', function() {
		
		$('#show-money').val('')
		$('#show-message').val('')
		$('#item-display').val('')

		var str = dollarcount + ' dollars, ' + quartercount + ' quarters, ' + dimecount + ' dimes, ' + nickelcount + ' nickels '

		$('#show-change').val(str)
		
		dollarcount = 0
		quartercount = 0
		dimecount = 0
		nickelcount = 0
		showMoney = 0

	})

});
/*
function loadItems1() {
	//var contentRows = $('#allItems');
		
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/items',
		success: function(itemArray) {
			var itemsDiv = $('#allItems')

			$.each(itemArray, function(index, item) {
				var itemInfo = '<div style="border: .5px solid black" class="col-md-4" id="+item.id">'
					itemInfo += '<p>';
					itemInfo += item.id + '<br>';
					itemInfo += '<br>'
					itemInfo += item.name + '<br>';
					itemInfo += '<br>'
					itemInfo += item.price + '<br>';
					itemInfo += '<br>'
					itemInfo += 'Quantity List: ' + item.quantity + '<br>';
					itemInfo += '<br>'
					itemInfo += '</p>'
					itemInfo += '</div>'

				itemsDiv.append(itemInfo);
			});

		},
		error: function() {
			$('#errorMessages')
				.append($('<li>')
				.attr({class: 'list-group-item list-group-item-danger'})
				.text('Error calling web service.  Please try again later.'));
		}
	});		
}
*/
function loadItems() {
	//var contentRows = $('#allItems');
		
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/items',
		success: function(itemArray) {

			$.each(itemArray, function(index, item) {
				var name = item.name;
				var price = item.price;
				var quantity = item.quantity;
				var id = item.id;

				var itemInfo = '<p>' + id + '</p>'
					itemInfo += '<br>';
					itemInfo += '<p style="text-align: center">' + name + '</p>';
					itemInfo += '<br>'
					itemInfo += '<p style="text-align: center">' + price + '</p>';
					itemInfo += '<br>'
					itemInfo += '<p style="text-align: center" Quantity Left: ' + quantity + '</p>';
					itemInfo += '<br/>'

				var vendItemId = "#div" + (index + 1);
				$(vendItemId).append(itemInfo);
			});

		},
		error: function() {
			$('#errorMessages')
				.append($('<li>')
				.attr({class: 'list-group-item list-group-item-danger'})
				.text('Error calling web service.  Please try again later.'));
		}
	});		
}

$('#make-purchase').on('click', function() {

	vendItem();

})

function vendItem() {

	var amounthere = showMoney;
	var id = divid;

	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/money/' + amounthere + '/item/' + id,
		success: function(response) {

			//sale successful, return change
			var quarters = response.quarters
			var dimes = response.dimes
			var nickels = response.nickels
			var pennies = response.pennies

			$('#show-message').val('Thank You!!!!')

			var str = quarters + ' quarters, ' + dimes + ' dimes, ' + nickels + ' nickels, ' + pennies + ' pennies, '

			$('#show-change').val(str)

		},
		error: function(response) {

			if (response.responseText == 'no inventory')
			{
				$('#show-message').val(response.responseText)
			}
			else
			{
				$('#show-message').val(response.responseText)
			}
			
		}
	});
}

