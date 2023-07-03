// Topic 2: Variables, Data Types, and Functions

/*
Comparison Operators
One of the most important processes that happens in a program is comparison.
For example, possibly the most frequent type of construct used goes along the lines of 'if this, then do that'.
The job of comparison operators is to figure out the 'this' part, and there are eight of them:
Operator		Description					Example			Result
==				Equal to					1 == 1			true
===				Equal in value & type		1 === '1'		false
!=				Not equal to				1 != 2			true
!==				Not equal in value & type	1 !== '1'		true
>				Greater than				1 > 2			false
<				Less than					1 < 2			true
>=				Greater than or equal to	1 >= 1			true
<=				Less than or equal to		2 <= 1			false
*/

/*
Logical Operators:
Operator		Description		Example				Result
&&				And				1 == 1 && 2 == 2	true
||				Or				1 == 1 || 2 == 3	true
!				Not				!(1 == 1)			false
if (a == 4 && b == 7) // Do this
if (a == 4 || b == 7) // Do this
if (!(game == over)) // Carry on playing
document.write(game == over ? ′Game over’ : ’Keep playing′) // AmPm = Time < 12 ? ′AM′ : ′PM′
*/

/*
Bitwise Operators
The bitwise operators are &, |, ^, ~, <<, >>, and >>>.
In order, they support bitwise and, or, exclusive or, not, left-shift, sign-propagating right-shift, and zero-fill right-shift on binary numbers.
The bitwise operators can be combined with the = assignment operator to make a whole new collection of bitwise assignment operators:
http://tinyurl.com/bitwiseops
http://tinyurl.com/bitwiseops2
*/

/*
Operator Precedence
Precedence		Operators				Precedence		Operators
1				. [] new				10				&
2				()						11				^
3				++ --					12				|
4				! ~ unary+ unary-		13				&&
				typeof void delete
5				* / %					14				||
6				+ -						15				? :
7				<< >> >>>				16				= += -= *= /=
														%= <<= >>= >>>=
														&= ^= !=
8				< <= > >= in			17				,
				instanceof
9				== != === !==
*/

/*
Operator Associativity
The assignment operators all have right-to-left associativity, because you are assigning the value on the right to the variable on the left:
	MyVar = ThatVar = OtherVar = 0
This works because associativity of assignments starts at the right and continues in a leftward direction.
On the other hand, some operators have left-to-right associativity, such as the || (or) operator:
	if (ThisVar == 1 || ThatVar == 1) // Do this
Knowing whether operators have right-to-left or left-to-right associativity can really help your programming.
It's worth taking a moment to familiarize yourself with the contents of the table below, so that you will know which operators have what associativity:
Associativity	Operators
Right-to-left	! ~ unary+ unary- typeof void delete ?: = += -= *= /=
				%= <<= >>= >>>= &= |=
Left-to-right	. [] * / % + - << >> >>> < <= > >= in instanceof == !=
				=== !== & ^ | && || ,
*/

/*
The with keyword
You can simplify some types of JavaScript statements by reducing many references to an object to a single reference.
For example, the document.write() function never references the variable string by name:
	string = "The quick brown fox jumps over the lazy dog";
	with(string)
	{
		document.write("The string's length is " + length + " characters");		// The string′s length is 43 characters
		document.write("<br/> Upper case: " + toUpperCase());					// Upper case: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
	}	
The JavaScript interpreter recognizes that the length property and the toUpperCase() method have to be applied to some object, but because they stand alone, the
interpreter assumes they must apply to the string object that was specified in the 'with' statement.
The very fact that assumptions about which object to apply the 'with' to, have to be made by the interpreter, can make its use ambiguous in some applications.
I would generally recommend that you try to avoid working with this statement unless you feel confident that you can use it without ambiguity.
*/

/*
Creating JavaScript Arrays
	MyArray = new Array()	// creating a new object of the type Array(), and then calling the variable MyArray.
	MyArray = new Array(5)	// creating a new object of the type Array(), but has five elements ready to be populated with values.

	MyArray[0] = 23;				// 23 is assigned to the element at index 0
	MyArray[1] = 67.35;				// 67.35 is assigned to the element at index 1
	MyArray[3] = "Hello world!";	// "Hello world!" is assigned to the element at index 3
	MyArray[4] = new Date();		// the current date and time is assigned to the element at index 4
	MyArray[9] = "Good morning.";	// "Good morning." is assigned to the element at index 9: the array length will automatically increase to 9.
	MyArray[7] = 3.1415927;			// 3.14 is assigned to the element at index 7 
*/

/*
	MyIndex = 123;
	MyArray[MyIndex] = "Good evening.";
*/

/*
Retrieving Values
	document.write(MyArray[0])
	MyIndex = 713;
	document.write(MyArray[MyIndex]);
	MyArray[7] = 23;
	document.write(MyArray[7] + 50);
	alert(MyArray[7] + 50);
*/

/*
Using Array Elements as Indexes
	OtherArray[0] = 77;
	MyArray[OtherArray[0]] = "I love the movie Liar Liar"
*/

/*
Other Ways of Creating Arrays
	MyArray = new Array(123, ″Hello there″, 3.21);			// populated with three different values: an integer, a string, and a floating point number. 
This is the equivalent to the following, much longer code:
	MyArray = new Array();
	MyArray[0] = 123;
	MyArray[1] = "Hello there.";
	MyArray[2] = 3.21;
	MyArray = [123, ″Hello there″, 3.21]
*/

/*
Using Associative Arrays
Let’s use JavaScript’s associative arrays to store the ages of the players in a mixed, under-11's, five-a-side soccer team:
	SoccerTeam = new Array();
	SoccerTeam['Andy'] = 10;
	SoccerTeam['Brian'] = 8;
	SoccerTeam['Cathy'] = 9;
	SoccerTeam['David'] = 10;
	SoccerTeam['Ellen'] = 9;
	document.write(SoccerTeam[′Cathy′])
	SoccerTeam = new Array(
	{
		'Andy': 10,
		'Brian': 8,
		'Cathy': 9,
		'David': 10,
		'Ellen': 9
	}
	)
	SoccerTeam = 
	{
		'Andy': 10,
		'Brian': 8,
		'Cathy': 9,
		'David': 10,
		'Ellen': 9
	}
	MyInfo = 
	{
		'Name': 'Bill Gates',
		'Age': 58,
		'Occupation': 'Philanthropist',
		'Children': 3,
		'Net Worth': 77000000000 // 77 billion
	}
	document.write(MyInfo[′Occupation′])

	<body>
		<script>
			var airlines = new Array();
			airlines[0] = "Delta";
			airlines[1] = "US Airways";
			airlines[2] = "American";
			airlines[3] = "jetBlue";
			airlines[4] = "Virgin America";
					
			var family = new Array("Jim", "Tim", "Matt", "Cindy", "Sandy");
			var states = ["Connecticut", "New York", "Vermont", "Texas", "Washington"];

			function output()
			{
				document.getElementById("output").innerHTML	= airlines[0] + "<br/>"	+ family[0] + "<br/>" + states[0];
			}
		</script>
		<p id="output"></p>
		<button onclick="output()">Output</button>
	</body>
*/

/*
Creating and Accessing a Two-Dimensional Array
Each column, or each row, can be considered a one-dimensional array:
	MyTable0 = new Array();
	MyTable0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	MyTable1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
	MyTable2 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
	MyTable3 = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
	MyTable4 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
	MyTable5 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
	MyTable6 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
	MyTable7 = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
	MyTable8 = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90];
	MyTable9 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

	MasterTable = new Array();
	MasterTable = [MyTable0, MyTable1, MyTable2, MyTable3, MyTable4, MyTable5, MyTable6, MyTable7, MyTable8, MyTable9];
	alert('The value at location 2,6 is ' + MasterTable[2][6])
*/

/*
As you likely know, there are 64 squares on a chessboard, laid out in an 8×8 grid, and there are two sets of 16 pieces: black and white.
Using a computer to represent a chessboard in its starting position and ignoring the fact that the squares alternate between dark and light, you
might use code such as this (uppercase letters representing white pieces, lowercase letters representing black pieces):
	Row0 = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
	Row1 = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];
	Row2 = ['-', '-', '-', '-', '-', '-', '-', '-'];
	Row3 = ['-', '-', '-', '-', '-', '-', '-', '-'];
	Row4 = ['-', '-', '-', '-', '-', '-', '-', '-'];
	Row5 = ['-', '-', '-', '-', '-', '-', '-', '-'];
	Row6 = ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
	Row7 = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];

	Board = [Row0, Row1, Row2, Row3, Row4, Row5, Row6, Row7]
	Board[6][4] = '-'			// set to a dash character to remove the piece
	Board[4][4] = 'P'			// the pawn is placed on Board[4][4], overwriting the value it previously held.
*/

