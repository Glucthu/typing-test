var maxTime = 60;
var timeElapsed = 1;
var quote = document.getElementById("quote").innerHTML;
var typedText = document.getElementById("text").value;
var errors = 0;


function changeMaxTime(newTime){
	if(timeElapsed == 1)
	{
		maxTime = newTime;
	}
}

function startGame(){
	document.getElementById("max-time").innerHTML = maxTime;
	
	let interval = setInterval(function(){		
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
	errors = 0;
	typedText = document.getElementById("text").value;
	for(let i in typedText)	
		if(typedText[i] != quote[i])
		{
			errors++;
		} 
	document.getElementById("errors").innerHTML = errors;
}


function updateWPM(typed){
	let wordsTyped = typed.split(" ").length;
	document.getElementById("wpm").innerHTML = Math.round(((wordsTyped / timeElapsed) * 60));
}
