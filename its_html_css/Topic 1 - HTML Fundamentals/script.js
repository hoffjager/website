// Refer back to:
// script.html
// 1. Open a new text editor window and enter JavaScript functions.
// 2. Save the JavaScript file as “script.js” in the same directory as
// the HTML5 document "script.html", then open the web page in your
// browser and click on the second heading.
// This script attaches a behavior to the second heading element, so when
// it gets clicked by the user, its text content and color change.
function init() {
	var h1tags = document.getElementsByTagName("h1");
	h1tags[1].onclick = react;
}
function react() {
	this.innerHTML = "Clicked!"; this.style.color = "red";
}
onload = init;