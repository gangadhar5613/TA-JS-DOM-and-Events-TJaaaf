let boxes = document.querySelectorAll(".boxes");
function handler(event, i) {
	if (event.target.classList.contains("box")) {
		event.target.style.transform = `rotateY(360deg)`;
		event.target.innerText = `${i + 1}`;
		setTimeout(() => {
			event.target.style.transform = `rotateY(180deg)`;
			event.target.innerText = "";
		}, 5000);
	}
}

[...boxes[0].children].forEach((event, i) => {
	e.addEventListener("click", function (event) {
		handler(event, i);
	});
});
boxes[1].addEventListener("click", function (event) {
	handler(event, [...event.currentTarget.children].indexOf(event.target));
});