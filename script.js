// Set up stats, set to 0 for no games played
var win = 0;
var lose = 0;
var tie = 0;
// Set to true to play first game, check if user wants to play again
var playAgain = true;
// Options computer could pick
var options = ["R", "P", "S"];

while(playAgain) {
    // Ask user for their choice or rock, paper, or scissors
    var userChoice = prompt("Type R for rock, P for paper, S for scissors");

    // If user used correct input then play the game
    if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
        // Rock = 0, Paper = 1, Scissors = 2
        var myChoice = Math.floor(Math.random() * 3);
        // Make rule for game to determine win or lose
        if (userChoice === "R" && options[myChoice] === "R") {
            alert("Computer chose " + options[myChoice] + "\n\nYou tie");
            tie++;
        }
        if (userChoice === "P" && options[myChoice] === "R") {
            alert("Computer chose " + options[myChoice] + "\n\nYou win");
            win++;
        }
        if (userChoice === "S" && options[myChoice] === "R") {
            alert("Computer chose " + options[myChoice] + "\n\nYou lose");
            lose++;
        }
        if (userChoice === "R" && options[myChoice] === "P") {
            alert("Computer chose " + options[myChoice] + "\n\nYou lose");
            lose++;
        }
        if (userChoice === "P" && options[myChoice] === "P") {
            alert("Computer chose " + options[myChoice] + "\n\nYou tie");
            tie++;
        }
        if (userChoice === "S" && options[myChoice] === "P") {
            alert("Computer chose " + options[myChoice] + "\n\nYou win");
            win++;
        }
        if (userChoice === "R" && options[myChoice] === "S") {
            alert("Computer chose " + options[myChoice] + "\n\nYou win");
            win++;
        }
        if (userChoice === "P" && options[myChoice] === "S") {
            alert("Computer chose " + options[myChoice] + "\n\nYou lose");
            lose++;
        }
        if (userChoice === "S" && options[myChoice] === "S") {
            alert("Computer chose " + options[myChoice] + "\n\nYou tie");
            tie++;
        }
    }
    // Didn't put in a correct input so tell user 
    else {
        alert("Input entered was not correct");
    }

    //This displays stats
    alert("Wins: " + win + "\nLosses: " + lose + "\nTies: " + tie);

    //This asks user if they want to play again:
    playAgain = confirm("Play again?");
}
