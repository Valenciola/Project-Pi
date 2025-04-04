// This document handles everything for the curtain page, including assets and audio. Since it's a simplistic page, I don't need to split everything up.

// Variables
let mark = [0, 0, 0]; // Checks for each key lock (like a triple lock kinda thing)
let backtrack = new Audio("Assets/Audio/Proj Pi Curtain (P0).mp3");

// DOM Elements
let tracktoggle = document.getElementById("audiocontrol");

// Functions
let Pass = function() {
    // Give clearance if the correct password is entered
    let test = window.prompt("Hello?", "Password");
    console.log(test);

    if (test == 'idk') {
        document.getElementById("info").innerHTML = document.getElementById("info").innerHTML + "<br><a href=\"test-window/test.html\">This will take you where you need to go.</a>"
    }
}

let FixGap = function(audio) {
    //console.log("Alive");
    // Attempt to make the looping a bit smoother for the background tracks
    let buffer = .23 // Adjust; otherwise use regular loop
    if (audio.currentTime > audio.duration - buffer) {
        audio.currentTime = 0
        audio.play()
    }
}

let Loop = function() {
    FixGap(backtrack);
}

// Event Listeners
window.addEventListener("keydown", function(e) {
     // Unlock when specific keys are pressed
    if (e.key == 'p') {
        mark[0] = 1;
    }
    else if (e.key == 'i') {
        mark[1] = 1;
    }
    else if (e.key == 'e') {
        mark[2] = 1;
    }
    
    if ((mark[0] + mark[1] + mark[2]) == 3) {
        Pass();
        mark = [0, 0, 0];
    }
});

window.addEventListener("keyup", function(e) {
    // Lock when specific keys are released
    if (e.key == 'p') {
        mark[0] = 0;
    }
    else if (e.key == 'i') {
        mark[1] = 0;
    }
    else if (e.key == 'e') {
        mark[2] = 0;
    }
});

tracktoggle.addEventListener("click", function() {
    // Toggles between disabled and enabled
    if (tracktoggle.style.textDecoration === "line-through") {
        // Procedure to enable
        tracktoggle.style.textDecoration = "none";
        tracktoggle.style.opacity = "100%"

        backtrack.play()
        backtrack.addEventListener("timeupdate", Loop);
    }
    else {
        // Procedure to disable
        tracktoggle.style.textDecoration = "line-through";
        tracktoggle.style.opacity = "70%"

        backtrack.pause()
        backtrack.removeEventListener("timeupdate", Loop)
    }
});