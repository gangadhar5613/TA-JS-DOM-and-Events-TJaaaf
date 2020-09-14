let clk = document.querySelector(".click")

let boxOne = document.querySelector(".first");



let mouse = document.querySelector(".mouse");

let box2 = document.querySelector(".second")


clk.addEventListener("click",function(){
    let  randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

   boxOne.style.backgroundColor = randomColor;
    

});

mouse.addEventListener("mousemove",function(){
    let  randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

   box2.style.backgroundColor = randomColor;
});
