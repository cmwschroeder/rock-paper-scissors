var userChoice = prompt("Type R for rock, P for paper, S for scissors");
var options = ["R", "P", "S"]

if(userChoice === "R" || userChoice === "P" || userChoice === "S") {
    // Rock = 0, Paper = 1, Scissors = 2
    var myChoice = Math.floor(Math.random() * 3);
    alert(options[myChoice]);
}
else {
    alert("bad input");
}