// JavaScript source code
// Topic 3: Decisions and Loops

/*
	if():
	Omitting the Curly Braces:
			if (Time < 12) document.write(′Good morning′);

			if (Time < 12)
				document.write(′Good morning, how are you today?′);

			if (Time < 12)
				document.write(′Good morning. The following is the '
							   + 'list of all your appointments
							   for today. The '
							   + 'important ones are highlighted
							   in bold.');

			if (Time < 12)
				document.write(′Good morning. Following is the list of
							   all your appointments for today. The
							   important ones are highlighted in bold.');

			if (Time < 12)
				document.write(′Good morning. Following is the list of
				all your appointments for today. The important ones are
				highlighted in bold.');
*/

/*
	Positioning of Curly Braces:
			if(expression)
			{
				// Execute this code, this line...;
				// or more lines;
			}

			if(expression) {
				// Execute this code, this line...;
				// or more lines;
			}
*/

/*
	else{}:
		if(age < 18)	document.write('You are not an adult.');
		else			document.write('You are an adult.');
		
		if(age < 18)
			document.write('You are not an adult.');
		else
			document.write('You are an adult.');
		
		if(age < 18)
		{
			document.write('You are not an adult.');
			document.write("Sorry, you can't vote yet.");
		}
		else 
		{
			document.write('You are an adult.');
			document.write('You can vote.');
		}
*/

/*
	if()…else:
		if(value < 0)		document.write('Negative');
		else if(value > 0)	document.write('Positive');
		else				document.write('Zero');
		
		if(value < 0)		document.write('Negative');
		else if(value > 0)	document.write('Positive');
*/

/*
	switch()…case…break:
		if(age == '0-1')
		{
			document.write('You are a baby.');
			document.write('How can you read this?');
		}
		else if(age == '2-3')
		{
			document.write('You are a toddler.');
		}
		else if(age == '4-6')
		{
			document.write('You are an infant.');
			document.write('You go to nursery or school.');
		}
		else if(age == '7-12')
		{
			document.write('You are a child.');
		}
		else if(age == '13-17')
		{
			document.write('You are a teenager.');
			document.write('You can use Facebook.');
		}
		else
		{
			document.write('You are an adult.');
		}

		age = '4-6';
		switch(age)
		{
			case '0-1':		document.write('You are a baby.')
							document.write('How can you read this?')
							break
			case '2-3':		document.write('You are a toddler.')
							break
			case '4-6':		document.write('You are an infant.')
							document.write('You go to school now.')
							break
			case '7-12':	document.write('You are a child.')
							break
			case '13-17':	document.write('You are a teenager.')
							document.write('You can use Facebook.')
							break
			default			document.write('You are an adult.')
		}
*/

/*
	Allowing Fall-Through:
		switch(country)
		{
			case 'Australia':
			case 'Canada English':
			case 'Ireland':
			case 'UK English':
			case 'USA English':
			default:				language = 'English'		// only after the variable, language, has been assigned its value, is the break keyword used.
									break
			case 'Brazil':
			case 'Portugal':		language = 'Portuguese'		// only after the variable, language, has been assigned its value, is the break keyword used.
									break
			case 'France':
			case 'Canada French':	language = 'French'			// only after the variable, language, has been assigned its value, is the break keyword used.
									break
			case 'Germany':			language = 'German'
									break
			case 'Spain':		
			case 'USA Spanish':		language = 'Spanish'
		}
*/

/*
	Looping Sections of Code:
	while():
		“While such-and-such is true, then keep doing so-and-so, until such-and-such is no longer true, or forever if such-and-such is never false.”
		j = 0;
		while(j++ <= 10)
		{
			document.write(j + ' times 10 is ' + j * 10 + '<br/>')
		}
*/

/*
	do…while():
		j = 10;
		f = 1;
		do
		{
			f *= j--;
		}
		while(j > 0)
		document.write('10! is ' + f);
*/

/*
	for():
		for(j = 10, f = 1; j > 0; --j)
		{
			f *= j
		}
		document.write('10! is ' + f)
*/

/*
	for(…in…):
		balls = ['Cricket', 'Tennis', 'Baseball', 'Hockey', 'Football']
		for(j in balls)
			document.write(balls[j] + '<br/>')
*/

/*
	break:
		data = [1, 23, 16.3, 88.23, 11, 24.46, 30, 99];
		for(j = 0; j < data.length; ++j)
		{
			if(data[j] == 11)
			{
				break;
			}
		}
		if(j < data.length)
		{
			document.write('Found at index ' + j);
		}	
		else
		{
			document.write('Not found.');
		}
*/

/*
	continue:
		for(j = -5; j < 6; ++j)
		{
			if(j == 0)
				continue;
			document.write('1/' + j + ' is ' + 1 / j + '<br/>');
		}
*/

/*
	Logical and Comparison Operators:
		Equals (= & ==):
			==, !=, <>, <=, =>, !, &&, ||
				checkOutExists = false;
				if(checkOutExists == false)

		Not Equals (!=):
			if(checkOutExists != true)

		Not (!):
			if(!checkOutExists)

		Greater Than & Less Than (> & <):
			if(hoursEntered > 8)
			if(hoursEntered < 3)

		Greater Than or Equal To & Less Than or Equal To (>= & <=):
			if(hoursEntered >= 8)	
			if(hoursEntered <= 3)
			
		And (&&) & Or (||):
			if(document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked)
			if(document.getElementById('wedgeMute').checked || document.getElementById('pappsMute').checked)
*/