/*
3D Multi-Dimensional Associative Arrays
	// 1st dimension (age categories)
	Categories = {'Babies' : Babies, 'Toddlers' : Toddlers, 'Ages 3-5' : Ages3_5, 'Ages 6-8' : Ages6_8, 'Ages 9-12' : Ages9_12, 'Teenagers' : Teenagers}

	// 2nd dimension (product names & reference to 3rd dimension)
	Babies = {'Rattle' : Rattle, 'Bear' : Bear, 'Pacifier' : Pacifier}
	Toddlers = {'Bricks' : Bricks, 'Xylophone' : Xylophone, 'Play-Doh' : Play-Doh}
	Ages3_5  = {'Slide' : Slide, 'Tricycle' : Tricycle, 'Crayons' : Crayons}
	Ages6_8  = {'Dolly' : Dolly, 'Bicycle' : Bicycle, 'Guitar' : Guitar}
	Ages9_12 = {'Tablet' : Tablet, 'RC Car' : RCCar, 'Frisbee' : Frisbee}
	Teenagers = {'MP3 Player' : MP3Player, 'Game Console' : Console, 'TV/DVD Combo' : TVDVDCombo}

	// 3rd dimensions (pricing & stock levels)
	Rattle = {'Price' : 4.99, 'Stock' : 3}
	Bear = {'Price' : 6.99, 'Stock' : 2}
	Pacifier = {'Price' : 1.99, 'Stock' : 9}
	Bricks = {'Price' : 5.99, 'Stock' : 1}
	Xylophone = {'Price' : 12.99, 'Stock' : 2}
	Play-Doh = {'Price' : 8.49, 'Stock' : 7}
	Slide = {'Price' : 99.99, 'Stock' : 1}
	Tricycle = {'Price' : 79.99, 'Stock' : 1}
	Crayons = {'Price' : 3.79, 'Stock' : 5}
	Dolly = {'Price' : 14.99, 'Stock' : 3}
	Bicycle = {'Price' : 89.99, 'Stock' : 2}
	Guitar = {'Price' : 49.99, 'Stock' : 1}
	Tablet = {'Price' : 149.99, 'Stock' : 1}
	RCCar = {'Price' : 39.99, 'Stock' : 2}
	Frisbee = {'Price' : 7.99, 'Stock' : 6}
	MP3 = {'Price' : 179.99, 'Stock' : 1}
	Console = {'Price' : 399.99, 'Stock' : 2}
	TVDVDCombo = {'Price' : 99.99, 'Stock' : 1}

	document.write(Categories[′Ages 3-5′][′Slide′][′Price′])
	Categories[′Ages 3-5′][′Crayons′][′Price′] = 3.59
	--Categories[′Teenagers′][′Game Console′][′Stock′]

The actual job of storing all your data will take place on a web server in a secure environment tightly controlled by your database management system.
The purpose of using a structure of arrays in JavaScript like this, therefore, is purely for you to support easy manipulation of data for users within their
browsers as they view your merchandise, without them having to leave your page, or transfer any data, to or from, the web server until an item is added to the
user’s shopping cart.
*/

/*
Array Functions
	Using for(…in…)
		Cats = ['Long Hair', 'Short Hair', 'Dwarf', 'Farm', 'Tabby', 'Tortoiseshell'];
		for(i in Cats)
		{
			document.write(Cats[i] + '<br/>');
		}
*/

/*
	Using forEach()
		Dogs = ['Pomeranian', 'King Charles Spaniel', 'Jack Russell Terrier', 'Pembroke Welsh Corgi', 'Golden Retriever', 'Shiba Inu'];
		Dogs.forEach(info)
		function info(v, i, a)	// v is the value of each element; i is the index of the element; a is the array being traversed.
			{
				document.write('[' + i + '] is: ' + v + '<br/>')
			}
		[0] is: Pomeranian
		[1] is: King Charles Spaniel
		[2] is: Jack Russell Terrier
		[3] is: Pembroke Welsh Corgi
		[4] is: Golden Retriever
		[5] is: Shiba Inu
*/

/*
	Using concat()
		Cats = ['Long Hair', 'Short Hair', 'Dwarf', 'Farm', 'Tabby', 'Tortoiseshell'];
		Dogs = ['Pomeranian', 'King Charles Spaniel', 'Jack Russell Terrier', 'Pembroke Welsh Corgi', 'Golden Retriever', 'Shiba Inu'];
		Meow = Cats.concat(Dogs)
		for(i in Meow)
		{
			document.write(Meow[i] + ′<br>′);
		}
		Woof = Dogs.concat(Cats)
		for(i in Woof)
		{
			document.write(Woof[i] + ′<br>′);
		}
		document.write(Dogs)						// Pomeranian, King Charles Spaniel, Jack Russell Terrier, Pembroke Welsh Corgi, Golden Retriever, Shiba Inu
*/

/*
	Using join()
		Cats = ['Long Hair', 'Short Hair', 'Dwarf', 'Farm', 'Tabby', 'Tortoiseshell'];
		document.write(Cats.join(' and '));			// Long Hair and Short Hair and Dwarf and Farm and Tabby and Tortoiseshell
		document.write(Cats.join(', ') + '<br/>');	// Long Hair, Short Hair, Dwarf, Farm, Tabby, Tortoiseshell
		document.write(Cats.join(''  ) + '<br/>');	// LongHairShortHairDwarfFarmTabbyTortoiseshell
		document.write(Cats.join(    ) + '<br/>');	// Long Hair,Short Hair,Dwarf,Farm,Tabby,Tortoiseshell
*/

/*
	Using map()
		Nums = [99, 16, 11, 66.5, 54, 23];
		Roots = Nums.map(Math.sqrt);
*/

/*
Adding and Removing Array Elements
	Using push()
		You can add a new element to the end of an array, without knowing how many items already exist in that array.
		For example, normally you would need to know the current array length and then use that value to add extra values (using the Cats array from Lesson 7):
			Cats = ['Long Hair', 'Short Hair', 'Dwarf', 'Farm', 'Tabby', 'Tortoiseshell'];
			len = Cats.length		// used to hold the length of the array (the number of elements it contains), the value will be 6 (for elements 0 through 5).
			Cats[len] = "Siamese"	// this value in len of 6 is suitable as an index into the next available element.
			Cats.push(′Siamese′)

			for(i in Cats)
			{
				document.write(Cats[i] + ′<br>′);
			}

			MyArray.push('A')
			MyArray.push('B')
			MyArray.push('C')
*/

/*
	Using pop()
	You can remove the last element from an array:
		MyArray.pop()
		MyVariable = MyArray.pop()

		Cats = ['Long Hair', 'Short Hair', 'Dwarf', 'Farm', 'Tabby', 'Tortoiseshell'];
		document.write('Popping off the value: ' + Cats.pop() + '<br/><br/>')	// the value Tortoiseshell was popped off the array.
		document.write('Remaining elements: <br/><br/>')						// remaining elements are displayed, so the previous final element was removed.
		for(i in Cats)
		{
			document.write(Cats[i] + '<br/>');
		}
			Popping off the value: Tortoiseshell
			Remaining elements:
			Long Hair
			Short Hair
			Dwarf
			Farm
			Tabby
*/

/*
	Using push() and pop()
	Recursion is any section of code that calls itself and can then call itself again, and keep on doing so until the task of the code is complete.
	Consider a search algorithm for exploring a 5x5 maze, in which the objective is to find your way from the starting point 'a' to the finish 'y'.
	Therefore, a program to do this will easily find its way along the path 'a-b-c-h', but then it will encounter a random choice of going:
		either left to 'cell g',
		or right to 'cell i'.
	The program will then follow the latter path of 'i-d-e-j', only to encounter a dead end, requiring the program to return.
		Maze = new Array()
		Maze.push('a')
		Maze.push('b')
		Maze.push('c')
		Maze.push('h')
		Maze.push('i')
		Maze.push('d')
		Maze.push('e')
		Maze.push('j')
		While no unvisited cell is accessible, pop a location off the array.
		Location = Maze.pop() // returns ′j′
		Location = Maze.pop() // returns ′e′
		Location = Maze.pop() // returns ′d′
		Location = Maze.pop() // returns ′i′
		Location = Maze.pop() // returns ′h′
	When the program finds it has popped the location 'h' off the stack, it discovers there is a new cell it can go to, 'g', and so the process continues along
	the path 'g-f-k-p-u-v-q-l-m', at which point, another choice of directions is encountered:
		either 'cell r',
		or straight ahead to 'cell n'.
	To track this path, the program will push all cells between g and m onto the array, and then push the path 'n-o-t-s', then another dead end is encountered.
	Like before, the code pops off all the cells in a loop until it reaches m, then the unvisited cell r is accessible, and the final path out of the maze is
	along the path: 'r-w-x-y'.
*/

/*
	Using reverse()
		MyArray.reverse()
*/

