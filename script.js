
const  signs=document.querySelectorAll("img");
const  rundaIgrac=document.querySelector(".skor-igrac");
const  rundaKompjuter=document.querySelector(".skor-kompjuter");
const  rezultatRunde=document.querySelector(".rezultat");
let playerSign="";
let  rundaigrac=0;
let  rundakompjuter=0;


signs.forEach((sign) => { 
        
        sign.addEventListener("click", ()=>{

                rundaIgrac.textContent="Player score : " + rundaigrac; 
                rundaKompjuter.textContent="PC score : " +rundakompjuter;
                playerSign=sign.id;

                playRound();
            
        });})
    



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
        signStr="scissors";
    }

    return signStr;
}

function playRound()
{
    let playerSelection = playerSign;
    let computerSelection = computerPlay();

    if(playerSelection=="rock" && computerSelection=="scissors") 
    {       
            rundaigrac++;
            rundaIgrac.textContent="Player score : " + rundaigrac;
            rezultatRunde.textContent="You won!";
            if(rundaigrac==5)
            {
                restartGame();
            }
    }
    else if(playerSelection=="scissors" && computerSelection=="paper")
    {       
            rundaigrac++;
            rundaIgrac.textContent="Player score : " + rundaigrac;
            rezultatRunde.textContent="You won!";
            if(rundaigrac==5)
             {
            restartGame();
                }
    }
    else if(playerSelection=="paper" && computerSelection=="rock")
    {
             rundaigrac++;
             rundaIgrac.textContent="Player score : " + rundaigrac;
            rezultatRunde.textContent="You won!";
            if(rundaigrac==5)
            {
                restartGame();
            }
        
            
    }
    else if(playerSelection==computerSelection)
    {
        rundaIgrac.textContent="Player score : " + rundaigrac;
        rundaKompjuter.textContent="PC score : " + rundakompjuter;
        rezultatRunde.textContent="It's a tie!";
    }
    else 
    {
            rundakompjuter++;
            rundaKompjuter.textContent="PC score : " + rundakompjuter;
            rezultatRunde.textContent="You lost!";
            if(rundakompjuter==5)
            {
                restartGame();
            }
    }


}

function restartGame()
{   
    if(rundaigrac==5)
    {
    rezultatRunde.textContent="CONGRATULATIONS YOU WON FIRST TO 5"; 
    }
    else 
    {
    rezultatRunde.textContent="GAME OVER, COMPUTER WON"
    }
    
    rundaigrac=0;
    rundakompjuter=0;

}







