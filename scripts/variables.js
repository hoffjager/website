// JavaScript source code
// Topic 2: Variables, Data Types, and Functions

/*
Objectives:
2.1 Declare and use variables of primitive data types:
	Number, Boolean, String, null, undefined, type of operator, type - checking functions, use strict, converting between data types(parseInt, parseFloat),
	formatting numbers,
	string operations, eval(), toFixed(), toLocaleString(), toPrecision(), single quote vs. double quote (nesting), initialization.

2.2 Declare and use arrays: 
		Single-dimensional arrays; multi-dimensional arrays; iteration;	initialization; defining, sorting, and searching an array;
		push, pop, shift, and unshift methods; length property; accessing an array element. 

2.3 Complete and debug code that uses objects:
		Properties, methods, instantiation, Date object, retrieving date and time parts, localizing date format (MM/DD vs DD/MM), adding and subtracting dates.

2.4 Complete and debug code that uses built-in Math functions:
		random, round, abs, floor, ceil, min, max, pow, sqrt 

2.5 Complete and debug functions that accept parameters and return values: 
		Reusable code, local vs. global scope, redefining variables, passing parameters, value vs. reference, return values
*/

// Review Chapters 4-8 & 12 of: JavaScript: 20 Lessons to Successful Web Development, By Robin Nixon
/*
Lesson 4: Applying Comparison and Logical Operators
Introduction
The arithmetic and string operators you have so far seen are fundamental to manipulating data inside computers.
But without the ability to test things and make decisions, computers would be little more than advanced calculators.
However, when you bring comparison and logical operators into the equation, you begin to expand the JavaScript language into a form with which complex tasks can
be broken down, analyzed, and implemented.
Combining these with the arithmetic and string operators, you then have most of the basic features of a programming language, and from this point you simply
extend the language by adding the ability to control program flow, including data structures such as arrays (see Lesson 5), supporting sequences of instructions
in functions (see Lesson 12), or offering even greater abstractions such as creating objects containing both data and program code.
Therefore, once you have finished this lesson, you will already be programming at a basic level.
*/

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
In JavaScript, however, the types of variables are loosely defined and it’s quite normal, for example, to ask whether the number 1 is the same as the string ′1′,
because the string ′1′ can be used either as a string or as a number depending on the context.
Therefore, the following expression will return the value true:
	if (1 == '1') // Results in the value 'true'
JavaScript uses the internal values of true and false to represent the result of making comparisons such as the preceding, and you can use the keywords 'true' and
'false' in your programming to check for these values.
*/

/*
Logical Operators
JavaScript supports three logical operators with which you can extend your 'if this' parts of code even further, as listed below:
Operator		Description		Example				Result
&&				And				1 == 1 && 2 == 2	true
||				Or				1 == 1 || 2 == 3	true
!				Not				!(1 == 1)			false
The && operator(known as the 'and' operator) allows you to test for multiple conditions being true, saving you from having to write multiple lines of code by
combining them into a single expression:
	if (a == 4 && b == 7) // Do this
In this example, the statement following the if() (just a comment in this instance) will be executed, only if 'a' has a value of 4 and also 'b' has a value of 7.
Or you can test whether at least one value is true using the || operator (known as the 'or' operator), like this:
	if (a == 4 || b == 7) // Do this
Here if either 'a' has the value 4 or 'b' has the value 7, the statement after the if() will be executed, only one of the expressions needs to evaluate to true.
Finally, you can negate any expression using the ! symbol (known as the 'not' operator) by placing it in front of the expression (generally placing the expression
within parentheses too, so that the ! applies to the entire expression instead of only to a part of it):
	if (!(game == over)) // Carry on playing
In this example, if the variable 'game' contains the same value as the variable 'over', the result of the expression is true.
Then the ! operator negates this to turn the value true, into false. Therefore, the statement after the if() will not be executed.
On the other hand, if 'game' is not equal to 'over', the expression evaluates to false, which is negated to true, and so the code after the if() is executed.
Therefore, the expression equates to the semi-English sentence “If not game over, then do this.”
When an expression can only return either a 'true' or 'false' value, it is known as a Boolean expression.
When combined with 'and' (&&), 'or' (||), & 'not' (!), such expressions are said to use Boolean logic.
*/

/*
The Ternary Operator
Ever on the lookout for ways to make program code simpler and more compact, program language developers also came up with a thing called the ternary operator,
which allows you to combine “If this, then do that thing, otherwise do another thing” type logic into a single expression:
	document.write(game == over ? ′Game over’ : ’Keep playing′)
	AmPm = Time < 12 ? ′AM′ : ′PM′
The way the ternary operator works:
	1. You provide an expression that can return either true or false (a Boolean expression).
	2. Following this, you use a ? character, after which you place the two options, separated with a colon (:) character.
*/

/*
Bitwise Operators
There is a type of operator supported by JavaScript that as a beginner to programming you are most unlikely to use, due to it being quite advanced, and that’s the
bitwise operator.
This type of operator acts on the individual 0 and 1 bits that make up binary numbers, and can be quite tricky to use.
The bitwise operators are &, |, ^, ~, <<, >>, and >>>.
In order, they support bitwise and, or, exclusive or, not, left-shift, sign-propagating right-shift, and zero-fill right-shift on binary numbers.
The bitwise operators can be combined with the = assignment operator to make a whole new collection of bitwise assignment operators.
If you would like to know more about them, you can check out the following web pages:
http://tinyurl.com/bitwiseops
http://tinyurl.com/bitwiseops2
*/

/*
Operator Precedence
In JavaScript, some operators are given a higher precedence than others.
For example, multiplication has a higher precedence than addition, so in the following expression, the multiplication will occur before the addition, even though
the addition appears first:
	3 + 4 * 5
The result of this expression is 23:
	(4 × 5 is 20, then 3 + 20 is 23).
But if there were no operator precedence (with the expression executed simply from left to right), it would evaluate to 35:
	(3 + 4 is 7, 7 × 5 is 35).
By providing precedence to operators, it obviates the need for parentheses, because the only way to make the preceding expression come out to 23 without operator
precedence would be to insert parentheses as follows:
	3 + (4 * 5)
With this concept in mind, the creators of JavaScript have divided all the operators up into varying levels of precedence according to how “important” they are
(in that multiplication is considered more “important” than addition due to its greater ability to create larger numbers).
For the same reason, division is given greater precedence than subtraction, etc.
Therefore, unless you intend to use parentheses in all your expressions to ensure the correct precedence (which would make your code much harder to write and for
others to understand, due to multiple levels of parentheses), you need to know these precedencies:
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
There are quite a few operators in this table that you have not yet seen.
Some of which (such as the bitwise operators) will not be covered, and others (such as in, typeof, etc.) will be explained in future lessons.
All you need to learn from this table, though, is which operators have higher precedence than others, where 1 is the highest and 17 is the lowest precedence, and
where an operator has lower precedence but you need to elevate it, all you need to do is apply parentheses in the right places for the operators within them to
have raised precedence.
The unary+ and unary- entries represent the use of placing either a + before an expression to force it into being used as a number, or placing a - sign in front
of an expression to negate it (change a negative value to positive or vice versa).
The comma operator (at a precedence of 17) is used as an expression or argument separator, so it naturally has the lowest precedence.
*/

/*
Operator Associativity
JavaScript operators also have an attribute known as associativity, which is the direction in which they should be evaluated.
For example, the assignment operators all have right-to-left associativity, because you are assigning the value on the right to the variable on the left:
	MyVar = 0
Because of this right-to-left associativity, you can string assignments together, setting more than one variable at a time to a given value:
	MyVar = ThatVar = OtherVar = 0
This works because associativity of assignments starts at the right and continues in a leftward direction.
In this instance, OtherVar is first assigned the value 0.
Then ThatVar is assigned the value in OtherVar, and finally MyVar is assigned the value in ThatVar.
On the other hand, some operators have left-to-right associativity, such as the || (or) operator.
Because of left-to-right associativity, the process of executing JavaScript can be sped up:
	if (ThisVar == 1 || ThatVar == 1) // Do this
When JavaScript encounters the || operator, it knows to check the left-hand side first.
Therefore, if ThisVar has a value of 1, there is no need to look up the value of ThatVar, because as long as one expression on either side of the || operator
evaluates to true, then the entire || expression evaluates to true, so if the left half has evaluated to true, then so has the entire || expression.
In cases such as this, the JavaScript interpreter will eagerly skip the second half of the expression, knowing it is running in an optimized fashion.
By the way, in programming language theory, this is called lazy evaluation.
Knowing whether operators have right-to-left or left-to-right associativity can really help your programming.
For example, if you are using a left-to-right associative operator such as ||, you can line up all your expressions left to right from the most to least important.
Therefore, it's worth taking a moment to familiarize yourself with the contents of the table below, so that you will know which operators have what associativity:
Associativity	Operators
Right-to-left	! ~ unary+ unary- typeof void delete ?: = += -= *= /=
				%= <<= >>= >>>= &= |=
Left-to-right	. [] * / % + - << >> >>> < <= > >= in instanceof == !=
				=== !== & ^ | && || ,
*/

/*
The with keyword
Using JavaScript’s 'with' keyword, you can simplify some types of JavaScript statements by reducing many references to an object to a single reference.
For example, in the following code, the document.write() function never references the variable string by name:
	string = "The quick brown fox jumps over the lazy dog"
	with (string)
	{
		document.write("The string's length is " + length);
		document.write("<br/> Upper case: " + toUpperCase());
	}
Even though string is never directly referenced by document.write(), this code still manages to output:
		The string′s length is 43 characters
		Upper case: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
The way this works is that the JavaScript interpreter recognizes that the length property and the toUpperCase() method have to be applied to some object, but
because they stand alone, the interpreter assumes they must apply to the string object specified in the 'with' statement.
The very fact that assumptions about which object to apply the 'with' to, have to be made by the interpreter, can make its use ambiguous in some applications.
Therefore, I would generally recommend that you try to avoid working with this statement unless you feel confident that you can use it without ambiguity.
*/

/*
Summary
This lesson has brought you up to speed with all you need to know about using operators, so now you’re ready to start looking at some of JavaScript’s more complex
and interesting objects in the following lesson on arrays.
*/

/*
Self-Test Questions
You can find the answers in Appendix A.
1. Which operator is used to check whether two values are equal? ==
2. What is the difference between the == and the === operators? === value & type
3. What values can a comparison expression evaluate to? true or false
4. Which operator would you use to test whether two values (or expressions) are both true? AND &&
5. Which operator would you use to test whether at least one of two values (or expressions) is true? OR ||
6. With which operator can you test whether a value (or expression) is not true? !
7. Which operator out of * and + has the highest precedence and will be evaluated first? *
8. Which operator has the lowest precedence of all?
9. In which direction do the mathematical operators *, /, +, and – evaluate from? left to right.
10. How can you shorten code by removing repeated uses of an object’s name?
*/

/*
Lesson 5: Creating JavaScript Arrays
JavaScript is capable of managing data in a more powerful manner than simply via variables.
One example of this is JavaScript arrays, which you can think of as collections of variables grouped together.
For example, a good metaphor for an array might be a filing cabinet with each drawer representing a different variable:
	0 - 9
As with the small pot metaphor in Lesson 2, using a filing cabinet to assign a value, you should imagine writing it down on pieces of paper, placing it in the
relevant drawer, and closing it.
To read back a value, you open the drawer, take out the paper, read its value, return the paper, and close the drawer.
The only difference between the cabinet and the pots is that the drawersof the filing cabinet (representing an array) are all in sequential order, whereas a
collection of pots (representing variables) are stored in no particular order.
Although JavaScript arrays can be any size (up to the maximum allowed by the JavaScript engine), for the sake of simplicity, I have only shown 10 elements in the
figure.
You can access each of the elements in an array numerically, starting with element 0 (the top drawer of the cabinet).
This index number is important, because you might think that logically, the number 1 would be the best starting point, but that isn’t how JavaScript arrays are
accessed — you should always remember that the first element is the zeroth (0th).
*/

/*
Array Names
The rules for naming arrays are exactly the same as those for naming variables.
Array names must begin with either an uppercase (A-Z), lowercase letter (a-z), the $ symbol or the _ symbol.
Array names may not contain any mathematical operators(such as + or *), punctuation(such as !or &), or spaces.
But after the first character, they may include the digits 0-9 or any of the characters that can begin an array or variable name.
All JavaScript keywords (such as window, open, string, etc) are reserved and may not be used as array names.
*/

/*
Creating an Array
To create an array, you can declare it in advance:
	MyArray = new Array()
This has the effect of creating a new object of the type Array() and then calling it MyArray.
This array object contains no data, but is ready for data to be assigned to its elements.

Creating an Array of a Specific Length
To create an array of a specific length, you provide a single argument to the Array() function call:
	MyArray = new Array(5)
This has the effect of creating a new object of the type Array(), which contains no data, but has five elements ready to be populated with values.

Assigning Values to an Array Element
You can populate arrays with data (in a similar manner to assigning values to variables):
	MyArray[0] = 23;
	MyArray[1] = 67.35;
Here, the integer 23 is assigned to element 0 (the top drawer of the cabinet), whereas the floating point number 67.35 is assigned to the element at index 1 (the
second drawer down, because indexes begin at 0).
In fact, you can assign any legal value to an array element, including strings, objects, and even other arrays (which I come to in Lesson 6):
	MyArray[3] = "Hello world!";
	MyArray[4] = new Date();
MyArray[4] now contains a Date object holding the current date and time.
You are not restricted to assigning values in order, so you can go right in and assign values to any elements:
	MyArray[9] = "Good morning.";
	MyArray[7] = 3.1415927;
In this instance, if the length of MyArray[] was previously less than nine elements, its length will automatically be increased to nine by the former of these two
assignments.
*/

/*
Using Indexes
The element number used for storing a particular value is known as the array index, and you can use integer values or variable values as indexes.
For example, the following code first creates a variable and assigns it a numeric value, which is then used to assign another value to the array:
	MyIndex = 123;
	MyArray[MyIndex] = "Good evening.";
This has the effect of assigning the string value ″Good evening″ to the element with an index of 123 in MyArray[].
*/

/*
Retrieving Values
Once an array has been created and it has been populated with data, to retrieve a value from an array, you simply refer to it:
	document.write(MyArray[0])
This will fetch the value stored in the zeroth element of MyArray[] (or the top drawer of the filing cabinet metaphor) and then pass it to the document.write()
function to display it in the browser.
Likewise, you can return a value using a variable:
	MyIndex = 713;
	document.write(MyArray[MyIndex]);
Whatever value is stored in element 713 of the array will then be displayed in the browser.
The preceding two examples assume you have already created an array.
If you have not previously created an array, but try to read from one, an error will be generated and your code will fail.
There are other ways you can use array values, such as assigning them to other variables or other array elements, or using them in expressions.
For example, the following code assigns the value 23 to an array element, which is then looked up and used in an expression, in which 50 is added to it, and the
result (73) is displayed in the browser:
	MyArray[7] = 23;
	document.write(MyArray[7] + 50);
Or, you may wish to display a value in an alert window:
	MyArray[7] = 23;
	alert(MyArray[7] + 50);
		73 :)
*/

/*
Using Array Elements as Indexes
You can even go a step further and use the value stored in an array element as an index into another (or the same) array:
	OtherArray[0] = 77;
	MyArray[OtherArray[0]] = "I love the movie Liar Liar"
Here, the zeroth element of OtherArray[] is assigned the integer value of 77.
You will discover in Lesson 11, that it is easy to create code that runs in a loop to process each element of an array in turn.
*/