/*
	Using shift() and unshift()
		Buffer.unshift('F')
		Buffer.unshift('r')
		Buffer.unshift('e')
		Buffer.unshift('d')
		KeyPress = Buffer.pop()

		Buffer.push('F')
		Buffer.push('r')
		Buffer.push('e')
		Buffer.push('d')
		KeyPress = Buffer.shift()
*/

/*
Writing Functions
The Keyword 'return'
	document.write(Math.sqrt(49))

	function squareRoot(n)
	{
		return Math.pow(n, 0.5)
	}
	document.write(SquareRoot(49))
*/

/*
Passing Arguments
	function strRepeat(s, r)				  // PHP function str_repeat() altered to JavaScript
	{
		return new Array(++r).join(s);		  // r = 3, returns the new Array(4), placed 3 copies of the string s between each element occurrence
	}
*/

/*
Accessing Arguments
	Example(1, 2)
	function Example(a, b, c)
	{
		document.write(a + ' ' + b + ' ' + c) // results in 1 2 undefined
	}
	function join(separator)
	{
		if(separator == undefined)
		{
			separator = ','					  // do the joining and return the string created
		}
	}
	separator = !separator ? ',' : separator
	separator = separator ? separator : ′,′

	if(typeof separator == ′undefined′)
	{
		separator = ','
	}
*/

/*
Using the arguments Object
	for(i in arguments)
	{
		document.write(arguments[i])
	}

	My email address is: <span id='myspan'></span>
	<script>
		email = deobfuscate('jame', 'sjone', 's@jjinc', '.com');
		document.getElementById('myspan').innerHTML = "<a href='mailto:" + email + "'>" + email + "</a>";
		function deobfuscate()
		{
			s = '';
			for(e in arguments)
			{
				s += arguments[e];
			}
			return s;
		}
	</script>
*/

/*
Using the keyword 'this'
	Array.join()
	Array.prototype.Join = Join			 // keyword prototype adds methods and properties to an object
	function Join(separator)
	{
		string = '';
		separator = typeof separator == 'undefined' ? ',' : separator;
		for(j = 0; j < this.length - 1; ++j)
		{
			string += this[j] + separator;
			return string + this[j]
		}
	}
	Pets = ['cats', 'dogs', 'rabbits']
	document.write(Pets.Join(' and '))	// cats and dogs and rabbits
*/

/*
Anonymous Functions
	MyObject.onmouseover = function()	// call to anonymous function() for a single set of statements, in place of the function name DoThese()
	{
		// Do this
		// Do that
		// Do the other
	}
*/

/*
Global Naming Conventions
	HIGHSCORE = 0			// creates a global variable
	var highScore += 100	// increments a local variable
*/

/*
Using Local Variables with keyword 'var'
	var MyVar = 42	// myVar: local scope, when function returns, value is forgotten, if there's a global variable with this name, it retains its value, local variables have no affect.
	FRED = 25											// variable has global scope, outside of a function, accessible from any part of the program
	document.write('Fred is ' + Fred + '<br/>')			// FRED is 25
	MyFunc()											
	document.write('Fred is ' + Fred + '<br/>')			// FRED is 25
	function myFunc()
	{
		var fred = 29									// variable has local scope, inside of a function, with the keyword var
		document.write('Fred is ' + Fred + '<br/>')		// fred is 29
	}
*/

/*
Primitive Data Types:
	Variables:
		discount = 10			// container = information

	Naming Conventions:
		A-Z, a-z, (only $, _), cannot start with numbers, cannot have spaces = 2Option and option 2 are invalid!

	Camel Casing:
		camelCasingIsFun

Types of Variables:
	Number variables:
		<script>
			discount = 10;
		</script>
		- parseFloat(document.getElementById('discount').innerHTML replace with - discount

	Boolean:
		<script>
			discount = 10;
			checkOutExists = false;
			function addFive(qty)
			{
				var newQty = parseInt(document.getElementById(qty).value);
				newQty += 5;
				document.getElementById(qty).value = newQty;
			}
			function openCheckOut()
			{
				if(checkOutExists == false)
				{
					checkWin = window.open("checkout.htm", "", "width=300, height=300");
				}
				checkOutExists = true;
			}
			function closeCheckOut()
			{
				if(checkOutExists == true)
				{
					checkWin.close();
				}
				checkOutExists = false;
			}
		</script>

	String:
		<head>
			<meta charset="utf-8"/>
			<title>Shopping Cart</title>
			<link rel="stylesheet" type="text/css" href="styles/style.css"/>
			<script src="scripts/main.js"></script>
		</head>
-----------------------------------------------------------------------------------------------------------------
				External code in scripts/main.js:
					const salesTaxRate = .075;
					incMsg = "This site is under construction and will be fully functional soon.";
-----------------------------------------------------------------------------------------------------------------
		<body>
			<h1>Shopping Cart</h1>
			<script>
				document.write(incMsg);
			</script>
		</body>
-----------------------------------------------------------------------------------------------------------------
/*
	Null:
		<script type="text/javascript">
			var x = {};
			x = null;
			alert('x = ' + x + '; x is of type: ' + typeof x);
		</script>
-----------------------------------------------------------------------------------------------------------------
		<body>
			<div class="itemquantity">
				<p>
					<input type="text" value="1" id="manqty"> <br/>
					<button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = null;"> Clear </button>
				</p>
			</div>
		</body>
-----------------------------------------------------------------------------------------------------------------
*/

/*
-----------------------------------------------------------------------------------------------------------------
	Undefined:
		<script type="text/javascript">
			var x;
			if(typeof x === 'undefined')
			{
				alert('x is undefined);
			}
			else
			{
				alert('x = ' + x + '; ' + typeof x);
			}
		</script>
-----------------------------------------------------------------------------------------------------------------
		<script>
			discount = 10;
			var subtotal;			// declared but not initialized(undefined)
			var grandtotal;			// declared but not initialized(undefined)
			checkOutExists = false;
			function addFive(qty)
			{
				var newQty = parseInt(document.getElementById(qty).value);
				newQty += 5;
				document.getElementById(qty).value = newQty;
			}
			function openCheckOut()
			{
				if(checkOutExists == false)
				{
					checkWin = window.open("checkout.htm", "", "width=300, height=300");
				}
				checkOutExists = true;
			}
			function closeCheckOut()
			{
				if(checkOutExists == true)
				{
				checkWin.close();
				}
				checkOutExists = false;
			}
		</script>

	typeof:
		Sometimes this conversion is done for us automatically (Implicit Conversion), sometimes we need to do this manually (Explicit Conversion).
			var numString = "55";		// "55" is a string, and can be converted to a number
			num = Number(numString);	// Number() method converts "55" to 55
			var num = 55;				// 55 is a number, and can be converted to a string
			numString = num.toString(); // .toString() method converts 55 to "55"
			"Dog" is a string, and cannot be a number (NaN)!
		
		In your web browser, type F12 to open the Developer Console, then type into the console:
				typeof(discount) = Number
				typeof(checkOutExists) = Boolean
				typeof(incMsg) = String

	Type Checking Functions (isInteger):
		In your web browser, type F12 to open the Developer Console, then type into the console:
			Number.isInteger(discount) => true		// 10 = integer
			Number.isInteger(discount) => false		// 10.5 = float

	"use strict":
		<script language="JavaScript">
			function getPracticeHours()
			{
				"use strict";
				try
				{
					hoursEntered = parseInt(document.getElementById('practiceHours').value);
					document.getElementById('practiceWeeks').innerHTML = 'It will take you ' + 20 / hoursEntered + ' weeks to finish the course.';
				}
			}
		</script>
				Error: Variable undefined in strict mode.
					Solution: Declare hoursEntered as a var.

	parseInt and parseFloat:
		In your web browser, type F12 to open the Developer Console, then type into the console:
			typeof(document.getElementById('mantotal')) => object
			parseFloat => float
			parseInt => number

	Format Numbers:
		.toFixed(2) = '$ ' + (parseFloat(document.getElementById('subtotal').innerHTML)...)		// sales tax set to two decimal places

	String Operations:	
		concat():
		toFixed(1);
		toPrecision(3);
		toLocaleString();
		function getPracticeHours()
		{
			"use strict";
			try
			{
				var hoursEntered = parseInt(document.getElementById('practiceHours').value)
				var msg1 = 'It will take you '
				var msg2 = (20 / hoursEntered).toPrecision(3);		// returns a number with 3 digits
				var msg3 = ' weeks to finish this program.'
				var msg4 = 'Can you do '
				var msg5 = hoursEntered
				var msg6 = ' per week for '
				var msg7 = ' weeks? Or is this just a "dream?"'		// start string with single quotes, then use nested double quotes, or vice versa.
				document.getElementById('practiceWeeks').innerHTML = msg1.concat(msg2, msg3) + '<br/>' + msg4.concat(msg5, msg6, msg2, msg7);
				var currentDate = new Date();
				document.getElementById('practiceWeeks').innerHTML += '<br/>' + currentDate.toLocaleString();	// converts date to string
			}
			catch(error)
			{
				alert("Error: " + error.description);
			}
		}
*/