/*
	Decision Statements:
		if():
			function openCheckOut()
			{
				if(!checkOutExists)
				{
					checkWin = window.open("checkout.htm", "", "width=300, height=300");
					checkOutExists = true;
				}
			}
---------------------------------------------------------------------------------------------------------------------------------------
		if(time < 12)
		{
			alert("Morning!");
		}
		else
		{
			alert("Afternoon!");
		}
		time < 12 ? alert("Morning!") : alert("Afternoon!");
---------------------------------------------------------------------------------------------------------------------------------------
	<script>
			var age = 21;
			var isMember = true;
			var season = 'summer';
			
			if(season != winter)
			if(isMember)
			if(age >= 21)
			{
				console.log("Sorry, the ski trip is only available in the winter.");
			}
			else
			{
				console.log("We hope you enjoy the ski trip!");
			}
			else
			{
				console.log("You must be a member.");
			}
			else
			{
				console.log("You must be 21 years of age or over.");
			}
	</script>
---------------------------------------------------------------------------------------------------------------------------------------
	<script>
			var isSober = true;
			var age = 17;
			if((isSober) && (age >= 18))
			{
				document.write("Admittance granted.");
			}
			else
			{
				document.write("Not tonight, sorry!");
			}
	</script>
---------------------------------------------------------------------------------------------------------------------------------------
*/

/*
		else if():
---------------------------------------------------------------------------------------------------------------------------------------
			if(document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked)
				{
					document.getElementById('tuningList').innerHTML = "You selected both mutes.";
				}
			else if(document.getElementById('wedgeMute').checked || document.getElementById('pappsMute').checked)
				{
					document.getElementById('tuningList').innerHTML = "You selected one or more mutes.";
				}
---------------------------------------------------------------------------------------------------------------------------------------
		<script type="text/javascript">
			function conditionalTest(x)
			{
				if(x >= 21)
				{
					alert("Welcome to the Beer Festival!");
				}
				else
				{
					alert("Sorry, you need to be at least 21!");
				}
				// TERNARY OPERATOR; x >= 21 ? alert("Welcome to the Beer Festival!") : alert("Sorry, you need to be at least 21!");
			}
		</script>
		<form>
			Number 1
			<input type="text" name="num1" /> <br/>
			<input type="button" name="button1" onclick="conditionalTest(num1.value)" value="Test"/>
		</form>
---------------------------------------------------------------------------------------------------------------------------------------
*/

/*
		nested if():
---------------------------------------------------------------------------------------------------------------------
			if(document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked)
			{
				document.getElementById('tuningList').innerHTML = "You selected both mutes.";
			}
			else if(document.getElementById('wedgeMute').checked || document.getElementById('pappsMute').checked)
			{
				if(document.getElementById('wedgeMute').checked)
				{
					document.getElementById('tuningList').innerHTML = "You selected the wedge mute.";
				}
				else
				{
					document.getElementById('tuningList').innerHTML = "You selected the papps mute.";
				}
			}			   
			else
			{
				document.getElementById('tuningList').innerHTML = "";
			}
---------------------------------------------------------------------------------------------------------------------
			<script type="text/javascript">
			var x = 12;
			if(x > 5)
			{
				if(x < 11)
				{
					alert("Within range.");
				}
				else
				{
					alert("Outside range.");
				}
			}
			else
			{
				alert("Outside range.");
			}
		</script>
---------------------------------------------------------------------------------------------------------------------
			if(temp < 25)
			{
				if(temp < 16)
				{
					alert("Bring a jumper!");
				}
				else
				{
					alert("It's between 16 and 25, no jumper required.");
				}
			}
---------------------------------------------------------------------------------------------------------------------
*/

/*		
		switch():
			<script>
				function showSpecialDiscount()
				{
					var today = new Date();
					var msg = document.getElementById('specialDiscount');
				}
				switch(today.getDate())
					{
						case 1:
							msg.innerHTML = 'First day of the month. 10% off all orders today when ...';
							break;
						case 7:
							msg.innerHTML = 'Today is the lucky 7th. 7% off all orders today when ...';
							break;
						case 15:
							msg.innerHTML = "It's the hump day of the month. 15% off all orders today when ...'";
							break;
						default:
							msg.innerHTML = 'Keep checking back for special offers!';
					}
				}
			</script>
---------------------------------------------------------------------------------------------------------------------
		<script>
			var day = "Monday";
			switch(day)
			{
				default:
					console.log("It's a weekday!");
					break;
				case "Saturday":
				case "Sunday":
					console.log("It's the weekend!");
			}
		</script>
---------------------------------------------------------------------------------------------------------------------
*/

/*
	Loops:
		for():
			function updateList()
			{
				document.getElementById('tuningList').innerHTML = "<ul>";
				for(var i = 0; i < tuningList.length; i++)
				{
					document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>";
				}
				document.getElementById('tuningList').innerHTML += "<ul>";
				document.getElementById('tuningList').innerHTML	+= "<br/> A tuning lever and tuning fork is a must-have	for any tuning kit.";
			}
---------------------------------------------------------------------------------------------------------------------
		<script>
			var animals = ["Chimp", "Panda", "Canary", "Dog"];
			for(x = 0; x < animals.length; x++)
			{
				document.writeln(animals[++x]);
			}
		</script>
---------------------------------------------------------------------------------------------------------------------
		<script>
			var animals = ["Chimp", "Panda", "Canary", "Dog"];
			for(x = 0; x < animals.length; x++)
			{
				document.writeln(animals[x++]);
			}
		</script>
---------------------------------------------------------------------------------------------------------------------
*/

/*
		while():
			function lessonSchedule()
			{
				var lessonStartDate = new Date('September 1, 2021 12:00:00PM');
				var lessonEndDate = new Date(lessonStartDate);
				var detailsSchedule = document.getElementById('lessonSchedule')lessonEndDate.setDate(lessonEndDate.getDate() + 56);
				detailsSchedule.innerHTML += "<br/> First lesson: "	+ lessonStartDate.toLocaleDateString() + "<br/> Subsequent lessons: ";
				while(lessonStartDate < lessonEndDate)
				{
					lessonStartDate.setDate(lessonStartDate.getDate() + 7);
					detailsSchedule.innerHTML += "<br/>" + lessonStartDate.toLocaleDateString();
				}
			}
*/

