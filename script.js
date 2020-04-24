var targetFss = [];
for (var i = 1; i <= 30; i++) {
    targetFss.push(i);
}
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

