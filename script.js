var targetFss = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
// var targetFss = [8]
// var targetFss = [10]

calculate()

function calculate() {
	var baseVal = document.getElementById('baseVal').value * 100
	var fsIncrease =document.getElementById('fsIncrease').value * 100
	var maxFs = document.getElementById('maxFs').value

	var stoneCost = document.getElementById('stoneCost').value
	var armorCost = document.getElementById('armorCost').value

	var table = document.getElementById('fsData')
	
	var tableHtml = ''
	table.innerHTML = tableHtml
	
	targetFss.forEach(function(targetFs) {
		var chance = 1
		var currentVal = baseVal
		var throwsAvg = 0
		var oldChance = chance
		
		for (i=0;i<targetFs;i++) {
			oldChance = chance
			
			chance = (1 - currentVal/1000) * chance
			
			throwsAvg += oldChance
			
			if (i < maxFs )
				currentVal += fsIncrease;
			
			
			
			// console.log(currentVal);
			
					
		}
		
		
		var price = ((1/chance) * throwsAvg * stoneCost) + ((1/chance) * throwsAvg * armorCost/2)
		console.log(chance, price)
		
		tableHtml += '<tr>';
		tableHtml += '<td>' + i + '</td>';
		tableHtml += '<td>' + chance.toFixed(3) + '</td>';
		tableHtml += '<td>' + (1/chance).toFixed(2) + '</td>';
		tableHtml += '<td>' + parseInt(price).toLocaleString().replace(/,/g,' ') + '</td>';
		tableHtml += '<td>' + ((1/chance) * throwsAvg).toFixed(2).replace('.','<span>,') + '</span></td>';
		tableHtml += '</tr>';
	})
	
	table.innerHTML += tableHtml
}