/*
		do{} while():
			function lessonSchedule()
			{
				var lessonStartDate = new Date('September 1, 2021 12:00:00PM');
				var lessonEndDate = new Date(lessonStartDate);
				var detailsSchedule = document.getElementById('lessonSchedule')lessonEndDate.setDate(lessonEndDate.getDate() + 0);
				detailsSchedule.innerHTML += "<br/> First lesson: "	+ lessonStartDate.toLocaleDateString() + "<br/> Subsequent lessons: ";
				do
				{
					lessonStartDate.setDate(lessonStartDate.getDate() + 7);
					detailsSchedule.innerHTML += "<br/>" + lessonStartDate.toLocaleDateString();
				}
				while(lessonStartDate < lessonEndDate)
			}
*/

/*
		break:
			function lessonSchedule()
			{
				var lessonStartDate = new Date('September 1, 2021 12:00:00PM');
				var lessonEndDate = new Date(lessonStartDate);
				var detailsSchedule = document.getElementById('lessonSchedule')lessonEndDate.setDate(lessonEndDate.getDate() + 56);
				var breakDate = new Date('November 20, 2021 12:00:00AM');
				detailsSchedule.innerHTML += "<br/> First lesson: "	+ lessonStartDate.toLocaleDateString() + "<br/> Subsequent lessons: ";
				do
				{
					if(lessonStartDate.getDate() == breakDate.getDate())
					{
						break;
					}
					lessonStartDate.setDate(lessonStartDate.getDate() + 7);
					detailsSchedule.innerHTML += "<br/>" + lessonStartDate.toLocaleDateString();
				}
				while(lessonStartDate < lessonEndDate)
			}
*/

/*
		continue:
			function lessonSchedule()
			{
				var lessonStartDate = new Date('September 1, 2021 12:00:00PM');
				var lessonEndDate = new Date(lessonStartDate);
				var detailsSchedule = document.getElementById('lessonSchedule')lessonEndDate.setDate(lessonEndDate.getDate() + 56);
				var breakDate = new Date('November 20, 2021 12:00:00AM');
				detailsSchedule.innerHTML += "<br/> First lesson: "	+ lessonStartDate.toLocaleDateString() + "<br/> Subsequent lessons: ";
				do
				{
					lessonStartDate.setDate(lessonStartDate.getDate() + 7);
					if(lessonStartDate.getDate() == breakDate.getDate())
					{
						continue;
					}
					detailsSchedule.innerHTML += "<br/>" + lessonStartDate.toLocaleDateString();
				}
				while(lessonStartDate < lessonEndDate)
			}
*/

/*
	Exam Tips:
		Logical and Comparison Operators:
			Contain two symbols (==, &&, ||, !)
		Decisions:
			if(), else if(), nested if(), switch() Statements:
				Remember that the condition an if statement checks goes inside of parentheses.
				The resulting action, if the condition is true, goes inside of curly brackets.
				Know when you would use a switch() or nested if() statement.
		Loops:
			for(), while() or do{}, break, continue
				What is the main difference between the do loop and the while loop?
					The do loop always runs once, before it checks the while() condition.
					In a while loop, the condition is checked first.
					Make sure you avoid creating an endless loop!
*/

/*
	Expressions and Operators:
	// Expressions
		let a;					 // variable declaration: operator & operand (expression)
		a = 4;					 // variable initialization
		let b = 3;
		let c = 2;
		let a = b + c;			 // an evaluation that returns a single value
		console.log(a);
-----------------------------------------------------------------------------------
		node expressions
			5
-----------------------------------------------------------------------------------		
	// Operators
		var a = 1;				  // 1 is assigned (=) to a
		a++;					  // a is post-incremented (initialized then incremented)
		console.log(a);
		console.log(++a);		  // a is pre-incremented (incremented then initialized)
		console.log(a);
		console.log(a++);
		console.log(--a);		  // a is pre-decremented
		console.log(a--);		  // a is post-decremented
		var b = (21 + 2) * 3	  // () 1st precedence, followed by * / + -
		console.log(b);
		var c = 12 - 10 / (2 / 1) // () 1st precedence, followed by * / + -
		console.log(c);
		var m = 10 % 3			  // modulus %, remainder
		console.log(m);
-----------------------------------------------------------------------------------
		node operators
			2
			3
			3
			4
			3
			2
			69
			2
			1
-----------------------------------------------------------------------------------
*/

