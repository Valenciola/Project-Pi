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

async function runDialogue(text) {

    for (let lines of text) {
        i = 0;
        let runner = window.setInterval(testRunText, 100, lines);

        await new Promise((resolve) => {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'b') {
                    resolve();
                }
            });
        });
    }
    // console.log("End");
}

// Call the function to start waiting

runDialogue(lines);