// JavaScript source code
/*
Topic 3:
Decisions and Loops

Objectives:
3.1 Evaluate expressions that use logical and comparison operators:
		!=, <, >, <=, >=, !, ==, &&, ||.

3.2 Complete and debug decision statements: 
		Single alternative (if), dual alternative (if else), multiple alternative (switch), nested if. 

3.3 Complete and debug loops:
		for, for...in, while, do while, break, continue.

Review Chapters 10 & 11 of:
JavaScript: 20 Lessons to Successful Web Development, By Robin Nixon
*/

/*
Lesson 10: Controlling Program Flow
Having reached this point in the book, you’ve actually already learned the vast majority of JavaScript.
You should understand how to incorporate it into a web page; the syntax to use; handling numeric variables, strings, and arrays; using operators in expressions
according to their associativity; and you’ve even learned the basics of handling program flow control using the if() and else keywords.
In this lesson, you consolidate your knowledge of the latter so that you can precisely control the flow of program execution.
	The if() Statement:
		You’ve already seen this statement in use a few times, but only	with single-line statements, so here’s the full syntax of an if() statement:
			if(expression)
			{
				// Execute this code, this line...
				// or more lines
			}
		In this example, expression can be any expression at all created using numbers, strings, variables, objects, and operators.
		The result of the expression must be a Boolean value that can be either true or false, such as if (MyVar > 7), etc.
		The curly braces encapsulate the code that must be executed upon the expression evaluating to true, and there can be none, one, or many statements.
*/

/*
	Omitting the Braces:
		To enable you to create short and simple if() statements without having to use braces, they can be omitted if only one statement is to be executed upon
		the expression being true:
			if (Time < 12) document.write(′Good morning′);
		If the code to execute is quite long, you may wish to start it on the following	line, but if you do so, because no curly braces are being used to
		encapsulate the statement, it’s best to indent the statement by a few spaces or a tab, so that it clearly belongs to the if() statement:
			if (Time < 12)
				document.write(′Good morning, how are you today?′);
		Indeed, if you have a really long statement to execute, it can also	be a good idea to split it over several lines at suitable points:
			if (Time < 12)
				document.write(′Good morning. Following is the '
							   + 'list of all your appointments
							   for today. The '
							   + 'important ones are highlighted
							   in bold.')
		Here, I have split the output into three parts by breaking it into three strings, which are displayed one after the other using + operators.
		I also further indented the follow-on lines to clearly indicate	that they belong to the document.write() call.
		However, in my view this has become a borderline case where you	might be better advised to encapsulate the statement within	curly braces, because they
		will ensure there is no ambiguity, and you won’t have to worry about the wrapping of long lines	diminishing the code readability:
			if (Time < 12)
				document.write(′Good morning. Following is the list of
							   all your appointments for today. The
							   important ones are highlighted in bold.')
		Some program editors will automatically indent wrapped-around lines for you (based on the indent at the start of the line),	making the code even more
		readable:
			if (Time < 12)
				document.write(′Good morning. Following is the list of
				all your appointments for today. The important ones are
				highlighted in bold.')
		In this latter case, the program editor will treat all three lines of the statement as a single line, which they are.
		Don’t try to format your code like this using newlines though, as it will split it into multiple lines and cause errors — unless you also break the
		statement into parts, as detailed earlier.
*/

/*
	Positioning of Braces:
		The reason you can lay out your code in a variety of ways is that JavaScript supports the use of tabs, spaces, and newlines	as whitespace, which is
		ignored (other than newlines placed within a statement, which indicate a statement end and can be avoided only by splitting statements into parts).
		Because of this, programmers can choose to place the curly braces wherever they like.
		As you have seen, when I use them, I generally place the opening and closing brace directly under the if() statement’s first character and then indent the
		encapsulated statements:
			if(expression)
			{
				// Execute this code, this line...
				// or more lines
			}
		Other programmers, however, choose to place the opening curly brace	immediately after the if():
			if(expression) {
				// Execute this code, this line...
				// or more lines
			}
		Both of these (and other) types of layout (such as placing the closing curly brace at the end of the final statement) are all perfectly acceptable.
		There are also some less-used layouts used by other programmers, but the preceding examples tend to be the main two.
		I advocate the first type because (even though it requires an extra line of code for each opening brace) it makes the opening braces indent to the level
		of the closing ones, so if you have several nested statements, you can more clearly determine that you have the right number of opening and closing braces
		and that they are all in the right places.
		It also places more vertical whitespace between the expression and the statements that follow.
*/


/*
	The else Statement:
		To accompany the if() statement, there’s also an else keyword, which follows the same rules as if(), except the code following an else is executed only if
		the expression following the if() evaluates to false.
		If the code comprises a single statement, it doesn’t require encapsulating in curly braces, but if it has two or more statements, braces are required.
		You use the else keyword in conjunction with if():
			if(age < 18)
			{
				document.write('You are not an adult.');
			}
			else
			{
				document.write('You are an adult.');
			}
		Because both of these keywords only include a single statement, you can safely omit the braces if you wish:
			if(age < 18)
				document.write('You are not an adult.');
			else
				document.write('You are an adult.');
		Or, if there’s room, you can even move the statements up to	directly follow the keywords:
			if(age < 18)	document.write('You are not an adult.');
			else			document.write('You are an adult.');
		In this instance, I opted to indent the second statement until it lined up underneath the first one.
		This helps make it clear what’s going on at a glance if I were to come back to this code some months later.
		There is another convention regarding braces that I recommend you consider using, which is that if one of the statements in an if()…else construct uses
		braces, then so should the other, even if the other one only has a single statement:
			// Example 1
			if(age < 18)
			{
				document.write('You are not an adult.');
				document.write("Sorry, you can't vote yet.");
			}
			else
			{
				document.write('You are an adult.');
			}
			
			// Example 2
			if(age < 18)
				document.write('You are not an adult.');
			else
			{
				document.write('You are an adult.');
				document.write('You can vote.');
			}
*/

/*
	The else if() Statement:
		You can extend the power of if()…else even further by also incorporating else if() statements, which provide a third option to the original if() statement,
		and which you place before the final else statement (if there is one).
		The following example illustrates how you might use this keyword:
			if		(value < 0)	document.write('Negative');
			else if (value > 0)	document.write('Positive');
			else				document.write('Zero');
		The else if() statement follows the same rules as the if() and else statements with regard to using curly braces to encapsulate	multiple statements.
		Of course, you don’t have to use a concluding else after an if()…else if() construct if you don’t want it.
		For example, if you don’t need to deal with the case of a zero value (perhaps because it is not possible in the code above), use the following:
			if		(value < 0)	document.write('Negative');
			else if (value > 0)	document.write('Positive');
		The purpose of the else keyword is as a catch-all, to trap all possible values that remain and execute the statement(s) attached to	it, if none of the
		preceding statements in the clause are true.
*/

/*
	The switch() Statement:
		The if(), else if(), and else statements are very powerful and comprise much of JavaScript programming.
		But they are not the most efficient method of controlling program flow when there are more than three options to consider.
		For example, imagine there’s an input field on the web page with the following string values from which the user must select their age range:
			0-1, 2-3, 4-6, 7-12, 13-17, 18+
		Now here’s some code you might use to process the value returned by the input, in which a value of 13-17 has been pre-selected for the string variable Age:
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
		Don’t you think all those repeated else if() statements are	rather cumbersome, and the code feels somewhat heavier than it could be?
		Well, the answer is to restructure code such as this using a switch() statement in conjunction with the case and break keywords:
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
		I’m sure you’ll agree that using switch() statements is a lot clearer than a set of sprawling else if()'s.
		To use one, simply place the expression or variable to be tested in the parentheses following the switch keyword, then within a	pair of curly braces,
		provide a number of case statements and an optional default statement.
		Following each case keyword, place one possible value that the switch variable or expression might have.
		In this example, Age can only have string values, but you can equally test for digits or floating point numbers too.
		After the possible value, place a colon followed by the statement(s) to execute if the value matches the switch variable or expression.
		In this example, it’s one or more document.write() statements.
		Once the code following the colon starts executing, it will keep on going, executing statement after statement (ignoring the following case tests), until
		the keyword break, or the closing curly brace at the end of the switch() statement, is encountered.
*/

/*
	Using the break Keyword:
		Because program flow will continue to the end of a switch()	statement (executing all the remaining statements regardless of	any following case keywords),
		you must mark the end of a sequence of statements to be executed, with a break keyword.
		This causes program flow to jump to just after the closing brace of the switch() statement.

	Using the default Keyword:
		In the same way that the else keyword is a catch-all device for	dealing with any other values not caught by if() or else if() statements, you can use the
		default keyword within a switch() statement to catch any values not matched by the case statements.
		In the previous example, because all possible values for Age are tested for, except for 18+, then if none of the case statements match, Age must contain
		a value >= 18.
		Therefore, the default statement is triggered, and the statement following it writes the string 'You are an adult.' to the browser.
		There is no break keyword after the default option in the preceding example, because it is the last statement in the switch() statement, and therefore a
		break keyword is superfluous in this position, it would only add extra, unnecessary code.
		I recommend that you stick with convention and make default the last clause.
*/

