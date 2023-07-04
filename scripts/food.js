// entering your favourite food
function faveFood()
{
	var food = prompt("What is your favourite food?", "Please enter...");
	if(food)
	{
		alert("Your favourite food is " + food + ". Yummers!");
	}
	else
	{
		alert("You pressed Cancel, or no value was entered. I'm hungry.");
	}
}

// declaring array of ingredients for baking muffins
muffinIngs = ["350g Self Raising Flour", " 300g Caster Sugar", " 3 tbsp Chocolate Powder", " Pinch of Baking Soda", " 225g Butter", " 225ml Cola", " 125ml Milk", " 2 Eggs", " 1 tsp Vanilla Extract/Essence"];
len = muffinIngs.length;
for(i = 0; i < len; i++)
{
	document.getElementById('muffins').innerHTML = muffinIngs[i] + <br />;
}

