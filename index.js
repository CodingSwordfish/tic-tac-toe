const Gameboard = (function(){
let gameboard = ["","","","","","","","",""];

const render = ()=>{
    let boardHTML = "";
    gameboard.forEach((square,index)=>{
        boardHTML += `<div class="square" id="square-${index}">${square}</div>`
    })
    document.querySelector("#gameboard").innerHTML = boardHTML;


}
return {
  render,
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
        players = [
            createPlayer(document.querySelector("#player1").value,"X"),
            createPlayer(document.querySelector("#player2").value,"O"),
        ]
// console.log(players[0].name)
        currentPlayerIndex = 0; 
        gameOver = false;
       
            Gameboard.render();
        
            const squares = document.querySelectorAll(".square");
            squares.forEach((square)=>{
                square.addEventListener("click",handleClick)
            })
    }

    const handleClick= (e)=>{
       let index = parseInt(e.target.id.split("-")[1])
    console.log(typeof index)
    }

    return {
        start,handleClick
    }

})()


const startButton = document.querySelector("#startButton");
startButton.addEventListener("click",(e)=>{
Game.start();
})