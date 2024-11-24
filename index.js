const displayController = (function() {
    const renderMessage = (message) => {
      document.querySelector("#message").innerHTML = message;
    };
  
    return {
      renderMessage
    };
  })();



const Gameboard = (function(){
let gameboard = ["","","","","","","","",""];

const render = ()=>{
    let boardHTML = "";
    gameboard.forEach((square,index)=>{
        boardHTML += `<div class="square" id="square-${index}">${square}</div>`
    })
    document.querySelector("#gameboard").innerHTML = boardHTML;
    
    const squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener("click",Game.handleClick)
    })

}

const update = (index,value)=>{
gameboard[index]=value;
render()
}

const getGameBoard = ()=> {
    return gameboard }

return {
  render,update,getGameBoard
}

})()

const createPlayer = (name,mark)=>{
    return{
        name,
        mark
    }
}

const Game = (()=>{
    let players = [];
    let currentPlayerIndex ;
    let gameOver;
    

    const start = ()=>{
        const player1Name = document.querySelector("#player1").value;
        const player2Name = document.querySelector("#player2").value;
    
        if (player1Name === "" || player2Name 
     === "") {
          alert("Please enter player names.");
          return;
        }
    
        players = [
            createPlayer(document.querySelector("#player1").value,"X"),
            createPlayer(document.querySelector("#player2").value,"O"),
        ]
        
        currentPlayerIndex = 0; 
        gameOver = false;
        
       
        Gameboard.render();

            const squares = document.querySelectorAll(".square");
            squares.forEach((square)=>{
                square.addEventListener("click",handleClick)
            })  
           
    }
    
    const handleClick= (e)=>{
       
        if(gameOver){
            return;
        }
       let index = parseInt(e.target.id.split("-")[1]);
       if(Gameboard.getGameBoard()[index] !==""){
        return;
    }
    Gameboard.update(index,players[currentPlayerIndex].mark)
    
  if(checkForWin(Gameboard.getGameBoard(),players[currentPlayerIndex].mark)){
    gameOver = true;
    displayController.renderMessage(`${players[currentPlayerIndex].name} wins`)
  } else if(checkForTie(Gameboard.getGameBoard())){
    gameOver = true;
    displayController.renderMessage(`Its a Tie!`)
  }
    
    currentPlayerIndex = currentPlayerIndex === 0?1 : 0;
}

const restart = ()=>{

   
document.querySelector("#player1").value = "";
document.querySelector("#player2").value = "";
document.querySelector("#message").innerHTML = "";
for(let i = 0; i<9;i++){
    Gameboard.update(i,"")
}


Gameboard.render()
}

    return {
        start,handleClick,restart
    }

})()

function checkForTie(board){ 
return board.every(cell => cell !=="")
}

function checkForWin(board){
    const winningCombinations = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6],
    ]

    for(let i = 0; i < winningCombinations.length; i++){
         const [a,b,c]= winningCombinations[i]
    if(board[a] && board[a]=== board[b] && board[a] === board[c]){
return true;
    }
    
        }
        return false
}


const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click",(e)=>{
  
    Game.restart()
})

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click",(e)=>{
Game.start();
})