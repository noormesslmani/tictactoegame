const startButton= document.getElementById('start-btn')
const tile= document.getElementsByClassName('tile')
const yellow= document.getElementsByClassName('yellow')
const red= document.getElementsByClassName('red')
const result=document.getElementById('result')

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

startButton.addEventListener('click',startGame)
startButton.onclick=startGame()
//starting the game
function startGame(){
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
            }
            //check if players reached a tie
            else if(moves==9){
                result.textContent="It's a tie"
            }
            //else switch players
            else{
                currentPlayer= switchPlayers(currentPlayer)
                console.log(currentPlayer)
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