/*
Other Ways of Creating Arrays
You have already seen the following type of declaration for creating a JavaScript array:
	MyArray = new Array();
But there are also a couple of other methods you can use, which also have the effect of simplifying your code by allowing you to populate the array with some data
at the same time.
The first method is as follows:
	MyArray = new Array(123, ″Hello there″, 3.21);
Here, the array MyArray[] is created and its first three elements are immediately populated with three different values: an integer, a string, and a floating point
number.
This is equivalent to the following (much longer) code:
	MyArray = new Array();
	MyArray[0] = 123;
	MyArray[1] = "Hello there.";
	MyArray[2] = 3.21;
You can also go a step further and simplify things right down to their bare bones by using code that implies the creating of an array, without using the 'new'
keyword or the Array() function:
	MyArray = [123, ″Hello there″, 3.21]
Once you have created an array, if you need to apply any more values to elements within it, you must use the standard form of assigning values.
If you reuse the short form of combined array creation and value assignment, it will simply reset the array to the values in the assignment.
*/

/*
Using Associative Arrays
Using numeric indexes is all well and good when you only have a few elements in an array to cope with.
But once an array starts to hold meaningful amounts of data, using numbers to access its elements can be highly confusing.
Thankfully, JavaScript provides a great solution to this by supporting the use of names to associate with array elements, in much the same way that variables have
names.
Let’s use JavaScript’s associative arrays to store the ages of the players in a mixed, under-11's, five-a-side soccer team.
Here the array is initialized and then the age of each player is assigned to an element in the array using the players’ names:
	SoccerTeam = new Array();
	SoccerTeam['Andy'] = 10;
	SoccerTeam['Brian'] = 8;
	SoccerTeam['Cathy'] = 9;
	SoccerTeam['David'] = 10;
	SoccerTeam['Ellen'] = 9;
Having been assigned, these values they can now easily be looked up by name, which displays Cathy’s age in the browser:
	document.write(SoccerTeam[′Cathy′])
*/

/*
Keys, Values and Hash Tables
When you use associative arrays, you are actually creating a collection of key and value pairs.
The name you assign to an array element is known as the key, whereas the value you provide to the element is the value.
In other languages (such as PHP), this type of data structure is implemented using a hash table.
When an object (such as a string) is used as a key for a value, this is called a hash value, and the data structure is a hash table.
*/

/*
Other Ways of Creating an Associative Array
If you wish, you can use a short form of creating and populating an associative array:
	SoccerTeam = new Array(
	{
		'Andy': 10,
		'Brian': 8,
		'Cathy': 9,
		'David': 10,
		'Ellen': 9
	}
	)
The syntax here is different from populating a standard array, in that you must enclose the element value assignments in curly braces.
If you use the square brackets instead, the statement will fail.
Also, rather than using '=', you use the ':' operator to assign values.
In fact, you can shorten the syntax even further by having your code imply the new keyword and Array() function:
	SoccerTeam = 
	{
		'Andy': 10,
		'Brian': 8,
		'Cathy': 9,
		'David': 10,
		'Ellen': 9
	}
As with standard variables and arrays, you are not restricted to only storing numbers in associative arrays, because you can assign any valid value, including
integers, floating point numbers, strings, and even other arrays and objects:
	MyInfo = 
	{
		'Name': 'Bill Gates',
		'Age': 58,
		'Occupation': 'Philanthropist',
		'Children': 3,
		'Net Worth': 77000000000 // 77 billion
	}
In the preceding example, both strings and numbers have been assigned to the array elements.
You can read back any value simply by referring to it, like this, which displays the value in Occupation (namely Philanthropist) in the browser:
	document.write(MyInfo[′Occupation′])
*/

/*
Summary
By now, you should have a pretty good understanding of JavaScript arrays and should begin to see how they can make excellent structures for handling your data.
In the following lesson, I’ll show you how there’s actually a lot more to arrays than you’ve seen so far, and we’ll begin to make some reasonably complex data
objects.
*/

/*
Self-Test Questions
You can find the answers in Appendix A.
1. Which characters are allowed as the first in an array name? A-Z, a-z, $ or _
2. Which characters are allowed in the body of array names?
3. How would you create a new array called myData?
4. How would you limit this new array to, for example, 20 elements?
5. How would you reference item 11 in the array mydata?
6. Is the first item in an array at index 0 or 1?
7. How can you populate an array with data at the time of creation?
8. What is an associative array?
9. How would you add the key/value pair of Name/Alice as a new element in the associative array mydata?
10. How would you retrieve the value for the key Name in the associative array mydata?
*/

/*
Lesson 6: Accessing Multi-Dimensional Arrays
You can simulate multi-dimensional arrays in JavaScript by assigning new arrays as the values for elements of an existing array.
Well, in the same way that a string of characters is a collection of individual letters, numbers, and other characters that you can imagine being like a string of
pearls — with each pearl occupying its right location and the correct pearls on either side, all in the right order.
An array, therefore, is like a collection of variables all stored in their right locations.
In the previous lesson, I used the metaphor of a filing cabinet for an array of 10 elements.
If you imagine for a moment that each drawer in this filing cabinet is like Doctor Who’s Tardis(his time and space machine) in that it is much bigger on the
inside than it is on the outside, then you should be able to also imagine being able to place another 10 - drawer filing cabinet in each of the drawers of the
original one!
Remember that these particular filing cabinets are not bound by the normal rules of space and time, so the small cabinets can contain just as much as the large
ones.
In fact, the cabinets are capable of holding an infinite amount of data, limited only by the restraints of your browser, operating system, and available memory.
*/

/*
Creating a Two-Dimensional Array
Let’s see how we can use the ability of an array element to store another entire array to our advantage by considering a 10x table, just like those often found on
the walls of schools.
Each of the columns (or each of the rows) can be considered a one-dimensional array.
For example, the first row could be created using the following code:
	MyTable0 = new Array();
	MyTable0[0] = 1;
	MyTable1[1] = 2;
	MyTable2[2] = 3;
	MyTable3[3] = 4;
	MyTable4[4] = 5;
	MyTable5[5] = 6;
	MyTable6[6] = 7;
	MyTable7[7] = 8;
	MyTable8[8] = 9;
	MyTable9[9] = 10;
Or, more succinctly:
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
At this point, we now have 10 arrays — one for each row in the times table.
With these now created, it is possible to build a two-dimensional table by creating just one more master table, like this:
	MasterTable = new Array();
	MasterTable[0] = MyTable0;
	MasterTable[1] = MyTable1;
	MasterTable[2] = MyTable2;
	MasterTable[3] = MyTable3;
	MasterTable[4] = MyTable4;
	MasterTable[5] = MyTable5;
	MasterTable[6] = MyTable6;
	MasterTable[7] = MyTable7;
	MasterTable[8] = MyTable8;
	MasterTable[9] = MyTable9;
Or, more succinctly:
	MasterTable =
	[
		MyTable0,
		MyTable1,
		MyTable2,
		MyTable3,
		MyTable4,
		MyTable5,
		MyTable6,
		MyTable7,
		MyTable8,
		MyTable9;
	]
I have chosen to split this up into multiple lines for clarity, but you can equally include all the preceding in a single statement on one line.
*/

/*
Accessing a Two-Dimensional Array
Let’s now look at how this relates to the filing cabinets in terms of code.
To recap, there is a main array called MasterTable[], and its 10 elements each contain another array named MyTable0[] through MyTable9[].
As you will recall from Lesson 5, accessing an array is as simple as the following, which displays the value in the array held at a numeric index of 23 (which
will be the 24th element because arrays start from 0) in an alert window:
	alert(SomeArray[23]);
But what should you do when the value stored in an array element is another array?
The answer is simple and elegant — you simply add another pair of square brackets following the first pair and place an index value into that new array between
them, like this:
	alert(MasterTable[0][0]);
This statement opens an alert window and displays in it, the contents of the first element of the array that is stored in the first element of MasterTable[].
Notice that there is no need to reference the sub-array (sub-array being the term I use for referring to arrays within arrays) by name.
Likewise, if you wish to display the value held in the seventh element of the array stored in the third element of MasterTable[], you would use code such as this
(remembering that table indexes start at 0, not 1, so the seventh and third elements will be 6 and 2, respectively):
	alert(MasterTable[2][6]);
In terms of the 10x table above, this is equivalent to first moving to the seventh column along, and then down to the third row, at which point you can see that
the value shown is 21:
	<!DOCTYPE html>
	<html>
	<head>
		<title>2D Array Example</title>
	</head>
	<body>
		<script>
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

			MasterTable = [MyTable0, MyTable1, MyTable2,
						   MyTable3, MyTable4, MyTable5,
						   MyTable6, MyTable7, MyTable8,
						   MyTable9];
			alert('The value at location 2,6 is ' + MasterTable[2][6])
		</script>
	</body>
	</html>
This code is equivalent to the filing cabinets, in that the MasterTable[] array represents the large cabinet, whereas the MyTable0[] array is the top small
cabinet, and MyTable9[] is the bottom small cabinet.
If you now take all these small filing cabinets and stack them up alongside each other, you will now see how they represent the MasterTable[] array.
For all intents and purposes, we can forget about the main array (other than using its name to index into the sub-arrays), think only in terms of the
10 sub-arrays and how to access each drawer using pairs of indexes.
The first index goes along the cabinets from left to right (equivalent to going from the top to bottom drawer of MasterTable[], because each of these cabinets in
order is in the next drawer down of MasterTable[]), and the second one goes from the top to the bottom drawer of each cabinet.
Therefore, array index [3][7] points to the fourth filing cabinet along, and the eighth drawer down.
In other words, MasterTable[3][7] refers to the value held in the eighth drawer down of the fourth cabinet along.

Obviously, a multiplication table is a trivial thing to re-create on a computer, as it can be achieved with a couple of simple loops.
Therefore, let’s look instead at a more practical example: that of a board for a game of chess.
As you likely know, there are 64 squares on a chessboard, laid out in an 8×8 grid, and there are two sets of 16 pieces: black and white.
Using a computer to represent a chessboard in its starting position and ignoring the fact that the squares alternate between dark and light, you
might use code such as this (in which uppercase letters represent white pieces, and the lowercase letters are black):
	Row0 = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
	Row1 = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];
	Row2 = ['-', '-', '-', '-', '-', '-', '-', '-'];
	Row3 = ['-', '-', '-', '-', '-', '-', '-', '-'];
	Row4 = ['-', '-', '-', '-', '-', '-', '-', '-'];
	Row5 = ['-', '-', '-', '-', '-', '-', '-', '-'];
	Row6 = ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
	Row7 = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
You can now insert all these arrays into a master array that holds the complete chessboard:
	Board = [Row0, Row1, Row2, Row3, Row4, Row5, Row6, Row7]
Now we are ready to move pieces about on the board.
Therefore, for example, let’s assume that the white player opens with the standard pawn to king 4 move.
Using the array notation of locations [0][0] through [7][7], with [0][0] being the top left corner, and [7][7] the bottom right,
this is equivalent to setting the location [6][4] to ′-′ to remove the pawn currently at this location, and then setting [4][4] to P to place the pawn in its new
position:
	Temp		= Board[6][4]
	Board[6][4] = '-'
	Board[4][4] = Temp
In this example, a new variable called Temp is used to store the value extracted from Board[6][4].
Then Board[6][4] is set to a dash character to remove the piece, and the value now in Temp is then placed into Board[4][4], overwriting whatever value it
previously held.
Or, if it’s not necessary to hold a copy of the piece being moved (which it is not in this very simple simulation), then you can simply set the two array
locations to their required values:
	Board[6][4] = '-'
	Board[4][4] = 'P'
If you wish, you may continue adding arrays within other arrays until you run out of computer memory.
All you do is place new arrays inside existing ones to add an extra dimension.
For example, if you were to create an additional 8 sub–sub-arrays for each of the sub-array elements (a total of 64 new arrays), you would form eight complete
chessboards in a three-dimensional array, representing an 8×8×8 cube — 3D chess.
*/

/*
Multi-Dimensional Associative Arrays
As you might expect, as with numeric arrays, you can create multi-dimensional associative arrays.
Let me explain why you might want to do this by considering a small online store that sells toys for the following six different age ranges of children:
	Babies, Toddlers, Ages 3-5, Ages 6-8, Ages 9-12, Teenagers
These categories can be easily mapped into an associative array.
But let’s first create some sub-categories for each of the main ones:
	Babies, Rattle, Bear, Pacifier
	Toddlers, Bricks, Xylophone, Play-Doh
	Ages 3-5, Slide, Tricycle, Crayons
	Ages 6-8, Dolly, Bicycle, Guitar
	Ages 9-12, Tablet, RC Car, Frisbee
	Teenagers, MP3 Player, Game Console, TV/DVD Combo
Clearly, these subcategories can also be mapped to associative arrays, but before we do that, we have to go even deeper(yet more undertones of Inception) because
a web store needs things such as pricing information and product availability:
	Price, Stock Level

Armed with these details, we’re now ready to start building the arrays needed by assigning values to the price and stock level of each product being sold to a
two-dimensional array for each product:
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
Now that these basic data structures are complete, it’s possible to group the products into the age range arrays(where the words in quotes are the keys and those
after the colons are the values, which are the names of the arrays previously created):
	Babies = {'Rattle' : Rattle,
	          'Bear' : Bear,
			  'Pacifier' : Pacifier}
	Toddlers = {'Bricks' : Bricks,
	            'Xylophone' : Xylophone,
			    'Play-Doh' : Play-Doh}
	Ages3_5  = {'Slide' : Slide,
	            'Tricycle' : Tricycle,
			    'Crayons' : Crayons}
	Ages6_8  = {'Dolly' : Dolly,
	            'Bicycle' : Bicycle,
			    'Guitar' : Guitar}
	Ages9_12 = {'Tablet' : Tablet,
	            'RC Car' : RCCar,
			    'Frisbee' : Frisbee}
	Teenagers = {'MP3 Player' : MP3Player,
	            'Game Console' : Console,
			    'TV/DVD Combo' : TVDVDCombo}
I used an underline character between the digits in these age range arrays because the dash is a disallowed character in variable or array names(because it can
be confused with the minus symbol).
The dash is acceptable, however, when used as part of a quoted string for a key name.
And finally the top array can be populated (where the strings in quotes are the keys, and the values after the colons are the names of the arrays just defined):
	Categories = {'Toddlers' : Toddlers,
				  'Ages 3-5' : Ages3_5,
				  'Ages 6-8' : Ages6_8,
				  'Ages 9-12' : Ages9_12,
			      'Teenagers' : Teenagers}
What has now been created is actually a three-dimensional array.
The first dimension is the Categories[] array, the second is each of the age range arrays, and the third is each of the product arrays containing the price and
stock level. 	
Remember that in each of these assignments, the string on the left is the key and the item on the right is the value.
In all but the innermost (or lowest) case, the value is the name of another array that has already been created.
For the innermost case, the values are numeric values: the price and stock level.
*/

/*
Accessing the Arrays
You can now read and write to these stored values in the following manner, which returns the price of the slide, which is 99.99:
	document.write(Categories[′Ages 3-5′][′Slide′][′Price′])
Or, if you need to change a price on an item of inventory for any reason, such as the crayons(currently 3.79), you can alter it in the following manner, which
reduces the price by 0.20:
	Categories[′Ages 3-5′][′Crayons′][′Price′] = 3.59
Likewise, when you sell an item of stock, you can reduce the inventory level(the stock level) in a similar manner, such as the following, which decreases the
stock level of game consoles by 1 using the pre-decrement operator:
	--Categories[′Teenagers′][′Game Console′][′Stock′]
Obviously, the inventory for even the smallest online store is sure to be far greater than in this example, and there are going to be many additional attributes
for some toys, such as different sizes, colors, images, descriptions, technical specifications or other details about the product that are available, all of which
could easily be built into this multidimensional structure of arrays.
The actual job of storing all your data will take place on a web server in a secure environment tightly controlled by your database management system.
The purpose of using a structure of arrays in JavaScript like this, therefore, is purely for you to support easy manipulation of data for users within their
browsers as they view your merchandise, without them having to leave your page, or transfer any data, to or from, the web server until an item is added to the
user’s shopping cart.
*/

