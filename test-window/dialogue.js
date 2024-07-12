// Dialogue box initial stuff
let dio = document.getElementById("dio");
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

function displayText(text, element) {
    let i = 0;
    const interval = 100; // milliseconds
    element.textContent = '';

    function addCharacter() {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
            setTimeout(addCharacter, interval);
        }
    }

    addCharacter();
}

displayText(lines[0], dio);