/*
Declaring and Using Arrays:
	Building and Defining an Array:
	<p>
		<button class="buttons" onclick="updateList();"> Update List </button>
	</p>
	<script>
		tuningList = ["Tuning Lever", "Tuning Fork"];
		function updateList()
		{
			document.getElementById('tuningList').innerHTML = tuningList;
			document.getElementById('tuningList').innerHTML	+= "<br/>";
		}
	</script>

	Array Iteration, Length and Access:
	<p>
		<button class="buttons" onclick="updateList();"> Update List </button>
	</p>
	<script>
		tuningList = ["Tuning Lever", "Tuning Fork"];
		function updateList()
		{
			tuningList.sort();
			document.getElementById('tuningList').innerHTML = "<ul>";
			for(var i = 0; i < tuningList.length; i++)
			{
				document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>";
			}
			document.getElementById('tuningList').innerHTML	+= "</ul>"; <br/>
			alert("The first item in this array is: " + tuningList[0]);
		}
	</script>
		In your web browser, type F12 to open the Developer Console, then type into the console:
			tuningList.indexOf("Tuning Lever") > -1; => true
			tuningList.indexOf("Felt Strips")  > -1; => false

	push() and pop():
		<p>
			<input type="checkbox" title="wedge mute" id="wedgeMute" onclick="tuningList.push('Wedge mute')" />
			Wedge mute
		</p>
		In your web browser, type F12 to open the Developer Console, then type into the console:
			tuningList.pop();	// "Wedge mute"
			tuningList;			// [object array] ["Tuning Fork", "Tuning Lever"]

	shift() and unshift():
		In your web browser, type F12 for the Developer Console, then type into the console:
			tuningList.shift(); = "Tuning Fork"
			tuningList; [object array] ["Tuning Lever"]
		<p>
			<input type="checkbox" title="wedge mute" id="wedgeMute" onclick="tuningList.unshift('Wedge mute')" />
			Wedge mute
		</p>

	Understanding Multi-Dimensional Arrays:
		tuningList = ["Tuning fork", "Tuning lever"]
					 ["Tuning fork", "Red"]
					 ["Tuning fork", "Black"]
					 ["Tuning lever", "Red"]
					 ["Tuning lever", "Black"]
		<script>
			function multiArray()
			{
				var a1 = new Array(2);
				for(i = 0; i < 2; i++)
				{
					a1[i] = new Array(2);
					for(j = 0; j < 2; j++)
					{
						a1[i][j] = '[' + i + ', ' + j + ']';
					}
				}
				a1[0][0] = '[Tuning Fork, Red]'
				document.getElementById('tuningList').innerHTML = a1;
			}
		</script>
*/

/*
Complete and Debug Code on Objects:
	Properties/Characteristics:
		HTML tags, arrays and variables are examples of document objects on the DOM, and can be manipulated.
		Windows and screen sizes are examples of browser objects on the BOM.
		Objects are items or nouns that have properties, properties are characteristics or adjectives that define the objects.
		<div class="order_buttons">
			<p>
				<input type="button" class="buttons" value="Update Cart" onclick="javascript:document.getElementById('subtotal').innerHTML"
				 = parseFloat(document.getElementById('mantotal').innerHTML) + parseFloat(document.getElementById('drumtotal').innerHTML)
				 + parseFloat(document.getElementById('tromtotal').innerHTML); />
			</p>
		</div>

	Methods:
		Adjective is to property, as verb is to method:
			- parseFloat(document.getElementById('discount').innerHTML)).toFixed(2);
			tuningList.unshift('Wedge mute');

	Instantiation:
		Instantiation is the creation of a template or a class.
			Code in main.js:
				const salesTaxRate = .075;
				incMsg = "This site is under construction and will fully functional soon.";
				function product(item, size, price)
				{
					this.item = item;
					this.size = size;
					this.price = price;
				}
		Code in main.html:
			<script>
				var mandolin = new product('Mandolin', '36"', 379.99);
				var drum = new product('Drum', '32"', 129.99);
			</script>
		In your web browser, type F12 for the Developer Console, then type into the console:
			mandolin.size => '36"'

	Date Object and Time:
		<script language="JavaScript">
			lessonStartDate = new Date('October 2, 2017 6:00 PM');
			var lessonEndDate = new Date(lessonStartDate);
			lessonEndDate.setDate(lessonEndDate.getDate() + 56); // days
			today = new Date();
			var daysUntilStart = parseInt((lessonStartDate - today) / 86400000) // milliseconds
			var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			function getPracticeHours()
			{
				try
				{
					var hoursEntered = parseInt(document.getElementById('practiceHours').value)
					var msg1 = 'It will take you '
					var msg2 = (20 / hoursEntered).toPrecision(3);
					var msg3 = ' weeks to finish this program.'
					var msg4 = 'Can you do '
					var msg5 = hoursEntered
					var msg6 = ' per week for '
					var msg7 = ' weeks? Or is this just a "dream?"'
					document.getElementById('practiceWeeks').innerHTML = msg1.concat(msg2, msg3) + '<br/>' + msg4.concat(msg5, msg6, msg2, msg7);
					document.getElementById('practiceDetails').innerHTML = "New classes start on " + monthName(lessonStartDate.getMonth()) + " "
					+ lessonStartDate.getDate() + "," + daysUntilStart + " days from now."
					+ "<br/> Lessons end on " + lessonEndDate.toLocaleDateString('en-gb'); // + lessonStartDate.toLocaleDateString() + ".";
				}
				catch(error)
				{
					alert("Error: " + error.description);
				}
			}
		</script>
			In your web browser, type F12 for the Developer Console, then type into the console:
				lessonStartDate => 'October 2, 2017 6:00 PM'
				lessonEndDate => '_'
				today => '_'
*/

/*
Built-in Math Functions:
	Math.random():
		<body onload="loadJukebox();">
			<script>
				function loadJukebox()
				{
					var videoNumber = Math.floor((Math.random() * 2));
					if (videoNumber == 0)
					{
						document.getElementById('videoJukebox').src = "videos\\Blues.mp4";
					}
					else
					{
						document.getElementById('videoJukebox').src = "videos\\Happy.mp4";
					}
				}
			</script>
		</body>

	Math.round():
		var msg2 = Math.round(20 / hoursEntered)
		
	Math.abs():
		var hoursEntered = Math.abs(parseInt(document.getElementById('practiceHours').value))

	Math.floor() and Math.ceil():
		In your web browser, type F12 to open the Developer Console, then type into the console:
			Math.floor(2.2) => 2
			Math.ceil(2.8) => 3
	
	Math.min() and Math.max():
		<script>
			var manprice = parseFloat(document.getElementById('manprice').innerHTML);
			var drumprice = parseFloat(document.getElementById('drumprice').innerHTML);
			var tromprice = parseFloat(document.getElementById('tromprice').innerHTML);
			function showMinMax()
			{
				var minprice = Math.min(manprice, drumprice, tromprice);
				var maxprice = Math.max(manprice, drumprice, tromprice);
				document.getElementById('minmax').innerHTML = 'The lowest price is ' + minprice	+ ' and the highest price is ' + maxprice;
			}
		</script>

	Math.pow() & Math.sqrt():
		<p>
			<input id="toMeasure" />
			<button class="buttons" value="square footage" id="squareFootage" onclick="getSquareFootage();"> Square Footage </button>
			<button class="buttons" value="square footage" id="squareFootage" onclick="getSide();"> Side </button>
		</p>
		<script>
			function getSquareFootage()
			{
				document.getElementById('toMeasureResult').innerHTML = 'Square Feet: ' + Math.pow(parseInt(document.getElementById('toMeasure').value), 2);
			}
			function getSide()
			{
				document.getElementById('toMeasureResult').innerHTML = 'Side Length: ' + Math.sqrt(parseInt(document.getElementById('toMeasure').value));
			}
		</script>
*/