/*
	Allowing Fall-Through:
		Sometimes you may not want to use the break keyword because you wish to allow cases to fall through to other cases.
		For example, consider the case of wanting to choose the correct	language to display on a multi-national website.
		Using a simple input field (or even a geolocation program if you want to be really smart), you could return a string containing the user’s country name,
		for example, perhaps out of the following countries:
			Australia, Brazil, France, Germany, Ireland, Portugal, Spain, UK, USA
		Then the code to process the country name in the variable, country, to a language to use in the variable, language:
			switch(country)
			{
				case 'Australia':
				case 'Ireland':
				case 'UK':
				case 'USA':
				default:			language = 'English'
									break
				case 'Brazil':
				case 'Portugal':	language = 'Portuguese'
									break
				case 'France':		language = 'French'
									break
				case 'Germany':		language = 'German'
									break
				case 'Spain':		language = 'Spanish'
			}
		Only after the variable language has been assigned its value is the break keyword used.
		Therefore, if any of the countries Australia, Ireland, UK, or USA are selected, language is set to English, which is also selected (because the default
		keyword is included within the fall-through group of cases) for any other value not tested for by the cases	in the switch() statement.
		A fall-through also occurs for Brazil and Portugal, both of	which countries speak Portuguese, but the remaining countries have different languages and
		don’t use any case fall-throughs.
		Note that there is no break keyword after the final statement, as it is not needed because the end of the switch() has already been reached.
		Yes, I know that many people in the United States speak Spanish, but this is simply an example to explain fall-through.
		If you wanted to cater for that option, though, you could have two country names for the United States: USA English and	USA Spanish, and then simply add a
		fall-through to the ′Spain′ case — while you are at it, you could also add Canada English and Canada French in a similar fashion, to cater for its two
		languages, etc.
*/

/*
	Summary:
		This lesson concludes everything you need to know to write basic JavaScript programs.
		You can now handle data in various ways, including variables and arrays; you are able to use complex operators and expressions; and	now you can direct the
		flow of your programs.
		In the next lesson, therefore, we start to look at more advanced aspects of JavaScript, beginning with putting together various	types of looping constructs.
	
	Self-Test Questions:
		You can find the answers in Appendix A.
		1. With which statement can you have JavaScript do something if an expression is true?
		2. When are curly braces not required in an if() statement?
		3. How can you provide a second option to an if() statement when an expression is false?
		4. How can you extend if() statements to make further tests?
		5. When you wish to test an expression or variable for a range of values and act differently on each, what would be the best statement to use?
		6. What keyword is used in switch() statements to test a value?
		7. What character must follow the value for a case being tested in a switch() statement?
		8. In a switch() statement, which keyword processes all remaining values not specifically handled?
		9. In a switch() statement, what keyword is used to jump out of the switch() to the following statement?
		10. Are braces required to enclose the instructions for each case of a switch() statement?
*/

/*
	Lesson 11: Looping Sections of Code:
		In Lesson 10, you learned all about program flow control, branching, and using if(), else if(), else, and switch() statements.
		These are perfect for altering the program flow according to values	and expressions, but not so good when you need to repetitively execute a process, such
		as processing a document (one word at a time), to find typographical errors.
		This is the type of situation where JavaScript’s looping statements	come into their own.
		With them, you form a loop around a core group of statements and then keep the loop circulating until (or unless) one or more conditions are met, such as
		(in the case of a spelling checker), when the end of the document is reached.
		More than that, the different loop types supported also enable you to pre-assign values to variables used in the loop, or only enter into a loop if a
		certain expression is satisfied.
*/

/*
	Using while() Loops:
		The while() statement provides the simplest type of JavaScript loop:
			“While such-and-such is true, then keep doing so-and-so, until such-and-such is no longer true, or forever if such-and-such is never false.”
				j = 0;
				while(j++ <= 10)
				{
					document.write(j + ' times 10 is ' + j * 10 + '<br/>')
				}
		The above code starts by initializing the variable j to 0.
		This variable is used both to decide when to start looping (and stop looping), and to calculate the times 10 table.
		Then the while() statement tests for j having a value of less than 10.
		The first time around, its value is 0, so the expression evaluates to true.
		The variable j is post-incremented after making the test, by using the ++ increment operator.
		This means that the second time around the loop, j will now have a value of 1.
		Inside the curly braces, there is a single statement, which prints the value in j, some text, then the result of multiplying j by 10.
		Because j was post-incremented after the test at the start of the loop, it now has a value of 1, so the sentence ′1 times 10 is 10′ is output to the browser:
		After the document.write() statement is executed, the end of the loop is reached and so program flow returns to the start of the loop once more, where j
		is once again tested for having a value less than 10.
		Then j is post-incremented, giving it a value of 2.
		Therefore, this time around the loop, j has a value of 2 and so the sentence '2 times 10 is 20' is output to the browser, and the loop goes round another
		time.
		This process continues until j has a value of 10, and the test at the start of the loop therefore no longer results in true, so program execution jumps to
		just after the closing brace of the while() statement.
*/

/*
	Using do...while() Loops:
		With a while() loop, if the test at the start is not satisfied, program execution will not flow into the loop.
		Sometimes, however, you want program flow to go around a loop at least once, in which case it’s necessary to perform the loop test afterward.
		For example, suppose you wish to calculate the factorial of the	number 10 (sometimes displayed mathematically as 10!).
		This involves multiplying all the numbers from 1 to 10 together:
			10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1
		Using a loop to do this is an efficient method of calculating this value, particularly because once the loop has been built, it can be used to calculate
		the factorial of any number.
		And one thing we know for sure about this loop is that it will execute at least once.
		Therefore, a do … while() structure may be best suited:
			j = 10;
			f = 1;
			do
			{
				f *= j--;
			}
			while(j > 0)
				document.write('10! is ' + f);
		One of the neat things about this loop is that f always contains the running total of all previous multiplications.
		So all that’s necessary to do in each iteration is, to multiply f by the current value in j, save that value back into f, and then decrement j:
		As you will see, the *= assignment operator is ideal in this situation, because it performs both the multiplication and the	assignment of the result back
		to f, using a single operator.
		Also, the post-decrement operator applied to j makes for more efficient coding.
		In detail, j is a loop counter that is initialized to the value 10 (because there are 10 numbers to multiply) and f is the factorial which is initialized
		to 1, as the loop will start with the expression:
			f *= j--,
		The first time around the loop will be the equivalent of:
			f = 1 * 10
		The post-decrement operator after the j, ensures each time around the loop the multiplier is decremented by one (but only after the value in j is used in
		the expression).
		Therefore, the second time around the loop, f will now have a value of 10, and j will be 9, so the expression will be equivalent to:
			f = 10 * 9
		On the next iteration, f will have a value of 90 as it enters the loop, and j will be 8, so these two values will be multiplied together and placed back
		into f.
		The expressions evaluated in the loop are, therefore, as follows:
			f = 1		* 10	// Results in 10
			f = 10		* 9		// Results in 90
			f = 90		* 8		// Results in 720
			f = 720		* 7		// Results in 5040
			f = 5040	* 6		// Results in 30240
			f = 30240	* 5		// Results in 151200
			f = 151200	* 4		// Results in 604800
			f = 604800	* 3		// Results in 1814400
			f = 1814400 * 2		// Results in 3628800
			f = 3628800 * 1		// Results in 3628800
		When the expression at the end of the loop (in the while() part) evaluates to false, this means that j is no longer greater than 0, and so the loop is not
		re-entered, and program flow continues at the first instruction following the loop.
		When this example is loaded into a browser, the result shown in	the final line is displayed by the document.write() instruction	that follows the loop.
			10! is 3628800
*/

