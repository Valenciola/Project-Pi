// Working text engine (with useful parameter input)
let i = 0;
const testRunText = function(text) {
	while (i <= text.length) {
		const printed = text.substring(0, i);
		console.log(printed);
		i++;
		// var helpTest = console.log (i === textTest.length + 1);
	}
};
const letsGoPrint = function(dialogue) {
	const printText = window.setInterval(testRunText, 100, dialogue);
	if (helpTest === true) {
		window.clearInterval(printText);
		console.log('Quit dialogue');
	}
};

letsGoPrint('test');