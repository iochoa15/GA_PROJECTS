var userChoice = prompt("text");
var computerChoice = Math.random();

if(computerChoice <= 0.33){
	computerChoice = "rock";
} else if(0.34<=computerChoice<=0.67){
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

choice1 = userChoice
choice2 = computerChoice

function compare(choice1, choice2){
	if(choice1===choice2){
		return ('This is a tie!');
	}
	if(choice1==="rock"){
		if(choice2==="scissors"){
		return ('Rock Wins!')	
		} else {
			return('Paper Wins!')
		}	
	}
	if(choice1==="paper"){
		if(choice2==="rock"){
		return ('Paper Wins!')	
		} else {
			return('Scissors Wins!')
		}	
	}
	if(choice1==="scissors"){
		if(choice2==="rock"){
		return ('Rock Wins!')	
		} else {
			return('Scissors Wins!')
		}	
	}
}

console.log(compare(choice1, choice2))