/*
	Using for() Loops:
		Although the preceding two types of loop structures may seem sufficient for most requirements, they can actually be improved on, especially because you
		must first initialize variables outside of these loops before they are even entered, and then you generally have to increment or decrement at least one
		variable inside the loop, too.
		For these reasons, a third type of loop structure is supported,	the for() loop, and it is one of the most compact and most used	forms of loop structures
		for the following reasons:
			1. It allows you to initialize all the variables you need within the creation of the loop.
			2. It allows you to specify the test condition within the creation of the loop.
			3. It allows you to specify variables to change after each loop	iteration within the creation of the loop.
		Let’s look at how you can do this by rewriting the previous	example:
			for(j = 10, f = 1; j > 0; --j)
			{
				f *= j
			}
			document.write('10! is ' + f)
		Doesn’t that look much simpler than the do … while() version?
		As before, there’s still a single statement inside the loop, but it no longer uses the post-decrement operator, because j is decremented within the setup
		section of the loop.
		Also, there are no variables pre-assigned outside of the loop because that is also handled within the loop setup:
			A for() loop’s setup section (within the parentheses) is divided into three parts that are separated with semicolons.
			Each part performs the following, in order:
				1. Initializes any variables used within the loop.
				2. Performs a test to see whether the loop should be entered.
				3. Changes any variables required after each loop iteration.
		The first and third sections may include more than one statement, as long as you separate them using commas.
		In the first section of the preceding example, j is initialized to a value of 10, and f to a value of 1:
			j = 10, f = 1
		Next comes the loop test:
			j > 0
		And finally j is decremented:
			--j
		With the three sets of arguments inside the brackets looking like this:
			(j = 10, f = 1 ; j > 0 ; --j)
		When the loop is first entered, the variables are initialized (this will not happen in any other iterations).
		Then the test in part 2 of the loop setup is made, and if the expression evaluates to true, the loop is entered.
		Next, the statement(s) in the loop are executed, and then the third section of the loop setup is executed, which in this case decrements j.
		Then, the second time and all subsequent times around the loop,	section 1 of the setup section is skipped and program flow goes	to the third section of
		the loop setup and then to the test in section 2.
		If the test is true, the loop is again entered, the statements in it executed, and then the statements in the third part of the	setup section are executed
		and the loop goes around again if the test still evaluates to true.
		But if the test doesn’t evaluate to true, program flow goes to the code following the loop, which in this case is the document.write() statement, to print
		the calculated factorial value.
		You can also include additional statements to the third argument of a for() loop by separating them with a comma:
			for(j = 10, f = 1; j > 0; --j, ++f)
		Generally, for() loops are so powerful that they have become widespread and you will very rarely find that you need to use a while() or do … while() loop,
		because for() loops can compactly and neatly accomplish almost every type of looping structure you could want in JavaScript.
*/

/*
	Using for(...in...) Loops:
		Using the for(… in …) loop, you can iterate through an array of	existing values in an array named balls:
			balls = ['Cricket', 'Tennis', 'Baseball', 'Hockey', 'Football']
			for(j in balls)
				document.write(balls[j] + '<br/>')
		Here, the array balls[] is populated with five string values, and then the for(…in…) loop iterates through them all, assigning an array index (from 0 to
		that of the index of the final element of the array) to the variable j, which is then used within the loop section to print out the value of each element
		using a document.write() statement, resulting in:
			CricketTennisBaseballHockeyFootball
*/

/*
	Breaking Out of a Loop:
		The break keyword, which I already showed being used with switch() statements in Lesson 10 to stop fall-through of program flow between cases, but the
		break keyword is not exclusive to switch() statements.
		It can also be used inside loops, but why would you want to use a break within a loop?
		Sometimes, you may find that something other than the loop counter requires a loop to be exited, and the break keyword provides a tidy way to do this.
		One reason why you might need to use a break keyword, is when your loop structure has finished processing and it would be wasteful, pointless, or
		incorrect for it to continue looping.
		For example, consider the following code, in which the array, data, is populated with a set of eight unique items of data (in elements 0 through 7), and
		the data is being searched to see if the value 11 can be found:
			data = [1, 23, 16.3, 88.23, 11, 24.46, 30, 99]
			for(j = 0; j < data.length; ++j)
			{
				if(data[j] == 11)
					break
			}
			if(j < data.length)
			{
				document.write('Found at index ' + j);
			}	
			else
			{
				document.write('Not found.');
			}
		A for() loop is being used for the search, and it is simply iterating from element 0 through to the final element index, which can be found by looking up
		the value of data.length (length being a property of all arrays, and the period between	it and the array name is one means by which JavaScript can access
		object properties) and subtracting 1 from it.
		Therefore, as long as the loop variable j, is less than that value, the loop will execute.
		Within the loop, the if() statement tests for whether the value	11 is found in the current element pointed to by the index loop	variable j.
		If it is, then the value being searched for (11) has been found ('Found at index '), and there is no reason to search the array any further.
		Therefore, a break statement is used to break out of the loop and divert program flow to the first statement following it.
		In the final two lines, as long as the value in j is still less	than data.length, it represents the index of the array element that contains the value
		being searched for and displays the fact in the browser, otherwise, the string 'Not found.' is displayed:
			Searching for 11. Found at index 4
			Searching for 17.3. Not found
		When you use the break keyword within a loop that is itself inside one or more other loops, only the current loop will be broken out of, because the break
		keyword applies only to the innermost loop in which it exists.
*/

/*
	The continue Statement:
		The break statement diverts flow to the statement immediately following the loop in which it exists, but sometimes this is too drastic a measure, because
		you may only want to skip the current iteration of a loop and not all remaining iterations.
		When this is the case, you can use the continue statement, which forces program flow to skip over any remaining statements in a loop and to start again at
		the next iteration of the loop.
		One reason for wanting to do this might be, for example, to avoid encountering a division-by-zero error, which could generate invalid results.
		For example, consider the case of some code that must calculate	the reciprocal of all numbers between –5 and 5.
		The reciprocal of a number is found by dividing the value 1 by that number.
		Therefore, if the number happens to be zero, an attempt would be made to divide 1 by 0, which in JavaScript results in the value Infinity, which is not a
		floating point number that can be used in general mathematical expressions, so we need to check for it and remove the possibility:
			for(j = -5; j < 6; ++j)
			{
				if(j == 0)
					continue
				document.write('1/' + j + ' is ' + 1 / j + '<br/>')
			}
		As you can see, when the value 0 is reached for j, nothing is displayed, because the continue keyword has forced the loop to skip to its next iteration:
			1/-5 is -0.2
			1/-4 is -0.25
			1/-3 is -0.3333333333333333333333
			1/-2 is -0.5
			1/-1 is -1
			 1/1 is 1
			 1/2 is 0.5
			 1/3 is 0.3333333333333333333333
			 1/4 is 0.25
			 1/5 is 0.2
*/

/*
	Summary:
	Now that you know how to use the wide variety of looping structures provided by JavaScript, you can begin to develop your own programming style, because it’s
	now possible for you to write most types of code that rely on loops in a number of different ways, and before long, you will begin to settle on the structures
	that fit your way of thinking the best.
	For example, most programmers tend to generally use for() loops, but then they may need to occasionally use the break keyword for special instances, whereas
	those who prefer while() and do…while() loops would rarely need to use break (it’s a matter of personal style).
	Whichever types of loop structures you find yourself migrating toward, in Lesson 12, you’ll discover even more powerful things you can do with JavaScript,
	including writing functions and using global and local variables.

	Self-Test Questions:
	You can find the answers in Appendix A.
	1. When is the condition of a while() loop tested?
	2. When is the condition of a do … while() loop tested?
	3. When is it preferable to use do … while() in place of while()?
	4. Write a simple while() loop to display the 8 times table.
	5. How many arguments does a for() loop require?
	6. How can you include initialization statements in a for() loop?
	7. How can you add additional statements to the third argument of a for() loop?
	8. What does a for(… in …) loop do?
	9. How can you break out of a loop?
	10. How can you skip the current iteration of a loop and move on to the next iteration?
*/

/*
GMetrix Domain 3:
	Pre-Assessment:
	Q1: Which two statements are true of the do loop?
			It always runs at least once.
			It runs once, then checks the condition.
	Q2: The if decision statement checks a condition to see whether it is _ or _, then takes action based on the result.
			True or false.
	Q3: Using a nested if statement is good for checking a condition, given another _ is true.
			Condition.
	Q4: Which two symbols can be used in a situation where multiple expressions are evaluated at once?
			Or(||) & And(&&).
	Q5: In JavaScript, most of the evaluation expressions have two characters, true or false?
			True.
	Q6: Sometimes a loop is asked to list all of the items in an array, and arrays are _-based.
			Zero.
*/

/*
	Videos:
		Logical and Comparison Operators:
			Equals (= & ==):
				Assignment (the equal sign) and a group of operators which performed basic math calculations:
					=, +, -, *, /
				Evaluation Expressions = (Object, Value)
				These return a true or false value:
					==, !=, <>, <=, =>, !, &&, ||
						checkOutExists = false;
						if(checkOutExists == false)

			Not Equals (!=):
				if(checkOutExists != true)

			Not (!):
				if(checkOutExists)
				if(!checkOutExists)

			Greater Than & Less Than (> & <):
				if(hoursEntered < 3)
				if(hoursEntered > 8)

			Greater Than or Equal To & Less Than or Equal To (>= & <=):
				if(hoursEntered <= 3)
				if(hoursEntered >= 8)

			And (&&) & Or (||):
				if(document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked)
				if(document.getElementById('wedgeMute').checked || document.getElementById('pappsMute').checked)
*/