/*
	Decision Statements:
-----------------------------------------------------------------------------------
		if, else if, else
-----------------------------------------------------------------------------------
		var count = 3;
		if(count == 4)
		{
			console.log("Count is 4.");
		}
		else if(count > 4)
		{
			console.log("Count is greater than 4.");
		}
		else if(count < 4)
		{
			console.log("Count is less than 4.");
		}
		else
		{
			console.log("Count is NOT 4.");
		}
-----------------------------------------------------------------------------------
		node decisions:
			Count is less than 4.
-----------------------------------------------------------------------------------
		var score = 17000;		
		var highscore = 15000;
		function checkScore()
		{
			if(score > highscore)
			{
				highscore = score;
				document.getElementById("output").innerHTML	= "You have the new high score, congratulations!";
			}
			else
			{
				document.getElementById("output").innerHTML	= "You did not get the high score, better luck next time!";
			}
		}
		<p id="output"></p>
		<button onclick="checkScore()">Check Score</button>
-----------------------------------------------------------------------------------
		<script>
			var lap1 = 125.59;
			var lap2 = 118.32;
			function lapTime()
			{
				if (lap2 < lap1)
				{
					document.getElementById("output").innerHTML	= "Well done! You have beaten your previous best lap time!";
				}
				else
				{
					document.getElementById("output").innerHTML	= "Sorry! You didn't beat your previous best lap time! Please try again!";
				}
			}
		</script>
		<p id="output"></p>
		<button onclick="lapTime()">Lap Time</button>
-----------------------------------------------------------------------------------
		switch, case, break
-----------------------------------------------------------------------------------
		let hero = 'Superman';
		switch(hero.toLowerCase())
		{
			case 'superman':
				console.log('Super strength');
				console.log('X-Ray vision');
				break;
			case 'batman':
				console.log('Intelligence');
				console.log('Fighting Skills');
				break;
			default:
				console.log('Member of the JLA');
		}
-----------------------------------------------------------------------------------
		node decisions:
			Super Strength
			X-Ray Vision
-----------------------------------------------------------------------------------
		let hero = 'Batman';
		switch(hero.toLowerCase())
		{
			case 'superman':
				console.log('Super strength');
				console.log('X-Ray vision');
				break;
			case 'batman':
				console.log('Intelligence');
				console.log('Fighting Skills');
				break;
			default:
				console.log('Member of the JLA');
		}
-----------------------------------------------------------------------------------
			node decisions:
				Intelligence
				Fighting Skills
-----------------------------------------------------------------------------------
		let hero = 'Green Arrow';
		switch(hero.toLowerCase())
		{
			case 'superman':
				console.log('Super strength');
				console.log('X-Ray vision');
				break;
			case 'batman':
				console.log('Intelligence');
				console.log('Fighting Skills');
				break;
			default:
				console.log('Member of the JLA');
		}
-----------------------------------------------------------------------------------
			node decisions:
				Member of the JLA
-----------------------------------------------------------------------------------
		<script>
			var zipCode = "06611";
			var town;
			function checkZip()
			{
				switch(zipCode)
				{
					case: "06653":
						town = "Trumbull";
						break;
					case: "06066":
						town = "Vernon";
						break;
					case: "06443":
						town = "Madison";
						break;
					case: "06880":
						town = "Westport";
						break;
					default:
						town = "No match found.";
				}
				document.getElementById("output").innerHTML	= "Town: " + town;
			}
		</script>
		<p id="output"></p>
		<button onclick="checkZip()">Check Town</button>
-----------------------------------------------------------------------------------
	ternary operator
-----------------------------------------------------------------------------------
		let a = 1, b = '1';					// equal in value but not equal in type
		let result = (a == b) ? 'equal' : 'not equal';	// value ==
		console.log(result);
-----------------------------------------------------------------------------------
		node decisions:
			equal
-----------------------------------------------------------------------------------
		let a = 1, b = '1';
		let result = (a === b) ? 'equal' : 'not equal'; // value and type ===
		console.log(result);
-----------------------------------------------------------------------------------
		node decisions:
			not equal
-----------------------------------------------------------------------------------
*/

/*
	Iteration Statements:
-----------------------------------------------------------------------------------
	for loop
-----------------------------------------------------------------------------------
	for(i = 0; i < 10; i++)
	{
		console.log(i);
	}
-----------------------------------------------------------------------------------
	node iterations:
		0
		1
		2
		3
		4
		5
		6
		7
		8
		9
-----------------------------------------------------------------------------------
	let a = [4, 8, 15, 16, 23, 42];
	for(i = 0; i < a.length; i++)
	{
		console.log(a[i]);
	}
	// or
	let a = [4, 8, 15, 16, 23, 42];
	for(let b = 0; b < a.length; b++)
	{
		const c = a[b];
		console.log(c);
	}
-----------------------------------------------------------------------------------
	node iterations:
		4
		8
		15
		16
		23
		42
-----------------------------------------------------------------------------------
	<script>
		function count()
		{
			for(var i = 0; i < 101; i += 10)	// declare, initialize, increment/decrement
			{
				document.getElementById("output").innerHTML	+= i + "<br/>";
			}
		}
	</script>
	<p id="output"></p>
	<button onclick="count()">Count</button>
-----------------------------------------------------------------------------------
	<script type="text/javascript">
		document.write("Here's the for() loop: <br/>");
		for(i = 0; i <= 10; i++)
		{
			document.writeln("The value of i is: " + i + "<br/>");
			for(j = 0; j <= 10; j++)
			{
				document.writeln("The value of j is: " + j + "<br/>");
			}
		}
	</script>
-----------------------------------------------------------------------------------
		Here's the for() loop:
		The value of i is 1
		The value of j is 1
		............ j is 2-9
		The value of j is 10
		The value of i is 2
		The value of j is 1
		............ j is 2-9
		The value of j is 10
		.etc
-----------------------------------------------------------------------------------
	<script>
		var airlines = new Array();
		airlines[0] = "Delta";
		airlines[1] = "US Airways";
		airlines[2] = "American";
		airlines[3] = "jetBlue";
		airlines[4] = "Virgin America";
		airlines[5] = "United";
		airlines[6] = "Air Canada";
		airlines[7] = "Southwest";
		airlines[8] = "British Airways";
					
		function output()
		{
			var len = airlines.length;
			for(var i = 0; i < len; i++)
			{
				document.getElementById("output").innerHTML	+= airlines[i] + "<br/>";
			}
		}
	</script>
	<p id="output"></p>
	<button onclick="output()">Output</button>
-----------------------------------------------------------------------------------
	while loop
-----------------------------------------------------------------------------------
	let x = 1;
	while (x < 10)
	{
		console.log(x++);
	}
-----------------------------------------------------------------------------------
	node iterations:
		1
		2
		3
		4
		5
		6
		7
		8
		9
-----------------------------------------------------------------------------------
	let x = 1;
	while (x < 10)
	{
		console.log(x++);
		if(x == 7)
		{
			break;
		}
	}
-----------------------------------------------------------------------------------
	node iterations:
		1
		2
		3
		4
		5
		6			
-----------------------------------------------------------------------------------
	let x = 1;
	while (x < 10)
	{
		console.log(x++);
		if(x == 7)
		{
			continue;
		}
	}
-----------------------------------------------------------------------------------
	node iterations:
		1
		2
		3
		4
		5
		6
		8
		9
-----------------------------------------------------------------------------------
	<script>
		function count()
		{
			var x = 0;
			while(x < 10)
			{
				document.getElementById("output").innerHTML += (x + "<br/>");
				x++;
			}
		}
	</script>
	<p id="output"></p>
	<button onclick="count()">Count</button>
-----------------------------------------------------------------------------------
	do{}...while() loop
-----------------------------------------------------------------------------------
	<script>
		function count()
		{
			var i = 100;
			do
			{
				document.getElementById("output").innerHTML	+= (i + "<br/>");
				i--;
			}
			while(i > -1)
		}
	</script>
	<p id="output"></p>
	<button onclick="count()">Count</button>
-----------------------------------------------------------------------------------
*/

