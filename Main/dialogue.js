// Dialogue box initial stuff
let dio = document.getElementById("dio");
dio.style.display = "none";

let dia = document.getElementById("dia");
let conti = document.getElementById("progression");
let up = document.getElementById("linkupbtn");
let down = document.getElementById("linkdownbtn");

let pic = document.getElementById("pic");
let flag = 0;

// Working text engine (with useful parameter input)
let i = 0;
let marker = false;

const testRunText = function(text) {
    //Function that runs the code to print text
    marker = false;
	if (i <= text.length) {
		let printed = text.substring(0, i);
        dio.textContent = printed;
		console.log(printed);
		i++;
		// var helpTest = console.log (i === textTest.length + 1);
	}
    else {
        marker = true;
    }
};

// function keeps alternating between all three lines for some reason; got to find a fix
let lines = ["Welcome to the dialogue test engine.",
            "I needed a shorter test so I did this...",
            "So I edited the function so that the name can change since you know we need the custom name haha",
            "Also, I got the Pixelify Sans Google font and I'll use it for the game",
            "Zach is so epic and helped me use flexbox to fix my dialogue box layout yaaaaaaay also I need filler words words words numbers numbers stress there's a lot that comes with making a game you know unfortunately it appears I'm too good at engineering and my containers are adjusting to the text size haha but then I FIXED IT so it scrolls when it needs to scroll and this is so epic oh my goshness"
];

function dialogue(lines, element, button, person) {
    let line = 0;
    let i = 0; // Initialize character index
    const interval = 35; // Wait time
    element.textContent = ''; // Erase original text
    button.setAttribute("disabled", "true");
    dio.style.display = "flex";
    up.setAttribute("disabled", "true");
    down.setAttribute("disabled", "true");
    document.getElementById("name").textContent = person;

    function addCharacter() {
        if (i < lines[line].length) {
            element.textContent += lines[line][i];
            i++;
            setTimeout(addCharacter, interval);
        }
        else {
            button.disabled = false;
        }
    }

    function displayText() {
        //console.log("Does this run every time?");
        if (line < lines.length) {
            addCharacter();
        }
        else {
            // What to do at the end of all dialogue lines?
            console.log("I'm done...");
            flag = 0;
            dio.style.display = "none";
            button.removeEventListener('click', buttonHandle);
            regulate(area, rooms, togupb, togdownb, togup, togdown);
        }
    }

    function buttonHandle() {
        button.disabled = true;
        element.textContent = ''; // Clear previous line
        line++; // Move to the next line
        i = 0; // Reset character index for the new line
        displayText();
    }

    button.addEventListener('click', buttonHandle);

    displayText(); // Start displaying the first line
}

/*
displayText(lines[2], dia);
setTimeout(displayText, 3000, lines[1], dia);
setTimeout(displayText, 6000, lines[0], dia);
*/

pic.addEventListener("click", function() {
    //console.log(flag);
    if (flag == 0) {
        flag = 1;
	    dialogue(lines, dia, conti, "Palatello");
    }
});