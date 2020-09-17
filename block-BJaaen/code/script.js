let mainBox = document.querySelector(".box");

let plySelectedOpt = document.querySelector(".selection");

let cmpSelection = document.querySelector(".cmpSelection");

let playerOptResult = document.querySelector(".plySelection");

let finalResult = document.querySelector(".gameChanger");
let cmp = document.querySelector(".computerOpt");
let scorePly = document.querySelector(".plyScore");
let cmpScore = document.querySelector(".cmpScore");

let playerOpt = document.querySelector(".playerOpt");

let data = ["Rock","Paper","Scissor"];





function handleClick(event){
  let player = (event.target.dataset.opt);
  let cmpRandom = data [Math.floor(Math.random() * data.length)];
 playerOptResult.innerText = player;
 cmpSelection.innerText = cmpRandom;
 cmp.style.color = "blue";
 playerOpt.style.color = "white";
 finalResult.style.padding ="10px";
  if(player == cmpRandom){
      finalResult.innerText = "It's a tie"
      cmp.style.color = "violet";
      playerOpt.style.color = "violet";
  }else if( player == "Rock"){
      if(cmpRandom == "Paper"){
        cmpScore.innerText = Number(cmpScore.innerText) + 1;
        playerOpt.style.color = "red";
        cmp.style.color = "green";
          return finalResult.innerText = "You Lose! Don't demotivate play again.";
          
         
      }else{
          scorePly.innerText = Number(scorePly.innerText) + 1;
          playerOpt.style.color = "Green";
          cmp.style.color = "red";
          return finalResult.innerText = "You Won! Congrats."
          
      }
  }else if(player == "Paper"){
      if(cmpRandom == "Rock"){
        scorePly.innerText = Number(scorePly.innerText) + 1;
        playerOpt.style.color = "Green";
        cmp.style.color = "red";
          return finalResult.innerText = "You Won! Congrats."
          
      }else{
        cmpScore.innerText = Number(cmpScore.innerText) + 1;
        playerOpt.style.color = "red";
        cmp.style.color = "green";
          return finalResult.innerText = "You Lose! Don't demotivate,play again."
      }
  }else if( player == "Scissor"){
      if(cmpRandom == "Paper"){
        scorePly.innerText = Number(scorePly.innerText) + 1;
        playerOpt.style.color = "Green";
        cmp.style.color = "red";
          return finalResult.innerText = "You Won! Congrats."
      }else
      cmpScore.innerText = Number(cmpScore.innerText) + 1;
      playerOpt.style.color = "red";
      cmp.style.color = "green";
        return finalResult.innerText = "You Lose! Don't demotivate Play again."
  }
}


playerOpt.addEventListener("click",handleClick);
