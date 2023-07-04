// calculating screen and window dimensions via button press
function sizes()
{
	var screenSize = "Screen size: " + window.screen.availWidth + " x " + window.screen.availHeight;
	var windowSize = "; Window size: " + window.innerWidth + " x " + window.innerHeight;
	var result = screenSize + windowSize;
	alert(result);
}

// entering your favourite food
/*
function faves()
{
	food = prompt("What is your favourite food?", "Please enter...");
	if(food)
	{
		alert("Your favourite food is " + food + ". Yummers!");
	}
	else
	{
		alert("You pressed Cancel, or no value was entered. I'm hungry.");
	}
}
*/

// declaring array of ingredients for baking muffins
/*
function muffins()
{
	muffinIngs = ["350g Self Raising Flour", " 300g Caster Sugar", " 3 tbsp Chocolate Powder", " Pinch of Baking Soda", " 225g Butter", " 225ml Cola", " 125ml Milk", " 2 Eggs", " 1 tsp Vanilla Extract/Essence"];
	for (i in muffinIngs)
	{
		return document.getElementById('muffins').value = ('[' + i + '] is: ' + v + '<br/>');
	}
}
*/
/*
		[0] is: 350g Self Raising Flour
		...
		[8] is: 1 tsp Vanilla Extract/Essence
*/