/*
Parameters and Return Values:
	Reusable Code:
		<div class="clear"></div>
		<hr/>
		<article class="item">
			<div class="itemdesc">
				<div class="itemthumb">
					<a href="products.html">
						<img src="images/mandolin.jpg" alt="Mandolin" />
					</a>
				</div>
				<div class="itemquantity">
					<p>
						<input type="text" value="1" id="manqty"> <br/>
						<button id="manqtyadd" onclick="addOne('manqty');"> + </button>
						<button id="manqtysubtract" onclick="javascript:document.getElementById('manqty').value--;"> - </button>
						<button id="manqtyzero" onclick="javascript:document.getElementById('manqty').value = 0;"> Clear </button>
						<button id="manqtyfive" onclick="addFive('manqty');"> Add Five </button>
					</p>
				</div>
				<div class="itemquantity">
					<p>
						<input type="text" value="1" id="drumqty"> <br/>
						<button id="manqtyadd" onclick="addOne('drumqty');"> + </button>
						<button id="manqtysubtract" onclick="javascript:document.getElementById('drumqty').value--;"> -	</button>
						<button id="manqtyzero" onclick="javascript:document.getElementById('drumqty').value = 0;"> Clear </button>
						<button id="manqtyfive" onclick="addFive('drumqty');"> Add Five </button>
					</p>
				</div>
			<script>
				function addOne(fieldQty)
				{
					var qty = document.getElementById(fieldqty).value;
					qty++;
					document.getElementById(fieldqty).value = qty;
				}
				function addFive(qty)
				{
					var newQty = parseInt(document.getElementById(qty).value);
					newQty += 5;
					document.getElementById(qty).value = newQty;
				}
				function checkoutWindow()
				{
					checkWin = window.open("checkout.html", "", "width=300, height=300");
				}
				function closeCheckout()
				{
					checkWin.close();
				}
			</script>
*/

/*
	Global vs Local Scope:
		<script>
			const salesTaxRate = .07
		</script>
		<script src="scripts/main.js"></script>
			Code in main.js:
				const salesTaxRate = .075;
				incMsg = "This site is under construction and will be fully functional soon.";		// global variable
				function product(item, size, price)
				{
					this.item = item;
					this.size = size;
					this.price = price;
				}
		<script>
			function addOne(fieldQty)
			{
				var qty = document.getElementById(fieldqty).value;									// local variable
				qty++;
				document.getElementById(fieldqty).value = qty;
			}
		</script>
*/

/*
	Redefining Variables:
		var lessonStartDate = new Date('October 2, 2017 6:00 PM');
		var lessonEndDate = new Date(lessonStartDate);
		lessonEndDate.setDate(lessonEndDate.getDate() + 56);		// lessonEndDate has been redefined
*/

/*
Topic 2 Exam Tips:
	What is the difference between a declared variable or array, and an initialized variable or array?
		A declared array becomes initialized when it starts to hold values.
	What bit of code makes a method a method?
		Parentheses at the end of each method().
	What type of variable cannot be redefined?
		A constant (const)
	Remember that JavaScript is a loosely typed language.
	Know the main primitive data types:
		Number, Boolean, String, Null, Undefined
	Be able to use typeof operator to return a data type.
	Know how to use conversion methods such as parseInt and parseFloat to turn text into numbers.
	Know when to nest quotes.
	Know how to build arrays and how to manipulate them using methods:
		push(), pop(), shift(), unshift()
	Where does the unshift method add an item to in an array?
		The unshift() method adds an item to the beginning of an array.
		The push() method adds an item to the end of an array.
	Be able to look at a piece of JavaScript code and determine what is the object, what are properties, and what are methods.
	Know how to generate a date variable for a fixed date or today's date.
	Be able to break that date up into parts, and know how to add a number to a date and how to subtract two dates.
	Know how to use the built-in Math functions:
		random, round, abs, floor, ceiling, min, max, pow & sqrt
	Know that the main purpose of a function is to be able to reuse code.
	Make sure you can tell a local variable from a global one.
	Know the role of parameters in functions.
*/

/*
Variables:
-----------------------------------------------------------------------------------
let x = 7;	    // the keyword, let, is deemed a verb, x is the identifier
let y = 5;		// always start variables with a letter (A-Z, a-z), $ or _ symbol.
let z = x + y;
gameCollection = 'string';	// camel casing in between words (gC)
console.log('Answer: ' + z);
console.log(gameCollection);
-----------------------------------------------------------------------------------
node variables
	Answer: 12
	string
-----------------------------------------------------------------------------------
const x = 7;	// constant variable will not be expected to change!
x = 6;
-----------------------------------------------------------------------------------
node variables
	TypeError: Assignment to constant variable
-----------------------------------------------------------------------------------		
let x = 7;      // you can only declare a variable once!
x = 6;	        // but you can always re-assign its value.
x = 5;	        // again...
x = 4;	        // and again.
let x = 8;      // x has already been declared above!
let y = 5;
let z = x + y;
console.log('Answer: ' + z);
-----------------------------------------------------------------------------------
node variables
	SyntaxError: Identifier 'x' has already been declared
-----------------------------------------------------------------------------------		
let x;
console.log(x); // x has not been initialized at this stage!
x = 7;			// x has now been initialized.
X = 420;		// variables are case-sensitive!
let y = 5;
let z = x + y;
console.log('Answer: ' + z);
console.log(X);
-----------------------------------------------------------------------------------
node variables
	undefined
	Answer: 12
	420
-----------------------------------------------------------------------------------
let let = 8;	// no keywords can be used as a variable name
-----------------------------------------------------------------------------------
node variables
	SyntaxError: let is disallowed as a lexically bound name.
-----------------------------------------------------------------------------------
*/

/*
Data Types:
-----------------------------------------------------------------------------------
let x = 7;					// values contain the data type
console.log(typeof(x));
let y = true;
console.log(typeof(y));
let z = 'Hello world';
console.log(typeof(z));
-----------------------------------------------------------------------------------
node datatypes
	number
	Boolean
	string
-----------------------------------------------------------------------------------
let a;
console.log(a);
console.log(typeof a);
-----------------------------------------------------------------------------------
node datatypes
	undefined
	undefined
-----------------------------------------------------------------------------------
*/

/*
Type Coercion and Conversion:
-----------------------------------------------------------------------------------
let a = 7;
let b = '6';
let c = a + b;					// coercing the number into a string
console.log('Answer: ' + c);
-----------------------------------------------------------------------------------
node coercion
	Answer: 76
-----------------------------------------------------------------------------------
let a = 7;
let b = '6';
b = parseInt(b, 10);			// converting the string into a number
let c = a + b;
console.log('Answer: ' + c);
-----------------------------------------------------------------------------------
node coercion
	Answer: 13
-----------------------------------------------------------------------------------
let d = parseInt('bob', 10);	// 'bob' is Not a Number (NaN)!
let e = isNaN(d);				// 'bob' is, indeed, Not a Number (NaN).
console.log(d);
console.log(e);
-----------------------------------------------------------------------------------
node coercion
	NaN
	True
-----------------------------------------------------------------------------------
*/

/*
Arrays:
-----------------------------------------------------------------------------------
let a = [4, 8, 15, 16, 23, 42];					// array of numbers
let b = ['david', 'eddie', 'alex', 'michael'];	// array of strings
let c = [4, 'Jonny', true];						// mixed array
a[5] = 420;										// re-assign value of 42 to 420
console.log(typeof a);							// array is an object
console.log(a);
console.log(a[2]);
console.log(a.length);							// non-zero based array length
console.log(b[2]);
console.log(c);
-----------------------------------------------------------------------------------
node arrays
	object
	[4, 8, 15, 16, 23, 420]
	15
	6
	alex
	[4, 'Jonny', true]
-----------------------------------------------------------------------------------
let d = [1, 14, 56, 79, 101, 145];
d[10] = 420;									// sparse array
console.log(d);
console.log(d.length);
-----------------------------------------------------------------------------------
node arrays
	[1, 14, 56, 79, 101, 145, <4 empty items>, 420] 
	11
-----------------------------------------------------------------------------------
let e = [2, 21, 34, 65, 87, 99];
e.push(1000);			   // 1000 is pushed to the end of the array
console.log(e);
console.log(e.length);	   // array length increases by 1 element
e.pop();				   // 1000 is popped from the end of the array
e.pop();				   // then 99
e.pop();				   // and then 87
console.log(e);
console.log(e.length);	   // array length decreases by 3 elements
e.reverse();			   
e.unshift();			   // 65 is unshifted from the start of the array
e.shift(69);			   // 69 is shifted to the start of the array
e.shift(420);			   // 420 is shifted to the start of the array
console.log(e);
console.log(e.length);	   // array length increases by 1 element
-----------------------------------------------------------------------------------
node arrays
	[2, 21, 34, 65, 87, 99, 1000]
	7						     
	[2, 21, 34, 65]			     
	4
	[420, 69, 34, 21, 2]
	5
-----------------------------------------------------------------------------------
*/

/*
Functions:
-----------------------------------------------------------------------------------
function sayHello()
{
	console.log('Hello!');
}
sayHello();
let a = sayHello();
a();
-----------------------------------------------------------------------------------
node functiondeclarations
	Hello!
	Hello!
-----------------------------------------------------------------------------------		
function sayHello(name)
{ 
	console.log('Hello' + name + '!');
}
sayHello('Jonny');
sayHello('Mandy');
sayHello('Bongo');
sayHello('Booter');
-----------------------------------------------------------------------------------
node functiondeclarations
	Hello Jonny!
	Hello Mandy!
	Hello Bongo!
	Hello Booter!
-----------------------------------------------------------------------------------
function calculateTax(amount)
{
	let result = amount * 0.0825;
	return result;
}
let tax = calculateTax(100);		// passing in variable, amount = 100
console.log('€' + tax);
-----------------------------------------------------------------------------------
node functiondeclarations
	€8.25
-----------------------------------------------------------------------------------
*/

