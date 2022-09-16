const startButton= document.getElementById('start-btn')
const tile= document.getElementsByClassName('tile')
const yellow= document.getElementsByClassName('yellow')
const red= document.getElementsByClassName('red')
const result=document.getElementById('result')
const title=document.getElementById('title')
const palyer1Score=document.getElementById('player1-score')
const palyer2Score=document.getElementById('player2-score')
//counts number of total moves(can't exceed 9)
let moves=0
//final game result
result.textContent=''
//array of all possible win combinations
const winCases=[
    [0,1,2],[3,4,5],[6,7,8,],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
//array to store for each filled cell the index of the player
let boardStatus=['','','','','','','','','']
//start with player 1
let currentPlayer =1
let score1=0
let score2=0
startButton.addEventListener('click',startGame)

//starting the game
function startGame(){
    title.textContent='Game started'
    resetGame()
    //loop over all divs and add a click event listener
    for (let i=0;i<9;i++){
        tile[i].onclick=()=>
        {   //check if the clicked tile is empty
            if(boardStatus[i]=='') {
                moves+=1 
                //display yellow coin for player1 and red coin for player 2
                if(currentPlayer==1){
                tile[i].firstElementChild.classList.add('display')}
                else
                {tile[i].lastElementChild.classList.add('display')}
                //fill the correct board index with current player index
                boardStatus[i]=currentPlayer
            }
            //check if the player won 
            if (checkWinning(boardStatus, winCases, currentPlayer)){
                result.textContent=`Player ${currentPlayer} won!`
                //display scores
                if (currentPlayer==1){
                    score1+=1
                    palyer1Score.textContent=`player1: ${score1}`
                }
                else{
                    score2+=1
                    palyer2Score.textContent=`player2: ${score2}`
                }

                boardStatus=[1,1,1,1,1,1,1,1,1] //to stop the game
                title.textContent='Click bellow to start the game!'
            }
            //check if players reached a tie
            else if(moves==9){
                result.textContent="It's a tie"
                title.textContent='Click bellow to start the game!'
            }
            //else switch players
            else{
                currentPlayer= switchPlayers(currentPlayer)
            }
        }
    }
}
//function to switch b/w player 1 and 2
function switchPlayers(currentPlayer){
    if (currentPlayer==1){
        return 2}
    else{
        return 1}
}
// function to check winning by comparing non empty board entries with all winCases
function checkWinning(boardStatus, winCases,currentPlayer){
    for (let i of winCases){
        if (boardStatus[i[0]]==currentPlayer && boardStatus[i[1]]==currentPlayer && boardStatus[i[2]]==currentPlayer){
            return true
        }
    }
    return false
}
//a function to reset the game
function resetGame(){
    boardStatus=['','','','','','','','','']
    currentPlayer= 1
    moves=0
    //hide all appearing coins
    for (let i=0;i<9;i++){
        if(tile[i].firstElementChild.classList.contains('display')){
            tile[i].firstElementChild.classList.remove('display')
        }
        if(tile[i].lastElementChild.classList.contains('display')){
            tile[i].lastElementChild.classList.remove('display')
        }
    }
    result.textContent=''
}






