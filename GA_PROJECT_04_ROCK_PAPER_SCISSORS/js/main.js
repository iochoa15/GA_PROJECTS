var userChoice = "";
var computerChoice = "";

function choose(ouput){
	if (ouput === 0){
		userChoice = "rock";
	}
	if (ouput === 1){
		userChoice = "paper";
	}
	if (ouput === 2){
		userChoice = "scissors";
	}
	assignComputer();
    showComputerOption();
	showResult();
}

function assignComputer(){
	computerChoice = Math.random();

	if (computerChoice <= 0.33){
		computerChoice = "rock";
	} else if (computerChoice <= 0.66){
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}
}

function compare(choice1, choice2){
    if (choice1 === choice2) {
        return "This is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock Wins";
        }
        else {
            return "Paper Wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper Wins";
        }
        else {
            return "Scissors Wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Rock Wins";
        }
        else {
            return "Scissors Wins";
        }
    }
}

function showComputerOption(){
    var res = computerChoice
    document.getElementById("compChoice").innerHTML = res;
}

function showResult(){
	var res = compare(userChoice, computerChoice);
    document.getElementById("whoWon").innerHTML = res;
}


// function getUserScore (argument) {
//     var userScore;
//     var computerScore;
//     var you = "You Win";
//     var me = "I Won";
//     if(compare(choice1, choice2) == "you"){
//         $('#userScore').html(function(i, val) { return +val+1 });
//     }
//     else
//     }
//   if(compare(choice1, choice2) == "me"){
//         $('#computerScore').html(function(i, val) { return +val+1 });
//     }
//     else
//     }
// }







