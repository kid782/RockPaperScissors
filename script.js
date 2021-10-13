

function computerPlay() { 

    let randx=Math.floor(Math.random()*3)+1;
    let signStr="";

    if(randx == 1)
    {
        signStr="rock";
    }
    else if(randx == 2) 
    {
        signStr="paper"; 
    }
    else
    {
        signStr="scissors"
    }

    return signStr;
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = prompt("Rock/Paper/Scissors?");
    playerSelection= playerSelection.toLowerCase();
    let strOutcome="";
    console.log("Player: " + playerSelection); 
    computerSelection = computerPlay();
    console.log("Computer: " + computerSelection);

    if(playerSelection=="rock" && computerSelection=="scissors") 
    {
        strOutcome="Wow, you've won the round!";
    }
    else if(playerSelection=="scissors" && computerSelection=="paper")
    {
        strOutcome="Wow, you've won the round!";
    }
    else if(playerSelection=="paper" && computerSelection=="rock")
    {
        strOutcome="Wow, you've won the round!";
    }
    else if(playerSelection==computerSelection)
    {
        strOutcome="It's a tie.";
    }
    else 
    {
        strOutcome="Ehh, you lost.";
    }

    return strOutcome;

}

function game()
{
    let rundaZaIgraca=0;
    let rundaZaKompjuter=0;
    let strRoundOutcome="";
    let strWinner="";
    for(i=0; i<5; i++)
    {
        strRoundOutcome=playRound();

        if(strRoundOutcome=="Wow, you've won the round!")
        {
            rundaZaIgraca++;
        }
        else if(strRoundOutcome=="Ehh, you lost.")
        {
            rundaZaKompjuter++;
        }
        else
        {
            rundaZaIgraca++;
            rundaZaKompjuter++;
        }
    }
    if(rundaZaIgraca>rundaZaKompjuter)
    {
        strWinner="Contragulations, you won best of 5"
    }
    else
    {
        strWinner="Ehh, you've lost best out of 5";
    }

    return console.log(strWinner);
}



game();