/*
	Inserting JavaScript Code:
-------------------------------------------------------------------------------------------------------
		<!DOCTYPE html public "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">		// HTML4
		<html lang="en">
		<head>
			<title>HTML 4.01 JS Insert</title>
		</head>
		<body>
			<p>JavaScript on this web page.</p>
			<script language="JavaScript" type="text/javascript" src="example.js">						// HTML4
				alert("Hello world.");
			</script>
		</body>
		</html>
-------------------------------------------------------------------------------------------------------
*/

/*
Functions:
-------------------------------------------------------------------------------------------------------
	<head>
		<script type="text/javascript">
			function runFunction()
			{
				alert('You clicked a button!');
			}
		</script>
	</head>
	<body>
		<input type="submit" id="clickme" name="clickme" value="Click me" onclick="runFunction()" />
	</body>
-------------------------------------------------------------------------------------------------------
	<head>
		<script type="text/javascript">
			function greetUser()
			{
				document.getElementById("result").innerHTML = "Hello User!";
			}
			function sayBye()
			{
				document.getElementById("result").innerHTML = "Buh bye User!";
			}
		</script>
	</head>
	<body>
		<div id="result">
			<button onclick="greetUser()">Greet User</button>
			<button onclick="sayBye()">Say Goodbye</button>
		</div>
	</body>
-------------------------------------------------------------------------------------------------------
	<head>
		<script src="functions.js"></script>
	</head>
	<body>
		<div id="result">
			<button onclick="greetUser()">Greet User</button>
			<button onclick="sayBye()">Say Goodbye</button>
		</div>
	</body>
-------------------------------------------------------------------------------------------------------
	<head>
		<script>
			function checkPw(pw)
			{
				if(pw == "chocolate")
				{
					document.getElementById("pwStatus").innerHTML = "Password Correct.";
					document.getElementById("password").style.backgroundColor = "rgb(255,255,255)";
				}
				else
				{
					document.getElementById("pwStatus").innerHTML = "";
					document.getElementById("password").style.backgroundColor = "rgb(225,0,0)";
				}
			}
		</script>
	</head>
	<body>
		Password: <input type="password" id="password" onchange="checkPw(this.value)"/>
		<output id="pwStatus"></output>
	</body>
-------------------------------------------------------------------------------------------------------
	<head>
		<script type="text/javascript">
			var myDog = "Sawyer";									// global scope (program)
			function dog(myDog)
			{
				var myDog3 = myDog;									// local scope (function)
				alert("This is the local variable: " + myDog3);
				return myDog3;
			}
			var myDog2 = dog("Spot");
			document.writeln("This is the global variable: " + myDog);
			document.writeln("<br/>""This is the \" private \" local variable returned by the function: " + myDog2);
			document.writeln(myDog3);								// local variable can be accessed outside its function with a method call on the function.
		</script>
	</head>
-------------------------------------------------------------------------------------------------------
*/

/*
	Objects:
-------------------------------------------------------------------------------------------------------
	<script type="text/javascript">
		var dog = new Object();
		
		dog.name = "Bongo";		// objectName.property = "value";
		dog.gender = "male";
		dog.age = 3;
		dog.breed = "corgi";
		dog.trained = true;

		document.writeln("The dog's name is: " + dog.name + "<br/>"	+ "The dog's gender is: " + dog.gender + "<br/>"
							+ "The dog's age is: " + dog.age + "<br/>" + "The dog's breed is: " + dog.breed + "<br/>");
		for(x in dog)
		{
			document.writeln(dog[x] + "<br/>");
		}
	</script>
-------------------------------------------------------------------------------------------------------
*/

/*
	Object Methods:
-------------------------------------------------------------------------------------------------------
	<script type="text/javascript">
		function car(model, distanceMoved, timeElapsed)
		{
			this.model = model;
			this.distanceMoved = distanceMoved;
			this.timeElapsed = timeElapsed;

			// anonymous function to calculate velocity (object & method), uses keyword function, no name, assigned to a variable, re-usable, declared at runtime
			this.velocity = function()
			{
				var result = this.distanceMoved / this.timeElapsed;
				return result;
			}
		}
		var myCar = new car("Audi", 120, 1.2);
		document.writeln("The model of the car is: " + myCar.model + "<br/>" + "The distance travelled is: " + myCar.distanceMoved + "<br/>"
						  + "The time elapsed is: " + myCar.timeElapsed + "<br/>" + "The velocity is: " + myCar.velocity() + "km/h");
	</script>
-------------------------------------------------------------------------------------------------------
*/