/*
		Decision Statements:
			if():
				If() statements check a condition to see if it is true or false, and it takes action based on the result:
					Condition = if(I hear a song I like on Spotify)
					{
						Action = I will keep listening
					}
				function openCheckOut()
				{
					if(!checkOutExists)
					{
						checkWin = window.open("checkout.htm", "", "width=300, height=300");
						checkOutExists = true;
					}
				}
*/

/*
			else if():
				if(document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked)
				   {
						document.getElementById('tuningList').innerHTML = "You selected both mutes.";
				   }
				else if(document.getElementById('wedgeMute').checked || document.getElementById('pappsMute').checked)
				   {
						document.getElementById('tuningList').innerHTML = "You selected one or more mutes.";
				   }
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
							msg.innerHTML = 'Keep checking back for special offers!'
					  }
					}
				</script>
*/

/*
			nested if():
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
					document.getElementById('tuningList').innerHTML	+= "<br/> A tuning lever and tuning fork is a must-have	for any tuning kit."
				}
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
			What is the main difference between the do loop and the while loop?
				The do loop always runs once, before it checks the while() condition.
				In a while loop, the condition is checked first.
				Make sure you avoid creating an endless loop!
					for(), while() or do{}, break, continue
*/

/*
	Post-Assessment:
		Q1: If the condition on the while loop is false, then what happens to the code on the following lines?
				It never runs.
		Q2: Which evaluation expression means, is this equal to?
				==
		Q3: If a potential customer of an airline website wants to view tickets that are $100 or less, which symbol does a programmer need to use to make that
			option available?
				<=
		Q4: Drag and drop the keywords in the correct order to complete an else if statement:
				if(document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked)
				{
					document.getElementById('tuningList').innerHTML = "You selected both mutes.";
				}
				else if(document.getElementById('wedgeMute').checked || (document.getElementById('pappsMute').checked)
				{
					document.getElementById('tuningList').innerHTML = "You selected one mute.";
				}			   
				else
				{
					document.getElementById('tuningList').innerHTML = "";
				}	
		Q5: Which JavaScript symbol means that something is not equal to a value?
				!=
		Q6: The continue keyword skips _ of the loop based on a	condition.
				One iteration.
		Q7: The following is an if statement, true or false:
				If I play the piano, go dog go.
					False.
		Q8: Which two facts are true of a for loop?
				It runs a set number of times.
				The number of times it runs can be set by a number of elements on a page.
		Q9: Which is the or symbol?
				||
		Q10: What is the condition for an if statement always inside of?
				Parentheses.
		Q11: The symbol, !, is especially useful for evaluating _ situations.
				Boolean.
		Q12: On which date of the month is a discount of 15% off all orders offered?
				The 15th of the month.
		Q13: Which message should appear if the wedge mute check box is selected?
				You selected the wedge mute.
		Q14: How is the while loop defined?
				While this condition is true, run this code.
		Q15: Test the && operator in the code by right-clicking to open the browser, selecting both mute options, and updating the list.
				v
		Q16: The less than or greater than symbols (< & >) in JavaScript are usually tied to a _ statement.
				Conditional.
		Q17: Which is the break date in the displayed code?
				Option B ('November 20, 2021 12:00:00AM')
		Q18: Which of the displayed equations means, set the variable to be equal to false?
				checkOutExists = false
		Q19: If someone wants to see all products $1,000 or above, the >= symbol needs to be used.
				True.
*/

/*
Video Tutorials:
	Expressions and Operators:
		Create expressions.js:
			// Types of Expressions
				// 1: Variable Declaration;
				// let a;					// operator & operand (expression)
			
				// 2: Initializing a Variable;
				// a = 4;

				// 3: Perform an evaluation that returns a single value
				let b = 3;
				let c = 2;
				let a = b + c;
				console.log(a);
			node expressions
				5
		
		Create operators.js:
			// Categories of Operators
				// 1: Assignment: =
				// 2: Arithmetic: + - * / %
				// 3: Increment/Decrement: ++ --
				var a = 1;
				a++;
				console.log(a);
			node operators
				2

		Back to operators.js:
				var a = 1;
				a++;
				console.log(a++);
			node operators
				2

		Back to operators.js:
				var a = 1;
				a++;
				console.log(a++); // post-increment
				console.log(a);		
			node operators
				2
				3

		Back to operators.js:
				var a = 1;
				a++;
				console.log(++a); // pre-increment
				console.log(a);
			node operators
				3
				3

		Back to operators.js:
				var m = 10 % 3;	 // modulus: remainder (10/3 = 3 % 1)
				console.log(m);
			node operators
				1

		Back to operators.js:
				// String '' +
				// Precedence
				var b = (1 + 2) * 3;
				console.log(b);
				// Function invocation operators ()
				// console.log('');
				// Logical AND (&&) and OR (||)
				// Number accessor operator (.)
					console.
				// Code block operators ( )
				// Array element access operators []
*/

/*
	Decision Statements:
		Create decisions.js:
			// if, else if & else statement
			var count = 3;
			if(count == 4)
			{
				console.log("Count is 4.");
			}
			else if (count > 4)
			{
				console.log("Count is greater than 4.");
			}
			else if (count < 4)
			{
				console.log("Count is less than 4.");
			}
			else
			{
				console.log("Count is NOT 4.");
			}

			// switch statement
			let hero = 'Superman';
			switch(hero)
			{
				case 'Superman':
					console.log('Super strength');
					console.log('X-Ray vision');
				case 'Batman':
					console.log('Intelligence');
					console.log('Fighting Skills');
				default:
					console.log('Member of the JLA');
			}
			node decisions:
				Super Strength
				X-Ray Vision
				Intelligence
				Fighting Skills
				Member of the JLA
			
			let hero = 'Batman';
			switch(hero)
			{
				case 'Superman':
					console.log('Super strength');
					console.log('X-Ray vision');
				case 'Batman':
					console.log('Intelligence');
					console.log('Fighting Skills');
				default:
					console.log('Member of the JLA');
			}
			node decisions:
				Intelligence
				Fighting Skills
				Member of the JLA

			let hero = 'Green Arrow';
			switch(hero)
			{
				case 'Superman':
					console.log('Super strength');
					console.log('X-Ray vision');
				case 'Batman':
					console.log('Intelligence');
					console.log('Fighting Skills');
				default:
					console.log('Member of the JLA');
			}
			node decisions:
				Member of the JLA

			let hero = 'Superman';
			switch(hero)
			{
				case 'Superman':
					console.log('Super strength');
					console.log('X-Ray vision');
					break;
				case 'Batman':
					console.log('Intelligence');
					console.log('Fighting Skills');
					break;
				default:
					console.log('Member of the JLA');
			}
			node decisions:
				Super Strength
				X-Ray Vision

			let hero = 'Batman';
			switch(hero)
			{
				case 'Superman':
					console.log('Super strength');
					console.log('X-Ray vision');
					break;
				case 'Batman':
					console.log('Intelligence');
					console.log('Fighting Skills');
					break;
				default:
					console.log('Member of the JLA');
			}
			node decisions:
				Intelligence
				Fighting Skills

			let hero = 'Green Arrow';
			switch(hero)
			{
				case 'Superman':
					console.log('Super strength');
					console.log('X-Ray vision');
					break;
				case 'Batman':
					console.log('Intelligence');
					console.log('Fighting Skills');
					break;
				default:
					console.log('Member of the JLA');
			}
			node decisions:
				Member of the JLA
			
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
			node decisions:
				Intelligence
				Fighting Skills

			// ternary operator
			let a = 1, b = '1';
			let result = (a == b) ? 'equal' : 'not equal';
			console.log(result);
			node decisions:
				equal

			let a = 1, b = '1';
			let result = (a === b) ? 'equal' : 'not equal';
			console.log(result);
			node decisions:
				not equal

			let a = 1, b = '1';
			let result = (a != b) ? 'not equal' : 'equal';
			console.log(result);
			node decisions:
				equal
*/

/*
	Iteration Statements:
		Create iterations.js:
			// for loops
			for(i = 0; i < 10; i++)
			{
				console.log(i);
			}
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

		Back to iterations.js:
			let a = [4, 8, 15, 16, 23, 42];
			for(i = 0; i < a.length; i++)
			{
				console.log(a[i]);
			}
			node iterations:
				4
				8
				15
				16
				23
				42

		Back to iterations.js:
			for(let index = 0; index < array.length; index++)
			{
				const element = array[index];
				console.log(element);
			}
			let a = [4, 8, 15, 16, 23, 42];
			for(let b = 0; b < a.length; b++)
			{
				const c = a[b];
				console.log(c);
			}
			node iterations:
				4
				8
				15
				16
				23
				42

		Back to iterations.js:
			// while loops
			let x = 1;
			while (x < 10)
			{
				console.log(x++);
			}
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

		Back to iterations.js:
			let x = 1;
			while (x < 10)
			{
				console.log(x++);
				if(x == 7)
				{
					break;
				}
			}
			node iterations:
				1
				2
				3
				4
				5
				6			
*/