/*
Self-Test Questions
You can find the answers in Appendix A.

1. How can you create a multi-dimensional array?
2. How do you access a two-dimensional numeric array?
3. How do you access a two-dimensional associative array?
4. How many levels deep can you nest additional arrays within a master array?
5. How might you construct a multi-dimensional array for a class of 30 history students to hold their grades for a year’s two semesters?
6. How might you extend this array to handle four years’ worth of semesters?
7. In the chessboard example, what code would represent the black player responding by moving pawn to queen 4?
8. And what code might represent the white player’s pawn at king 4, taking the black player’s pawn?
9. What would you do to turn a three-dimensional chessboard array into a four-dimensional array?
10. In the final example, what single line of code would increment the stock of toddlers’ bricks by 12?
*/

/*
Lesson 7: Calling Array Functions
To make arrays even more powerful, JavaScript comes ready-made with a selection of handy functions and statements for accessing and manipulating arrays.
For example, you can join arrays together, push new items into an array(and pop them off again later), reverse the data in an array, sort it alphabetically or
numerically, and more.
Therefore, in this, and the following couple of lessons, we’ll look at these functions and how to use them.
*/

/*
Using for(...in...)
The first feature I’d like to introduce is for (…in…), because with it, you can iterate through an array one element at a time, which we will need to do in the
following examples in order to see the results.
To show how this iteration works, let’s start with a simple array of cat types:
	Cats = ['Long Hair',
			'Short Hair',
			'Dwarf',
			'Farm',
			'Tabby',
			'Tortoiseshell']
Now let's use for(...in...) to display all its elements:
	for (index in Cats)
	{
		document.write(Cats[index] + '<br/>')
	}
What’s happening here is the for () keyword creates a new variable called index, which it initializes with the integer value of 0, so that it points to the first
element in the array specified (in this case Cats[]).
Then the contents of the curly braces are executed once for each element in the Cats[] array, with index being incremented each time around.
Therefore, the first time element 0 is indexed by index, the second time, it is element 1, etc, until there are no more elements left in the array to process.
The curly braces can be omitted when there is only a single statement to be executed by such a for(...in...) loop.
Therefore, I will reduce this type of code to the much shorter example (which also uses the index variable, i, instead of index, but it is equally valid syntax):
	for(i in Cats) document.write(Cats[i] + ′<br/>′)
Now that there’s an easy way to display the contents of an array, we can start to look at the array functions provided by JavaScript and see how to use them.
*/

/*
Using concat()
Using the concat() function, you can return a new array created by joining two other arrays together.
The two original arrays are not changed in any way by this function; only the result of joining them together is returned.
To see how this works, let’s create a second array to go with the Cats[] array created a little earlier:
	Dogs = ['Pomeranian',
			'King Charles Spaniel',
			'Jack Russell Terrier',
			'Pembroke Welsh Corgi',
			'Golden Retriever',
			'Shiba Inu']
With both arrays now created, we can run the concat() function on them:
	Pets = Cats.concat(Dogs)
And now to see the result of this operation, we can issue the following statement:
	for(i in Pets) document.write(Pets[i] + ′<br>′)
The result is that the new array Pets[] now contains all elements from both the Cats[] and Dogs[] arrays, in order.
For a similar result, but with the contents of the Dogs[] array before the Cats[], you could have issued this statement:
	Pets = Dogs.concat(Cats)
In fact, you could omit the creation of the Pets[] array altogether and simply iterate through the result of the concat() call:
	for(i in Dogs.concat(Cats)) document.write(Dogs.concat(Cats)[i] + '<br/>')
Although it works, the preceding is wasteful code because the concat() function has ended up being used twice and called multiple times in the loop.
Because the result of the concatenation is lost once you have accessed it, this isn’t recommended coding practice.
However, this code illustrates that by placing square brackets containing an index variable after the call to concat() (namely [i]), you can index into the array
returned by the call.

An Alternative to concat()
If all you want to do is quickly see what values are in an array, you can use the implied concatenation you get when referencing an array as an argument to the
document.write() function.
For example, you can list all the elements in the Dogs[] array to the browser (separated with commas):
	document.write(Dogs)
Note how you must omit the [] characters from after the array name in order for this to work, and the result of this statement will then be like the following:
	Pomeranian, King Charles Spaniel, Jack Russell Terrier, Pembroke Welsh Corgi, Golden Retriever, Shiba Inu
*/

/*
Using join()
Sometimes you may wish to turn all the elements in an array into a string, and this is easy to do using the join() function.
For example, let’s take the following case of the Cats[] array:
	document.write(Cats.join(' and '))
This statement calls the join() function, passing it the string ' and ', which is used as a separator, which is inserted between each element.
You may use any string as the element separator, or none at all, as in the following three examples:
document.write(Cats.join(', ') + '<br/>')
	document.write(Cats.join(''  ) + '<br/>')
	document.write(Cats.join(    ) + '<br/>')
When no argument is passed to join(), a comma is assumed as the separator, whereas to have no separator, you should supply an empty string ('').
Therefore, in turn, the three previous statements display:
	Long Hair, Short Hair, Dwarf, Farm, Tabby, Tortoiseshell
	LongHairShortHairDwarfFarmTabbyTortoiseshell
	Long Hair,Short Hair,Dwarf,Farm,Tabby,Tortoiseshell
*/

/*
The forEach() function
An alternative to using for(…in…) is the forEach() function.
With it, you can iterate through an array of elements very easily, as follows:
	Dogs = ['Pomeranian',
			'King Charles Spaniel',
			'Jack Russell Terrier',
			'Pembroke Welsh Corgi',
			'Golden Retriever',
			'Shiba Inu']
	Dogs.forEach(info)
	function info(v, i, a)
		{
			document.write('[' + i + '] is: ' + v + '<br/>')
		}
v in the arguments of the info() function is the value of each element.
i is the index of the element.
a is the array being traversed.
The info() function simply displays information about each element in the array.
The powerful thing is that the forEach() function name is simply attached to the Dogs[] array name with a period operator, and(without needing any loops)
the array gets processed by the info() function, which has been passed as the argument to forEach():
	[0] is: Pomeranian
	[1] is: King Charles Spaniel
	[2] is: Jack Russell Terrier
	[3] is: Pembroke Welsh Corgi
	[4] is: Golden Retriever
	[5] is: Shiba Inu
*/

/*
The map() function
One very quick and easy way to process all the elements in an array is to pass each element in the array to a function via JavaScript’s map() function.
For example, the following code creates an array populated with numbers, and then applies the Math.sqrt() function to each element, returning the results in the
new array Roots[], all via a single call to the map() function:
	Nums = [99, 16, 11, 66.5, 54, 23]
	Roots = Nums.map(Math.sqrt)
*/

/*
Summary
In this lesson, you have learned how to process arrays to extract data from them in loops, how to apply a function to them and to individual elements, and how to
join arrays together.
Therefore, now you will be able to use arrays for complex data storage and manipulation.
In the following lesson we’ll look at how you can also use arrays for temporary data storage in the form of stacks to support advanced techniques such as recursion.
*/

/*
Self-Test Questions
You can find the answers in Appendix A.
1. How can you use the for(…in…) function to iterate through an array one element at a time?
2. Which function is similar to using for(…in…), but can be implemented with a single instruction?
3. With which function can you join two arrays together into a single array?
4. What single line of code would you use to join together two arrays called tennis[] and golf[] into a third called sports[]?
5. How can you quickly pass an entire array of elements to a function?
6. With a single line of code, how can you easily invoke a function on each element of an array and return a new array containing the processed element values?
7. What is the join() function used for?
8. What single line of code would you use to display all the elements in the array sports[] as a string, with each separated from the next by the string ' + '?
9. If you have an array of hobby names called hobbies, what does the command: document.write(hobbies), do?
10. What does the command: activities = sports.concat(hobbies), do?
*/

/*
Lesson 8: Pushing to and Popping from Arrays
In addition to assigning values to an array when you create it, or adding those values using numeric indexes or associative keys, you can simply push items of
data onto an array and pop them off later.
When doing this, you don’t need to keep track of an index number or any key names; you simply push a value and forget about it until you want to pop it back off
the array later.
This makes it very easy to store certain types of temporary data suited to being held in what is known as a stack, a data storage structure that is so important
that it is even implemented in the core of every micro-processor chip to aid with processing instructions in the right order.
In this lesson you learn how to use different types of stacks to achieve some useful data manipulation results.
*/

/*
Using push()
There are a couple of good reasons for using the push() function.
First, you can add a new element to the end of an array, without knowing how many items already exist in that array.
For example, normally you would need to know the current array length and then use that value to add extra values (using the Cats array from Lesson 7):
	Cats = ['Long Hair',
			'Short Hair',
			'Dwarf',
			'Farm',
			'Tabby',
			'Tortoiseshell']
	len = Cats.length
	Cats[len] = "Siamese"
The new variable len is used to hold the length of the array (the number of elements it contains), the value will be 6 (for elements 0 through 5).
Therefore, the value in len of 6, is suitable as an index into the next available element, and so that is what it is used for — the value 6 pointing to the
seventh element (because array indexes start at 0).
In fact, if the variable len is not to be used anywhere else, it is actually superfluous, because you could replace the final two lines of the preceding example
with this single statement:
	Cats[Cats.length] = ″Siamese″
However, for certain purposes, it can be much simpler to let JavaScript keep track of array lengths and simply tell it to add a new element to the Cats array:
	Cats.push(′Siamese′)
You can verify that the element has been added with the following for() loop:
	for(i in Cats) document.write(Cats[i] + ′<br>′)
The second reason you might want to use push() is that it is a quick way of storing values in a sequence that then have to be recalled in the reverse order.
For example, using push(), you can keep adding elements to an array:
	MyArray.push('A')
	MyArray.push('B')
	MyArray.push('C')
As you will see in the following description of pop(), you can also remove these elements from last to first, such that the value C will be taken off first,
then B, then A, etc.
*/

/*
Using pop()
pop() enables you to remove the last element from an array (and in this instance, discard the returned value):
	MyArray.pop()
Or, in this instance, store the removed element in a variable:
	MyVariable = MyArray.pop()
You can apply pop() to an existing array with values in, which may have been assigned when the array was created, via a call to push() or in any other way.
The pop() function then removes the last item from the array and then returns that value.
Considering the Cats array:
	Cats = ['Long Hair',
			'Short Hair',
			'Dwarf',
			'Farm',
			'Tabby',
			'Tortoiseshell']
	document.write('Popping off the value: ' + Cats.pop() + '<br/><br/>')
	document.write('Remaining elements: <br/><br/>')
	for(i in Cats) document.write(Cats[i] + '<br/>')
The value Tortoiseshell was popped off the array and underneath this, all the remaining elements are displayed, confirming that the previous final element has now
been removed.
	Popping off the value: Tortoiseshell
	Remaining elements:
	Long Hair
	Short Hair
	Dwarf
	Farm
	Tabby
*/

/*
Using push() and pop() together
The pop() function is most commonly used with push() when writing code that uses recursion.
Recursion is any section of code that calls itself and can then call itself again, and keep on doing so until the task of the code is complete.
If this sounds complicated, consider a search algorithm for exploring a 5x5 maze, in which the objective is to find your way from the starting point at 'a' to the
finish at 'y'.
You can clearly see the path to follow, but a computer is not so smart and will need to investigate the maze as if it were a rat, with walls higher than it can
see over.
Therefore, a program to do this will easily find its way along the path 'a-b-c-h', but then it will encounter a choice of going either left to 'cell g', or right
to 'cell i'.
Let’s assume it chooses the latter after selecting a direction at random.
The program will then follow the path 'i-d-e-j', only to encounter a dead end, requiring the program to return.
Let’s look at tracking this entire path so far using the push() function:
	Maze = new Array()
	Maze.push('a')
	Maze.push('b')
	Maze.push('c')
	Maze.push('h')
	Maze.push('i')
	Maze.push('d')
	Maze.push('e')
	Maze.push('j')
If you assume that there’s also some extra code(not documented here) that knows which cells the program has and hasn’t yet visited, it can now use the simple
method of popping each cell off the array until it reaches one where it can get to a cell not yet visited.
Pseudo-code (the actions to take expressed in plain English) to do this might look as follows:
	While no unvisited cell is accessible, pop a location off the array.
	And the sequence of actions that would happen within the loop section of this code would be like this:
		Location = Maze.pop() // returns ′j′
	Because no unvisited cell can be reached from j, the loop will go around again and again, until an unvisited cell can be accessed, resulting in four
	additional calls to pop():
		Location = Maze.pop() // returns ′e′
		Location = Maze.pop() // returns ′d′
		Location = Maze.pop() // returns ′i′
		Location = Maze.pop() // returns ′h′
Now, when the program finds it has popped the location 'h' off the stack, it discovers there is a new cell it can go to, namely 'g', and so the process continues
along the path 'g-f-k-p-u-v-q-l-m', at which point another choice of directions is encountered: either 'r' or 'n'.
To track this path, the program will push all the cells between g and m onto the array, and then(if it continues straight ahead), also push the path 'n-o-t-s',
at which point, another dead end is encountered.
Then, as before, the code pops off all the cells in a loop until it reaches m, at which point, the unvisited cell r is accessible and the final path out of the
maze is discovered: 'r-w-x-y'.
Recursion is quite complex programming, especially for beginners, which is why I have not documented the ancillary code you would use to take
care of tracking the visited and unvisited cells.
I simply wanted to offer a visual example of recursion that would explain what’s going on and show you how to use push() and pop() together.
*/

/*
Using reverse()
When you want to reverse the order of elements in an array, you can call the reverse() function, which actually reverses the array contents, rather than returning
a new array as some other functions do.
To use the function, simply attach it to the array to be reversed:
	MyArray.reverse()
*/

/*
Using Stacks and Buffers
The reverse() function is sometimes used on an array of elements that have been created by pushing the values onto it.
As you will know from the earlier push() section, pushed values are added to the end of an array, such that when you come to pop them off again, they are returned
in reverse order.
This is often referred to as a FILO (First In/Last Out) or a LIFO (Last In/First Out) array, it is also sometimes called a stack.
But if you wish to operate a FIFO (First In/First Out) or LILO (Last In/Last Out) array — both are the same thing — you can reverse an array before pushing an
item onto it and then reverse it again, ready for elements to be popped off.
That way, the first value pushed onto it will be the first one popped off, etc, this type of array is also known as a buffer, typically used for handling events
such as keyboard input, in which the key presses should be stored (buffered) until needed, and returned in the order they were pressed.
*/

/*
Buffering Using an Array
You can see a simulation of this in the following code, in which the word Fred is being pushed into the array Buffer() as if entered one key press at a time,
with the array’s contents shown in the comment immediately following each statement.
The top(or start) of the array is at the left of the string shown in the comments, and the bottom(or end) of the array(onto which values are pushed and popped)
is at the right of the string:
	Buffer.reverse() // Buffer = ''
	Buffer.push('F') // Buffer = 'F'
	Buffer.reverse() // Buffer = 'F'

	Buffer.reverse() // Buffer = 'F'
	Buffer.push('r') // Buffer = 'Fr'
	Buffer.reverse() // Buffer = 'rF'

	Buffer.reverse() // Buffer = 'Fr'
	Buffer.push('e') // Buffer = 'Fre'
	Buffer.reverse() // Buffer = 'erF'

	Buffer.reverse() // Buffer = 'Fre'
	Buffer.push('d') // Buffer = 'Fred'
	Buffer.reverse() // Buffer = 'derF'
Initially, Buffer() is empty and has no elements, but then the letter 'F' is pushed onto it.
Seeing as the array has only a single element; reversing it at this point has no effect.
However, when the next letter 'r' is to be added, it is pushed to the bottom of the array, denoted in the comment as being on the right of the 'F'.
After the array is reversed back again, the 'r' is at the top and 'F' is at the bottom of the array.
This is exactly where we want these elements to be, because if the code that uses this buffering system is ready to process the next key press in the buffer, it
can simply issue a call to pop(), which will pull the letter 'F' off it.
This is correct because when processing buffered data such as this, the letters typed must be processed in the order typed.
When the letter 'e' is processed, the array is once again reversed, so that the new letter can be added to the bottom of the array.
Then the array is reversed back again so that if pop() is called at this point, 'F' will be the first letter popped off.
After this third set of statements, 'F' is at the bottom of the array, 'r' is in the middle, and 'e' is at the top.
Finally, the letter 'd' is processed using the same procedure so that after it has been placed in the array, it is at the top, with the 'F' at the bottom.
You can now retrieve this keyboard input from the array, using the pop() function as many times as required (in this instance, four times):
	KeyPress = Buffer.pop()
*/