/*
	Prototyping:
-------------------------------------------------------------------------------------------------------
	<script type="text/javascript">
		function car(model, numCylinders, horsepower)
		{
			this.model = model;
			this.numCylinders = numCylinders;
			this.horsepower = horsepower;
		}
		car.prototype.color = "red";			// use prototyping to add a property
		car.prototype.reportInfo = function()	// use prototyping to add a method
		{
			document.writeln("This model is the " + this.model + ", which has a " + this.numCylinders + "-cylinder engine and "
							  + this.horsepower + " BHP " + ", and the colour is " + this.color + ".");
		}
		var honda = new car("CRV", "4", "185");
		honda.color = "blue";
		honda.reportInfo();						// "This model is the CRV, which has a 4-cylinder engine and 185 BHP, and the colour is blue."
	</script>
-------------------------------------------------------------------------------------------------------
*/

/*
	Obtaining the Attribute of an Object:
-------------------------------------------------------------------------------------------------------
	<head>
		<script type="text/javascript">
			function getVal()
			{
				var x = document.getElementById("myBtnID").value;
				document.getElementById("value1").innerHTML = x;
			}
		</script>
	</head>
	<body>
		<form>
			Get the value: <br/>
			<input type="button" name="myBtnName" id="myBtnID" value="Click me" onclick="getVal();" /> <br/>
			Value equals:
			<div id="value1"> <br/>
			</div> <br/>
		</form>
	</body>
-------------------------------------------------------------------------------------------------------
*/

/*
	Inheritance and Extending Classes:
-------------------------------------------------------------------------------------------------------
	<script type="text/javascript">
		function car(make, model, transmission)
		{
			this.make = make;
			this.model = model;
			this.transmission = transmission;
			this.reportStats = function()
			{
				return("Make: " + this.make + "Model: " + this.model);
			}
		}
		function SUV(make, model, transmission, mpg)
		{
			this.mpg = mpg;
			this.carInfo = car;
			this.carInfo(make, model, transmission);
		}
		SUV.prototype = new car();					// allowing inheritance of car properties
		SUV.prototype.getMPG = function()
		{
			return("The SUV's MPG is " + this.mpg);
		}
		mySUV = new SUV("Kia", "Sportage", "Manual", 32);
		myCar = new car("Volkswagen", "Jetta", "Automatic");
		document.writeln(mySUV.reportStats());
		document.writeln(myCar.getMPG());
	</script>
-------------------------------------------------------------------------------------------------------
*/

/*
	Regular Expressions:
-------------------------------------------------------------------------------------------------------
	<script type="text/javascript">
		var str = 'This is a sample string.';
		var re = /Sample/i;
		var re = new RegExp("sample", "i");
		var check = re.exec(str);
		if(check)
		{
			alert("Found a match.");
			alert(check);
		}
		else
		{
			alert("No match found!");
		}
		var check2 = re.test(str);
		alert(check2);
	</script>
*/

/*
	Substrings:
	<script type="text/javascript">
		var str = 'Hello world!';
		var n = str.substr(2, 3);														// prints llo (starting at index 2, printing 3 characters (indexes 2-4))
		document.writeln("This is the result of the substr method: " + n + "<br/>");
		var m = str.substring(2, 4);
		document.writeln("This is the result of the substring method: " + m + "<br/>");		// prints ll (starting at index 2, then printing the 4th character)
	</script>
*/

/*
	Formatting Strings:
	<script type="text/javascript">
		var str = '         Hello world!          ';
		var a = str.toLowerCase();
		document.writeln("This is the result of the toLowerCase method: " + a + "<br/>");
		var b = str.toUpperCase();
		document.writeln("This is the result of the toUpperCase method: " + b + "<br/>");
		var c = str.trim();
		document.writeln("This is the result of the trim method: " + c + "<br/>");
		var d = str.bold();
		document.writeln("This is the result of the bold method: " + d + "<br/>");
	</script>
*/

/*
	The Number Object:
	<script type="text/javascript">
		var myNum1 = 123.45678910;
		var myNum2D = myNum1.toFixed(2);
		document.writeln("This is the result of the toFixed method: " + myNum2D + "<br/>");						// 123.46
		var myNum2 = 123.45678910;
		document.writeln("This is the result of myNum2.toPrecision(): " + myNum2.toPrecision() + "<br/>");		// 123.4567891
		document.writeln("This is the result of myNum2.toPrecision(2): " + myNum2.toPrecision(2) + "<br/>");	// 1.2e+2
		document.writeln("This is the result of myNum2.toPrecision(3): " + myNum2.toPrecision(3) + "<br/>");	// 123
		document.writeln("LocaleString: " + myNum2.toLocaleString() + "<br/>");									// 123.46
	</script>
*/

/*
	The Math Object and Random Numbers:
	<script type="text/javascript">
		function rollDice()
		{
			var num1 = Math.floor((Math.random() * 6) + 1);
			var num2 = (Math.random() * 6) + 1;
			var results = document.getElementById("div1");
			results.innerHTML = "Die #1 is: " + num1 + "<br/>" + "Die #2 is: " + num2;
		}
	</script>
	<body>
		<label>Results:</label>
		<div id="div1"></div>
		<button name="button1" onclick="rollDice()"> Roll </button>
	</body>
*/

/*
	Getting Date and Time:
	<script type="text/javascript">
		var today = new Date();
		var anniversary = new Date("September 7, 1989 12:00:00");
		var birthday = new Date(2010, 01, 01);

		document.writeln("This is the result of creating a standard Date object: " + today.toString() + "<br/>");
		document.writeln("This is the result of using the GMTString: " + anniversary.toGMTString() + "<br/>");
		document.writeln("This is the result of using the UTCString: " + anniversary.toUTCString() + "<br/>");
		document.writeln("This is the result of using the LocaleString: " + birthday.toLocaleDateString() + "<br/>");

		document.writeln("This is the day: " + today.getDay() + "<br/>");

		birthday.setYear(1991);
		document.writeln("This is the new date: " + birthday.toLocaleDateString() + "<br/>");
	</script>
*/

