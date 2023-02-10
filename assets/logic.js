var startButton = document.querySelector(".start-button");

{/* <button id="start-button">Start</button> */ }

//mke "start" button start questions and timer
// Button.onClick = function() {

// }

function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

function startTimer() {

}

//function that shows and checks answers