/*
Creating a Function for Pushing to the Top
If you need a way to push values to the start of an array, you can create a PushToTop() function, using push() in conjunction with reverse():
	function PushToTop(Object, value)
	{
		Object.reverse()
		Object.push(value)
		Object.reverse()
	}
Then you simply call the new function, instead of each group of three statements in the previous example:
	PushToTop(Buffer, 'F')
	PushToTop(Buffer, 'r')
	PushToTop(Buffer, 'e')
	PushToTop(Buffer, 'd')
Then, to retrieve the key presses in the right order, you simply call pop() as many times as necessary:
	KeyPress = Buffer.pop() 	
Lesson 12 explains in detail how to write functions, pass values to them, and return values back to the calling code.
*/

/*
The shift() and unshift() functions
Actually, JavaScript does have a built-in function to push to the other end of an array — I simply wanted to show how you could combine reverse() and push() to
achieve the same result.
But you can push values to the top of an array, using the unshift() function.
Likewise you can also pop from the top of an array, using the shift() function.
Therefore, the following code is all you would need to replicate the preceding examples:
	Buffer.unshift('F')
	Buffer.unshift('r')
	Buffer.unshift('e')
	Buffer.unshift('d')
Then, to retrieve these values in the order they were saved, you would simply use the pop() function to fetch first F, then r, e, and d:
	KeyPress = Buffer.pop()
However, because the shift() function retrieves from the other end of the array to pop(), we can also turn the whole code on its head and go back to using the
following code to populate the array:
	Buffer.push('F')
	Buffer.push('r')
	Buffer.push('e')
	Buffer.push('d')
And then, to treat the array Buffer as an actual buffer(not a stack), just use shift() to retrieve these values in the order in which they were pushed onto the
array(F, r, e, and finally d):
	KeyPress = Buffer.shift()
*/

/*
Summary
Using the functions covered in this lesson, your ability to manipulate data in arrays has taken a quantum leap and you will now be able to handle even the most
sophisticated of data structures.
In the final lesson on arrays, we’ll take things one stage further by delving right into their insides, splicing in and out whole sections of arrays.
*/

/*
Self-Test Questions
You can find the answers in Appendix A.
1. Which function adds a new element to the bottom of an array? push()
2. Which function removes an element from the bottom of an array? pop()
3. Which function adds a new element to the top of an array? unshift()
4. Which function removes an element from the top of an array? shift()
5. What is a First In/Last Out (FILO) array also known as?
6. What is a First In/First Out (FIFO) array also known as?
7. With which function can you invert the order of elements in an array?
8. How can you determine the number of elements in an array?
9. What is the name given to the process of a section of code repeatedly calling itself?
10. Which array structure (stack or buffer) is best suited for the programming type described in Question 9?
*/

/*
Lesson 12: Writing Functions
Apart from using conditional statements such as if() and switch (), and loops such as while() and for (), there’s another way you can control program flow called
the function.
Functions are sections of code that you call from any other part of code(or even the function itself, which is known as recursion), and which then perform one or
more actions and then return.
When functions return, they may also return a value back to the calling code, or they can simply return without doing so, in which case the returned value will be
undefined.
Interestingly, as you will learn in Lesson 13, in JavaScript, functions are also objects, so they can be passed as values, used in arrays, etc.
*/

/*
Using Functions
JavaScript comes with many inbuilt functions.
For example, to obtain the square root of the number 49, you can call the Math.sqrt() function:
	document.write(Math.sqrt(49))
The optional value you pass to a function is called an argument, and you can have any number of these arguments, or none.
In the case of Math.sqrt(), a single value is required.
The square root of that number is then calculated, and the value derived is returned.
That’s how the document.write() call can display the square root value, because that value is returned directly to the calling code, which is the document.write()
call.
There are two types of functions: named and anonymous.
You can create named functions using the keyword function followed by the name to give to the function, and then a pair of parentheses, within which you list the
arguments being passed to the function, separated with commas.
The code of the function must be enclosed within curly brackets.
The following is what the code to emulate the built -in Math.sqrt() function might look like, based on the fact that the square root of a number can be calculated
by raising that number to the power of 0.5 — with Math.pow() serving to calculate the power:
	function squareRoot(n)
	{
		return Math.pow(n, 0.5)
	}
In this example, the function created is squareRoot(), and it accepts one argument (the value passed in the variable n).
The function code comprises a single statement that simply calls the inbuilt Math.pow() function, which accepts two values: a number and a value by which power
that number should be raised.
So the two values passed to it are n and 0.5.
*/

/*
The 'return' keyword
The function then calculates the square root and returns it, at which point, the return keyword causes that value to be returned.
It is then a simple matter of calling the function in the following manner to display a square root in the browser:
	document.write(SquareRoot(49))
Or, the value returned can be used in an expression, assigned to a variable, or used in numerous other ways. 	
Of course, this code slightly cheats because it calls another inbuilt function called Math.pow() (in which case we might as well simply call the inbuilt
Math.sqrt() function in the first place), but it serves to illustrate how to write a simple function that takes one value and returns another after processing it.
*/

/*
Passing Arguments
In the preceding example, you saw how to pass a single argument to a function, but you can pass as many as you need (or none), as shown with the following function
that provides functionality that is not native to JavaScript(but is in some other languages), namely the ability to create a string by repeating a supplied
string a set number of times.
For example, the PHP language provides a function called str_repeat(), and the following code gives this same functionality to JavaScript:
	function strRepeat(s, r)
	{
		return new Array(++r).join(s)
	}
This function uses the sneaky trick of creating a new array with the number of elements in the value r, plus 1.
So if r has the value 3, then the new array is given four elements by pre - incrementing the value in r, resulting in a statement equivalent to new Array(4),
as described back in Lesson 5.
With the array now created, the join() function is called by attaching it to the Array() function using a period operator (.).
As you recall from Lesson 7, join() concatenates all the elements in an array into a string, placing the separator string in the value passed to join() between
each element value.
Therefore, if r has the value 3, a four - element array is created(with each element being empty), then the join() function concatenates these four elements
together, placing the string in the variable 's' between each occurrence.
Therefore, because the array elements are empty, this entire statement will simply create three copies of the string in s concatenated together, and that is the
string that is returned from the function using the return keyword.
*/

/*
Accessing Arguments
Arguments received by a function are given the names you supply between the parentheses.
These do not need to be the same names as the variables or values passed to the function.
Variables are assigned to the values received by a function in the order in which they are listed, and there can be as many or as few arguments as you like.
Generally, the number of arguments supplied to a function should be the same as the number the function expects to receive, but not always.
If a function receives fewer arguments than it is expecting, it will assign the value undefined to the remaining values, as shown in the following example, in
which the third argument has not been passed through:
	Example(1, 2)
	function Example(a, b, c)
	{
		document.write(a + ' ' + b + ' ' + c) // results in 1 2 undefined
	}
If your function sometimes uses the missing values and sometimes doesn’t, this can cause an obscure and hard-to-track down bug.
But there are times when you may not want to provide all the arguments to a function, because they may be optional.
For example, consider the inbuilt JavaScript function, join(), that joins the elements of an array together into a string.
It accepts either no argument, or an argument that will be used as the divider between each array element.
If no argument is supplied, join() assumes a separator string of ','.
You can write code to perform the same function as join() like this, which creates a function of the same name, but with the first letter of the name capitalized
(for simplicity, I have omitted the actual code that does the joining):
	function join(separator)
	{
		if(separator == undefined) separator = ','
		// do the joining and return the string created
	}
The key code that provides a default value works like this:
		if (separator == undefined) separator = ','
This can also be achieved using the ternary operator (as described in Lesson 4), thus avoiding the use of an if() statement:
		separator = !separator ? ',' : separator
In this case, the use of the ! symbol before the separator variable stands in for a test for 'separator' having a value of 'undefined', because the expression
returns true if separator is undefined and false if it is defined.
You can also rework this expression to not require the! symbol and still achieve the same result (which reverses the order of the second and third arguments):
	separator = separator ? separator : ′,′
If separator is passed as the value 0 or an empty string, the preceding code will not work as intended.
Therefore, if you plan to support these two values, you should stick with simply testing whether the separator is defined or not.
Incidentally, another way to test a variable (or other object) for not being defined is to use the typeof keyword:
	if (typeof separator == ′undefined′) separator = ','
With typeof, you can also determine whether an object is an array, a string, etc.
*/

/*
Using the arguments Object
Rather than passing and accepting a known number of arguments, you can also access an object that is passed to every function called arguments, which contains
every argument passed to the function.
You can access the elements of arguments as if it were an array using an index (from 0 to the number of elements in the object minus 1), or iterate through it:
	for(i in arguments) document.write(arguments[i])
Though the arguments object is not an actual array, it is array - like, and even though you can find its length with arguments.length and can access individual
elements using an index, you cannot use any array functions on it such as join(), because they are set to work only with objects that are of the type Array.
Let’s look at one example where you might find accessing this object useful by creating a function that accepts any number of arguments and then joins them
together into a string, which is returned:
	function deobfuscate()
	{
		s = ''
		for(e in arguments) s += arguments[e]
		return s
	}
This is a particularly useful function to have on hand when you wish, for example, to display an e - mail address in a browser, but make it extremely difficult for
e-mail harvesting programs to discover, by breaking the e-mail address (or any other section of text) that you wish to obfuscate (make unclear):
	document.write(Deobfuscate('jame', 'sjone', 's@jjinc', '.com'))
This code will make little sense to even the most sophisticated e - mail address harvester, as there are none that I know of, that will actually interpret
JavaScript to look for e-mail addresses.
The result of executing this statement displays in a browser as:
	jamesjones@jjinc.com
Because document.write() can, in some circumstances, overwrite the current document, it is not always the best solution for outputting text.
Sometimes, it is better to supply such content to the innerHTML property of an object, as this is much safer.
For example, you can replace the preceding code with this, which also places the e-mail address in a clickable link:
	My email address is: <span id='myspan'></span>
	<script>
		email = deobfuscate('jame', 'sjone', 's@jjinc', '.com')
		document.getElementById('myspan').innerHTML
		="<a href='mailto:" + email + "'>" + email + "</a>"
		function deobfuscate()
		{
			s = ''
			for(e in arguments) s += arguments[e]
			return s
		}
	</script>
*/

/*
Using the 'this' keyword
I didn’t show you all the code to replicate the join() function in the previous section, so let’s do that now, using the 'this' keyword.
Because join() can operate on an array without you passing in any argument at all, you may wonder how it knows which array it must work on.
The answer is that the array is passed to join() using the period operator (.):
	Array.join()
When the code for the join() function begins execution, it obtains the array in the 'this' keyword, so we can finish off the new Join() function:
	Array.prototype.Join = Join
	function Join(separator)
	{
		string = ''
		separator = typeof separator == 'undefined' ? ',' : separator
		for(j = 0; j < this.length -1; ++j)
			string += this[j] + separator
		return string + this[j]
	}
Before the function definition, there is a statement that adds the ability to use the new Join() function on Array objects.
It uses the prototype keyword, which allows you to add properties and methods to an object.
For now, all you need to know is that the statement allows the function to work.
Inside the function, a variable called string is initialized to the empty string ('').
Its value will later be used to return the string created by this function.
After that, if separator is not defined, it is given the default value of ',':
	string = ''
	separator = typeof separator == 'undefined' ? ',' : separator
Then a for() loop is used to iterate through all elements in the array 'this', except for the last one.
You will recall that the 'this' keyword contains the argument supplied via the period operator, an Array object:
	for (j = 0 ; j < this.length -1 ; ++j)
Each time around the loop, the value in the current array element is appended to the variable string, followed by the separator:
	string += this[j] + separator
Finally, once the loop has completed, there is one element remaining in the array that hasn’t yet been accessed, and so that is appended to the
end of string, and then the value in string is returned:
	return string + this[j]

Code such as the following can now be used to access the new function:
	Pets = ['cats', 'dogs', 'rabbits']
	document.write(Pets.Join(' and '))
This code creates a three - element array with the names of three types of pets, then it passes that array to the Join() function using the period operator and also
supplies the string "' and '" to be used as a separator:
	cats and dogs and rabbits
As well as using this to pass values using the period operator, in Lesson 13, you’ll learn how the 'this' keyword is also very useful for attaching functions to
JavaScript events.
*/

/*
Anonymous Functions
In JavaScript, it is not always necessary to give a name to a function, and functions without names are called anonymous functions.
One reason for using an anonymous function is when it is called only once by one statement, and so for reasons of logic and code readability, the function is
inserted anonymously in the code, at the point where it is needed.
For example, as you will learn in Lesson 16, it is easy to attach JavaScript functions to events that occur in the browser.
For example, you may want to execute a couple of actions when a mouse passes over an object, and a function is a good way to do this:
	MyObject.onmouseover = DoThese
	function DoThese()
	{
		// Do this
		// Do that
		// Do the other
	}
But if this function is only to be called at this particular point in the code, you can simplify things by making the function anonymous:
	MyObject.onmouseover = function()
	{
		// Do this
		// Do that
		// Do the other
	}
Now you are no longer cluttering up the JavaScript name space with the function name DoThese, and the code is shorter and sweeter.
If you want to reuse the function code in other places, it then becomes wasteful to use it in anonymous functions, because you will end up with several
occurrences of the function’s code.
Therefore, anonymous functions are optimal only when they will be called by a single statement.
*/

