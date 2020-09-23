let form = document.querySelector("form");
let wrapper = document.querySelector(".wrapper");

let userInfo = {};

function handleForm(event) {
	event.preventDefault();
	[...event.target.elements].forEach((i) => {
		userInfo[i.name] = i.type == "checkbox" ? i.checked : i.value;
	});

	overlay();
}

form.addEventListener("submit", handleForm);


function overlay() {
	let overlayDiv = document.createElement("div");
	let name = document.createElement("h1");
	let email = document.createElement("h2");
	let color = document.createElement("h2");
	let rating = document.createElement("h2");
	let genre = document.createElement("h2");
	let terms = document.createElement("h2");
	let close = document.createElement("p");

	name.innerText = "Name: " + userInfo.name;
	email.innerText = "Email: " + userInfo.email;
	color.innerText = "Color: " + userInfo.color;
	rating.innerText = "Rating: " + userInfo.rating;
	genre.innerText = "Genre: " + userInfo.genre;
	terms.innerText = terms ? "Terms:  You have aggreed terms and conditions" : "Terms: You did't aggreed terms and conditions";
	close.innerText = "Close";

	overlayDiv.classList.add("container");
	close.classList.add("btn");

	overlayDiv.append(name, email, color, rating, genre, terms, close);
	wrapper.append(overlayDiv);

	form.style.display = "none";
	close.addEventListener("click", () => {
		form.style.display = "flex";
		overlayDiv.style.display = "none";
	});
}