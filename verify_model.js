console.clear();

for (i=1;i<=30;i++) {
	var base = 2;
  var current_chance = base;
  var increase = 0.2;
  var currentFS = 0;
  var failCount = 0;
  var successCount = 0;
  var blackStoneCount = 0;
  
  var tries = 10000;

  while ((successCount) < tries) {

		blackStoneCount++;

    var roll = Math.floor(Math.random() * Math.floor(10000)) + 1;

    if (roll >= (current_chance * 100)) {
      current_chance += increase;
      currentFS++;

      if (currentFS == i) {
        successCount++;
        current_chance = base;
        currentFS = 0;
      }
    } else {
      failCount++;
      currentFS = 0;
      current_chance = base;
    }
  }
  var report = new Object();
  report.targetFS = i;
  //report.successCount = successCount;
  //report.failCount = failCount;
  report.bsCount = blackStoneCount/tries;
  report.sucCh = successCount / (failCount + successCount);
  
  console.log(report);
}