/*
Global and Local Variable Scope
Up to this point, I have left out a very important keyword that you will certainly have seen if you have viewed the source of any JavaScript code, and that’s the
'var' keyword.
So far, I have treated all the variables created in the book as having global scope.
This means that once defined, you can access their values and modify them from any other part of a program.
But often this isn’t desirable because you can start to run out of good variable names and, as a program gets longer, so will your variable names.
More than that, the larger and more complicated a program gets and the more people working on it, the greater the chance that you may inadvertently re-assign a
value to a variable that is being used in another part of the program, resulting in name clashes and weird values creeping in, creating very difficult-to-trace
bugs.

Using Local Variables
The solution to a sprawling name space packed with numerous variable names is to allow functions to reuse a variable name without it affecting the value of any
variable with the same name used outside of the function.
And the way this is achieved is with the 'var' keyword.
To tell JavaScript that a variable you are using within a function should have local scope only, you simply precede it with the var keyword where it is first
assigned a value:
	var MyVar = 42
From then on, this variable will have its value only within the function call (and any sub-functions that might be created within it).
When the function returns, the variable’s value is forgotten, and if there is a global variable of the same name, it will retain its value, because local
variables don’t affect it.
There is no point whatsoever in using the var keyword outside of a function, because the program scope at that point is global, and so applying local scope in
a global environment results only in the variable having global scope.
One reason instructors may do this, though, is when they think you may take their sample code and place it within a function.
In this case, it really is a good idea to make all variables that are used purely within the function have only local scope.
To illustrate how to use the var keyword, let’s revisit the Join() function we looked at a little earlier, but this time with var keywords in the right places:
	function Join(separator)
	{
		var string = ''
		separator = typeof separator == 'undefined' ? ',' : separator
		for(var j = 0; j < this.length -1; ++j)
			string += this[j] + separator
		return string + this[j]
	}
As you’ll recall, this is the replacement function written to emulate the built-in join() function.
But as previously written, it was wasteful on global name space by treating both string and j as global variables, when there was no valid reason for this, and it
could cause a bug if there were any existing global variables of these names.
Instead, because string and j are meant for use only in passing, the first time each is accessed(even if it’s inside the setup part of a for () loop, as in this
case), it is preceded by a var keyword, which ensures it will only have scope within this function.
Once the var keyword has been applied to a variable, it does not need to be done again.
The local scope will remain until the function returns.
In the following example, the variable Fred is assigned the value 1.
Because the assignment occurs outside of any functions, it has global scope, which means its value can be accessed from any part of the program.
However, within the function MyFunc(), the variable Fred is reused, but with the var keyword preceding it, so it has local scope only.
	Fred = 1
	document.write('Fred is ' + Fred + '<br/>')
	MyFunc()
	document.write('Fred is ' + Fred + '<br/>')
	function myFunc()
	{
		var Fred = 2
		document.write('Fred is ' + Fred + '<br/>')
	}
Following the program flow, at the first document.write() call, Fred has a value of 1.
Then MyFunc() is called and, within the function, the local variable Fred is assigned the value 2.
After displaying its value, the function returns (no return keyword is used, because there is no value to return from this function).
Upon return, the value in Fred is again displayed, and it is back to 1 again, because when Fred is referred to outside of the myFunc() function, it refers to the
global variable, whose value remains unchanged at 1:
	Fred is 1
	Fred is 2
	Fred is 1
What is happening here is that two separate variables have been used.
They may have the same name, but because the one in the function is given local scope, it is quite different from the one outside the function.
Nevertheless, var is the word that has been chosen — just remember that it always applies local scope (and only works within a function).

Global Naming Conventions
For each variable used, I would still have to keep referring back to see whether it had a var keyword applied at any point in a function (making it local), or if
no var keyword was used, it would then be global.
To save me from having to keep rechecking, I came up with the following simple convention.
Whenever a variable is created that should have global scope, I use all uppercase letters:
	HIGHSCORE = 0		// creates a global variable
	highScore += 100	// increments a local variable
Therefore, I can be sure that any variables I use that have any lowercase letters, are being used as local variables, and I also ensure I use the var keyword on
their first use in a function.
Of course, you can use any other convention you like (such as prefacing global variables with g_), or no convention at all.
You might ask whether separating global and local variables by uppercase and lowercase obviates the need for the var keyword, as local variables will never
compete with global ones.
However, that’s not the case because all variables would then be global and we would be back at having to choose lots of different non-uppercase variable names
for use in functions in order to avoid them conflicting with each other.
Therefore, using uppercase for global variables simply makes it clear at a glance which ones are/are not global, so you never have to go hunting for var keywords
to understand the various scopes of variables in a complex function.
*/

/*
Summary
Congratulations!
With the use of functions under your belt, you can now call yourself a JavaScript programmer.
However, there are still a few more steps to take before you can call yourself a master of the language — starting in the following lesson with JavaScript objects,
which enable you to write OOP (Object-Oriented Programming).

Self-Test Questions
You can find the answers in Appendix A.
1. What is the main purpose of a function?
2. What is an anonymous function?
3. When should you not use an anonymous function?
4. What is the main means by which a value is returned by a function?
5. How can values be passed to a function?
6. How does a function access the values passed to it?
7. What is another way of accessing the arguments passed to a function?
8. In what circumstance is it preferable to use the arguments object rather than named arguments?
9. How is the this object used by a function?
10. How can you tell a function that a variable is to be used only locally?
*/

/*
GMetrix Topic 2 Pre-Assessment
1. The Math.sqrt() function takes a number and calculates its _.
		square root.

2. An undefined variable is an empty variable that has been declared, but has never had a value. This means it does not have which three items?
		A string value, a number, and a Boolean value.

3. The Math.abs() method in JavaScript is used to perform which function?
		Make a number represent an absolute value.

4. Which type of variable cannot be redefined?
		A constant (const).

5. Which best defines the initialization process?
		Storing a value in a variable:
			A declaration is the act of creating a new variable, initialization is the act of storing a value in a variable.

6. Objects in JavaScript need to be converted before they can be used in a calculation.
		True.

7. Which is an example of a sorting statement used to sort an array in JavaScript?
		tuningList.sort()
				
8. A keyword declared without the var keyword is considered to be which type of variable?
		Global.

9. Properties can be thought of as which items?
		Characteristics.
			Properties can be thought of as adjectives to a certain extent.

10. A variable naming convention in JavaScript cannot start with which item?
		A number (cannot start with numbers).

11. JavaScript can be used to generate a quiz or game using which item?
		Random number generator (RNG)
*/

/*
GMetrix Topic 2 Videos
Primitive Data Types:

	Variables:
		Variable - a container that is used to hold information:
			(container) = (information)
			discount = 10
			orderTotal -= discount

	Naming Conventions:
		Uppercase, Lowercase, Numbers (cannot start with numbers), Symbols (only _, $), cannot have spaces:
			2Option and option 2 are not allowed!
		Variable names should describe what they are being used for, but not to excess.

	Camel Casing:
		camelCasingIsFun

	Types of Variables:
		Number variables:
			Store as floating point decimals, JavaScript is a loosely typed language.
			<script>
				discount = 10;
			</script>
			- parseFloat(document.getElementById('discount').innerHTML
					replace with
			- discount

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
			Code in scripts/main.js:
				const salesTaxRate = .075;
				incMsg = "This site is under construction and will be fully functional soon.";
			<body>
				<h1>Shopping Cart</h1>
				<script>
					document.write(incMsg);
				</script>
			</body>

		Null:
			<body>
				<div class="itemquantity">
					<p>
						<input type="text" value="1" id="manqty"> <br/>
						...
						<button id="manqtyzero" onclick="javascript: document.
						 getElementById('manqty').value = null;">Clear</button>
					</p>
				</div>
			</body>

		Undefined:
			<script>
				discount = 10;
				var subtotal;	// declared but undefined
				var grandtotal;	// declared but undefined
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
			In your web browser, type F12 for the Developer Console, then type into the console:
				typeof(discount) = Number
				typeof(checkOutExists) = Boolean
				typeof(incMsg) = String

		Type Checking Functions:
			In your web browser, type F12 for the Developer Console, then type into the console:
				Number.isInteger(discount) = true  // 10 = integer
				Number.isInteger(discount) = false // 10.5 = float

		use strict:
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
			When you run the code with "use strict", the web page displays:
					Error: Variable undefined in strict mode.
						Solution: Declare hoursEntered as a var.

		Convert Between Data Types:
			In your web browser, type F12 for the Developer Console, then type into the console:
				typeof(document.getElementById('mantotal')) => object
				parseFloat => float
				parseInt => number

	Format Numbers:
		.toFixed(2) = '$ ' + (parseFloat(document.getElementById('subtotal').innerHTML)...) // sales tax set to two decimal places

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
				var msg2 = (20 / hoursEntered).toPrecision(3);
				var msg3 = ' weeks to finish this program.'
				var msg4 = 'Can you do '
				var msg5 = hoursEntered
				var msg6 = ' per week for '
				var msg7 = ' weeks? Or is this just a "dream?"'
				document.getElementById('practiceWeeks').innerHTML = msg1.concat(msg2, msg3) + '<br/>' + msg4.concat(msg5, msg6, msg2, msg7);
				var currentDate = new Date();
				document.getElementById('practiceWeeks').innerHTML += '<br/>' + currentDate.toLocaleString();
				// document.getElementById('practiceWeeks').innerHTML += '<br/>' + eval(msg2); not GDPR friendly!
			}
			catch(error)
			{
				alert("Error: " + error.description);
			}
		}

	Nesting Quotes:
		Start with single quotes; use nested double quotes, and vice versa.
			function getPracticeHours()
			{
				"use strict";
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
					document.getElementById('practiceWeeks').innerHTML = msg1.concat(msg2, msg3) + "<br/>" + msg4.concat(msg5, msg6, msg2, msg7);
				}
				catch (error)
				{
					alert("Error: " + error.description);
				}
			}

	Initialization:
		Declare a variable first, then initialize the variable when required.
			discount = 10;
			<script>
				discount = 10;
				var subtotal;
				var grandtotal;
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
*/

/*
Declaring and Using Arrays:
	Building and Defining an Array:
		Array = an object with multiple containers, holding multiple values.
		<p>
			<button class="buttons" onclick="updateList();">Update List</button>
		</p>
		<script>
			tuningList = ["Tuning Lever", "Tuning Fork"];
			function updateList()
			{
				document.getElementById('tuningList').innerHTML = tuningList;
				document.getElementById('tuningList').innerHTML	+= "<br/>";
			}
		</script>

	Iteration and Length:
		<script>
			tuningList = ["Tuning Lever", "Tuning Fork"];
			function updateList()
			{
				document.getElementById('tuningList').innerHTML = "<ul>";
				for(var i = 0; i < tuningList.length; i++)
				{
					document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>"
				}
				document.getElementById('tuningList').innerHTML	+= "</ul>";
			}
		</script>

	Initialization:
		What is the difference between a declared variable or array?
		What is the difference between an initialized variable or array?
		<script>
			tuningList = ["Tuning Lever", "Tuning Fork"];
			fieldTotals = [];
			function updateList()
			{
				document.getElementById('tuningList').innerHTML= "<ul>";
				for(var i = 0; i < tuningList.length; i++)
				{
					document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>"
				}
				document.getElementById('tuningList').innerHTML	+= "</ul>";
			}
		</script>

	Sorting and Searching:
		<script>
			tuningList = ["Tuning Lever", "Tuning Fork"];
			fieldTotals = [];
			function updateList()
			{
				tuningList.sort();
				document.getElementById('tuningList').innerHTML= "<ul>";
				for(var i = 0; i < tuningList.length; i++)
				{
					document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>"
				}
				document.getElementById('tuningList').innerHTML	+= "</ul>";
			}
		</script>
		In your web browser, type F12 for the Developer Console, then type into the console:
			tuningList.indexOf("Tuning Lever") > -1; => true
			tuningList.indexOf("Felt Strips") > -1; => false

	Push and Pop:
		<p>
			<input type="checkbox" title="wedge mute" id="wedgeMute" onclick="tuningList.push('Wedge mute')" />
			Wedge mute
		</p>
		In your web browser, type F12 for the Developer Console, then type into the console:
			tuningList.pop(); = "Wedge mute"
			tuningList; [object array] ["Tuning Fork", "Tuning Lever"]

	Shift and Unshift:
		In your web browser, type F12 for the Developer Console, then type into the console:
			tuningList.shift(); = "Tuning Fork"
			tuningList; [object array] ["Tuning Lever"]
		<p>
			<input type="checkbox" title="wedge mute" id="wedgeMute" onclick="tuningList.unshift('Wedge mute')" />
			Wedge mute
		</p>

	Accessing an Element:
		<script>
			tuningList = ["Tuning Lever", "Tuning Fork"];
			fieldTotals = [];
			function updateList()
			{
				tuningList.sort();
				document.getElementById('tuningList').innerHTML= "<ul>";
				for(var i = 0; i < tuningList.length; i++)
				{
					document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>";
				}
				document.getElementById('tuningList').innerHTML	+= "</ul>";
				document.getElementById('tuningList').innerHTML	+= "<br/> ...";
				alert("The first item in this array is: " + tuningList[0]);
			}
		</script>

	Understanding Multi-Dimensional Arrays:
		Single-dimensional arrays have a single object with one group of values within the object:
			tuningList = ["Tuning fork", "Tuning lever"]
			["Tuning fork", "Red"]
			["Tuning fork", "Black"]
			["Tuning lever", "Red"]
			["Tuning lever", "Black"]
		The most common way to accomplish this, is with one or more	for() loops to loop values into an array:
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
	Properties:
		Objects can be manipulated.
		HTML tags, arrays and variables are examples of objects.
		Windows and screen sizes are examples of browser objects.
		These objects have properties, which are characteristics that define them.
		It can help to think of objects as items, things or even nouns.
		Properties can be thought of as characteristics or adjectives.
		Sometimes, properties need to be retrieved, and other times they need to be changed:
			<div class="order_buttons">
				<p>
					<input type="button" class="buttons" value="Update Cart" onclick="javascript: document.getElementById('subtotal').innerHTML"
					 = parseFloat(document.getElementById('mantotal').innerHTML) + parseFloat(document.getElementById('drumtotal').innerHTML)
					+ parseFloat(document.getElementById('tromtotal').innerHTML);
				</p>
			</div>
	Methods:
		Adjective is to property, as verb is to method:
			- parseFloat(document.getElementById('discount').innerHTML)).toFixed(2);
			tuningList.unshift('Wedge mute')

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
			today = new Date();
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
				}
				catch(error)
				{
					alert("Error: " + error.description);
				}
			}
		</script>
			In your web browser, type F12 for the Developer Console, then type into the console:
				lessonStartDate => 'October 2, 2017 6:00 PM'
				today => 'May 25th, 2023 2:27 PM'

	Retrieving Date Parts:
		<script language="JavaScript">
			lessonStartDate = new Date('October 2, 2017 6:00 PM');
			today = new Date();
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
					+ lessonStartDate.getDate() + ".";
				}
				catch(error)
				{
					alert("Error: " + error.description);
				}
			}
		</script>

	Localization:
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
				document.getElementById('practiceDetails').innerHTML = "New classes start on " // + monthName(lessonStartDate.getMonth()) + " "
				+ lessonStartDate.toLocaleDateString('en-gb') + "."; // + lessonStartDate.getDate() + ".";
			}
			catch (error)
			{
				alert("Error: " + error.description);
			}
		}

	Adding and Subtracting Dates:
		<script language="JavaScript">
			var lessonStartDate = new Date('October 2, 2017 6:00 PM');
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
		Floor is used to change numbers to the nearest lower whole number, whereas Ceiling is used to change numbers to the nearest higher whole number:
			var msg2 = Math.ceil(20 / hoursEntered)
		In your web browser, type F12 for the Developer Console, then type into the console:
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
			<button class="buttons" value="square footage" id="squareFootage" onclick="getSquareFootage();">Square Footage</button>
			<button class="buttons" value="square footage" id="squareFootage" onclick="getSide();">Side</button>
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
						<input type="text" value="1" id="manqty">
						<br/>
						<button id="manqtyadd" onclick="addOne('manqty');"> + </button>
						<button id="manqtysubtract" onclick="javascript:document.getElementById('manqty').value--;"> - </button>
						<button id="manqtyzero" onclick="javascript:document.getElementById('manqty').value = 0;"> Clear </button>
						<button id="manqtyfive" onclick="addFive('manqty');"> Add Five </button>
					</p>
				</div>
				<div class="itemquantity">
					<p>
						<input type="text" value="1" id="drumqty">
						<br/>
						<button id="manqtyadd" onclick="addOne('drumqty');"> + </button>
						<button id="manqtysubtract" onclick="javascript:document.getElementById('drumqty').value--;"> -	</button>
						<button id="manqtyzero" onclick="javascript:document.getElementById('drumqty').value = 0;"> Clear </button>
						<button id="manqtyfive" onclick="addFive('manqty');"> Add Five </button>
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
		<script>
			function addOne(fieldQty)
			{
				var qty = document.getElementById(fieldqty).value;
				// var qty is a local variable in this function.
				qty++;
				document.getElementById(fieldqty).value = qty;
			}
		</script>
			Code in main.js:
				const salesTaxRate = .075;
				incMsg = "This site is under construction and will be fully functional soon."; // global variable
				function product(item, size, price)
				{
					this.item = item;
					this.size = size;
					this.price = price;
				}

	Redefining Variables:
		What type of variable cannot be redefined? A constant (const).
			var lessonStartDate = new Date('October 2, 2017 6:00 PM');
			var lessonEndDate = new Date(lessonStartDate);
			lessonEndDate.setDate(lessonEndDate.getDate() + 56); // lessonEndDate is redefined
			var today = new Date();
			var daysUntilStart = parseInt((lessonStartDate - today) / 86400000)
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
				}

	Passing Parameters:
		<button id="manqtyfive" onclick="addFive('manqty');"> Add Five </button>
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

	Value vs Reference:
		Number, Boolean, String, Null, Undefined, Objects, Arrays
			x = 5		=>		5
			y = x		=>		5
			y = 7		=>		7
				x		=>		5

	Return Values:
		return alert(monthName[today.getMonth()]);
*/

