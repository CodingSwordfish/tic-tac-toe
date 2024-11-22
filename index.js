const Gameboard = (function(){
let gameboard = ["","","","","","","","",""];

const render = ()=>{
    let boardHTML = "";
    gameboard.forEach((square,index)=>{
        boardHTML += `<div class="square" id="square-${index}"></div>`
    })
    document.querySelector("#gameboard").innerHTML = boardHTML;
}
return {
    render,
}

})()




const startButton = document.querySelector("#startButton");
startButton.addEventListener("click",(e)=>{
//Game.start
})