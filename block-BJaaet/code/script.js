let input = document.querySelector("#movie");

let div = document.querySelector(".input")

let root = document.querySelector("ul");


// <li class = "list">
// <p class="movieName">Bhahubali</p>
// <span class="remove">X</span>
// </li>


let movieList =[];


function createUi(){
    
    root.innerHTML = "";

   movieList.forEach((movie,index) => {
       
    let list = document.createElement("li");
    list.classList.add("list");
    let name = document.createElement("p");
    name.classList.add("movieName");
    let span = document.createElement("span");
    span.classList.add("remove");
    
    list.append(name,span);
    name.innerText = movie.name;
    span.setAttribute("data-id",index)
    span.innerText = "X";
  root.append(list);
    div.append(root);
    span.addEventListener("click",handleDel);

   })

}

function handleDel(event){
  let id = event.target.dataset.id;
  movieList.splice(id,1);
  createUi();
}


function handleInput(event){

    let value = event.target.value;
    if(event.keyCode == 13 & value != ""){

        let movie = {
            name : value
        };
   
   
        movieList.push(movie);
        event.target.value ="";
        createUi();
    }
    
   
}


input.addEventListener("keyup",handleInput);