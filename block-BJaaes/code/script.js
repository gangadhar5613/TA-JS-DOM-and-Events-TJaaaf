let form = document.querySelector("form");

let userInfo = {};

let errorMessage = "";

function existsNumber(str){
  return str.split('').some(e => Number(e));
}

function allNumbers(val){
  return val.split('').every(e => Number(e));
}




function handleSubmit(event) {
  event.preventDefault();
  let userNameElm = event.target.elements.username;
  let passwordValid = some(passwordElm.value, isNaN) && (passwordElm.value.password.includes("@") || passwordElm.value.password.includes("$")) && passwordElm.value.password.length > 6;
  if(userNameElm.value.length < 4){
    errorMessage = "username can't be less than 4 charachaters."
  }
  userNameElm.nextElementSibling.innerText = errorMessage;
  let nameElm = event.target.elements.name;
  if(existsNumber(nameElm.value)){
    errorMessage = "You can't use number in the name field"
  }
  nameElm.nextElementSibling.innerText = errorMessage;
 
  let emailElm = event.target.elements.email;

  if( !emailElm.value.includes("@")){
    errorMessage = "Not a valid email"
  }else if( emailElm.value.length < 6){
    errorMessage = "Email must contains 6 characters"
  }
  emailElm.nextElementSibling.innerText = errorMessage;

  let phoneElm = event.target.elements.phone;
  if(! allNumbers(phoneElm.value)){
    errorMessage = "Phone number can only contain numbers";
  }else if(phoneElm.value.length < 7){
    errorMessage = "Phone number must be 7 characters";
  }
  phoneElm.nextElementSibling.innerText = errorMessage;

  let passwordElm = event.target.elements.password;

  if(!passwordValid ){
    errorMessage = "Password must contain at least a symbol and a number"
  }
  
  passwordElm.nextElementSibling.innerText = errorMessage;


 


  

  // send data to server
  // console.log(userNameElm.value);
}

form.addEventListener("submit", handleSubmit);
