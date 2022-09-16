const startButton= document.getElementById('start-btn')
const tile= document.getElementsByClassName('tile')
const yellow= document.getElementsByClassName('yellow')
const red= document.getElementsByClassName('red')
const result=document.getElementById('result')

let moves=0
result.textContent=''
const winCases=[
    [0,1,2],[3,4,5],[6,7,8,],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let boardStatus=['','','','','','','','','']
let currentPlayer =1

startButton.addEventListener('click',startGame)
startButton.onclick=startGame()

function startGame(){
    for (let i=0;i<9;i++){
        tile[i].onclick=()=>
        {   
            if(boardStatus[i]=='') {
                moves+=1
                if(currentPlayer==1){
                tile[i].firstElementChild.classList.add('display')}
                else{tile[i].lastElementChild.classList.add('display')}
                boardStatus[i]=currentPlayer
            }

            if (checkWinning(boardStatus, winCases, currentPlayer)){
                result.textContent=`Player ${currentPlayer} won!`
            }
            else if(moves==9){
                result.textContent="It's a tie"
            }
            else{
                currentPlayer= switchPlayers(currentPlayer)
                console.log(currentPlayer)
            }
        }
    }
}



function switchPlayers(currentPlayer){
   if (currentPlayer==1){
        return 2
   }
   else{
        return 1
   }
}

function checkWinning(boardStatus, winCases,currentPlayer){
    for (let i of winCases){
        if (boardStatus[i[0]]==currentPlayer && boardStatus[i[1]]==currentPlayer && boardStatus[i[2]]==currentPlayer){
            return true
        }
    }
    return false
}






