var maxTime = 60;
var timeElapsed = 0;
var quote = document.getElementById("quote").children;
var typedText = document.getElementById("text").value;
var incorrectTyped = 0;

initializeStats();

function startGame(){
	let interval = setInterval(function(){		
		if(typedText.length != quote.length && timeElapsed < maxTime) {
			document.getElementById("timer").innerHTML = timeElapsed;
			timeElapsed++;
			updateWPM(typedText);
		} else if ((newQuote == typedText) || (timeElapsed == maxTime)) {
			document.getElementById("timer").innerHTML = timeElapsed;
			clearInterval(interval);
			addElement("div", "<div id='endStats'><button id='playAgainButton' onClick='restartGame()'>Play Again</button></div>", "body", ["background"]);
			addElement("h2", "Incorrect typed: " + incorrectTyped, "endStats", []);
			addElement("h2", "WPM: " + document.getElementById("wpm").innerHTML, "endStats", []);
			addElement("h2", "Time: " + timeElapsed, "endStats", []);
			addElement("br", "", "endStats", []);
			addElement("h1", "Well done!", "endStats", []);
		}
	}, 1000);
}

function checkText(){
	incorrectTyped = 0;
	typedText = document.getElementById("text").value;
	for(let i in typedText)	
		if(typedText[i] != quote[i].innerHTML)
		{
			quote[i].classList.remove("correct");
			quote[i].classList.add("incorrect");
			incorrectTyped++;
		} else {
			quote[i].classList.remove("incorrect");
			quote[i].classList.add("correct");
		}

		for(let i = typedText.length; i < quote.length; i++){
			quote[i].classList.remove("correct");
			quote[i].classList.remove("incorrect");
		}	

	document.getElementById("incorrectTyped").innerHTML = incorrectTyped;
}


function updateWPM(typed){
	let wordsTyped = typed.split(" ").length;
	document.getElementById("wpm").innerHTML = Math.round(((wordsTyped / timeElapsed) * 60));
}