/*
Topic 2 Exam Tips:
	What is the difference between a declared variable or array, and an initialized variable or array?
		A declared array becomes initialized when it starts to hold values.
	Where does the unshift method add an item to in an array?
		The unshift() method adds an item to the beginning of an array.
		The push() method adds an item to the end of an array.
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
GMetrix Topic 2 Exercise Labs
	Q1: Select the correct section of code from the drop-down in the code sample in order to complete the Boolean variable:
			function closeCheckOut()
			{
				if(checkOutExists == true)
				{
					checkWin();
				}
				checkOutExists = false;
			}

	Q2: Select the correct item from the drop-down in the code sample in order to apply the null variable:
			<button>
				getElementById(manqty).value=null;
			</button>

	Q3: Use the typeof operator to reveal the data type assigned to the checkOutExists variable:
			In your web browser, type F12 for the Developer Console, then type into the console:
				typeof(checkOutExists) => Boolean

	Q4: What is the correct code entry in order to verify the number type of the discount variable?
			Number.isInteger(discount)

	Q5: Select the correct code entry from the drop-down in the	code sample in order to complete a string operation that combines msg2 with msg3:
			msg1.concat(msg2, msg3)

	Q6: Select the correct entries from the drop-downs in the code sample in order to complete an array using iteration and length:
			function update()
			{
				document.getElementById('tuningList').innerHTML = "<ul>";
				for (var i = 0; i < tuningList.length; i++)
				{
					document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>";
				}
			}
	
	Q7: Select the correct entry from the drop-down in the code sample in order to search for the phrase, Tuning Lever:
			tuningList.indexOf("Tuning Lever") > -1;

	Q8: Select the correct entry from the drop-down in the code	sample in order to access an element:
			alert("The first item in this array is: " + tuningList[0]);

	Q9: Select the correct entry from the drop-down in the code	sample in order to apply the date:
			<script language="JavaScript">
				lessonStartDate = new Date(October 2, 2017 6:00 PM);
				today = new Date();
			</script>

	Q10: Select the correct code entry from the drop-down in the code sample in order to apply a date localization for the UK:
			lessonStartDate.toLocaleDateString('en-gb') + "."

	Q11: Arrange the correct code entries into their correct positions in order to complete a line of code that adds 56 days to the lessonEndDate variable:
			var lessonEndDate = new Date(lessonStartDate);
			lessonEndDate.setDate(lessonEndDate.getDate() + 56);
			today = new Date();

	Q12: Select the correct code entry from the drop-down in the code sample in order to complete the RNG variable:
			var videoNumber = Math.floor((Math.random() * 2));

	Q13: Select the correct code entry from the drop-down in the code sample in order to apply the round method:
			var msg1 = 'It will take you '
			var msg2 = Math.round(20 / hoursEntered)
			var msg3 = ' weeks to finish this program.'

	Q14: Select the correct item from the drop-down in the code sample in order to apply the ceiling method:
			var msg1 = 'It will take you '
			var msg2 = Math.ceil(20 / hoursEntered)
			var msg3 = ' weeks to finish this program.'

	Q15: Select the correct items from the drop-downs in the code entry to properly implement the square root method:
			function getSide()
			{
				document.getElementById('toMeasureResult').innerHTML = 'Side length: ' + Math.sqrt(parseInt(...);
			}

	Q16: Add the code necessary to pass the variable qty as a parameter in the addFive function:
			<button id="manqtyfive" onclick="addFive('manqty');"> Add Five </button>
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
*/

/*
GMetrix Topic 2 Post-Assessment:
	Q1: Which is an example of a pop command using the JavaScript console?
			tuningList.pop();

	Q2: Which line of code enables the min and max methods?
			function showMinMax() {...}

	Q3: Which are considered properties on Line 172?
			'subtotal'

	Q4: Which keyword is used to show an alert when code is run in JavaScript?
			return

	Q5: Which line of code is an example of a declared array that is not initialized?
			fieldTotals = [];

	Q6: Which lines of code contain examples of undefined variables?
			var subtotal;
			var grandtotal;

	Q7: Which variable is being redefined in this code sample?
			lessonEndDate
	
	Q8: Select the correct entry from the drop-down in the code	sample in order to access an element:
			alert("The first item in this array is " + tuningList[0]);

	Q9: Select the correct code entry from the drop-down in the code sample in order to apply the round method:
			var msg2 = Math.round(20 / hoursEntered)

	Q10: Which line is an example of formatting numbers using JavaScript?
			Line 175

	Q11: Select the correct item from the drop-down in the code sample in order to apply the ceiling method:
			var msg2 = Math.ceil(20 / hoursEntered)

	Q12: Select the correct section of code from the drop-down in the code sample in order to complete the Boolean variable:
			function closeCheckOut()
			{
				if(checkOutExists == true)
				{
					checkWin();
				}
				checkOutExists = false;
			}

	Q13: Which line of code in the code entry contains an example of a string variable?
			document.write(incMsg);

	Q14: Move the correct code entry to the gray box in the code sample in order to display the msg2 result as a three-digit number:
			.toPrecision(3);

	Q15: Select the correct code entry from the drop-down in the code sample in order to complete the RNG variable:
			var videoNumber = Math.floor((Math.random() * 2));

	Q16: An array in JavaScript is a(n) ___ with multiple containers that holds multiple ___:
			object; values.

	Q17: Number variables store as which item?
				Floating point decimals.

	Q18: Select the correct item from the drop-down in the code sample in order to apply the null variable:
			<button>
				getElementById(manqty).value=null;
			</button>

	Q19: Instantiation is the creation of a template or ___ used in JavaScript.
			class.

	Q20: The Math.pow method in JavaScript takes a number and raises it to a specified ___.
			power.

	Q21: Select the correct entry from the drop-down in the code sample in order to apply the date:
			<script language="JavaScript">
				lessonStartDate = new Date(October 2, 2017 6:00 PM);
				today = new Date();
			</script>

	Q22: Select the correct items from the drop-downs in the code entry to properly implement the square root method:
			function getSide()
			{
				document.getElementById('toMeasureResult').innerHTML = 'Side length: ' + Math.sqrt(parseInt(...)
			}

	Q23: Select the correct code entry from the drop-down in the code sample in order to apply a date localization for the UK:
			lessonStartDate.toLocaleDateString('en-gb') + "."

	Q24: Select the correct entries from the drop-downs in the code sample in order to complete an array using iteration and length:
			function update()
			{
				document.getElementById('tuningList').innerHTML	= "<ul>";
				for(var i = 0; i < tuningList.length; i++)
				{
					document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>";
				}
			}

	Q25: A new array begins on which line in the code example?
			a1[i] = new Array(2);

	Q26: Which are true statements concerning the shift & unshift methods?
			Addition:
			shift() & pop()
				shift removes an item from the beginning of an array.
				pop removes an item from the end of an array.
			Subtraction:
			unshift() & push()
				unshift adds an item to the beginning of an array.
				push adds an item to the end of an array.

	Q27: Which best defines the purpose of the floor method?
			Used to change numbers to the nearest lower whole number.

	Q28: The Math.abs method should be placed on which line of the code sample?
			var hoursEntered = parseInt(...)

	Q29: The 'use strict' command should be placed on which line in the code sample in order to apply it to the hoursEntered object?
			function bumpkin
			{
				use strict;
				try
				{
					// stuff
				}
			}
	
	Q30: Arrange the correct code entries into their correct positions in order to complete a line of code that adds 56 days to the lessonEndDate variable:
			var lessonEndDate = new Date(lessonStartDate);
			lessonEndDate.setDate(lessonEndDate.getDate() + 56);
			today = new Date();

	Q31: Which item is an example of a method in Line 181?
			- parseFloat(document.getElementById('discount').innerHTML)).toFixed(2);

	Q32: Which line of code in the code sample is a variable that has been declared and initialized?
			discount = 10;

	Q33: Which are two items that convert objects into numbers?
			parseInt & parseFloat.

	Q34: Use the typeof operator to reveal the data type assigned to the checkOutExists variable:
			In your web browser, type F12 for the Developer Console, then type into the console:
				typeof(checkOutExists)

	Q35: Which line of code in the code sample is an example of a single-dimensional array?
			tuningList = ["Tuning Lever", "Tuning Fork"];
	
	Q36: Add the code necessary to pass the variable qty as a parameter in the addFive function:
			function addFive(qty)

	Q37: What is needed in order to create reusable code?
			A function

	Q38: What is the correct code entry in order to verify the number type of the discount variable?
			Number.isInteger(discount)

	Q39: If x = 5 and y = x and then y = 7, what will x be?
			5

	Q40: What type of scope does the qty variable have?
			var qty: 
				local scope

	Q41: Which line in the code sample is an example of nesting quotes?
			var msg7 = ' weeks? Or is this just a "dream"?'
	
	Q42: Which two factors determine the scope of a variable?
			The location of its declaration,
			The use of the var keyword.

	Q43: Select the correct entry from the drop-down in the code sample in order to search for the phrase, Tuning Lever:
			tuningList.indexOf("Tuning Lever") > -1;

	Q44: Which code entry will retrieve the day of the desired date?
			.getDate()
*/

/*
eCollege Topic 2 Video Tutorials:
	Variables:
		Code in variables.js:
			let x = 7; // let is deemed a verb, x is the identifier
			let y = 5;
			let z = x + y;
			console.log('Answer: ' + z);
		On cmd line:
			node variables
				Answer: 12

		Back to variables.js:
		const x = 7 (this will not be expected to change)
		x = 6
		On cmd line:
			node variables
				TypeError: Assignment to constant variable
		
		Back to variables.js:
			let x = 7; // you can only declare a variable once!
			x = 6;	   // but you can always re-assign its value.
			x = 5;	   // again...
			x = 4;	   // and again.
			let x = 8; // x has already been declared above!
			let y = 5;
			let z = x + y;
			console.log('Answer: ' + z);
		On cmd line:
			node variables
				SyntaxError: Identifier 'x' has already been declared
		
		Back to variables.js:
			let x;
			console.log(x); // x has not been initialized at this stage!
			x = 7;			// Now x has been initialized.
			x = 6;
			x = 5;
			x = 4;
			let y = 5;
			let z = x + y;
			console.log('Answer: ' + z);
		On cmd line:
			node variables
				undefined
				Answer: 7
		
		Back to variables.js:
			let x = 7; 
			x = 6;	   
			x = 5;
			x = 4;
			let y = 5;
			let z = x + y;
			console.log('Answer: ' + z);
				Always start variables with a letter, $ or _ symbol.
				No spaces in between two words:
					(game collection = 'string')
				No keywords can be used:
					let let = 8
			On cmd line:
			node variables
				SyntaxError: let is disallowed as a lexically bound name.

		Back to variables.js:
			Variables are case-sensitive:
				x = 7;
				X = 8;
			Variable names should be descriptive & representative:
				let firstNumber = 7; // camel casing
				let secondNumber = 6; // meaning lowercase, then uppercase for each word
*/

/*
	Data Types:
		Create datatypes.js:
			let x = 7;					// values have the data type
			console.log(typeof(x));
		On cmd line:
			node datatypes
				number

		Back to datatypes.js:
			let x = 7;					// values contain the data type
			console.log(typeof(x));
			let y = true;
			console.log(typeof(y));
			let z = 'Hello world';
			console.log(typeof(z));
		On cmd line:
			node datatypes
				number
				Boolean
				string

		Back to datatypes.js:
			let a;
			console.log(a);
			console.log(typeof a);
		On cmd line:
			node datatypes
				undefined
				undefined
*/

/*
	Type Coercion and Conversion:
		Create coersion.js:
			let a = 7;
			let b = '6';
			let c = a + b;
			console.log('Answer: ' + c);
		On cmd line:
			node coercion
				Answer: 76 // coercing the number into a string
		
		Back to coersion.js:
			let a = 7;
			let b = '6';
			b = parseInt(b, 10);
			let c = a + b;
			console.log('Answer: ' + c);
		On cmd line:
			node coercion
				Answer: 13 // converting the string into a number

		Back to coersion.js:
			let d = parseInt('bob', 10);
			console.log(d);
		On cmd line:
			node coercion
				NaN		   // 'bob' is Not a Number (NaN)!
		
		Back to coersion.js:
			let d = parseInt('bob', 10);
			let e = isNaN(d);
			console.log(d);
			console.log(e);
		On cmd line:
			node coercion
				NaN		   // 'bob' is Not a Number!
				True	   // 'bob' is indeed, Not a Number.
*/

/*
	Arrays:
		Create arrays.js:
			let a = [4, 8, 15, 16, 23, 42];
			let b = ['david', 'eddie', 'alex', 'michael'];
			console.log(a[0]);
			console.log(a[1]);
			console.log(a);
		On cmd line:
			node arrays
				4
				8
				[4, 8, 15, 16, 23, 42]

		Back to arrays.js:
			let a = [4, 8, 15, 16, 23, 42];
			let b = ['david', 'eddie', 'alex', 'michael'];
			a[0] = 7;
			console.log(a);
			console.log(typeof a);
		On cmd line:
			node arrays
				[7, 8, 15, 16, 23, 42]
				object

		Back to arrays.js:
			let c = [4, 'Jonny', true];
			console.log(c);
		On cmd line:
			node arrays
				[4, 'Jonny', true]

		Back to arrays.js:
			let b = ['david', 'eddie', 'alex', 'michael'];
			console.log(b[5]);
		On cmd line:
			node arrays
				undefined

		Back to arrays.js:
			let a = [4, 8, 15, 16, 23, 42];
			a[0] = 7;
			console.log(a.length);	// length property does not use a zero-based index!
		On cmd line:
			node arrays
				6

		Back to arrays.js:
			let a = [4, 8, 15, 16, 23, 42];
			a[10] = 77;
			console.log(a);
			console.log(a.length);
		On cmd line:
			node arrays
				[4, 8, 15, 16, 23, 42, <4 empty items>, 77] // sparse array
				11

		Back to arrays.js:
			a.push(77);				// add elements into an array
			console.log(a);
			console.log(a.length);
			a.pop();				// remove elements from an array
			a.pop();
			a.pop();
			console.log(a);
			console.log(a.length);
		On cmd line:
			node arrays
				[4, 8, 15, 16, 23, 42, 77] // 77 is pushed to the end of the array
				7						   // length increased by 1 element
				[4, 8, 15, 16]			   // 3 pops (77, 42, 23) removed from the end of the array
				4						   // length decreased by 3 elements
*/

/*
	Function Declaration:
		Create functiondeclarations.js:
			// a function is a block of code we name & execute repeatedly.
			function sayHello()
			{
				console.log('------------');
				console.log('Hello!');
				console.log('------------');
			}
			sayHello();
		On cmd line:
			node functiondeclarations
				------------
				Hello!
				------------
		
		Back to functiondeclarations.js:
			function sayHello()
			{
				console.log('------------');
				console.log('Hello!');
				console.log('------------');
			}
			let a = sayHello();
			a();
			a();
			a();
		On cmd line:
			node functiondeclarations
				------------
				Hello!
				------------
				------------
				Hello!
				------------
				------------
				Hello!
				------------

		Back to functiondeclarations.js:
			function sayHello(name) // new argument/variable name
			{ 
				console.log('------------');
				console.log('Hello' + name + '!');
				console.log('------------');
			}
			sayHello('Bob');
			sayHello('Beth');
			sayHello('Mr. Tibbles');
		On cmd line:
			node functiondeclarations
				------------
				Hello Bob!
				------------
				------------
				Hello Beth!
				------------
				------------
				Hello Mr. Tibbles!
				------------

		Back to functiondeclarations.js:
			function calculateTax(amount)
			{
				let result = amount * 0.0825;
				return result;
			}
			let tax = calculateTax(100);
			console.log(tax);
		On cmd line:
			node functiondeclarations
				8.25
*/