/*
Variable Scope:
-----------------------------------------------------------------------------------
let a = 'first';
function scopeTest()
{
	console.log(a);
	if(a != '')
	{
		console.log(a);
	}
	let b = 'second';
}
scopeTest();
console.log(b);
-----------------------------------------------------------------------------------
node scopebasics
	first
	first
	ReferenceError: 'b' is not defined
-----------------------------------------------------------------------------------		
let a = 'first';
function scopeTest()
{
	console.log(a);
	a = 'changed';
	if(a != '')
	{
		console.log(a);
	}
}
scopeTest();
console.log(a);
-----------------------------------------------------------------------------------
node scopebasics
	first
	changed
	changed
-----------------------------------------------------------------------------------
let a = 'first';
function scopeTest()
{
	console.log(a);
	a = changed;
	let b = 'second';
	if(a != '')
	{
		console.log(a);
		console.log('inside if: ' + b);
	}
	console.log(a);
}
scopeTest();
-----------------------------------------------------------------------------------
node scopebasics
	first
	changed
	inside if: second
	changed
-----------------------------------------------------------------------------------
*/

/*
Object Arrays & JSON:
-----------------------------------------------------------------------------------
let car = {
			make: 'BMW';
			model: '745li';
			year: 2010;
			getPrice: function()
			{
				// calculations here
				return 5000;
			};
			printDescription: function()
			{
				console.log(this.make + ' ' + this.model);
			}
		  }
car.printDescription();
console.log(car.year);
console.log(car['make']);
console.log(car[1]);
var anotherCar = {};
anotherCar.whatever = 'Audi';
console.log(anotherCar.whatever);
var a = {
			myProperty: {b: 'Hi'}
		};
console.log(a.myProperty.b);
-----------------------------------------------------------------------------------
node object
	BMW 745li
	2010
	BMW
	undefined
	Audi
	Hi
-----------------------------------------------------------------------------------
let car = {
			make: 'BMW';
			model: '745li';
			year: 2010;
			getPrice: function()
			{
				// calculations here
				return 5000;
			};
			printDescription: function()
			{
				console.log(this.make + ' ' + this.model);
			}
		  }
var c = {
			myProperty: [
							{d: 'this'},
							{e: 'can'},
							{f: 'get'},
							{g: 'crazy!'}
						]
		};
let carLot = [
				{year: 2017, make: 'Toyota', model: 'Yaris'},
				{year: 2014, make: 'Audi', model: 'A4'},
				{year: 2009, make: 'FIAT', model: 'Punto'}
			 ];
let contacts = {
					customers: [
								{firstName: 'Bob', lastName: 'Tabor', phoneNumbers: ['(123) 456-7890', '(123) 567-1234']},
								{firstName: 'Fred', lastName: 'Fuchs', phoneNumbers: ['(123) 666-7830', '(123) 420-6969']}
							   ],
					employees: [
								{firstName: 'Steve', lastName: 'Mun', phoneNumbers: ['(123) 111-2345', '(122) 234-7689']},
								{firstName: 'Ben', lastName: 'Dover', phoneNumbers: ['(126) 897-6969']},
								{firstName: 'Sven', lastName: 'Son', phoneNumbers: ['(123) 456-7890']}
							   ]
			   };
*/

/*
null Type:
-----------------------------------------------------------------------------------
let a;
console.log(a);
console.log(typeof a); 
-----------------------------------------------------------------------------------
node null
	undefined
	undefined
-----------------------------------------------------------------------------------
let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);
console.log(result);
console.log(typeof result);
if(result === null)
{
	console.log('No match was found.');
}
-----------------------------------------------------------------------------------
node null
	null
	object
	No match was found.
-----------------------------------------------------------------------------------
*/

/*
String Methods:
-----------------------------------------------------------------------------------
console.log('Amanda loves you'.toUpperCase()) + '<3';
-----------------------------------------------------------------------------------
node strings
	AMANDA LOVES YOU <3
-----------------------------------------------------------------------------------
let third = '4, 8, 15, 16, 23, 42';
let mySplit = third.split(',');
console.log(mySplit);
-----------------------------------------------------------------------------------
node strings
	['4', '8', '15', '16', '23', '42']
-----------------------------------------------------------------------------------
let first = 'Knowledge is power, but enthusiasm pulls the switch.';
let mySlice = first.slice(13, 18); // prints indexes 13 through to 18
console.log(mySlice);
-----------------------------------------------------------------------------------
node strings
	power
-----------------------------------------------------------------------------------
let first = 'Knowledge is power, but enthusiasm pulls the switch.';
let mySubstr = first.substr(13, 5);	// prints index 13, with a char length of 5
console.log(mySubstr);
-----------------------------------------------------------------------------------
node strings
	power
-----------------------------------------------------------------------------------
let second = 'Do or do not. There is no try.';
let myStartsWith = second.startswith('Do');
console.log(myStartsWith);
let myInclude = second.includes('there');
console.log(myInclude);
let myEndsWith = second.endswith('try.');
console.log(myEndsWith);
let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);
let myTrim = '      bloated  ';
console.log(myTrim.length);
console.log(myTrim.trim().length);
-----------------------------------------------------------------------------------
node strings
	true
	true
	true
	Ha! Ha! Ha!
	16
	7
-----------------------------------------------------------------------------------
*/

/*
Array Methods:
-----------------------------------------------------------------------------------
let lost = [4, 8, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
console.log(fibonacci.join(' ~ '));
var combine = lost.concat(fibonacci);
console.log(combine);
console.log(combine.indexOf(21)); // index with the #21 (index 13)
console.log(combine.lastIndexOf(1)); // last index with the #1 (index 7)
var filtered = combine.filter((x) => {if(x <= 15) return x;});
console.log(filtered);
console.log(fibonacci.some((num) => num > 50));
console.log(fibonacci.some((num) => num > 100));
-----------------------------------------------------------------------------------
node array-methods
	[1 ~ 1 ~ 2 ~ 3 ~ 5 ~ 8 ~ 13 ~ 21 ~ 34 ~ 55]
	[4, 8, 15, 16, 23, 42, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
	13
	7
	[4, 8, 15, 1, 1, 2, 3, 5, 8, 13]
	true
	false
-----------------------------------------------------------------------------------
let lost = [4, 8, 15, 16, 23, 42];
lost.shift();				// 4 is removed from the start of the array
console.log(lost);
lost.unshift(1, 2, 3, 4);	// 1-4 are added to the start of the array
console.log(lost);
-----------------------------------------------------------------------------------
node array-methods
	[8, 15, 16, 23, 42]
	[1, 2, 3, 4, 8, 15, 16, 23, 42]
-----------------------------------------------------------------------------------
let names = ['David', 'Colm', 'Ben', 'Alex'];
console.log(names);
console.log(names.reverse());
names.unshift('Booter');		// Booter is added to the start of the array
console.log(names);
console.log(names.sort());		// sort A-Z
names.forEach((name) => console.log('Howdy ${name}'Howdy ${name}`));
-----------------------------------------------------------------------------------
node array-methods
	['David', 'Colm', 'Ben', 'Alex']
	['Alex', 'Ben', 'Colm', 'David']
	['Booter', 'Alex', 'Ben', 'Colm', 'David']
	['Alex', 'Ben', 'Booter', 'Colm', 'David']
	Howdy Alex
	Howdy Ben
	Howdy Booter
	Howdy Colm
	Howdy David
-----------------------------------------------------------------------------------
let lost = [4, 8, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
var combine = lost.concat(fibonacci);
var filtered = combine.filter((x) => {if(x <= 15) return x;});
console.log(filtered);
console.log(filtered.every((num) => num < 10));
console.log(filtered.every((num) => num > 16));
-----------------------------------------------------------------------------------
node array-methods
	[4, 8, 15, 1, 1, 2, 3, 5, 8, 13]
	true
	false
-----------------------------------------------------------------------------------
*/

/*
How to Dynamically Generate and Execute JavaScript Commands:
-----------------------------------------------------------------------------------
In home.html:
<head>
	<meta charset="utf-8" />
	<title>JavaScript</title>
	<script type="text/javascript">
		function doIt()
		{
			var jsExec = document.getElementById("input").value;
			try
			{
				eval(jsExec);
			}
			catch(error)
			{
				var txt = "Sorry, but that caused error" + error.message + "'\n\nClick OK to continue.";
				alert(txt);
			}
		}
	</script>
</head>
<body>
	Enter JavaScript Command: <br/>
	<textarea rows="20" cols="50" id="input1"></textarea> <br/> <br/>
	<input type="button" onclick="doIt()" value="Execute" /> <br/> <br/>
	Output Window (use ID "output")
	<div id="output" style="height: 125px; width: 425px; border: 1px solid;"></div>
</body>
-----------------------------------------------------------------------------------
Web Browser:
Enter JavaScript Command:
	alert("Hello!");
		Execute
			Outputs Hello!

	var x = 10;
	alert(x);
		Execute
			Outputs 10
				
	var cars = "red";
	document.getElementById("output").innerHTML = "All cars are " + cars + ".";
		Execute
			All cars are red.
*/