/*
	Nesting Loops:
		<head>
			<script type="text/javascript">
				document.write("Here is the for() loop: <br/>");
				for(i = 0; i <= 10; i++)
				{
					document.writeln("The value of i is: " + i + "<br/>");
					for(j = 0; j <= 10; j++)
					{
						document.writeln("The value of j is: " + j + "<br/>");
					}
				}
			</script>
		</head>
			Here's the for loop:
			The value of i is 1
			The value of j is 1
			............ j is 2-9
			The value of j is 10
			The value of i is 2
			The value of j is 1
			............ j is 2-9
			The value of j is 10
			The value of i is 3
			The value of j is 1
			............ j is 2-9
			The value of j is 10
			.etc
*/

/*
Supplementary Material:
	Getting Started (Revision):
		Setting up a JavaScript Development Environment (JDE):
			Install multiple browsers (Opera, Firefox, Chrome, IE, etc.)
			The Developer Console can test JavaScript code live.
			Web server (Apache)
			Notepad++, Adobe Dreamweaver, Microsoft WebMatrix.

		Using a JavaScript Console:
			F12 Development Tools in web browser
			Document Object Model (DOM) Explorer
			Console:
				5 * 30
					150
				5 + 5
					10
				alert("Hello.")
					Hello.
			Debugger

		Introduction to Code Spacing and Formatting:
			<script<</script> tags are placed in either the head or body section of a HTML file.
			Spacing is not important in JavaScript, indenting helps programmers to read code:
				<script type="text/javascript">
					alert("Hello.");
					var x = 52;
				</script>

		Methods for Including JavaScript in Web Pages:
			<head>
				<script type="text/javascript">
					alert('JavaScript');
				</script>
			</head>

			<body>
				<script>
					alert('JavaScript');
				</script>
			</body>

			The head section is preferred to the body section.
			src for external JavaScript files must be placed in the head section:

			<head>
				<script src="test.js" type="text/javascript">
					alert('JavaScript');
				</script>
			</head>

		Inserting JavaScript Code:
			// attributes and values in script tag necessary in HTML4
				<!DOCTYPE html public "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
				<html lang="en">
				<head>
					<title>HTML 4.01 JS Insert</title>
				</head>
				<body>
					<p>JavaScript on this web page.</p>
					<script language="JavaScript" type="text/javascript" src="example.js">
						alert("Hello world.");
					</script>
				</body>
				</html>

			// much simpler in HTML5
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<title>HTML 5 JS Insert</title>
				</head>
				<body>
					<p>JavaScript on this web page.</p>
					<script>
						alert("This is an HTML5 page.");
					</script>
				</body>
				</html>

		Creating Variables:
			<body>
				<script>
					var score;		// declaration
					score = 1000;	// initialization
					var age = 38	// combined declaration & initialization

					function outputVars()
					{
						document.getElementById("output").innerHTML = "Score: " + score + "Age: " + age;
					}
				</script>
				<p id="output"></p>
				<button onclick="outputVars()">Output</button>
			</body>

		if() Statements:
			<body>
				<script>
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
				</script>
				<p id="output"></p>
				<button onclick="checkScore()">Check Score</button>
			</body>

		switch() Statements:
			<body>
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
			</body>
*/

/*
	Lesson Test:
		Q1: In what ways can you include JavaScript in web pages?
				Include JavaScript statements between script tags in a HTML file.
				Include script tags at the head element level.
				Include script tags at the body element level.
				Reference an external JavaScript file with the src attribute in a script tag, in the head section.
			
		Q2: You want to display an employee's name based on what the employee number, empNo, is:
				var empNo = EN5625;
				var name;
				function checkEmp()
				{
					switch(empNo)
					{
						case "EN5960":
							name = "Elke Bauer";
						break;
						case "EN5960":
							name = "Elke Bauer";
						break;
						case "EN5960":
							name = "Elke Bauer";
						break;
						...
						break;
						default:
							name = "No match for this employee number."
					}
				}
			
		Q3: Which of the following ways of adding JavaScript are valid for HTML 4.01 documents?
				A script tag with the src attribute.
				A script tag with the language and type attributes.

		Q4: What should you install when setting up a JavaScript development environment (JDE)?
				Several Internet browsers.
				A web server if integrating JavaScript with server-side scripts.
				A text editor or an integrated development environment (IDE).

		Q5: What are some of the recommended practices for JavaScript code spacing and formatting?
				Indent the code with TAB.
				Include a semicolon at the end of every statement.

		Q6: What is the result of the given JavaScript code?
				<body>
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
				</body>
					The script checks whether lap2 is less than lap1.
					If the expression evaluates to true, the first message displays.
					If the expression evaluates to false, the second message displays.

		Q7: Which lines of code are valid ways to declare and initialize a variable in JavaScript?
				var lap1 = 125.59;
				var lap1;
				lap1 = 125.59;

		Q8: What are some of the features of the Internet Explorer 11 developer console?
				Navigating to code by selecting the interface element.
				Generating a report on UI responsiveness.
				Tracking errors and warnings in the console.
				Ability to provide JavaScript input to the console.
				Emulating a Windows Phone browser.
*/

/*
	Loops and Arrays:
		while() and do{}...while() Loops:
			// while()
			<body>
				<script>
					function count()
					{
						var x = 0;
						while(x < 101)
						{
							document.getElementById("output").innerHTML += (x + "<br/>");
							x++;
						}
					}
				</script>
				<p id="output"></p>
				<button onclick="count()">Count</button>
			</body>

			// do{}...while()
			<body>
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
			</body>
*/

/*
		for() Loops:
			<body>
				<script>
					function count()
					{
						for(var i = 0; i < 101; i += 10)
						// declare, initialize, increment/decrement
						{
							document.getElementById("output").innerHTML	+= i + "<br/>";
						}
					}
				</script>
				<p id="output"></p>
				<button onclick="count()">Count</button>
			</body>
*/

/*
		Declaring Arrays:
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
		Looping Through Arrays:
			<body>
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
			</body>
*/

/*
	Lesson Test:
		Q1: You are declaring the students variable as an array.
			Which line of code can you use to complete the array declaration?
				var students =
				["Karen", "Sharon", "Clifford", "Taku", "Latitia"];

		Q2: You want to loop through the animal array and display all the array elements in a list.
			Which piece of code can you use to do this?
				var animal = new Array("lizard", "bear", "spider", "squid", "wolf", "ant");
				function output()
				{
					var len = animal.length;
					for(var i = 0; i < len; i++)
					{
						document.getElementById("output").innerHTML	+= animal[i] + "<br/>";
					}
				}

		Q3: As long as b is less than 50, you want to increment the	value of b by 1.
			What can you use to do this?
				var b = 10;
				while (b < 50)
				{
					document.getElementById("output").innerHTML	+= (b + "<br/>");
					b++;
				}

		Q4: Which line of code uses the correct for loop syntax?
				for(var b = 10; b < 50; b++)
				{
					document.getElementById("output").innerHTML	+= (b + "<br/>");
				}
*/

/*
	Functions:
		Introduction:
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
*/

/*
		Custom Functions:
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

			Alternatively, you can move functions to an external JavaScript file (.js):
				<head>
					<script src="functions.js"></script>
				</head>
			<body>
				<div id="result">
					<button onclick="greetUser()">Greet User</button>
					<button onclick="sayBye()">Say Goodbye</button>
				</div>
			</body>
*/

/*
		Passing Values to a Function:
			<head>
				<script>
					function checkPw(pw)
					{
						if (pw == "chocolate")
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
*/

/*
		Variable Scoping:
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
					document.writeln(myDog3);
				</script>
			</head>
*/

/*
		Array Functions:
			<body>
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
						var output = "The position of Southwest is: " + "index " + airlines.indexOf("Southwest");
						document.getElementById("output").innerHTML = "output";

						var len = airlines.length;
						airlines.sort();
						// airlines.reverse();
						// airlines.push("AeroMexico"); // pushes the new element to the end of the array
						// airlines.pop();				// pops the element off the end of the array
						for(var i = 0; i < len; i++)
						{
							document.getElementById("output").innerHTML = "<br/>" + airlines[i];
						}
					}
				</script>
				<p id="output"></p>
				<button onclick="output()">Output</button>
			</body>
*/

