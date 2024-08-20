// Dialogue box initial stuff
let dio = document.getElementById("dio");
let dia = document.getElementById("dia");
let conti = document.getElementById("progression");

window.addEventListener("keydown", function(e) {
	if (e.key == 'd' || e.key == 'b') {
		//console.log("Dia!");
		dio.style.display = "initial";
	}
	else {
		dio.style.display = "none";
	}
});

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
let lines = ["First line", "second line", "third line"];

function dialogue(lines, element, button) {
    let line = 0;
    let i = 0; // Initialize character index
    const interval = 100; // Wait time
    element.textContent = ''; // Erase original text
    button.setAttribute("disabled", "true");

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
        if (line < lines.length) {
            addCharacter();
        }
        else {
            // What to do at the end of all dialogue lines?
        }
    }

    button.addEventListener('click', () => {
        button.disabled = true;
        element.textContent = ''; // Clear previous line
        line++; // Move to the next line
        i = 0; // Reset character index for the new line
        displayText();
    });

    displayText(); // Start displaying the first line
}

/*
displayText(lines[2], dia);
setTimeout(displayText, 3000, lines[1], dia);
setTimeout(displayText, 6000, lines[0], dia);
*/

dialogue(lines, dia, conti);