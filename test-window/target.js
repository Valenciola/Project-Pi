//Testing stuff here
let pop = document.getElementById("popup");
//pop.style.left = ((window.innerWidth) / 2) + "px";

let btn = document.getElementById("popbutton");
btn.addEventListener("click", function() {
	console.log("Click!");
	pop.innerHTML = ("");
	pop.style.display = "none";
});

//Bare bones for a popup
window.addEventListener("keydown", function(e) {
	if (e.key == 'a') {
		console.log("A");
		pop.innerHTML = ("<button id=\"popbutton\">X</button><p>Hello</p><p>Some extra text to fill area</p><p>Is there an expansion if I type more than I already have?</p>");
		pop.style.display = "initial";
	}
	let btn = document.getElementById("popbutton");
	btn.addEventListener("click", function() {
		console.log("Click!");
		pop.innerHTML = ("");
		pop.style.display = "none";
	});
});

let tog = document.getElementById("linkup");
let area = 1;
tog.addEventListener("click", function() {
	console.log("Captured!");
	if (tog.getAttribute("href") == "#open") {
		tog.setAttribute("href", "#mid");
	}
	else {
		tog.setAttribute("href", "#open");
	}
});