/*
		Anonymous Functions:
			// Common Function
				<head>
					<script type="text/javascript">
						function mathCalc(num1)
						{
							num1 = Math.round(num1);
							alert(num1);
						}
						mathCalc(2.56);
					</script>
				</head>

			// Anonymous Function
				<head>
					<script type="text/javascript">
						var anon1 = function(num1)
						{
							num1 = Math.round(num1);
							alert(num1);
						}
						anon1(25.56);
					</script>
				</head>
*/

/*
	Lesson Test:
		Q1: Which piece of code can you use to declare a function that accepts the value passed by the input element?
				<head>
					<script>
						function checkPass(pw)
						{
							if(pw == "something")
							{
								document.getElementById("pwStatus").innerHTML = "Password Correct.";
								document.getElementById("password").style.backgroundColor = "rgb(255,255,255)";
							}
							else
							{
								document.getElementById("pwStatus").innerHTML = "Password Incorrect!";
								document.getElementById("password").style.backgroundColor = "rgb(225,0,0)";
							}
						}
					</script>
				</head>
				<body>
					Password: <input type="password" id="password" onchange="checkPass(this.value)"/>
					<output id="pwStatus"></output>
				</body>

		Q2: Which statements describe anonymous functions in JavaScript?
				They are functions with no name.
				They are assigned to a variable.
				They use the function keyword.
				They are reusable.
				They are dynamically declared at runtime.

		Q3: Match the array functions to their purposes:
				sort		=	arranges elements of an array from A-Z (not suitable for numbers).
				indexOf		=	retrieves the index number of an element inside an array
				reverse		=	reverses the order of the elements inside an array
				push		=	adds an element to the end of an array
				pop			=	removes the last element from an array

		Q4: Which statements describe how variable scoping works in JavaScript?
				A global variable is accessible anywhere inside its program.
				A local variable is accessible inside the function in which it has been declared.
				A local variable can be accessed outside its function, by performing a method call on the function.				

		Q5: Complete the declaration for a JavaScript function called myBike:
				<script>
					function myBike()
					{
						// stuff
					}
				</script>

		Q6: Which statements describe how to create functions in JavaScript?
				The function name is preceded by the keyword, function.
				The function name is followed by a pair of round brackets ().
				The body of the function is enclosed in curly braces {}.
*/

/*
	Objects:
		Creating Custom Objects:
			<head>
				<script type="text/javascript">
					var dog = new Object();

					// objectName.property = "value";
					dog.name = "Bongo";
					dog.gender = "male";
					dog.age = 3;
					dog.breed = "corgi";

					document.writeln("The dog's name is: " + dog.name + "<br/>"
									  + "The dog's gender is: " + dog.gender + "<br/>"
									  + "The dog's age is: " + dog.age + "<br/>"
									  + "The dog's breed is: " + dog.breed + "<br/>");
				</script>
			</head>
*/

/*
		The for...in Loop:
			<script type="text/javascript">
				var dog = new Object();

				// objectName.property = value;
				dog.name = "Bongo";
				dog.gender = "male";
				dog.age = 3;
				dog.breed = "corgi";
				dog.trained = true;

				document.writeln("The dog's name is: " + dog.name + "<br/>"
								+ "The dog's gender is: " + dog.gender + "<br/>"
								+ "The dog's age is: " + dog.age + "<br/>"
								+ "The dog's breed is: " + dog.breed + "<br/>");
					
				// for(property in object)
				for(x in dog)
				{
					document.writeln(dog[x] + "<br/>");
				}
			</script>
*/

/*
		Constructor Functions:
			<script type="text/javascript">
				function Car(model, distanceMoved, timeElapsed)
				{
					this.model = model;
					this.distanceMoved = distanceMoved;
					this.timeElapsed = timeElapsed;
				}
				var myCar = new Car("Audi", 120, 1.2);

				document.writeln("The model of the car is: " + myCar.model + "<br/>"
								  + "The distance travelled is: " + myCar.distanceMoved + "<br/>"
								  + "The time elapsed is: " + myCar.timeElapsed + "<br/>");
			</script>
*/

/*
		Object Methods:
			<script type="text/javascript">
				function Car(model, distanceMoved, timeElapsed)
				{
					this.model = model;
					this.distanceMoved = distanceMoved;
					this.timeElapsed = timeElapsed;

					// anonymous function to calculate velocity (object & method)
					this.velocity = function()
					{
						var result = this.distanceMoved / this.timeElapsed;
						return result;
					}
				}
				var myCar = new Car("Audi", 120, 1.2);

				document.writeln("The model of the car is: " + myCar.model + "<br/>"
								  + "The distance travelled is: " + myCar.distanceMoved + "<br/>"
								  + "The time elapsed is: " + myCar.timeElapsed + "<br/>"
								  + "The velocity is: " + myCar.velocity() + "km/h");
			</script>
*/

/*
		Prototyping:
			<script type="text/javascript">
				function Car(model, numCylinders, horsepower)
				{
					this.model = model;
					this.numCylinders = numCylinders;
					this.horsepower = horsepower;
				}
				// use prototyping to add a property
				Car.prototype.color = "red";
				// use prototyping to add a method
				Car.prototype.reportInfo = function()
				{
					document.writeln("This model is the " + this.model + ", which has a " + this.numCylinders + "-cylinder engine and "
									  + this.horsepower + " BHP " + ", and the colour is " + this.color + ".");
				}
				var honda = new Car("CRV", "4", "185");
				honda.color = "blue";
				honda.reportInfo();
				// "This model is the CRV, which has a 4-cylinder engine and 185 BHP, and the colour is blue."
			</script>
*/

/*
		How to Obtain the Attribute of an Object:
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
				<div id="value1">
					<br/>
				</div>
				<br/>
			</form>
		</body>
*/

/*
		Inheritance and Extending Classes:
			<script type="text/javascript">
				function Car(make, model, transmission)
				{
					this.make = make;
					this.model = model;
					this.transmission = transmission;
					this.reportStats = function()
					{
						return("Make: " + this.make + "Model: " + this.model);
					}
				}
				function SUV(make, model, transmission. mpg)
				{
					this.mpg = mpg;
					this.carInfo = Car;
					this.carInfo(make, model, transmission);
				}

				// allowing inheritance
				SUV.prototype = new Car();
				SUV.prototype.getMPG = function()
				{
					return(" The SUV MPG is " + this.mpg);
				}
				mySUV = new SUV("Kia", "Sportage", "Manual", 32);
				myCar = new Car("Volkswagen", "Jetta", "Automatic");

				document.writeln(mySUV.reportStats());
				document.writeln(myCar.getMPG());
			</script>
*/

/*
	Lesson Test:
		Q1: You want to create a method for the bicycle constructor function that calculates the average speed of a specific bicycle object.
			Which line of code can you use to declare this method?
				function bicycle(model, distance, time)
				{
					this.model = model;
					this.distance = distance;
					this.time = time;
					this.speed = function()
					{
						var result = this.distance / this.time;
						return result;
					}
				}
				// 	this.speed = function()

		Q2: You want mountainBike objects to inherit characteristics of bicycle objects:
				function bicycle(model, frameSize, gearNumber)
				{
					this.model = model;
					this.frameSize = frameSize;
					this.gearNumber = gearNumber;
				}
				function mountainBike(model, frameSize, gearNumber, wheelSize)
				{
					this.wheelSize = wheelSize;
					this.bikeInfo = bicycle;
					this.bikeInfo(model, frameSize, gearNumber);
				}
				mountainBike.prototype = new bicycle();

		Q3: Complete the code to add a method to the bicycle constructor function.
			Assign the method to the speed variable as an anonymous	function:
				function bicycle(model, distance, time)
				{
					this.model = model;
					this.distance = distance;
					this.time = time;
				}
				bicycle.prototype.speed = function()
				{
					var result = this.distance / this.time;
					return result;
				}
			
		Q4: You want to create several custom objects that have the	same properties but different values.
			What's the most efficient thing to use to create the objects?
				A constructor function.

		Q5: Which line of code could you use to create a custom	object called "athlete"?
				var athlete = new Object();

		Q6: Complete the code to allow the bicycle function to get information on an HTML element by referencing its id	attribute.
				function bicycle()
				{
					var b = document.getElementById("myID").value;
				}

		Q7: Which type of loop can you use to retrieve object properties when their names are unknown?
				for...in
*/

/*
	Language Features (Revision):
		Basic Data Types:
			Undefined Variables:
				<script type="text/javascript">
					var x;							// undefined
													// 10, "Hello", true
					if(typeof x === 'undefined')
					{
						alert('x is undefined);
					}
					else
					{
						alert('x = ' + x + '; ' + typeof x);
					}
				</script>
*/

/*
			Null Variables:
				<script type="text/javascript">
					var x = {};
					x = null;
					alert('x = ' + x + '; x is of type: ' + typeof x);
				</script>
*/

