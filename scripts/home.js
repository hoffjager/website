// calculating screen and window dimensions via button press
function sizes()
{
	var screenSize = "Screen size: " + window.screen.availWidth + " x " + window.screen.availHeight;
	var windowSize = "; Window size: " + window.innerWidth + " x " + window.innerHeight;
	var result = screenSize + windowSize;
	alert(result);
}
// Result = Screen size: 1366 x 728; Window size: 1366 x 625

// alerts, prompts & confirm boxes
function welcome()
{
	yourName = prompt("Enter your name:");					  // prompt() displays a dialog box prompting users for their input.
	if (confirm("Is your name correct? " + yourName) == true) // confirm() displays a dialog box with a specified message, along with an OK and a Cancel button.
	{
		alert("Welcome " + yourName + " :)");				  // alert() displays an alert box with a specified message, and an OK button.
	}
	else
	{
		alert("You pressed Cancel, goodbye!");
	}
}