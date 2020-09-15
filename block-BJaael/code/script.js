function newBox(){
    let boxes = document.querySelector('.boxes')
    for(let i = 1; i<=500; i++){
        let box = document.createElement('div');
        box.classList.add("box");
        box.innerText = Math.floor(Math.random()*500 +1);
        boxes.append(box);

     }
}
newBox();
function randomColor (){
   let box = document.querySelectorAll('.box');
     box.forEach((item) => {
    let randomNumber = Math.floor(Math.random()*500 +1);
    let color = '#'+Math.floor(Math.random()*16777215).toString(16)

     item.innerText = randomNumber;
     item.style.backgroundColor  = color;
  })
}

 let boxes = document.querySelector('.boxes');
 boxes.addEventListener('mousemove', randomColor) 