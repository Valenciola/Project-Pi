//Random randomness *
console.log("Test window connected!");

//Grab the website section off the bat
let loca = window.location.href;
loca = (loca.substring(loca.indexOf("#"), loca.length));

//Popup Code *
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

//Buttons to change rooms *
let togup = document.getElementById("linkup");
let togdown = document.getElementById("linkdown");
let togupb = document.getElementById("linkupbtn");
let togdownb = document.getElementById("linkdownbtn");
let area = 0;
let rooms = ["#upper", "#open", "#mid", "#lower"];

let regulate = function (room, rooms, upbtn, downbtn, uplink, downlink) {
	if (room == 0) {
		upbtn.setAttribute("disabled", "true");
		downbtn.removeAttribute("disabled");
		downlink.setAttribute("href", rooms[room + 1]);
	}
	else if (room == rooms.length - 1) {
		downbtn.setAttribute("disabled", "true");
		upbtn.removeAttribute("disabled");
		uplink.setAttribute("href", rooms[room - 1]);
	}
	else {
		upbtn.removeAttribute("disabled");
		downbtn.removeAttribute("disabled");
		downlink.setAttribute("href", rooms[room + 1]);
		uplink.setAttribute("href", rooms[room - 1]);
	}
}

area = rooms.indexOf(loca);
if (area < 0) {
	area = 0;
}
regulate(area, rooms, togupb, togdownb, togup, togdown);

togup.addEventListener("click", function() {
	console.log("Going up!");
	area--;
	if (area < 0) {
		area = 0;
	}
	//regulate(area, rooms, togupb, togdownb, togup, togdown);
	setTimeout(regulate, 1, area, rooms, togupb, togdownb, togup, togdown);
	console.log(area);
});
togdown.addEventListener("click", function() {
	console.log("Going down!");
	area++;
	if (area > rooms.length - 1) {
		area = rooms.length - 1;
	}
	//regulate(area, rooms, togupb, togdownb, togup, togdown);
	setTimeout(regulate, 1, area, rooms, togupb, togdownb, togup, togdown);
	console.log(area);
});