//Testing stuff here
let pop = document.getElementById("popup");
pop.style.left = ((window.innerWidth) / 2) + "px";

let btn = document.getElementById("popbutton");
btn.addEventListener("click", function() {
	console.log("Click!");
	pop.innerHTML = ("");
});

//Bare bones for a popup
window.addEventListener("keydown", function(e) {
	if (e.key == 'a') {
		console.log("A");
		pop.innerHTML = ("<button id=\"popbutton\">X</button><p>Hello</p><p>Some extra text to fill area</p>");
	}
	let btn = document.getElementById("popbutton");
	btn.addEventListener("click", function() {
	console.log("Click!");
	pop.innerHTML = ("");
	});
});