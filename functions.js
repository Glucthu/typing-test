function addElement (tag, content, fatherElement, classList){
    // Create element:
    const newElement = document.createElement(tag);
    newElement.innerHTML = content;
    classList.map(newClass => newElement.classList.add(newClass))

    // Append to another element:
    document.getElementById(fatherElement).appendChild(newElement);
}

document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.time-button');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('time-selected'));
          btn.classList.add('time-selected');
        });
 
    });

});

function changeMaxTime(newTime){
	if(timeElapsed == 0)
	{
		maxTime = newTime;
		document.getElementById("max-time").innerHTML = maxTime;
	}
}

function restartGame(){
    document.getElementsByClassName("background")[0].remove();
    removeOldQuote();
    setNewQuote();
    timeElapsed = 0;
    incorrectTyped = 0
    document.getElementById("text").value = "";

    initializeStats();
}

function initializeStats(){
    document.getElementById("timer").innerHTML = timeElapsed;
    document.getElementById("max-time").innerHTML = maxTime;
    document.getElementById("wpm").innerHTML = 0;
    document.getElementById("incorrectTyped").innerHTML = 0;
}