/*
	The Boolean Object:
	<script type="text/javascript">
		a = false;
		b = new Boolean(false);
		document.write(typeof a);
		document.write(typeof b);
		c = Boolean(2 > 5);
		d = Boolean(0);
		alert("c is " + c);
		alert("d is " + d);
		document.write("<br/>" + c.toString());
	</script>
*/

/*
	Working with Files:
		Working with XML:
			responseexample.html:
				<title>XMLHTTPRequest responseText/responseXML Examples</title>
				<script>
					var xmlhttp = new XMLHTTPRequest();
					var url = "xml/invoice.xml"
					xmlhttp.open("GET", url, false);
					xmlhttp.send();
					if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
					{
						var xmlDoc = xmlhttp.responseXML;

						var number = xmlDoc.getElementByTagName("Number")[0].childNodes[0].nodeValue;
						var date = xmlDoc.getElementByTagName("Date")[0].childNodes[0].nodeValue;
						var name = xmlDoc.getElementByTagName("Name")[0].childNodes[0].nodeValue;
						var company = xmlDoc.getElementByTagName("Company")[0].childNodes[0].nodeValue;
						var address = xmlDoc.getElementByTagName("Address1")[0].childNodes[0].nodeValue;
						var city = xmlDoc.getElementByTagName("City")[0].childNodes[0].nodeValue;
						var state = xmlDoc.getElementByTagName("State")[0].childNodes[0].nodeValue;
						var zip = xmlDoc.getElementByTagName("Zip")[0].childNodes[0].nodeValue;
						var country = xmlDoc.getElementByTagName("Country")[0].childNodes[0].nodeValue;
						
						var sku1 = xmlDoc.getElementByTagName("SKU")[0].childNodes[0].nodeValue;
						var item1 = xmlDoc.getElementByTagName("Description")[0].childNodes[0].nodeValue;
						var amount1 = xmlDoc.getElementByTagName("Amount")[0].childNodes[0].nodeValue;
						var unitcost1 = xmlDoc.getElementByTagName("Cost")[0].childNodes[0].nodeValue;
						var subtotal1 = xmlDoc.getElementByTagName("Subtotal")[0].childNodes[0].nodeValue;

						var sku2 = xmlDoc.getElementByTagName("SKU")[1].childNodes[0].nodeValue;
						var item2 = xmlDoc.getElementByTagName("Description")[1].childNodes[0].nodeValue;
						var amount2 = xmlDoc.getElementByTagName("Amount")[1].childNodes[0].nodeValue;
						var unitcost2 = xmlDoc.getElementByTagName("Cost")[1].childNodes[0].nodeValue;
						var subtotal2 = xmlDoc.getElementByTagName("Subtotal")[1].childNodes[0].nodeValue;

						var subtotal = xmlDoc.getElementByTagName("TotalBeforeTax")[0].childNodes[0].nodeValue;
						var tax = xmlDoc.getElementByTagName("Tax")[0].childNodes[0].nodeValue;
						var total = xmlDoc.getElementByTagName("Total")[0].childNodes[0].nodeValue;

						document.writeln('Invoice Number: ' + number + ' Invoice Date: ' + date + '<br/><br/>BILL TO:<br/>');
						document.writeln(name + ', ' + company + '<br/>');
						document.writeln(address + '<br/>');
						document.writeln(city + ', ' + state + ' ' + zip + '<br/>');
					}
				</script>

			invoice.xml:
				<?xml version="1.0" encoding="utf-8" ?>
				<Invoice>
				<Number>026687</Number>
				<Date>07/04/2013</Date>
				<Address Type="Shipping">
					<Name>Fred Jones</Name>
					<Company>EasyNomad Travel, Inc.</Company>
					<Address1>5500 Park Avenue</Address1>
					<City>New York</City>
					<State>NY</State>
					<Zip>44553</Zip>
					<Country>USA</Country>
				</Address>
				<Item1>
					<SKU>334535455</SKU>
					<Description>Leather High-Back Office Chairs</Description>
					<Amount>10</Amount>
					<Cost>199.99</Cost>
					<Subtotal>1999.99</Subtotal>
				</Item1>
				<Item2>
					<SKU>445356743A</SKU>
					<Description>Executive Office Desks</Description>
					<Amount>10</Amount>
					<Cost>299.99</Cost>
					<Subtotal>2999.99</Subtotal>
				</Item2>
				<TotalBeforeTax>4999.98</TotalBeforeTax>
				<Tax>499.99</Tax>
				<Total>5499.97</Total>
				</Invoice>
*/

/*
		External Code Files:
			methodExt.html
			<head>
				<link rel="stylesheet" type="text/css" href="style.css" />
				<script src="methodExt.js" type="text/javascript"></script>
				<script>
					alert("Hi.");
				</script>
			</head>
			<body>
				<div>
					<p id="dR">
						Waiting for JavaScript to run...
					</p>
					<button type="submit" onclick="printResults()" id="sbmt">
						Click to run JavaScript.
					</button>
				</div>
			</body>		
			methodExt.js:
				function printResults()
				{
					function Car(make, model, transmission)
					{
						this.make = make;
						this.model = model;
						this.transmission = transmission;
						this.reportStats = reportStats;

						function reportStats()
						{
							return "Make: " + this.make + ", Model: " + this.model;
						}
					}
				}
				function Sedan()
				{
					Sedan.prototype = new Car("Volvo", "s60", "Automatic");
					Sedan.prototype.reportMoreStats = function()
					{
						return this.reportStats() + ", Transmission: " + this.transmission;
					}
					var resultCont = document.getElementById("dR");
					resultCont.innerHTML = Sedan.prototype.reportMoreStats();
				}
				oCon.js:
					function printResults()
					{
						function Car(make, model, transmission)
						{
							this.make = make;
							this.model = model;
							this.transmission = transmission;
							this.reportStats = reportStats;

							function reportStats()
							{
								return "Make: " + this.make + ", Model: " + this.model;
							}
						}
						var stationWagon = new Car("Mitsubishi", "Trek", "Manual");
						var resultCont = document.getElementById("dR");
						resultCont.innerHTML = stationWagon.reportStats();
					}
*/

