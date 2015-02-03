/*
Mark Ziecina
SENG 691Z Agile Software Development
Spring 2015
Assignment 1
*/

function collateTimes(t) {
	var resultArray = [];
	var n = 0;
	var lastDate = new Date(Date.parse(t[0])); 
	lastDate.setMinutes(lastDate.getMinutes() + 1);

	resultArray[n++] = t[0];
	
	for (var i = 0; i < t.length; i++){
		var loopDate = new Date(Date.parse(t[i]));
		if (loopDate > lastDate) {
			resultArray[n++] = t[i];
		} 
		lastDate = loopDate;
		lastDate.setMinutes(lastDate.getMinutes() + 1);
		
	}
	return resultArray;
}