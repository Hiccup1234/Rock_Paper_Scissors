function getComputerChoice()
{
    var things=['Rock','Paper','Scissors'];
    var randomi= Math.floor(Math.random()*3);
    if(randomi==0)
    return things[0];
    else if(randomi==1)
    return things[1];
    else
    return things[2];
}

function playRound(playerhoice,computerchoice)
{
    if(playerhoice==computerchoice)
    return 'Draw';
    if(playerhoice>computerchoice||playerhoice=='Rock'&&computerchoice=='Scissors')
    return 'Win';
    else return 'Loose';
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