/*
Date and Math Functions:
	Getting Date and Time:
		<script type="text/javascript">
			var today = new Date();
			var anniversary = new Date('September 3, 2022 14:00:00');
			var birthday = new Date(1989, 09, 07);
			document.writeln("This is the result of creating a standard Date object: " + today.toString() + "<br/>");
			document.writeln("This is the result of using the GMT string: " + anniversary.toGMTString() + "<br/>");
			document.writeln("This is the result of using the UTC string: " + anniversary.toUTCString() + "<br/>");
			document.writeln("This is the result of using the locale string: " + birthday.toLocaleDateString() + "<br/>");
			document.writeln("This is the day: " + today.getDay() + "<br/>");
		</script>

	Subtracting Dates:
	<script>
		function datesDiff(date1, date2)
		{
			var DAY = 1000 * 60 * 60 * 24													// constant value for ms in a day			
			var date1_ms = date1.getTime()													// convert date to ms
			var date2_ms = date2.getTime()													// convert date to ms
			var diff_ms	= Math.abs(date1_ms - date2_ms)										// calculate the difference in ms
			return Math.round(diff_ms / DAY)												// convert ms back to days and return result
		}
		var current_date = new Date()
		var new_years_date = new Date()														// store the date of the next New Year's Day
		new_years_date.setYear(new_years_date.getFullYear() + 1)
		new_years_date.setMonth(0)
		new_years_date.setDate(1)
		var days_left = datesDiff(current_date, new_years_date)								// call the days between function, datesDiff
		if(days_left > 1)
		{
			document.write("<br/>There are " + days_left + " days left this year.<br/>");	// Write the result to the page
		}
		else
		{
			document.write("<br/>There is " + days_left + " days left this year.<br/>");	// Write the result to the page
		}
	</script>

	Comparing Dates:
	<body>
		<script>
			function compareDate(date1, date2)
			{
				var specificDate1 = new Date(date1);
				var specificDate2 = new Date(date2);
				if(specificDate1.getTime() == specificDate2.getTime())
				{
					alert("Same date.");
				}
				else
				{
					alert("Different dates!");
				}
			}
		</script>
		<form>
			<input type="text" name="date1" value="dd/m/yyyy" />
			<input type="text" name="date2" value="dd/m/yyyy" />
			<input type="button" name="button1" onclick="compareDate(date1.value, date2.value)" value="Compare Date" />
		</form>
	</body>

	Elapsed Time:
	<body>
		<script>
			function elapsedTime(date1, date2)
			{
				var start = new Date(date1);
				var startms = start.getTime();
				var end = new Date(date2);
				var endms = end.getTime();
				var elapsed = (endms - startms);
				alert(msToDaysHoursMins(elapsed));
			}
			function msToDaysHoursMins(ms)
			{
				var seconds = ms / 1000;
				var totalMins = seconds / 60;
				var minsPerDay = 60 * 24;
				var days = totalMins / minsPerDay;
				return days + " days";
			}
		</script>
		<form>
			Start Date: <input type="text" name="date1" value="dd/m/yyyy" /> <br/>
			End Date: <input type="text" name="date2" value="dd/m/yyyy" /> <br/>
			<input type="button" name="button1"	onclick="elapsedTime(date1.value, date2.value)" value="Get Elapsed Time" />
		</form>
	</body>

	Dates and Days of the Week:
	<body>
		<script>
			function getTheDay(date1)
			{
				var myDate = new Date(date1);
				var weekday = new Array(7);
				weekday[0] = "Sunday";
				weekday[1] = "Monday";
				weekday[2] = "Tuesday";
				weekday[3] = "Wednesday";
				weekday[4] = "Thursday";
				weekday[5] = "Friday";
				weekday[6] = "Saturday";
				var n = weekday[myDate.getDay()];
				alert("The day of the week is " + n + " for the following date: " + myDate.toString());
			}
		</script>
		<form>
			Date: <input type="text" name="date1" value="dd/m/yyyy" /> <br/>
			<input type="button" name="button1"	onclick="getTheDay(date1.value)" value="Get Elapsed Time" />
		</form>
	</body>

	The JavaScript Date Object:
	<body>
		<script type="text/javascript">
			document.write("Date: " + "<br/>");
			var d = new Date();
			document.write(d);
			document.write("Specific " + "<br/>");
			var specific = d.getFullYear();
			document.write(specific);				// new Date(month, day, year, hours, minutes, milliseconds)
		</script>
	</body>
*/

/*
Arithmetic and Logic Operators
	Bitwise Logical Operators & Shift Operators:
	<body>
		<script type="text/javascript">
			function nutsnBits(x, y)
			{
				x = parseInt(x);
				y = parseInt(y);
				alert("The binary representation of the numbers are: " + x.toString(2) + " and " + y.toString(2));
				document.write("The result of the BITWISE AND is: " + (x & y) + "<br/>");
				document.write("The result of the BITWISE OR is: " + (x | y) + "<br/>");
				document.write("The result of the BITWISE XOR is: " + (x ^ y) + "<br/>");
				document.write("The result of the BITWISE NOT on " + x + " is " + (~ x ) + "<br/>");
				document.write("The result of the BITWISE SHIFT LEFT OPERATOR is: " + (x << y) + "<br/>");
				document.write("The result of the BITWISE SHIFT RIGHT OPERATOR is: " + (x >> y) + "<br/>");
				document.write("The result of the BITWISE SHIFT RIGHT WITH ZERO OPERATOR is: " + (x >>> y) + "<br/>");
			}
		</script>
		<form>
			Number 1: <input type="text" name="num1" /> <br/>
			Number 2: <input type="text" name="num2" /> <br/>
			<input type="button" name="button1" onclick="nutsnBits(num1.value, num2.value)"	value="Bitwise Operators" />
		</form>
	</body>
*/

/*
	Increment and Decrement Operators:
	<body>
		<script type="text/javascript">
			function incAndDec(x)
			{
				var result = 0;
				document.write((result = ++x) + "<br/>"); 5 => 6
				document.write((result = x++) + "<br/>"); 5 => 5 => 6
				document.write((result = --x) + "<br/>"); 5 => 4
				document.write((result = x--) + "<br/>"); 5 => 5 => 4
				alert(x);
			}
		</script>
		<form>
			Number 1: <input type="text" name="num1" /> <br/>
			<input type="button" name="button1"	onclick="incAndDec(num1.value)"	value="++ and --" />
		</form>
	</body>
*/

/*
	Equality and the Triple Equal Sign in JavaScript:
	<body>
		<script type="text/javascript">
			var x = '5';
			alert(typeof x);
			if(x === 5)
			{
				alert("True");
			}
			else
			{
				alert("False");
			}
		</script>
	</body>
*/

/*
	Math Object Properties
	Euler's Number and Logarithm:
		<head>
			<script type="text/javascript">
				function euler()
				{
					document.getElementById("showProp").value = Math.E;
				}
				function log2E()
				{
					document.getElementById("showProp").value = Math.LOG2E;
				}
				function log10E()
				{
					document.getElementById("showProp").value = Math.LOG10E;
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
					font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Properties:<b>
			</p>
			<input type="text" id="showProp"> <br/><br/>
			<input type="radio" name="mathFunction" onclick="euler()" value="E" />
			(E) Euler's Number
			<span style="font-family: 'Times New Roman', Times, serif; font-size: 22px; font-style: italic; font-weight: bold;"> e </span><br/>
			<input type="radio" name="mathFunction"	onclick="log2E()" value="LOG2E" />
			(LOG2E) Base-2 Logarithm of 
			<span style="font-family: 'Times New Roman', Times, serif; font-size: 22px; font-style: italic;	font-weight: bold;"> e </span><br/>
			<input type="radio" name="mathFunction" onclick="log10E()" value="LOG10E" />
			(LOG10E) Base-10 Logarithm of 
			<span style="font-family: 'Times New Roman', Times, serif; font-size: 22px; font-style: italic;	font-weight: bold;"> e </span><br/> <br/>
		</body>
*/

/*
	Logarithm2 and Logarithm10:
			<head>
				<script type="text/javascript">
					function log2()
					{
						document.getElementById("showProp").value = Math.LN2;
					}
					function log10()
					{
						document.getElementById("showProp").value = Math.LN10;
					}
				</script>
				<style>
					p
					{
						font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
					}
				</style>
			</head>
			<body>
				<p>
					<b>JavaScript Math Object Properties:<b>
				</p>

				<input type="text" id="showProp" /> <br/><br/>
				<input type="radio" name="math" onclick="log2()" />
				(LN2) Logarithm of 2 <br/>
				<input type="radio" name="math" onclick="log10()" />
				(LN10) Logarithm of 10 <br/>
			</body>
*/

