// Topic 1: Operators, Methods, and Keywords

// Increment and Decrement Operators:
function incAndDec()
	{
		var result = 0;
		document.write((result = ++x) + "<br />");	// pre-increment (increment before assignment)
		document.write((result = x++) + "<br />");	// post-increment (assignment before increment)
		document.write((result = --x) + "<br />");	// pre-decrement (decrement before assignment)
		document.write((result = x--) + "<br />");	// post-decrement (assignment before decrement)
	}
var x = 3;
var y = x++;	   // If the operator appears after the variable, the value is modified after the expression is evaluated (y = 3, then x = 4).
var a = 3;
var b = ++a;	   // If the operator appears before the variable, the value is modified before the expression is evaluated (b = 4, as a goes from 3 to 4)
var z = 10;
var w = z--;
var c = 10;
var d = --c;
document.write(x); // x outputs 4
document.write(y); // y outputs 3
document.write(a); // a outputs 4
document.write(b); // b outputs 4
document.write(z); // z outputs 9
document.write(w); // w outputs 10
document.write(c); // c outputs 9
document.write(d); // d outputs 9

// Compound Assignment Operators
function addFive(qty)
{
	var newQty = parseInt(document.getElementById(qty).value);
	newQty += 5; // newQty = newQty + 5
	document.getElementById(qty).value = newQty;
}

// try, throw, catch, finally
function mostBasicExample()
{
	try
	{
		var num1 = 10;
		var num2 = 0;
		var answer = num1 / num2;
	}
	catch (error)
	{
		alert(error.message);
	}
}
function finallyExample()
{
	var datatocheck, x;
	datatocheck = document.getElementById("age");
	try
	{
		if(datatocheck == "")
			throw "empty";
		if(isNaN(datatocheck))
			throw "not a number";
		if(datatocheck < 18)
			throw "too low";
		if(datatocheck > 100)
			throw "too high";
	}
	catch (error)
	{
		alert("Input is " + error);
	}
	finally
	{
		document.getElementById("age").value = "";
	}
}

// trycatch.js:
function afterTryCatch()
{
	try
	{
		let obj = undefined;
		console.log(obj.b);
		console.log('If the previous line of code throws an exception, you\'ll never see this.');
	}
	catch (error)
	{
		console.log('I caught an exception: ' + error.message);
	}
	finally
	{
		console.log('This will happen no matter what!');
	}
	console.log('My application is still running!');
}
afterTryCatch();
		// node trycatch.js:
						// I caught an exception: Cannot read property 'b' of undefined
						// This will happen no matter what!
						// My application is still running!
function performHigherLevelOperation()
{
	let obj;
	let value = 0;
	try
	{
		value = performCalculation(obj);
	}
	catch (error)
	{
		console.log(error.message);
	}
	if (value == 0)
	{
		// contingency
		// retry logic
	}
}
performHigherLevelOperation();
		// node trycatch.js:
						// Cannot read property 'hasOwnProperty' of undefined

// Ignoring the Error via ajax (Asynchronous JavaScript And XML)
try
{
	var ajax = new XMLHttpRequest();
}
catch(e1)
{
	try
	{
		ajax = new ActiveXObject("Msxm12.XMLHTTP");
	}
	catch(e2)
	{
		try
		{
			ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e3)
		{
			ajax = false;
		}
	}
}

// BOM Interaction
function doIt()
{
	var screenSize = "Screen size: " + window.screen.availWidth + " x " + window.screen.availHeight + "<br/>";
	var windowSize = "Window size: " + window.innerWidth + " x " + window.InnerHeight + "<br/>";
	var result = screenSize + windowSize;
	document.getElementById("output").innerHTML = result;
}
function checkoutWindow()
{
	checkWin = window.open("checkout.htm", "", "width=300, height=300");
}
function closeCheckout()
{
	checkWin.close();
}
/*
	<body>
		<input type="button" onclick="doIt()" value="Do It" /><br /><br />
		<span id="output"></span>
	</body>
*/

// typeof operator:
function doIt()
{
	var1 = "1";
	var2 = 1;
	var3 = true;
	var4 = new Date;
	var5 = Math.sin;											// math needs to be capitalized
	var i = "test";
	// var = var6;												// undefined variable needs to be assigned
	document.getElementById("output1").value= typeof var1;		// string
	document.getElementById("output2").value= typeof var2;		// number
	document.getElementById("output3").value= typeof var3;		// boolean
	document.getElementById("output4").value= typeof var4;		// date
	document.getElementById("output5").value= typeof var5;		// Math
	// document.getElementById("output6").value= typeof var6;	// undefined
}

// Alerts, Prompts & Confirm Boxes
function welcome()
{
	yourName = prompt("Enter your name");		  // prompt() displays a dialog box that prompts the user for input.
	if (confirm("Is your name correct?") == true) // confirm() displays a dialog box with a specified message, along with an OK and a Cancel button.
	{
		alert("Welcome, " + yourName);			  // alert() displays an alert box with a specified message, and an OK button.
	}
}
function myAlert()
{
	alert("Hey, what are you looking at?");
}
function myPrompt()
{
	var food = prompt("What is your favourite summer food?", "BBQ");
	if(food)
	{
		alert("Your favourite summer food is: " + food);
	}
	else
	{
		alert("You pressed Cancel, or no value was entered.");
	}
}
function myConfirm()
{
	var response = confirm("Confirm Test: Continue?");
	if(response)
	{
		alert("Your response was OK!");
	}
	else
	{
		alert("Your response was Cancel.");
	}
}