/*
	Basics of Scope:
		Create scopebasics.js:
			let a = 'first';
			function scopeTest()
			{
				console.log(a);
			}
			scopeTest();
		On cmd line:
			node scopebasics
				first

		Back to scopebasics.js:
			let a = 'first';
			function scopeTest()
			{
				console.log(a);
				let b = 'second';
			}
			scopeTest();
			console.log(b);
		On cmd line:
			node scopebasics
				ReferenceError: 'b' is not defined
		
		Back to scopebasics.js:
			let a = 'first';
			function scopeTest()
			{
				console.log(a);
				if(a != '')
				{
					console.log(a);
				}
			}
			scopeTest();
		On cmd line:
			node scopebasics
				first
				first

		Back to scopebasics.js:
			let a = 'first';
			function scopeTest()
			{
				console.log(a);
				if(a != '')
				{
					console.log(a);
					let c = 'third';
				}
				console.log(c);
			}
			scopeTest();
		On cmd line:
			node scopebasics
				first
				ReferenceError: 'c' is not defined
		
		Back to scopebasics.js:
			let a = 'first';
			function scopeTest()
			{
				console.log(a);
				a = 'changed';
				if(a != '')
				{
					console.log(a);
					let c = 'third';
				}
			}
			scopeTest();
			console.log(a);
		On cmd line:
			node scopebasics
				first
				changed
				changed

		Back to scopebasics.js:
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
					let c = 'third';
				}
				console.log(a);
			}
			scopeTest();
		On cmd line:
			node scopebasics
				first
				changed
				inside if: second
				changed
*/

/*
	Object Literals & JSON:
		array = define & store year, make, model, ID.
		object = defined above & stores related properties/attributes of a single data element.
		create object.js:
			// let the car variable store object with enclosed attributes:
			let car = {
						// make, model, and year 'property:value' lines of code:
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
		On cmd line:
			node object
				BMW 745li
				2010

		Back to object.js:
			let car = {
						// make, model, and year 'property:value' lines of code:
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
			console.log(car['year']);
			console.log(car[1]);
		On cmd line:
			node object
				BMW 745li
				2010
				2010
				undefined
			// functions in objects = methods, not functions!
		
		Back to object.js:
			let car = {
						// make, model, and year 'property:value' lines of code:
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

			var anotherCar = {};
			anotherCar.whatever = 'Audi';
			console.log(anotherCar.whatever);
		On cmd line:
			node object
				BMW 745li
				2010
				Audi

		Back to object.js:
			let car = {
						// make, model, and year 'property:value' lines of code:
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

			var a = {
						myProperty: {b: 'Hi'}
					};
			console.log(a.myProperty.b);
		On cmd line:
			node object
				BMW 745li
				2010
				Hi

		Back to object.js:
			let car = {
						// make, model, and year 'property:value' lines of code:
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
				{year: 2009, make: 'FIAT', model: 'Punto'},
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
		Create null.js:
			let a;
			console.log(a);
			console.log(typeof a); 
		On cmd line:
			node null
				undefined
				undefined

		Back to null.js:
			let pattern = /xyz/;
			let value = 'This is just a test';
			let result = value.match(pattern);
			console.log(result);
			console.log(typeof result);
			if(result === null)
			{
				console.log('No match was found.');
			}
		On cmd line:
			node null
				null
				object
				No match was found.
*/

/*
	String Methods:
		create strings.js:
			let first = 'Knowledge is power, but enthusiasm pulls the switch.';
			let second = 'Do or do not. There is no try.';
			let third = '4, 8, 15, 16, 23, 42';
			// you can even call methods on string literals
			console.log('Amanda loves you'.toUpperCase());
		On cmd line:
			node strings
				AMANDA LOVES YOU

		Back to strings.js:
			let third = '4, 8, 15, 16, 23, 42';
			let mySplit = third.split(',');
			console.log(mySplit);
		On cmd line:
			node strings
				['4', '8', '15', '16', '23', '42']

		Back to strings.js:
			let first = 'Knowledge is power, but enthusiasm pulls the switch.';
			let mySlice = first.slice(13, 18); // Index 13 through 18
			console.log(mySlice);
		On cmd line:
			node strings
				power

		Back to strings.js:
			let first = 'Knowledge is power, but enthusiasm pulls the switch.';
			let mySubstr = first.substr(13, 5);	// Index 13, length 5
			console.log(mySubstr);
		On cmd line:
			node strings
				power

		Back to strings.js:
			let second = 'Do or do not. There is no try.';
			let myEndsWith = second.endswith('try.');
			console.log(myEndsWith);
		On cmd line:
			node strings
				true

		Back to strings.js:
			let second = 'Do or do not. There is no try.';
			let myStartsWith = second.startswith('Do');
			console.log(myStartsWith);
		On cmd line:
			node strings
				true

		Back to strings.js:
			let second = 'Do or do not. There is no try.';
			let myInclude = second.includes('there');
			console.log(myInclude);
		On cmd line:
			node strings
				true

		Back to strings.js:
			let myRepeat = 'Ha! '.repeat(3);
			console.log(myRepeat);
		On cmd line:
			node strings
				Ha! Ha! Ha!

		Back to strings.js:
			let myTrim = '      bloated  ';
			console.log(myTrim.length);
			console.log(myTrim.trim().length);
		On cmd line:
			node strings
				16
				7
*/

/*
	Array Methods:
		create array-methods.js:
			let names = ['David', 'Colm', 'Ben', 'Alex'];
			let others = ['Fran', 'Leanne', 'Ann', 'Chelsea'];
			let lost = [4, 8, 15, 16, 23, 42];
			let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
			var combine = lost.concat(fibonacci);
			console.log(combine);
		On cmd line:
			node array-methods
				[4, 8, 15, 16, 23, 42, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

		Back to array-methods.js:
			let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
			console.log(fibonacci.join('~'));
		On cmd line:
			node array-methods
				[1~1~2~3~5~8~13~21~34~55]

		Back to array-methods.js:
			let lost = [4, 8, 15, 16, 23, 42];
			// push & pop
			console.log(lost.shift());
			console.log(lost);
			lost.unshift(1, 2, 3, 4);
			console.log(lost);
		On cmd line:
			node array-methods
				[8, 15, 16, 23, 42]
				[1, 2, 3, 4, 8, 15, 16, 23, 42]

		Back to array-methods.js:
			let names = ['David', 'Colm', 'Ben', 'Alex'];
			console.log(names);
			console.log(names.reverse());
			console.log(names.sort());		// sort A-Z
		On cmd line:
			node array-methods
				['David', 'Colm', 'Ben', 'Alex']
				['Alex', 'Ben', 'Colm', 'David']
				['Alex', 'Ben', 'Colm', 'David']

		Back to array-methods.js:
			let others = ['Fran', 'Leanne', 'Ann', 'Chelsea'];
			let lost = [4, 8, 15, 16, 23, 42];
			let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
			var combine = lost.concat(fibonacci);
			console.log(others.indexOf('Leanne'));
			console.log(combine);
			console.log(combine.lastIndexOf(1)); // index with the #1 (at index 7)
		On cmd line:
			node array-methods
				1
				[4, 8, 15, 16, 23, 42, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
				7

		Back to array-methods.js:
			let lost = [4, 8, 15, 16, 23, 42];
			let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
			var combine = lost.concat(fibonacci);
			var filtered = combine.filter((x) => {if(x <= 15) return x;});
			console.log(filtered);
		On cmd line:
			node array-methods
				[4, 8, 15, 1, 1, 2, 3, 5, 8, 13]

		Back to array-methods.js:
			let names = ['David', 'Colm', 'Ben', 'Alex'];
			names.forEach((name) => console.log(`Howdy ${name}`));
		On cmd line:
			node array-methods
				Howdy David
				Howdy Colm
				Howdy Ben
				Howdy Alex

		Back to array-methods.js:
			let lost = [4, 8, 15, 16, 23, 42];
			let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
			var combine = lost.concat(fibonacci);
			var filtered = combine.filter((x) => {if(x <= 15) return x;});
			console.log(filtered.every((num) => num < 10));
			console.log(filtered.every((num) => num < 16));
		On cmd line:
			node array-methods
				false
				true

		Back to array-methods.js:
			let lost = [4, 8, 15, 16, 23, 42];
			let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
			var combine = lost.concat(fibonacci);
			var filtered = combine.filter((x) => {if(x <= 15) return x;});
			console.log(fibonacci.some((num) => num > 50));
			console.log(fibonacci.some((num) => num > 100));
		On cmd line:
			node array-methods
				true
				false
*/

/*
	How to Dynamically Generate and Execute JavaScript Commands:
		In home.html:
			<head>
				<meta charset = "utf-8" />
				<title>JavaScript</title>
				<script type = "text/javascript">
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
				<textarea rows="20" cols="50" id="input1"></textarea>
				<br/><br/>
				<input type="button" onclick="doIt()" value="Execute" />
				<br/><br/>
				Output Window (use ID "output")
				<div id="output" style="height: 125px; width: 425px; border: 1px solid;"></div>
			</body>

			On the web browser:
				Enter JavaScript Command:
				alert("Hello");
					Outputs Hello

				var x = 10;
				alert(x);
					Outputs 10
				
				var cars = "red";
				document.getElementById("output").innerHTML = "All cars are " + cars;
					All cars are red
*/

/*
Supplementary Material:
	Getting Date and Time:
		dates.html:
			<head>
				<meta charset = "utf-8" />
				<title>Formatting JavaScript Dates</title>
				<script type = "text/javascript">
					var today = new Date();
					var anniversary = new Date('September 3, 2022 14:00:00');
					var birthday = new Date(1989, 09, 07);
					document.writeln("This is the result of creating a standard Date object: " + today.toString() + "<br/>");
					document.writeln("This is the result of using the GMT string: " + anniversary.toGMTString() + "<br/>");
					document.writeln("This is the result of using the UTC string: " + anniversary.toUTCString() + "<br/>");
					document.writeln("This is the result of using the locale string: " + birthday.toLocaleDateString() + "<br/>");
					document.writeln("This is the day: " + today.getDay() + "<br/>");
					birthday.setYear(1991);
					document.writeln("This is the new date: " + birthday.toLocaleDateString() + "<br/>");
				</script>
			</head>
*/

/*
	Comparing Dates:
		comparedates.html
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

	Dynamic Data Types and the typeof Operator:
		As we know, a variable can hold any type of data in JavaScript.
		Initially, the variable "var1" could be populated with a string, then it could be later populated so that it now holds a number.
		So how can you tell what kind of data is in a particular variable?
		We can test to "go in and look" at what the "Data Type" of a variable is by using the "typeof" operator.
		Many times we need to convert the data type of a variable.
		Sometimes this conversion is done for us automatically (Implicit Conversion) and sometimes we need to do this manually (Explicit Conversion).
		The "Number" method can be used to convert strings to numbers (if the string is even able to be converted, most strings cannot):
			var numString = "55";
			num = Number(numString);
				"55" is a string, and can be converted to a number.
				"Dog" is a string, and cannot be a number!
		The .toString() method can be used to convert a number to a	string.
			var num = 55;
			numString = num.toString();
		It is very common and very easy to convert almost anything to a string variable using the "toString()" method.
*/

/*
JavaScript Essentials 5: Date and Math Functions:
	Working with Date and Time
		Subtracting Dates:
			jssubdates.html:
				<body>
					<script>
						function datesDiff(date1, date2)
						{
							// constant for ms in a day
							var DAY = 1000 * 60 * 60 * 24
							// convert both dates to ms
							var date1_ms = date1.getTime()
							var date2_ms = date2.getTime()
							// calculate the difference in ms
							var diff_ms	= Math.abs(date1_ms - date2_ms)
							// convert back to days and return result
							return Math.round(diff_ms / DAY)
						}
						var current_date = new Date()
						// Store the date of the next New Year's Day
						var new_years_date = new Date()
						new_years_date.setYear(new_years_date.getFullYear() + 1)
						new_years_date.setMonth(0)
						new_years_date.setDate(1)
						// Call the days between function
						var days_left = datesDiff(current_date, new_years_date)
						// Write the result to the page
						if(days_left > 1)
						{
							document.write("<br/>There are " + days_left + " days left this year.<br/>")
						}
						else
						{
							document.write("<br/>There is " + days_left + " days left this year.<br/>")
						}
					</script>
				</body>

		Comparing Dates:
			jscompdates.html:
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
			jselapsedtime.html:
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
						Start Date: <input type="text" name="date1" value="dd/m/yyyy" /><br/>
						End Date: <input type="text" name="date2" value="dd/m/yyyy" /><br/>
						<input type="button" name="button1"	onclick="elapsedTime(date1.value, date2.value)" value="Get Elapsed Time" />
					</form>
				</body>

		Dates and Days of the Week:
			jsdaysofweek.html:
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
			home.html:
				<body>
					<script type="text/javascript">
						document.write("Date: " + "<br/>");
						var d = new Date();
						document.write(d);
						document.write("Specific " + "<br/>");
						var specific = d.getFullYear();
						document.write(specific);
						// new Date(month, day, year, hours, minutes, milliseconds)
					</script>
				</body>

Lesson Test:
Q1: You need to calculate the difference between two dates using JavaScript.
	You've set a function that converts both dates to milliseconds, and now you want to perform the actual calculation before converting back to a date format:
		function datesCal(dateA, dateB)
		{
			var dateA_ms = dateA.getTime();
			var dateB_ms = dateB.getTime();
			var cal_diff_date_ms = Math.abs(dateA_ms - dateB_ms);
			return Math.round(cal_diff_date_ms / DAY);
		}

Q2: Consider the array below and decide which of the following options is true:
		function dayFunction()
		{
			var d = new Date();
			var weekday = new Array(7);
			weekday[1] = "Sunday";
			weekday[2] = "Monday";
			weekday[3] = "Tuesday";
			weekday[4] = "Wednesday";
			weekday[5] = "Thursday";
			weekday[6] = "Friday";
			weekday[7] = "Saturday";
			var n = weekday[d.getDay()];
		}
	The array should start at index 0, not index 1. True.

Q3: You're creating a function that is comparing two dates that are input via HTML, and then give values trigDate and curDate.
	Which option provides the correct code for actually comparing the dates?
		var triggerDate = new Date(trigDate)
		var currentDate = new Date(curDate)
		if(currentDate.getTime() == trigDate.getTime())
		{
			alert("Trigger date reached!");
		}
		else
		{
			alert("Not there yet!")
		}
			
Q4: Which of the following options, describing the use of the date object in JavaScript method to calculate the elapsed	time between two specific dates, is
	accurate?
		Using the results of the getTime() function, you can calculate the difference in milliseconds.
			
Q5: Complete the code to return the day of the month (1-31) for the specified date:
		<script>
			function myFunction()
			{
				var d = new Date();
				var n = d.getDate();
				document.write(n);
			}
		</script>
*/

/*
Arithmetic and Logic Operators
	Bitwise Logical Operators:
		jsbitlogical.html:
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
	Bitwise Shift Operators:
		jsbitshift.html:
			<body>
				<script type="text/javascript">
					function nutsnBits(x, y)
					{
						x = parseInt(x);
						y = parseInt(y);
						alert("The binary representation of the numbers are: " + x.toString(2) + " and " + y.toString(2));
						document.write("The result of the BITWISE SHIFT LEFT OPERATOR is: " + (x << y) + "<br/>");
						document.write("The result of the BITWISE SHIFT RIGHT OPERATOR is: " + (x >> y) + "<br/>");
						document.write("The result of the BITWISE SHIFT RIGHT WITH ZERO OPERATOR is: " + (x >>> y) + "<br/>");
					}
				</script>
				<form>
					Number 1: <input type="text" name="num1" /> <br/>
					Number 2: <input type="text" name="num2" /> <br/>
					<input type="button" name="button1" onclick="nutsnBits(num1.value, num2.value)"	value="BitShifting" />
				</form>
			</body>
*/