/*
	JavaScript Events:
		<head>
			<style>
				div
				{
					border: 1px solid black;
				}
			</style>
		</head>
		<body>
			<script>
				window.onload = function()
				{
					document.getElementById("eventNew").addEventListener("click", newEventButtonClicked, false);
				}
				function newEventButtonClicked()
				{
					alert("Newer Event Method.");
				}
				function buttonClicked()
				{
					alert("Old Event Caller Method.");
				}
				function changeDiv()
				{
					document.getElementById("myDiv").style.backgroundColor="#bb0000";
				}
			</script>
			<p id="output"></p>
			<button onclick="buttonClicked()"> Event Old </button>
			<button id="eventNew"> Event New </button>
			<div id="myDiv" onmouseover="changeDiv()"> Mouse Over Me! </div>
		</body>
*/

/*
	The JavaScript Event Object:
		<head>
			<script>
				function sendEventInfo(event)
				{
					var information = "TimeStamp: " + event.timeStamp;
					information += "<br/>Target: " + event.target.id;
					information += "<br/>X: " + event.clientX;
					information += "<br/>Y: " + event.clientY;
					information += "<br/>Shift Key? " + event.shiftKey;
					document.getElementById("output").innerHTML = information;
				}
			</script>
		</head>
		<body>
			<div id="output"></div>
			<button onclick="sendEventInfo(event)" id="myButton"> Press Me!	</button>
		</body>
		</html>
*/

/*
	Basic Event Handlers:
		<head>
			<script type="text/javascript">
				function eventMessage()
				{
					alert("You clicked the DIV!");
				}
				function mouseMoveInMessage()
				{
					alert("You moused over the button!");
				}
				function mouseMoveOutMessage()
				{
					alert("Why are you leaving?");
				}
				function displayTime()
				{
					var myDate = new Date();
					var myTime = myDate.toLocaleTimeString();
					alert(myTime);
				}
			</script>
		</head>
		<body>
			<input type="button" value="Click me to show the time" onclick="displayTime()" />
			<input type="button" value="Mouse Move"	onmouseover="mouseMoveInMessage()" onmouseout="mouseMoveOutMessage()"/>
			<div id="events" onmouseover="eventMessage()" style="font-family:Arial;font-size:larger;color:red";> Click Here	</div>
			<br/>
		</body>
*/

/*
	Error Handling:
		try and catch:
		<head>
			<script type="text/javascript">
				function testTry()
				{
					alert("Method ran successfully.");
				}
				try
				{	
					TestT();		// invalid calls, functions or methods in the code
				}
				catch(exception)
				{
					if(exception.description == null)	// determine whether or not the browser is IE or Firefox
					{
						alert("There was an error in the code. The details are: \n " + exception.message);
					}
					else
					{
						alert("There was an error in the code. The details are: \n " + exception.description);
					}
				}
			</script>
		</head>
*/

/*
		throw:
		<head>
			<script type="text/javascript">
				function checkValue(value)
				{
					try
					{
						if(value < 5)
							throw new Error("Please submit a minimum value of at least 5.");
						if(value > 100)
							throw new Error("Please submit a value that does not exceed 100.");
					}
					catch(e)
					{
						if(e.description == null)	// determine whether or not the browser is IE or Firefox
						{
							alert("An error occurred.\n " + e.message);
						}
						else
						{
							alert("An error occurred.\n " + e.description);
						}
					}
				}
				checkValue(3);
			</script>
		</head>
*/

/*
	Using JavaScript Timers:
		<head>
			<script type="text/javascript">
				var timeoutID;
				function delayAlert()
				{
					timeoutID = window.setTimeout(slowAlert, 2000);
				}
				function slowAlert()
				{
					alert("That was really slow!");
				}
				function cancelAlert()
				{
					window.clearTimeout(timeoutID);
					alert("Alert cancelled!");
				}
			</script>
		</head>
		<body>
			<input type="button" value="Delayed Alert" onclick="delayAlert()" />
			<input type="button" value="Stop Alert"	onclick="cancelAlert()" /> <br/>
			<input type="text" id="clock" />
			<script type="text/javascript">
				var int = window.setInterval(function() { clock() }, 1000);
				function clock()
				{
					var myDate = new Date();
					var myTime = myDate.toLocaleTimeString();
					document.getElementById("clock").value = myTime;
				}
			</script>
		</body>
*/

/*
	Debugging with the Stack:
		<head>
			<script type="text/javascript">
				function traceIt()
				{
					try
					{
						throw new Error("myError1");
					}
					catch(e)
					{
						alert(e.stack);
					}
				}
				function b()
				{
					traceIt();
				}
				function a()
				{
					b(3, 4, "\n\n", undefined, {});
				}
				a("first call, first argument");
			</script>
		</head>
*/

/*
	Encoding and Decoding URLs:
		<head>
			<script type="text/javascript">
				var newURL;
				function setEncode(myURL)
				{
					newURL = encodeURIComponent(myURL);
					alert(newURL);
					document.getElementById("info").innerHTML = newURL.toString();
				}
				function setDecode()
				{
					decodeURL = decodeURIComponent(newURL);
					alert(decodeURL);
					document.getElementById("info").innerHTML = decodeURL.toString();
				}
			</script>
		</head>
		<body>
			<input type="Text" name="value1" />
			<button name="button1" onclick="setEncode(value1.value">
				Encode
			</button>
			<button name="button1" onclick="setDecode(value1.value">
				Decode
			</button>
		</body>
*/