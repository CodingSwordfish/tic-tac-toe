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
    square.addEventListener("click",handleClick)
})

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
        if(players[0].name && players[1].name){
            Gameboard.render();
        }
       
    }

    return {
        start
    }

})()


const startButton = document.querySelector("#startButton");
startButton.addEventListener("click",(e)=>{
Game.start();
})