console.log("Welcome to Game!");
let music=new Audio("music.mp3");
let audioTurn=new Audio("turn.wav")
let gameover=new Audio("gameover.wav")
let turn="X"
//func to change the turn
const changeTurn =()=>{
    return turn==="X"?"0":"X"
}
//func to check winnner
const checkWin=()=>{

}
//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
        }
    })
})