/*
			Regular Expressions:
				<head>
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
				</head>
*/

/*
			Substrings:
				<head>
					<script type="text/javascript">
						var str = 'Hello world!';
						var n = str.substr(2, 3);
						document.writeln("This is the result of the substr method: " + n + "<br/>");
							// prints llo (starting at index 2, then printing 3 characters (indexes 2-4))
						var m = str.substring(2, 4);
						document.writeln("This is the result of the substring method: " + m + "<br/>");
							// prints ll (starting at index 2, then printing the 4th character)
					</script>
				</head>
*/

/*
			Formatting Strings:
				<head>
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
				</head>
*/

/*
			The Number Object:
				<head>
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
				</head>
*/

/*
			The Math Object and Random Numbers:
				<head>
					<script type="text/javascript">
						function rollDice()
						{
							var num1 = Math.floor((Math.random() * 6) + 1);
							var num2 = (Math.random() * 6) + 1;
							var results = document.getElementById("div1");
							results.innerHTML = "Die #1 is: " + num1 + "<br/>" + "Die #2 is: " + num2;
						}
					</script>
				</head>
				<body>
					<label>Results:</label>
					<div id="div1"></div>
					<button name="button1" onclick="rollDice()">
						Roll
					</button>
				</body>
*/

/*
			Getting Date and Time:
				<head>
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
				</head>
*/

/*
			The Boolean Object:
				<head>
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
				</head>
*/

/*
	Lesson Test:
		Q1: You want to generate a random number between 1 and 10, but you want the result rounded down to its nearest integer:
				var myRandomNum = Math.floor((Math.random() * 10) + 1);

		Q2: Which options will create Boolean values?
				b = Boolean(0);
				t = false;

		Q3: Complete the code to create a regular expression using the Regular Expression object that searches for an instance of the word 'Dominate'.
				var myTestRe = new RegExp("dominate", "i");

		Q4: Complete the code to format the variable myValue1 to two decimal places and assign it to the variable myValue2.
				var myValue1 = 17.268745;
				var myValue2 = myValue1.toFixed(2);

		Q5: Which statement describes null variables?
				Null variables strip the value and type from a variable.

		Q6: Given the variable testStr, which substring method will	return the substring 'pit' as the variable result?
				var testStr = "Jupiter is the largest planet";
				var result = testStr.substring(2, 5);

		Q7: You want your site to present the current date on its homepage using locale conventions:
				var d = new Date();
				var tday = d.toLocaleDateString();

		Q8: Which statement regarding undefined variables is accurate?
				Undefined variables can be used to check if an event has been triggered in your code.

		Q9: Remove the whitespace from the string t, and set it as the variable f:
				var t = "		There should be no spaces at the start or							end                    ";
				var f = t.trim(); 
*/

/*
	Controlling Program Flow:
		Nested if() Statements:
			<head>
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
			</head>
*/

/*
		Nesting Loops:
			<head>
				<script type="text/javascript">
					document.write("Here's the for loop: <br/>");
					for(i = 1; i <= 10; i++)
					{
						document.writeln("The value of i is: " + i + <br/>");
						for(j = 1; j <= 10; j++)
						{
							document.writeln("The value of j is: " + j + <br/>");
						}
					}
				</script>
			</head>
				// Here's the for loop:
				// The value of i is: 1
				// The value of j is: 1
				// ............ j is: 2-9
				// The value of j is: 10
				// The value of i is: 2
				// The value of j is: 1
				// ............ j is: 2-9
				// The value of j is: 10
				// The value of i is: 3
				// The value of j is: 1
				// ............ j is: 2-9
				// The value of j is: 10

		break and continue:
			// break
			<head>
				<script type="text/javascript">
					var x = 10;
					out: for(y = 0; y < 10; y++)
					{
						document.write(y + "<br/>");
						myinnerloop:
							do
							{
								x += 1;
								document.write(x + "<br/>");
								if(x == 12)
								{
									break myinnerloop;
								}
							}
							while(x <= 15);
					}
				</script>
			</head>
				// 0
				// ...
				// 12
				// 1
				// 13
				// ...
				// 16
				// 2
				// 17
				// 3
				// 18
				// 4
				// 19
				// 5
				// 20
				// 6
				// 21
				// 7
				// 22
				// 8
				// 23
				// 9
				// 24

			// continue
			<head>
				<script type="text/javascript">
					var x = 10;
					out: for(y = 0; y < 10; y++)
					{
						document.write(y + "<br/>");
						myinnerloop:
							do
							{
								x += 1;
								document.write(x + "<br/>");
								if(x == 12)
								{
									continue myinnerloop;
								}
							}
							while(x <= 15);
					}
				</script>
			</head>
				// 0
				// ..
				// 16
				// 1
				// 17
				// 2
				// 18
				// 3
				// 19
				// 4
				// 20
				// 5
				// 21
				// 6
				// 22
				// 7
				// 23
				// 8
				// 24
				// 9
				// 25

			// break out
			<head>
				<script type="text/javascript">
					var x = 10;
					out: for(y = 0; y < 10; y++)
					{
						document.write(y + "<br/>");
						myinnerloop:
							do
							{
								x += 1;
								document.write(x + "<br/>");
								if(x == 12)
								{
									break out;
								}
							}
							while(x <= 15);
					}
				</script>
			</head>
				// 0
				// 11
				// 12
*/

/*
		The Conditional Operator:
			<body>
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
						//TERNARY OPERATOR; x >= 21 ? alert("Welcome to the Beer Festival!") : alert("Sorry, you need to be at least 21!");
					}
				</script>
				<form>
					Number 1
					<input type="text" name="num1" /> <br/>
					<input type="button" name="button1" onclick="conditionalTest(num1.value)" value="Test"/>
				</form>
			</body>
*/

/*
	Lesson Test:
		Q1: Complete the code that rewrites this if()...else if() statement using conditional operators.
				if(time < 12)
				{
					alert("Morning!");
				}
				else
				{
					alert("Afternoon!");
				}
				time < 12 ? alert("Morning!") : alert("Afternoon!");

		Q2: Complete the nested if statement.
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
				
		Q3: Which statement about nested loops in JavaScript is	accurate?
				The outer loop changes only after the inner loop is completely finished.

		Q4: Complete the code to break the loop after 'The number is now 3' is output.
				var i;
					for(i = 0; i < 10; i++)
					{
						if(i == 4)
						{
							break;
						}
					document.write("The number is now " + i + "<br/>");
					}
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
		Using External Code Files:
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
	Lesson Test:
		Q1: Complete the code to retrieve the file saleslist2014.xml using JavaScript.
				var xmlhttp = new XMLHTTPRequest();
				var url = "saleslist2014.xml";
				xmlhttp.open("GET", url, false);
				xmlhttp.send();
				var xmlDoc = xmlhttp.responseXML;

		Q2: Complete the code to access the external JavaScript file, myjavascript.js:
				<script src="myjavascript.js" type="text/javascript"></script>
*/

/*
	Events:
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
				<button onclick="buttonClicked()">Event Old</button>
				<button id="eventNew">Event New</button>
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
	Lesson Test:
		Q1: You've created two functions that change the color of text when the mouse pointer is moved onto, and out of, the desired element.
			Add the event handlers for the mouseOver() and mouseOut() functions to the paragraph tag.
				<p id="myColorfulText" onmouseover="mouseOver()" onmouseout="mouseOut()">
					Click the text to mess with its color!
				</p>
				<script>
					function mouseOver()
					{
						document.getElementById("myColorfulText").style.color = "blue";
					}
					function mouseOut()
					{
						document.getElementById("myColorfulText").style.color = "orange";
					}
				</script>

		Q2: You've created a function that reports back what kind of event has occurred.
			Complete the code to trigger the function from the html.
				<script>
					function myTestEvent(event)
					{
						alert(event.type);
					}
				</script>
				<body>
					<p onclick="myTestEvent(event)">
						Click this paragraph and find out what type of event occurred.
					</p>
				</body>

		Q3: Complete the code to use the addEventListener() method to attach a click event to a button.
				<script>
					document.getElementById("myBtn").
					addEventListener("click", sayHello);
					function sayHello()
					{
						alert("Hello!");
					}
				</script>
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
						testTry();
						// Invalid calls, functions or methods in the code
						TestT();
					}
					catch(exception)
					{
						// Determine whether or not the browser is IE or Firefox
						if(exception.description == null)
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
							if(value <= 5)
								throw new Error("Please submit a minimum value of at least 5.");
							if(value >= 100)
								throw new Error("Please submit a value that does not exceed 100.");
						}
						catch(e)
						{
							// determine whether or not the browser is IE or Firefox
							if(e.description == null)
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
	Lesson Test:
		Q1: What will the result of the code be?
				<p id="trycatchdemo"></p>
				<script>
					try
					{
						allert("Hello there!");
					}
					catch(err)
					{
						document.getElementById("trycatchdemo").innerHTML = err.message;
					}
				</script>
					// An undefined error will return, due to misspelling of alert as allert!

		Q2: Which option describing throw statements is accurate?
				The throw statement allows you to create a custom error.
*/

