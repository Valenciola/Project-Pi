//Random randomness *
console.log("Test window connected!");
const width = window.innerWidth;
const height = window.innerHeight;
console.log("A window of " + width + "x" + height);

//Misc but useful
let switchable = true;

//Grab the website section off the bat
let loca = window.location.href;
loca = (loca.substring(loca.indexOf("#"), loca.length));

let pop = document.getElementById("popup");

//let pic = document.getElementById("pic");

//Variables for the switching buttons
let togup = document.getElementById("linkup");
let togdown = document.getElementById("linkdown");
let togupb = document.getElementById("linkupbtn");
let togdownb = document.getElementById("linkdownbtn");
let area = 0;
let rooms = ["#upper", "#open", "#mid", "#lower"];

//Bare bones for a popup
let btn = document.getElementById("popbutton");
btn.addEventListener("click", function() {
	console.log("Click!");
	popbutton.setAttribute("disabled", "true");
	pop.style.display = "none";
	switchable = true;
	regulate(area, rooms, togupb, togdownb, togup, togdown);
});

window.addEventListener("keydown", function(e) {
	if (e.key == 'a') {
		console.log("A");
		popbutton.removeAttribute("disabled");
		pop.style.display = "initial";

		togupb.setAttribute("disabled", "true");
		togdownb.setAttribute("disabled", "true");
		switchable = false;
	}
});

//Buttons to change rooms *

let regulate = function (room, rooms, upbtn, downbtn, uplink, downlink) {
	if (!switchable) {
		//Do nothing, I guess
	}
	else if (room == 0) {
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
	if (switchable) {
		area--;
	}
	if (area < 0) {
		area = 0;
	}
	//regulate(area, rooms, togupb, togdownb, togup, togdown);
	setTimeout(regulate, 1, area, rooms, togupb, togdownb, togup, togdown);
	console.log(area);
});
togdown.addEventListener("click", function() {
	console.log("Going down!");
	if (switchable) {
		area++;
	}
	if (area > rooms.length - 1) {
		area = rooms.length - 1;
	}
	//regulate(area, rooms, togupb, togdownb, togup, togdown);
	setTimeout(regulate, 1, area, rooms, togupb, togdownb, togup, togdown);
	console.log(area);
});

//Interactables
/*
pic.addEventListener("click", function() {
	console.log("Picture click!");
});
*/