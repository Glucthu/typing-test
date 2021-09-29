var maxTime = 60;
var timeElapsed = 1;

function changeMaxTime(newTime){
	if(timeElapsed == 1)
	{
		maxTime = newTime;
	}
}

function startGame(){
	let quote = document.getElementById("quote").innerHTML;
	document.getElementById("max-time").innerHTML = maxTime;

	let interval = setInterval(function(){
		let typedText = document.getElementById("text").value;
		
		if(typedText != quote && timeElapsed <= maxTime) {
			document.getElementById("timer").innerHTML = timeElapsed;
			timeElapsed++;
			updateWPM(typedText);
		} else {
			clearInterval(interval);
		}
	}, 1000);
}

function checkText(){
	
};

function updateWPM(typed){
	let wordsTyped = typed.split(" ").length;
	document.getElementById("wpm").innerHTML = Math.round(((wordsTyped / timeElapsed) * 60));
}
