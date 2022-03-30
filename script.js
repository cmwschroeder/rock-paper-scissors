var userChoice = prompt("Type R for rock, P for paper, S for scissors");
var options = ["R", "P", "S"];
var win = 0;
var lose = 0;
var tie = 0;
var playAgain = true;

if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
  // Rock = 0, Paper = 1, Scissors = 2
  var myChoice = Math.floor(Math.random() * 3);
  alert(options[myChoice]);
  // Make rule for game to determine win or lose
  if (userChoice === "R" && options[myChoice] === "R") {
    alert("tie");
    tie++;
  }
  if (userChoice === "P" && options[myChoice] === "R") {
    alert("win");
    win++;
  }
  if (userChoice === "S" && options[myChoice] === "R") {
    alert("lose");
    lose++;
  }
  if (userChoice === "R" && options[myChoice] === "P") {
    alert("lose");
    lose++;
  }
  if (userChoice === "P" && options[myChoice] === "P") {
    alert("tie");
    tie++;
  }
  if (userChoice === "S" && options[myChoice] === "P") {
    alert("win");
    win++;
  }
  if (userChoice === "R" && options[myChoice] === "S") {
    alert("win");
    win++;
  }
  if (userChoice === "P" && options[myChoice] === "S") {
    alert("lose");
    lose++;
  }
  if (userChoice === "S" && options[myChoice] === "S") {
    alert("tie");
    tie++;
  }
} else {
  alert("bad input");
}

//This displays stats
alert("wins: " + win + "\nlosses: " + lose + "\nties: " + tie);

//This asks user if they want to play again:
playAgain = confirm("Play again?");