/*
	Other JavaScript Features:
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
				<input type="button" value="Stop Alert"	onclick="cancelAlert()" />
				<br/>
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

/*
	Lesson Test:
		Q1: Which option describes the function of the stack property?
				The stack property gets/sets the error stack as a string containing the stack trace frames.

		Q2: Complete the code to encode the URL contained in the variable uri.
				<p id="printEncoded"></p>
				<script>
					function myFunction()
					{
						var uri = "http://www.diallonics.com/";
						var res = encodeURIComponent(uri);
						document.getElementById("printEncoded").innerHTML = res;
					}
				</script>

		Q3: Complete the code so that two seconds after the button has been clicked, the alert appears.
				<p>
					Click "Press me". Wait two seconds and you'll see an alert telling you "Two	seconds have passed."
				</p>
				<button onclick="_(function()
				{
					alert('Two seconds have passed');
				}
				, 2000);">
					Press me
				</button>

		Q4: Add a comment underneath the opening <script> tag that says 'This is the try statement'.
				<p id="trycatchdemo"></p>
				<script>
					// This is the try statement.
					try
					{
						alert("Hello there!");
					}
					catch(err)
					{
						document.getElementById("trycatchdemo").innerHTML = err.message;
					}
				</script>
*/

/*
Quiz (16Q, 90s per Q), 24 mins:
Q1: Sorry, the ski trip is only available in the winter.
	Drag and drop the correct options below in order to complete the code which produced the above output.
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

Q2: Which will be output to the console?
		<body>
			<script>
				var a = 10;
				var b = 20;
				var c = false;
				console.log(a == b);	// prints false
				console.log(a != b);	// prints true
				console.log(a < b);		// prints true
				console.log(b > a);		// prints true
				console.log(a <= b);	// prints true
				console.log(a >= b);	// prints false
				console.log(! c);		// prints true
			</script>
		</body>

Q3: Which will be output to the console?
		<body>
			<script>
				var a = 10;
				var b = 20;
				var c = 30;
				console.log(a <= b && b >= c);	// prints false
				console.log(c >= b && b >= a);	// prints true
				console.log(a <= b || b >= c);	// prints true
				console.log(c >= b || b >= a);	// prints true
			</script>
		</body>

Q4: A person should only be allowed to enter the pub if:
		They are in a sober state,
		They are aged 18 or over.
	Select the correct logical operator from the drop-down menu to ensure that this logic is correct:
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

Q5: A for loop was used to create the output shown below:
		x=0
		x=1
		x=2
		x=3
		x=4
	Fill in the blanks in the loop shown below to reproduce the output shown above:
		<script>
			for(x = 0; x < 5; x++)
			{
				console.log("x=" + x);
			}
		</script>

Q6: A for loop was used to create the output shown below:
		0
		1
		2
		3
		4
	Select the option from the drop down menu which will produce the output shown above:
		<script>
			for(x = 0; x < 10; x++)
			{
				if(x == 5)
				{
					break;
				}
				else
				{
					console.log(x);
				}
			}
		</script>

Q7: A for loop was used to create the output shown below:
		0
		1
		2
		3
		4
		6
		7
		8
		9
	Select the option from the drop down menu which will produce the output shown above:
		<script>
			for(x = 0; x < 10; x++)
			{
				if(x == 5)
				{
					continue;
				}
				else
				{
					console.log(x);
				}
			}
		</script> 

Q8: Complete the code so that each item in the array is displayed:
		<script>
			var courses = new Array("HTML5", "JavaScript", "CSS");
			var x = 0;
			var y = courses.length;
			while(x < y)
			{
				document.writeln(courses[x]);
				x++;
			}
		</script>
			// Arrays are zero-based (starting at index 0).
			// Using 'while(x <= y)' expects index 3 in the array, but that does not exist (length property is not zero-based).

Q9: Given the code below, which message will be displayed?
		<body>
			<script>
				var temperature = 0;
				var sunnyDayMessage = "wear your sun hat!";
				var mildDayMessage = "you don't need to wear any hat!";
				var snowyDayMessage = "wear your snow hat!";

				if(temperature <= 0)
				{
					document.write(snowyDayMessage);
				}
				else if((temperature >= 0) && (temperature <= 10))
				{
					document.write(mildDayMessage);
				}
				else
				{
					document.write(sunnyDayMessage);
				}
			</script>
		</body>
			// wear your snow hat!

Q10: Given the code below, which will be output to the console?
		<body>
			<script>
				var x = 2;
				switch(x)
				{
					case 1:
						console.log("1");
					case 2:
						console.log("2");
					case 3:
						console.log("3");
					default:
						console.log("None of the above!");
				}
			</script>
		</body>
			// None of the above.
			// Case 2 & Case 3 are correct initially.
			// No break keywords in code, so the default is correct.

Q11: Given the code below, which will be output to the console?
		<script>
			var day = "Monday";
			switch(day)
			{
				default:
					console.log("It's a weekday!");
					break;
				case: "Saturday"
				case: "Sunday"
					console.log("It's the weekend!");
			}
		</script>
		/*
			The code contains syntax errors.
			For the case labels, the colons have been placed in the	wrong positions (they should be placed after the specified value).
			Therefore, the web page fails to render because of the above syntax errors in JavaScript, fixed below:
				switch(day)
				{
					default:
						console.log("It's a weekday!");
						break;
					case "Saturday":
					case "Sunday":
					  console.log("It's the weekend!");
				}
			
*/

/*
Q12: How many times is the number 15 displayed in the output?
		<body>
			<script>
				var x = 10;
				var y = 5;
				while(x > y)
				{
					document.writeln(x + y);
					x--;
					y++;
				}
			</script>
		</body>
			// 10 > 5 ... 9 > 6  ... 8 > 7  ... 7 > 8 x, therefore, the number 15 is displayed 3 times.
*/

/*
Q13: Given the code below, which will be output to the document?
		<body>
			<script>
				var x = 4;
				do
				{
					document.writeln(--x);
				}
				while(x > 4);
			</script>
		</body>
				// The do{}...while() loop will always execute at least once. So then we will decrement x by 1, to give us var x = 3.
				// The condition in the loop still evaluates as false (4 > 4 && 3 > 4), the loop will not run, so our answer is 3.
*/

/*
Q14: Which output does the script tag in the code below produce?
		<script>
			var animals = ["Chimp", "Panda", "Canary", "Dog"];
			for(x = 0; x < animals.length; x++)
			{
				document.writeln(animals[++x]);
			}
		</script>
			The variable x is initialized at 0.
			The variable x is then pre-incremented by 1 inside the for() loop prior to the document.write() expression.
			In the first iteration of the loop, we access the value stored at index 1 of the array, not index 0:
				document.writeln(animals[1]); // prints Panda
			The variable x is then post-incremented by 1 when it exits & re-enters the for() loop, giving us a value of 2.
			The variable x is then pre-incremented by 1 inside the for() loop prior to the document.write() expression.
			In the second iteration of the loop, we access the value stored at index 3 of the array:
					document.writeln(animals[3]); // prints Dog
			The loop then terminates as we have reached the end of the array.
			Therefore, the answer is Panda Dog.
*/

/*
Q15: Which output does the script tag in the code below produce?
		<script>
			var animals = ["Chimp", "Panda", "Canary", "Dog"];
			for(x = 0; x < animals.length; x++)
			{
				document.writeln(animals[x++]);
			}
		</script>
			The variable x is initialized at 0.
			In the first iteration of the loop, we access the value stored at index 0 due to the post-increment operators:
				document.writeln(animals[0]); // prints Chimp
			The variable x is then post-incremented by 1, when it prints the document.write() and when exiting the for() loop, giving us a value of 2.
			In the second iteration of the loop, we access the value stored at index 2 of the array:
					document.writeln(animals[2]); // prints Canary
			The loop then terminates as we have reached the end of the array.
			Therefore, the answer is Chimp Canary.
*/

/*
Q16: Given the code below, the output will be "Sorry, you do not qualify for a pension!". Is this true or false?
		<body>
			<script>
				var qualifyForPension = false;
				if(qualifyForPension = true)
				{
					document.write("You qualify for a pension!");
				}
				else
				{
					document.write("Sorry, you do not qualify for a pension!");
				}
			</script>
		</body>
			= is for assignment, whereas == is for comparison.
			The value true is assigned to the variable, so the if statement evaluates the value in the variable (now set to true).
			So the output is "You qualify for a pension!", which means the code above is false when the output is "Sorry, you do not qualify for a pension!"
*/