/*
	PI:
		<head>
			<script type="text/javascript">
				function pi()
				{
					document.getElementById("showProp").value = Math.PI;
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Properties:<b>
			</p>

			<input type="text" id="showProp"> <br/> <br/>
			<input type="radio" name="math" onclick="pi()" />
			(PI) pi
			<span style="font-family: 'Times New Roman', Times, serif; font-size: 22px; font-style: italic; font-weight: bold;"> &pi; </span><br/>
		</body>
*/

/*
	Square Root Half and Square Root 2:
		<head>
			<script type="text/javascript">
				function sqrt2()
				{
					document.getElementById("showProp").value = Math.SQRT2;
				}
				function sqrt1_2()
				{
					document.getElementById("showProp").value = Math.SQRT1_2;
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Properties:<b>
			</p>
			<input type="text" id="showProp"> <br/><br/>
			<input type="radio" name="math" onclick="sqrt2()" />
			(SQRT2) Square Root of 2 <br/>
			<input type="radio" name="math" onclick="sqrt1_2()" />
			(SQRT1_2) Square Root of one-half <br/><br/>
		</body>
*/

/*
	Math Object Methods
		Cosine, Sine and Tangent:
		<head>
			<script type="text/javascript">
				function cos()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.cos(val);
				}
				function sin()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.sin(val);
				}
				function tan()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.tan(val);
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Methods:<b>
			</p>
			<p>
				Enter a Value: 
			</p>
			<input type="text" id="calcVal0" size="5"> <br/>
			<p>
				Result: 
			</p>
			<input type="text" id="showMeth"> <br/><br/>
			<input type="radio" name="mathFunction" onclick="cos()" value="cos" />
				Cosine (x) (x in radians) <br/>
			<input type="radio" name="mathFunction" onclick="sin()" value="sin" />
				Sine (x) (x in radians) <br/>
			<input type="radio" name="mathFunction" onclick="tan()" value="tan" />
				Tangent (x) (Tangent of an angle) <br/>
		</body>
*/

/*
		Arccosine, Arcsine, Arctangent and Arctangent2:
		<head>
			<script type="text/javascript">
				function acos()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.acos(val);
				}
				function asin()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.asin(val);
				}
				function atan()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.atan(val);
				}
				function atan2()
				{
					var x = document.getElementById("calcVal0").value;
					var y = document.getElementById("calcVal1").value;
					document.getElementById("showMeth").value = Math.atan2(y, x);
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Methods:<b>
			</p>
			<p>
				Enter a Value: 
			</p>
			<input type="text" id="calcVal0" size="5">
			<input type="text" id="calcVal1" size="5"><br/>
			<p>
				Result:
			</p>
			<input type="text" id="showMeth"> <br/> <br/>
			<input type="radio" name="mathFunction"	onclick="acos()" value="acos" />
			(acos) Arc Cosine (x) (between -1 and 1) <br/>
			<input type="radio" name="mathFunction" onclick="asin()" value="asin" />
			(asin) Arcsine (x) <br/>
			<input type="radio" name="mathFunction"	onclick="atan()" value="atan" />
			(atan) Arctangent (x) (between -PI/2 and PI/2 radians) <br/>
			<input type="radio" name="mathFunction"	onclick="atan2()" value="atan2" />
			(atan2) Arctangent2 (y, x) (x, y coords to calculate the angle in radians between a point and the positive X axis) <br/>
		</body>
*/

/*
		Absolute:
		<head>
			<script type="text/javascript">
				function abs()
				{
					var val = document.getElementById("calcVal").value;
					document.getElementById("output").value = Math.abs(val);
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Methods:<b>
			</p>
			<p>
				Enter a Value: 
			</p>
			<input type="text" id="calcVal" size="5"> <br/>
			<p>
				Result: 
			</p>
			<input type="text" id="output"> <br/>
			<input type="radio" name="math" onclick="abs()" value="abs" />
				(abs) ABS Value of x <br/>
		</body>
*/

/*
		Floor and Ceiling:
		<head>
			<script type="text/javascript">
				function floor()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.floor(val);
				}
				function ceiling()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.ceil(val);
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Methods:<b>
			</p>
			<p>
				Enter a Value: 
			</p>
			<input type="text" id="calcVal0" size="5"> <br/>
			<p>
				Result: 
			</p>
			<input type="text" id="showMeth"> <br/>
			<input type="radio" name="math1" onclick="floor()" />
				(floor) Floor(x) <br/>
			<input type="radio" name="math2" onclick="ceiling()" />
				(ceil) Ceiling(x) <br/>
		</body>
*/

/*
		Square Root and Power:
		<head>
			<script type="text/javascript">
				function sqrt()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.sqrt(val);
				}
				function pow()
				{
					var x = document.getElementById("calcVal0").value;
					var y = document.getElementById("calcVal1").value;
					document.getElementById("showMeth").value = Math.pow(x, y);
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Methods:<b>
			</p>
			<p>
				Enter a Value: 
			</p>
			<input type="text" id="calcVal0" size="5">
			<input type="text" id="calcVal1" size="5"> <br/>
			<p>
				Result: 
			</p>
			<input type="text" id="showMeth"> <br/> <br/>
			<input type="radio" name="mathFunction"	onclick="sqrt()" value="sqrt" />
			(sqrt) Square Root(x) <br/>
			<input type="radio" name="mathFunction"	onclick="pow()" value="pow" />
			(pow) X to the Power of Y(x, y) <br/>
		</body>
*/

/*
		Exponent and Log:
		<head>
			<script type="text/javascript">
				function exp()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.exp(val);
				}
				function log()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.log(val);
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Methods:<b>
			</p>
			<p>
				Enter a Value: 
			</p>
			<input type="text" id="calcVal0" size="5"> <br/>
			<p>
				Result: 
			</p>
			<input type="text" id="showMeth"> <br/> <br/>
			<input type="radio" name="mathFunction"	onclick="exp()" value="exp" />
			(exp)
			<span style="font-family: 'Times New Roman', Times, serif; font-size: 22px; font-style: italic;	font-weight: bold;"> e </span>
			to the Power of X (x) <br/>
			<input type="radio" name="mathFunction"	onclick="log()" value="log" />
			(log) Logarithm (base
			<span style="font-family: 'Times New Roman', Times, serif; font-size: 22px; font-style: italic;	font-weight: bold;"> log </span>)
			(x) <br/>
		</body>
*/

/*
		Min and Max:
		<head>
			<script type="text/javascript">
				function minChk()
				{
					document.getElementById("showMeth").value = Math.min(8, 3, 9, 34, 124, 10, 89, 7, 2);
				}
				function maxChk()
				{
					document.getElementById("showMeth").value = Math.max(8, 3, 9, 34, 124, 10, 89, 7, 2);
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Methods:<b>
			</p>
			<p>
				Result: 
			</p>
			<input type="text" id="showMeth"> <br/> <br/>
			<input type="radio" name="mathFunction"	onclick="minChk()" value="min" />
			(min) Minimum (a, b, c, ...) <br/>
			<input type="radio" name="mathFunction"	onclick="maxChk()" value="max" />
			(max) Maximum (a, b, c, ...) <br/>
		</body>
*/

/*
		Round:
		<head>
			<script type="text/javascript">
				function round()
				{
					var val = document.getElementById("calcVal0").value;
					document.getElementById("showMeth").value = Math.round(val);
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			<p>
				<b>JavaScript Math Object Methods:<b>
			</p>
			<p>
				Enter a Value: 
			</p>
			<input type="text" id="calcVal0" size="5" /> <br/>
			<p>
				Result: 
			</p>
			<input type="text" id="showMeth"> <br/> <br/>
			<input type="radio" name="math"	onclick="round()" value="round" />
			(round) Round (x) <br/>
		</body>
*/

/*
		Generating a Random Number Between a Range of Values:
		<head>
			<script type="text/javascript">
				function randomize()
				{
					var minVal = Number(document.getElementById("minVal").value);
					var maxVal = Number(document.getElementById("maxVal").value);
					var range = maxVal - minVal;
					if(minVal > maxVal)
					{
						alert('Please enter a valid range.');
					}
					else
					{
						var randomValue = Math.floor(Math.random() * range + minVal);
					}
					document.getElementById("randomized").value	= randomValue;
				}
			</script>
			<style>
				p
				{
					font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 16px;
				}
			</style>
		</head>
		<body>
			Min: <input type="text" id="minVal" size="10" />
			Max: <input type="text" id="maxVal" size="10" /> <br/> <br/>
			Random Number: <input type="text" id="randomized" size="10" /> <br/><br/>
			<input type="button" name="mathFunction" onclick="randomize()" value="Generate" style="back"> <br/>
		</body>
*/