/*
	Increment and Decrement Operators:
		jsincdec.html:
			<body>
				<script type="text/javascript">
					function incAndDec(x)
					{
						var result = 0;
						// document.write((result = ++x) + "<br/>"); 2 3
						// document.write((result = x++) + "<br/>"); 2 2
						// document.write((result = --x) + "<br/>"); 3 2
						// document.write((result = x--) + "<br/>"); 3 3
						// alert(x);
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
		jsequality.html:
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
Lesson Test:
Q1: What will the value of variable num be after this operation?
		var num = 4;
		num = x++4;
		// 4
			
Q2: Which option represents the bitwise XOR operator on the integer variables x & y?
		x ^ y
			
Q3: Which alert will be returned when this code runs?
		var x = '5';
		if(x === 5)
		{
			alert('true');
		}
		else
		{
			alert('false');
		}
	
Q4: Given the variable myNum, which option shifts the binary value of myNum two bits to the left?
		myNum = 16 << 2

	Math Object Properties
		Euler's Number and the Logarithm Math Object Properties:
			euler.html:
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
				<span style="font-family: 'Times New Roman', Times, serif; font-size: 22px; font-style: italic;	font-weight: bold;"> e </span><br/>
				<br/>
			</body>
*/

/*
		The Logarithm2 and Logarithm10 Math Object Properties:
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
		The pi Math Object Property:
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

Lesson Test:
Q1: Which of the following options show how to access Square Root Half and Square Root 2 Math object properties?
		Math.SQRT1_2 and Math.SQRT2

Q2: Which option will return the base 10 logarithm of E?
		Math.LOG10E

Q3: Complete the code to access the log2 object and send it to the element showLog2:
		function log2()
		{
			document.getElementById("showLog2").value = Math.LN2;
		}
		<input type="text" id="showLog2"> <br/>
		<input type="radio" name="myRadio" onclick="log2()" />

Q4: Complete the code to access the PI object and send it to the element showPI:
		function myPI()
		{
			document.getElementById("PI").value = Math.PI;
		}
		<input type="text" id="showPI"> <br/>
		<input type="radio" name="myRadio" onclick="myPI()" />
*/

/*
	Math Object Methods
		The Cosine, Sine and Tangent Math Object Methods:
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
					<input type="text" id="calcVal0" size="5"><br/>
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
		The Absolute Math Object Method:
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
		The Floor and Ceiling Math Object Methods:
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
		The Square Root and Power Math Object Methods:
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
		The Exponent and Log Math Object Methods:
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

		The Min and Max Math Object Methods:
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
		The Round Math Object Method:
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

/*
Lesson Test:
Q1: Complete the code for the function to display a random number between 1 and 50:
		<body>
			<p>
				Click the button to display a random number between 1 and 50.
			</p>
			<button onclick="myRanVal()">Try it!</button>
			<p id="result"></p>
			<script>
				function myRanVal()
				{
					var r = document.getElementById("result");
					r.innerHTML = Math.floor((Math.random));
				}
			</script>
		</body>

Q2: Complete the code for the function to return the highest number from 5, 10, 13, 22 and 43:
		<body>
			<p>
				Click the button to return the highest number from 5, 10, 13, 22 and 43.
			</p>
			<button onclick="myMaxVal()">Try it!</button>
			<p id="result"></p>
			<script>
				function maxChk()
				{
					document.getElementById("result").innerHTML	= Math.max(8, 3, 9, 34, 124, 10, 89, 7, 2);
				}
			</script>
		</body>

Q3: Complete the code for the function that rounds the number 3.7 downward to its nearest integer:
		<body>
			<p>
				Click the button to round the number 3.7 downward to its nearest integer.
			</p>
			<button onclick="myFloorVal()">Calculate</button>
			<p id="result"></p>
			<script>
				function myFloorVal()
				{
					document.getElementById("result").innerHTML	= Math.floor();
				}
			</script>
		</body>

Q4: Complete the code for the function that rounds the number 3.7 to its nearest integer:
		<body>
			<p>
				Click the button to round the number 3.7 to its nearest integer.
			</p>
			<button onclick="myRndVal()">Calculate</button>
			<p id="result"></p>
			<script>
				function myRndVal()
				{
					document.getElementById("result").innerHTML	= Math.round(3.7);
				}
			</script>
		</body>
		
Q5: Complete the code for the function to display the result of 9^3:
		<body>
			<p>
				Click the button to display the result of 9^3.
			</p>
			<button onclick="myPowVal()">Calculate</button>
			<p id="result"></p>
			<script>
				function myPowVal()
				{
					document.getElementById("result").innerHTML	= Math.pow();
				}
			</script>
		</body>

Q6: Complete the code for the function to return the cosine value of 9:
		<body>
			<p>
				Click the button to show the cosine value of 9.
			</p>
			<button onclick="myCos()">Calculate</button>
			<p id="result"></p>
			<script>
				function myCos()
				{
					document.getElementById("result").innerHTML	= Math.cos(9);
				}
			</script>
		</body>
			
Q7: Complete the code for the function to display the absolute value of -11.21:
		<body>
			<p>
				Click the button to display the absolute value of -11.21.
			</p>
			<button onclick="myAbsVal()">Calculate</button>
			<p id="result"></p>
			<script>
				function myAbsVal()
				{
					document.getElementById("result").innerHTML	= Math.abs(-11.21);
				}
			</script>
		</body>

Q8: Complete the code for the function to display the result of Euler's number to the power of 4:
		<body>
			<p>
				Click the button to display the result of Euler's number to the power of 4.
			</p>
			<button onclick="myExpVal()">Calculate</button>
			<p id="result"></p>
			<script>
				function myExpVal()
				{
					document.getElementById("result").innerHTML	= Math.E();
				}
			</script>
		</body>
			
Q9: Complete the code for the function to display the arctangent of 6/2:
		<body>
			<p>
				Click the button to display the arctangent of 6/2.
			</p>
			<button onclick="myArctan()">Calculate</button>
			<p id="result"></p>
			<script>
				function myArctan()
				{
					alert();
				}
			</script>
		</body>
*/

/*
Quiz (16Q/32m, 8.83/16, 55%/80% = Total of 7 Marks Lost (+4 Marks Missed to Pass); 5 Full Marks Lost (1, 1, 1, 1, 1) & 4 Qs Partially Lost (0.5, 0.5, 0.5, 0.66)
Q1: What will complete the code and display the value 6.67?
		<script>
			var preciseNumber = 6.666666666666;
			var shortenNumber = preciseNumber.toFixed(2);
			alert(shortenNumber);
		</script>
			The toFixed() method returns a string with the specified number	of decimal places.
			The toPrecision() method returns a string with the specified length (in this case, 3).
			toDecimal() and maxPlaces() are not valid methods, so no alert box would display.
*/

/*
Q2: What produces the correct output?
		<script>
			var ridiculouslyLongString = "This is just a ridiculously long string!"
		</script>
		document.write(ridiculouslyLongString.indexOf('s'));		Output: 3
		document.write(ridiculouslyLongString.length);				Output: 40
		document.write(ridiculouslyLongString.lastIndexOf('s'));	Output: 33
		document.write(ridiculouslyLongString.search('is'));		Output: 2
			The indexOf() method returns the index of the first occurrence of a specified text in a string.
			The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
			The length property returns the length of a string.
			The search() method searches a string for a specified value, and returns the index of where the value is found.
*/

/*
Q3: Which option can be used to successfully prevent JavaScript from interpreting the single quote as the end of the string?
		<script>
			var activity = "Bowling Bonanza";
			alert('Barry's' + activity);
		</script>
			The issue with the above code is that the quotes haven't been properly nested inside each other.
			As soon as the second quote is reached, this will be deemed the	end of the string.
			There are a few ways around this that will allow you to use	these special characters (such as quotes) as part of the string.
			1. Change the outer quotes to double quotes, so the nested single quotes result in "Barry's".
			   You can also change the outer quotes to single quotes, so the nested double quotes result in '"To be or not to be."'.
			2. Use the \ escape character, this will allow \ to be seen as part of the string, resulting in 'Barry\'s', as the escape character will allow the
			   special character to display as part of the string.
*/

/*
Q4: The code should successfully declare and initialize an array, remove the first element, and display 'The toys have been thrown out of the pram' in an alert box:
		<script>
			var things = ["toys", "fruit", "cars", "animals", "vegetables"];
			var elementRemoved = things.shift();
			alert("The " + elementRemoved + "have been thrown out of the pram!");
		</script>
			You can use the array literal syntax which uses square brackets:
				var things = ["toys", "fruit", "cars", "animals", "vegetables"];
			The shift() method removes the first element from the array and returns the string 'toys', stored in the variable elementRemoved.
			elementRemoved is then concatenated into the rest of the string, so that:
				'The toys have been thrown out of the pram'
			is correctly displayed in an alert box.
*/

/*
Q5: Which methods can be called on the array to correctly display 'Just, Us, Left' on the webpage:
		<body>
			<span id="display"></span>
			<script>
				var words = ["Everyone", "Just", "Us"];
				words.shift();
				words.push('Left');
				document.getElementById('display').innerHTML = words;
			</script>
		</body>
	  The four methods that concern us here (in relation to adding and removing elements from an array) are:
		shift: This method removes the first element from an array.
		unshift: This method adds an element to the beginning of an array.
		push: This method adds an element to the end of an array.
		pop: This method removes the last element from an array.
*/

/*
Q6: Which methods called on the date object produces the following output on the Developer Console:
		7
		1
		2018
			  <script>
				var randomDate = new Date(2018,1,7);
			  </script>
			  console.log(randomDate.getDate());
			  console.log(randomDate.getMonth());
			  console.log(randomDate.getFullYear());
				  The getDate() method gets the day: value ranges between 1-31.
				  The getMonth() method gets the month: value ranges from 0-11.
				  The getFullYear() method gets the year: value in 4 digits.
				  The getTime() method returns the number of milliseconds since January 1st 1970.
				  The getYear() method returns the result of (getFullYear() - 1900).
*/

/*
Q7: Complete the code to allow the following output to the console:
		16
		3
		<head>
			<script>
				console.log(Math.pow(2,4));
				console.log(Math.sqrt(9));
			</script>
		</head>
			Math.pow(2,4) returns 2 to the power of 4 (and this successfully logs 16 to the console).
			Math.sqrt(9) returns the square root of 9 (and this successfully logs 3 to the console).
			The other options below are incorrect:
				floor(15.8) returns 15: 15.8 is rounded down to its nearest integer.
				ceil(3.2) returns 4: 3.2 is rounded up to its nearest integer.
				ceil(16.5) returns 17: 16.5 is rounded up to its nearest integer.
				abs(2.5) returns 2.5: The absolute value of 2.5 is 2.5, the value is already positive (a minus sign would have been removed if the value was -2.5)
*/

/*
Q8: Which will be the output in the two alert boxes?
	<head>
		<script> 
			 var min = Math.min(23, -3.7, -3.2, 12, 1);
			 var max = Math.max(-2, 7.9, 8.7, 6, 1.1);
			 alert("min value after rounding: " + Math.round(min));
			 alert("max value after rounding: " + Math.round(max));
		</script>
	</head>
		The min() method will return the lowest value, which in this case is -3.7.
		The max() method will return the highest value, which in this case is 8.7.
		The round() method rounds the argument provided to its nearest integer:
			round(-3.7) returns -4
			round(8.7) returns 9	
*/

/*
Q9: Examine the following code and determine if these statements are true or false:
		<script>
			function doesItChange(number, origDate)
			{
				number++;
				origDate.setDate(origDate.getDate() + 1);
			}
			var num = 1;
			var originalDate = new Date();
			doesItChange(num, originalDate);
			alert("num: " + num + "\noriginalDate: " + originalDate);
		</script>
		The number 2 is printed in the alert box. False
		1 day is added to the originalDate and the new date is printed in the alert box. False
			Primitive data types such as number, string, boolean, null and undefined are passed by value.
			This means that, on this occasion, the value of 1 is passed to the doesItChange() function.
			It doesn't matter what is done locally with that value - when the function ends and we later print the value of num, it still contains the value of 1.
			This works slightly differently with reference variables, as they are a reference to a particular object in memory.
			originalDate references this new Date() that was created.
			When the function is invoked, origDate now references the same object in memory.
			If the object is modified in any way, all references to the	object will reflect the change, as they are all looking at the same object.
			Pass by value can be seen as a snapshot of the value being used	elsewhere in the application.
			Pass by reference can be seen as a snapshot of the memory location being used elsewhere in the application.
*/

/*
Q10: Which will be printed in the alert boxes when the code is viewed in a browser?
		<script>
			var martyAndDocPast = new Date("1985");
			var martyAndDocFuture = new Date("2015");
			if(martyAndDocPast < martyAndDocFuture)
			{
				alert("I know you just sent me back to the future, but I'm back. I'm back from the future.");
				alert("Great Scott!");
			}
			else if(martyAndDocPast > martyAndDocFuture)
			{
				alert("Marty! I need you to go back with me!");
				alert("Where?");
				alert("Back to the future!");			
			}
			else
			{
				alert("Time travelling is just too dangerous!");
			}
		</script>
			I know you just sent me back to the future, but I'm back.
			I'm back from the future. Great Scott!
		Any two dates can be compared using the comparison operators.
		As 1985 is less than/before 2015, the code in the if statement is executed.
*/

/*
Q11: Which will be displayed in the alert box?
	   <script>
			var randomDate = new Date(2018,1,7);
			var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			alert("The month is: " + months[randomDate.getMonth()]);
	   </script>
		   Creating the date as we did above, the 1 represents the month and the 7 represents the day.
		   The getMonth() method gets the month, which on this occasion returns the value 1.
		   months[1] will allow the alert to successfully display:
				The month is: Feb
*/

/*
Q12: Which of the following options successfully redefines the variable declared below?
		<head>
			<script> 
				 var x = 1;
				 const y = "y";
				 z = new Date();
			</script>
		</head>
			Given the options, they all successfully redefine a variable:
				x = "1";
				z.setDate(z.getDate() + 1);
				z = "z";
			The exception being:
				y = 1;
					This will throw a TypeError, as it is attempting to redefine a constant.
*/

/*
Q13: What will be displayed in the alert box?
	   <script>
			var x = 1;
			var y = 2;
			function calculate()
			{
				x = 2;
				alert(x + y);
			}
			calculate();
	  </script>
		4
			The variables x and y have been declared and initialised prior to the calculate() function invocation.
			This means that we have the numbers required to perform the addition.
			As the variables x and y are declared outside of a function - they are in scope until the closing script tag, therefore they can be referenced or
			redefined within the function.
			The value of 2 is assigned to x, so alert(x + y) will display 4 in the alert box.
*/

/*
Q14: The code successfully sorts the numbers in the array, true or false?
		<script>
			var numbers = [1, 3, 5, 12, 101, 6];
			numbers.sort();
			for(var lcv = 0; lcv < numbers.length; lcv++)
				console.log(numbers[lcv]);
		</script>
			False
				The sort() method sorts an array alphabetically, not numerically.
				This works well for strings, as 'a' will come before 'b', etc.
				This doesn't work well for numbers though, as 11 is deemed to come before 2 alphabetically.
*/

/*
Q15: Lines 10 & 11 both produce the same output in any browser, true or false?
		<body>
			<script>
				var timestamp = new Date();
				console.log(timestamp);               // line 10
				console.log(timestamp.toString());    // line 11
			</script>
			</body>
				True
					The toString() method converts a date object to a string.
					The toString() method is implicitly called on a date object in HTML and doesn't need to be called explicitly.
					So console.log(timestamp) produces exactly the same output as console.log(timestamp.toString()).
*/

/*
Q16: The value '0' will be displayed in the alert box every time the page is loaded, true or false?
		<body>
			<script>
				var randomNumber = Math.random();
				var flooredRandomNumber = Math.floor(randomNumber);
				alert(flooredRandomNumber);
			</script>
		</body>
			True.
				Math.random() returns a number between 0 and 0.999999999999999.
				Math.floor(randomNumber) returns the value of randomNumber,	rounded down to its nearest integer.
				This will result in the value of 0 always being displayed in the alert box.
*/