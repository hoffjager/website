// Topic 4: The Document Object Model (DOM)

/*
	Interacting with the Document Object Model
	The Document Object Model (DOM) separates the different parts of an HTML document into a hierarchy of objects, each one having its own properties.
	The term property is used for referring to an attribute of an object, such as the HTML it contains, its width and height, etc:
		1. The outermost object possible is the window object, which is the current browser window, tab, iframe, or popped-up window.
		2. Underneath this is the document object, of which there can be more than one (such as several documents loaded into different iframes	within a page).
		3. Inside a document, there are other objects such as the head and body of a page.
			i. Within the head, there can be other objects such as the title and meta objects, as well as style and script tags.
			ii. Within the body, there exist numerous other	objects, including headings, anchors, forms, etc.
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
*/

/*
	Accessing the DOM from JavaScript:
		document.title = ′An example web page′;		// changes the document’s title to 'An example web page'
		document.forms.login.method = ′get′;		// changes the form method type of 'post', to 'get'
*/

/*
	Using the getElementById() Function:
		<img src="dad.jpg" id="image1" />
		<script>
			document.getElementById("image1").src = "mom.jpg";	// dad.jpg image is replaced with mom.jpg, via the "image1" ID from the <img/> tag 
		</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		<input name="name" type="text" value="Jane" id="name" />	// the "name" ID 
		<script>
			document.getElementById("name").value = "Mike";			// changes the value from Jane to Mike, via the "name" ID in the <input/> tag
		</script>
*/

/*
	The Simpler O() Function:
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		<script>
			function O(i)
			{
				return document.getElementById(i);	// document object is incorporated into the O()
			}
		</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		document.getElementById("name").value = "mike";		// long-hand
		O('name').value = "mike";							// short-hand
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		myObject = O(′name′);	  // Instead of manipulating the value of the form input, with the ID of 'name' directly, we create an object from this element, allows the passing to it of element IDs or an existing object.
		myObject.value = "mike"; // Now I can access it as often as I like without ever having to call the O()
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
	There are times when I would also like to pass either an ID name, or an object to the O() function:
		function O(i)
		{
			return typeof i == 'object' ? i : document.getElementById(i); // The argument passed in i (for ID) is analyzed, and if it is the type object, the object is returned. If it is not of that type, it is an ID name, it is looked up and returned as an object with a call to getElementById().
		}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
	The Partner S() Function:
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		<img src="mom.jpg" id="image1" />
		<script>
			O("image1").style.width = "150px"	// long syntax
			S("image1").height = "120px"		// short syntax
			function O(i)
			{
				return typeof i == 'object' ? i : document.getElementById(i);
			}
			function S(i)
			{
				return O(i).style;				// S() places a call to O(), with a .style suffix, now I can use O() for accessing elements by name, and S() for accessing the style attributes of elements by name.
			}
		</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		myObject = O(′name′);	    // Instead of manipulating the value of the form input with the ID of 'name' directly, we create an object from this element, which allows the passing to it of element IDs or an existing object.
		myObject.value = "mike";    // Now I can access it as often as I like without ever having to call the O()
		S(myObject).width = ′100px′ // S() also allows either ID names or objects, like O(), if I have an object called myObject, I can change its width property
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
	Accessing Multiple Elements by Class and The Partner C() Function:
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		<div class="MyClass">
			Div contents
		</div>
		<p class="MyClass">
			Paragraph contents
		</p>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		function C(i)
			{
				return document.getElementsByClassName(i);	// returns an array with all objects that match the class name, so you can access each of the elements individually
			}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		myArray = C(′myClass′) // returns an array with all objects that match the class name, so you can access each of the elements individually, or, en masse via a loop
		for(i in MyArray)
			S(MyArray[i]).textDecoration = "underline";	// setting the array's textDecoration style property to underline
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
	The Difference Between Properties in CSS and JavaScript:
		myObject.style.fontSize = "16pt";					// hyphens (-) are reserved for the subtraction operator in JavaScript
		S(myObject).fontSize = "16pt";						// omit the hyphen from a CSS property and use Camel casing
		myObject.setAttribute(′style’, ’font-size:16pt′)	// setAttribute() requires standard CSS property names
*/

/*
	Summary of the Three Functions:
		// include the code below in an external file named nbfunctions.js:
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
		<script src=′nbfunctions.js’></script> // Place this single line in the <head> of any web page that will access these three functions.
*/

/*
	JavaScript Properties:
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
*/

/*
	Window and Screen Properties:
		Properties		Sets and/or Returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		closed			Returns a Boolean value indicating whether a window has been closed or not.
		defaultStatus	Sets or returns the default text in the status bar of a window. // can be set, only if users have modified their browsers to allow it.
		document		Returns the document object for the window.
		frames			Returns an array of all the frames and iframes in the window.
		history			Returns the history object for the window. // cannot be read from (you can't see where your visitors have been surfing).
		innerHeight		Sets or returns the inner height of a window's content area.
		innerWidth		Sets or returns the inner width of a window's content area.
		length			Returns the number of frames and iframes in a window. // determines how long the history is, back(), forward(), and go() to navigate to specific pages in the history.
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
		status			Sets or returns the text in the status bar of a	window.		   // can be set, only if users have modified their browsers to allow it.
		top				Returns the top browser window.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		window.innerHeight and window.innerWidth // centering in-browser pop-up alerts or confirm dialog windows
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
	The screen object supports the following read properties:
		availHeight, availWidth, colorDepth, height, pixelDepth, width	// great for determining information about the user’s display
		http://tinyurl.com/domproperties
*/

/*
	THE DOM TREE IS A MODEL OF A WEB PAGE:
		BODY OF HTML PAGE
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8" />
					<title>DOM</title>
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
			At the top of the tree, a document node is added, representing the entire page and corresponding to the document object.
			When you access any element, attribute, or text node, you navigate to it via the document node.
		ELEMENT NODES
			HTML elements describe the structure of an HTML page.
			<h1>-<h6> tags indicate headings/titles; <p> tags indicate paragraphs, etc.
			To access the DOM tree, you start by looking for elements, then you can access its text and attribute nodes.
			This is why you start by learning methods that allow you to access element nodes, before learning to access and alter text or attributes.
			Relationships between the document and all of the element nodes are	described using the same terms as a family tree:
				parents, children, siblings, ancestors, and descendants.
			Scripts access and update the DOM tree (not the source HTML file!).
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
			The opening tags of HTML elements carry attributes, and are represented by attribute nodes in the DOM tree.
			Attribute nodes are part of the element that carries them, so they are not children.
		TEXT NODES
			Once you have accessed an element node, you can then reach the text	within that element, stored in its own text node, which cannot have children.
			If an element contains text and another child element, the child element is not a child of the text node, but a child of the containing element.
			The <em> element on the first <li> item, illustrates how the text node is always a new branch of the DOM tree, no further branches come off it.
*/

/*
		STEP 1: ACCESSING ELEMENTS
			SELECTING AN INDIVIDUAL ELEMENT NODE
				1. getElementById(): uses the value of an element's unique id attribute.
				2. querySelector(): uses a CSS selector to return the first matching element.
				3. You can also select individual elements, by traversing from one element to another within the DOM tree.

			SELECTING MULTIPLE ELEMENTS (NODELISTS)
				1. getElementsByClassName(): selects all elements that have the specified class name.
				2. getElementsByTagName(): selects all elements that have the specified tag name.
				3. querySelector(): uses a CSS selector to select all matching elements.

			TRAVERSING BETWEEN ELEMENT NODES
				1. parentNode (li[0] -> ul): selects the parent of the current element node (returning just one element).
				2. previousSibling/nextSibling (li[0] <- li[1] -> li[2]): selects the previous/next sibling from the DOM tree.
				3. firstChild/lastChild (ul -> li[3]): selects the first/last child of the current element.

		Inconsistent browser support for the DOM was a key reason why jQuery became so popular.
*/

/*
		STEP 2: WORK WITH THOSE ELEMENTS
			ACCESSING/UPDATING TEXT NODES
				1. Select the <li> element.
				2. Use the firstChild property to get the text node.
				3. Use the text node's only property (nodeValue) to access the text from the element and to update.

			WORK WITH HTML CONTENT
				Several methods let you create new nodes, add/remove nodes to/from a tree, known as DOM manipulation:
					createElement()
					createTextNode()
					appendChild()/removeChild()
				The innerHTML property allows access to child elements and text content.
				The textContent property is only specific to text content.

			ACCESS OR UPDATE ATTRIBUTE VALUES
				1. className/id lets you get or update the value of the class and id attributes:
					hasAttribute()		checks if an attribute exists.
					getAttribute()		gets its value.
					setAttribute()		updates the value.
					removeAttribute()	removes an attribute.
*/

/*		
	CACHING DOM QUERIES
	DOM queries are methods that find elements in the DOM tree.
	When a script selects an element to access or update, the interpreter must find the element(s) in the DOM tree (whose id attribute = 'one')
	Once it has found the node representing the element(s), you can work with that node, its parent, or any children:
			getElementById('one');
					|
				   body
					|
				   div
				   -|-
			h1	h2		ul	script
			*li	li		li	  li
	When people talk about storing elements in variables, they are storing the location of the element(s) within the DOM tree inside of a variable.
	Here, the properties and methods of that element node work on the variable.
	If your script needs to use the the same element(s) more than once, you can store the location of the element(s) in a variable.
	This saves the browser looking through the DOM tree to find the same element(s) again, this is known as caching the selection:
			var itemOne = getElementById('one');
						|
					   body
						|
					   div
					   -|-
				h1	h2		ul	script
				*li	li		li	  li
	The variable itemOne does not store the <li> element, it stores a reference to where that node is in the DOM tree (using the unique id attribute 'one').
			itemOne.textContent
*/

/*
	ACCESSING GROUPS OF ELEMENT NODES
	If a method can return more than one node, it will always return a NodeList, which is a collection of nodes.
	You then need to select the element you want from this list using an index number (numbering starts at 0 like the elements in an array).
	For example, several elements can have the same tag name, so getElementsByTagName() will always return a NodeList.

	FASTEST ROUTE
	Finding the quickest way to access an element within your web page will make the page seem faster and/or more responsive.
	This usually means evaluating the minimum number of nodes on the way to	the element you want to work with.
	For example, getElementById() will quickly return one element (because no two elements on the same page should have the same value for an id attribute), but
	it can only be used when the element you want to access has an id attribute.

	SELECTING INDIVIDUAL ELEMENTS
	getElementById() is the quickest and most efficient way to access an element, because no two elements can share the same value for their id attribute.
	querySelector() is very flexible because its parameter is a CSS selector, which means it can be used to accurately target many more elements:
		object.method(parameter);
		document.getElementById('one');
			document:
				document refers to the document object, and you always have to access individual elements via the document object.
			.:
				The dot notation (member operator) indicates that the method is being applied to the node on the left of the period.
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
	var el = document.getElementById("one"); // using getElementById() to select the element with an id attribute, and store it in a variable, el.
	el.className = 'cool';					 // using className to change the value of the class attribute to 'cool'
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
		There are times when you will want to work with the same selection of elements several times, so the NodeList can be stored in a variable and re-used:
			1. In a live NodeList, when your script updates the page, the NodeList is updated at the same time.
			   The methods beginning getElementsBy… will return live NodeLists, typically faster to generate than static NodeLists.
			2. In a static NodeList when your script updates the page, the NodeList is not updated to reflect the changes made by the script.
			   The new methods that begin querySelector… (using CSS selector syntax) return static NodeLists, reflecting the document when the query was made.
			   If the script changes the content of the page, the NodeList is not updated to reflect those changes.

			Below, we can see four different DOM queries that all return a NodeList.
			For each query, we can see the elements and their index numbers in the NodeList that is returned:
				1. getElementsByTagName('h1'):
					Even though this query only returns one element, the method still returns a NodeList because of potential for returning more than one element.
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
					This method returns four elements, one for each <li> element on the page that have an id attribute (regardless of their values).
						INDEX NUMBER & ELEMENT
						________________________________
						0  <li id="one" class="hot">
						................................
						1  <li id="two" class="hot">
						................................
						2  <li id="three" class="hot">
						................................
						3  <li id="four">
*/

/*
		SELECTING AN ELEMENT FROM A NODELIST
			There are two ways to select an element from a NodeList (both requiring the index number of the element you want):
			1. The item() method
			2. The array syntax.

		1. THE item() METHOD
		NodeLists have a method called item(), which will return an individual node from the NodeList.
		You specify the index number of the element you want as a parameter of the method (inside the parentheses).
		So programmers often check that there is at least one item in the NodeList before running any code.
		To do this, we use the length property of the NodeList, it tells you how many items the NodeList contains.
		Here you can see that an if statement is used, the condition for the if statement is whether the length property of the	NodeList is greater than zero.
		If it is, then the statements inside the if statement are executed.
		If not, the code continues to run after the second curly brace:

			var elements = document.getElementsByClassName('hot'); // select elements with a class attribute of 'hot', store the NodeList in the elements variable
			if(elements.length >= 1) // using the length property to check how many elements were found, if 1 or more elements with the class 'hot' are found, run the code in the if statement.
			{
				var firstItem = elements.item(0); // storing the first element from the NodeList in a variable called firstItem
			}

		2. ARRAY SYNTAX
		You can access individual nodes using a square bracket syntax similar to that used to access individual items from an array.
		You specify the index number of the element you want inside square brackets that follow the NodeList.
		As with all DOM queries, if you need to access the same NodeList several times, store the result of the DOM query in a variable.
		In the examples on both of these pages, the NodeList is stored in a variable called elements.
		If you create a variable to hold a NodeList, but there are no matching elements, the variable will be an empty NodeList.
		When you check the length property of the variable, it will return the number 0, because it does not contain any elements:

			var elements = document.getElementByClassName('hot'); // creating a NodeList containing elements that have a class attribute of 'hot', and storing in the variable 'elements'.
			if (elements.length >= 1) // if that number is greater than or equal to one, run the code inside the if statement.
			{
				var firstItem = elements.item[0]; // get the first element from the NodeList.
			}	
*/

/*
		SELECTING ELEMENTS USING CLASS ATTRIBUTES
		The getElementsByClassName() method allows you to select elements whose class attribute contains a specific value.
		The method has one parameter: the class name which is given in quotes within the parentheses after the method name.
		Because several elements can have the same value for their class attribute, this method always returns a NodeList:
			JAVASCRIPT	c05/js/get-element-by-class-name.js
			var elements = document.getElementByClassName('hot'); // looking for elements whose class attribute contains 'hot'
			if(elements.length > 2)			// if 3 or more items are found
			{
				var el = elements[2];		// select the third item from the NodeList
				el.className = 'cool';		// change the value of its class attribute
			}
*/

/*
		SELECTING ELEMENTS BY TAG NAME
		The getElementsByTagName() method allows you to select elements using their tag name.
		The element name is specified as a parameter, so it is placed inside the parentheses and is contained by quote marks.
		Note that you do not include the angled brackets that surround the tag name in the HTML (just the letters inside the brackets).
			JAVASCRIPT    c05/js/get-elements-by-tag-name.js
		   var elements = document.getElementsByTagName('li'); // looking for <li> elements in the document, stores the result in a variable called elements
		   if(elements.length > 0)	  // if 1 or more <li> items are found
		   {
			   var el = elements[0];  // select the first <li> item using array syntax
			   el.className = 'cool'; // Change the value of the <li> class attribute
		   }
*/

/*
		SELECTING ELEMENTS USING QUERYSELECTOR (CSS SELECTORS)
		querySelector() returns the first element node that matches the CSS-style selector.
		querySelectorAll() returns a NodeList of all of the matches.
		The CSS selector syntax offers more flexibility and accuracy when selecting an element, than just specifying a class name or a tag name.
		  JAVASCRIPT    c05/js/query-selector.js
		   var el = document.querySelector('li.hot'); // querySelector() only returns the first match
		   el.className = 'cool';
		   
		   var els = document.querySelectorAll('li.hot'); // querySelectorAll returns a NodeList
		   els[1].className = 'cool';					  // The 2nd matching element (the 3rd li) is selected and changed
	
		1: WHEN THE PAGE FIRST LOADS
		 HTML    c05/query-selector.html	// the page starts with three <li> elements that have a class attribute whose value is hot.
		   <ul>
			 <li id="one" class="hot"> <em>fresh</em> figs</li>		// document.querySelector('li.hot') will only return the first match: el.className = 'cool';
			 <li id="two" class="hot">pine nuts</li>
			 <li id="three" class="hot">honey</li>
			 <li id="four">balsamic vinegar</li>
		   </ul>

		2: AFTER THE FIRST SET OF STATEMENTS
		 HTML    c05/query-selector.html
		   <ul>
			 <li id="one" class="cool"> <em>fresh</em> figs</li>
			 <li id="two" class="hot">pine nuts</li>				
			 <li id="three" class="hot">honey</li>				   // document.querySelectorAll('li.hot') will return a NodeList: els[1].className = 'cool';
			 <li id="four">balsamic vinegar</li>
		   </ul>

		3: AFTER THE SECOND SET OF STATEMENTS
		 HTML    c05/query-selector.html
		   <ul>
			 <li id="one" class="cool"> <em>fresh</em> figs</li>
			 <li id="two" class="hot">pine nuts</li>			  // document.querySelector('li.hot') will only return the first match: el.className = 'cool';
			 <li id="three" class="cool">honey</li>
			 <li id="four">balsamic vinegar</li>
		   </ul>
*/

/*
	REPEATING ACTIONS FOR AN ENTIRE NODELIST
		var hotItems = document.querySelectorAll('li.hot'); // the variable, hotItems, contains a NodeList with all <li> items with a class attribute of hot
		for(var i = 0; i < hotItems.length; i++)			// length property of the NodeList indicates the number of elements, dictating the times the loop should run
		{
			hotItems[i].className = 'cool';					// array syntax is used to indicate which item is currently being worked with, using the counter, [i]
		}
		
	LOOPING THROUGH A NODELIST
	It involves finding out how many items are in the NodeList, and then setting a counter to loop through them, one-by-one.
	Each time the loop runs, the script checks that the counter is less than the total number of items in the NodeList.
		JAVASCRIPT    c05/js/node-list.js
		var hotItems = document.querySelectorAll('li.hot'); // the variable, hotItems, contains a NodeList with all <li> items with a class attribute of hot
		if(hotItems.length > 0)								// (hotItems.length == 3)
		{
			for(var i = 0; i < hotItems.length; i++)		// length property of the NodeList indicates the number of elements, dictating the times the loop should run
			{
				hotItems[i].className = 'cool';				// array syntax is used to indicate which item is currently being worked with, using the counter, [i].
			}  
		}
*/

/*
	PREVIOUS & NEXT SIBLING
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
		   var startItem = document.getElementById('two'); // selecting the starting point and finding its siblings: li(0) <= li(1) => li(2)
		   var prevItem = startItem.previousSibling;	   // li(0) <= li(1)
		   prevItem.className = 'complete';				   // changing the value of the sibling's class attribute
		   var nextItem = startItem.nextSibling;		   // li(1) => li(2)
		   nextItem.className = 'cool';					   // changing the value of the sibling's class attribute
*/

/*
	FIRST & LAST CHILD
		HTML    c05/child.html
		<ul>
			<li id="one" class="hot"><em>fresh</em>! figs</li>
			<li id="two" class="hot">pine nuts</li>
			<li id="three" class="hot">honey</li>
			<li id="four">balsamic vinegar</li>
		</ul>
	  JAVASCRIPT    c05/js/child.js
		   var startItem = document.getElementsByTagName('ul')[0]; // selecting the starting point and finding its children
		   var firstItem = startItem.firstChild;				   // ul[0] => li[0]
		   var lastItem = startItem.lastChild;					   // ul[0] => li[3]   
		   firstItem.setAttribute('class', 'complete');			   // changing the value of the first child's class attribute
		   lastItem.setAttribute('class', 'cool');				   // changing the value of the last child's class attribute
*/

/*
	ACCESSING/UPDATING ELEMENT CONTENT
	Each <li> adds some more markup and the fragment of the DOM tree for each list item is very different:
		1. The first <li> just contains text.
		2. The second and third <li> contain a mix of text and an <em> (the DOM tree's structure changes significantly with the <em> in place) 
			<li id="one">figs</li>
			li -> attribute			// an attribute node holding the id attribute ("one")
			|
			text:
			figs					// a child node with the text: figs.		 
	To work with the content of elements, you can:
		Navigate to the text nodes, works best when the element contains only text, and no other elements.
		Work with the containing element, allows you to access its text nodes and child elements, best when they are siblings.
*/

/*
	TEXT NODES
	Once you have navigated from an element to its text node, there is one property that you will commonly find yourself using:
		PROPERTY: nodeValue
			DESCRIPTION: accesses text from node
				<li id="one"><em>fresh</em>figs</li>
						li -> attribute	// <li> is the parent node with its attribute node holding id ("one")
						|
				  em   - - text:	// <em> is added, and it becomes the first child of <li>, <em> has its own child text node, fresh.
				   |	   figs		// the original text node, figs, is now a sibling of the node that represents the <em> element.
				 text:
				 fresh
	
				<li id="one">six<em>fresh</em>figs</li>
						li -> attribute
						|
				 text: - -	text:	// the first child of the <li> is a text node, six, and it has a sibling, <em>, and it has a sibling text node, figs
				   six	|   figs
					   em			// the <em> has a child text node, fresh
						|
					  text:
					  fresh
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
	If you used any of these properties to update the content of the <body> element, it would update the entire web page.
*/

/*
	ACCESSING & UPDATING A TEXT NODE WITH NODEVALUE
			<li id="one"><em>fresh</em> figs</li>
						li -> attribute
						|
				  em   - - text:
				   |	   figs
				 text:
				 fresh
			// document.getElementById('one').firstChild.nextSibling.nodeValue; // accessing the second text node, figs
		1. The <li> element node is selected using the getElementById() method.
		2. The first child of <li> is the <em> element.
		3. The text node is the next sibling of that <em> element.
		4. You have the text node and can access its contents using nodeValue.


*/

/*
	ACCESSING & CHANGING A TEXT NODE
		JAVASCRIPT    c05/js/node-value.js
		var itemTwo = document.getElementById('two');	// getting the second <li> item, storing it in the itemTwo variable
		var elText  = itemTwo.firstChild.nodeValue;		// getting its text content, storing it in the elText variable
		Text = elText.replace('pine nuts', 'kale');		// replacing the text, pine nuts, to kale, via replace()
		itemTwo.firstChild.nodeValue = elText;			// using nodeValue to update the text node
*/

/*
	ACCESSING & UPDATING TEXT WITH TEXTCONTENT & INNERTEXT
			<li id="one"><em>fresh</em> figs</li>
					li -> attribute
					|
			  em   - - text:
			   |	   figs
			 text:
			 fresh
		  // document.getElementById('one').textContent = (fresh figs);
*/

/*
	ACCESSING TEXT ONLY
		JAVASCRIPT    c05/js/inner-text-and-text-content.js
		var firstItem = document.getElementById('one');				// accessing the first <li>
		var showTextContent = firstItem.textContent;				// accessing the value of textContent
		var showInnerText = firstItem.innerText;					// accessing the value of innerText
		var msg = ' <p>textContent: ' + showTextContent + '</p>';	// show the content of these two properties at the end of the list
			msg += '<p>innerText: ' + showInnerText + '</p>';		// show the content of these two properties at the end of the list
		var el = document.getElementById('scriptResults');
		el.innerHTML = msg;
		firstItem.textContent = 'sourdough bread';					// updating the first <li>
*/

/*
	ADDING OR REMOVING HTML CONTENT
		1. THE innerHTML PROPERTY
		innerHTML can be used on any element node, both to retrieve and replace content.
		To update an element, new content is provided as a string, and it can contain markup for descendant elements.
			ADDING CONTENT
				1. Store new content (including markup) as a string in a variable. // var item; item = '<em>fresh</em> figs';
				2. Select the element whose content you want to replace:
						ul
						|
				   ----- -----
				   |	|    |
				   li	li	 li
				   |    |    |
				  text text text:
							 figs
				3. Set the element's innerHTML property to be the new string:
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
			REMOVING CONTENT
				1. You set innerHTML to an empty string.
				2. To remove one element from a DOM fragment (<li> from <ul>), you need to provide the entire fragment, minus that element.
		

		DOM MANIPULATION METHODS
		DOM manipulation easily targets individual nodes in the DOM tree, it can be safer than using innerHTML, but requires more code and can be slower.
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
			3. Add the text node to the element node:
					li
					|
					text
			4. Select the element you want to add the new fragment to:
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
	GET AND SET CONTENT
		var elContent = document.getElementById('one').innerHTML;	// getting content: this holds the string '<em>fresh</em> figs'
		document.getElementById('one').innerHTML = elContent;		// setting content: this adds the content of the above variable to the first <li>

	UPDATING TEXT & MARKUP
		 JAVASCRIPT    c05/js/inner-html.js
		var firstItem = document.getElementById('one');											// stores the first <li> in a variable
		var itemContent = firstItem.innerHTML;													// gets the content of the first <li>
		firstItem.innerHTML = '<a href=\"http://example.org\">'	+ itemContent + '</a>';			// updates the content of the first <li> so it is a link
	As the content of the string is added to the element using the innerHTML property, the browser will add any elements in the string to the DOM.
	If you use attributes in your HTML code, escaping the quotation using the escape key \ can make it clearer that those characters are not part of the script.
*/

/*
	ADDING AN ELEMENT TO THE DOM TREE USING DOM MANIPULATION
		JAVASCRIPT    c05/js/add-element.js
		var newEl = document.createElement('li');				// create a new <li> with createElement(), storing it in the newEl variable
		var newText = document.createTextNode('quinoa');		// create a text node with createTextNode(), storing it in the newText variable
		newEl.appendChild(newText);								// append the new text node to the new element with appendChild()
		var position = document.getElementsByTagName('ul')[0];  // find the position where the new element should be added, storing it in the position variable
		position.appendChild(newEl);							// append the new element into its position
*/

/*
	REMOVING AN ELEMENT FROM THE DOM TREE
	This example uses the removeChild() method to remove the fourth item from the list (along with its contents).
	
		JAVASCRIPT    c05/js/remove-element.js
		var removeEl = document.getElementsByTagName('li')[3]; // find the position where the element should be removed, storing it in the removeEl variable
		var containerEl = removeEl.parentNode; // stores the parent <ul>, that contains the element you want to remove, storing it in the containerEl variable
		containerEl.removeChild(removeEl); // removing the element via removeChild()
				  ul				// Container Element
				   |
		   -----------------
		   |	|    |	   |
		   li	li	 li	   li*		// * Element to be Removed
*/

/*
	COMPARING TECHNIQUES: UPDATING HTML CONTENT
		1: document.write()
	The document object's write() method is a simple way to add content that was not in the original source code to the page, but its use is rarely	advised:
		ADVANTAGES
			It is a quick and easy way to show beginners how content can be added to a page.
		DISADVANTAGES
			It only works when the page initially loads.
			If you use it after the page has loaded, it can:
				1. Overwrite the whole page
				2. Not add the content to the page
				3. Create a new page

		2: document.getElementById("id").innerHTML
	The innerHTML property lets you access/update the entire content of any element (including markup) as a string.
		ADVANTAGES
			1. You can use it to add a lot of new markup using less code than DOM manipulation methods.
			2. It can be faster than DOM manipulation when adding a lot of new elements to a web page.
			3. It is a simple way to remove all of the content from one element (by assigning it a blank string).
		DISADVANTAGES
			1. It should not be used to add content that has come from a user (a username or blog comment), it can pose a significant security risk.
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
	If you add HTML to a page using innerHTML (or several jQuery methods), be aware of Cross-Site Scripting Attacks (XSS).
	XSS involves attackers placing malicious code into a site, where attackers could gain access to users' accounts.
	Websites often feature content created by many different people:
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
	1. This stores cookie data in a variable, which could then be sent to a third-party server:
		<script>
			var adr = http://example.com/xss.php?cookie=' + escape(document.cookie);
		</script>
	2. This shows how a missing image can be used with an HTML attribute to trigger malicious code:
		<img src="http://nofile" onerror="adr='http://example.com/xss.php?' + escape(document.cookie)"; />

	DEFENDING AGAINST CROSS-SITE SCRIPTING (XSS)
		VALIDATE INPUT GOING TO THE SERVER
		1. Only let visitors input the kind of characters they need to when supplying information, this is known as data validation.
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
		3. This can be done in the browser, but must also be done on the server (in case users have JavaScript turned off).

		LIMIT WHERE USER CONTENT GOES
		1. Malicious users will not just use <script></script> tags to try and create an XSS attack.
		Malicious code can live in an event handler attribute without being wrapped in <script> tags.
		XSS can also be triggered by malicious code in CSS or URLs.
		2. Browsers process HTML, CSS, and JavaScript in different ways (or execution contexts), and in each language, different characters can cause problems.
		   You should only add content from untrusted sources as text (not markup), and place that text in elements that are visible in the viewport.
		   You may have seen that the comment sections on websites rarely allow you to enter a lot of markup (they sometimes allow a limited subset of HTML).
		   This is to prevent people from entering malicious code such as <script></script> tags, or any other character with an event handling attribute.
		   Even HTML editors used in many content management systems will limit the code that you are allowed to use within them, and will automatically try to
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
			object.method(parameter);
	DOM QUERY.METHOD
		document.getElementById('one').getAttribute('class');
			document(Object):
				document refers to the document object, you always have to access individual elements via the document object.
			.(Member Operator):
				the dot notation indicates that the subsequent method will be used on the node specified to the left.
			getElementById('one')(Method):
				the getElementById() method indicates that you want to find an element based upon the value of its id attribute.
			('one')(Parameter):
				the method needs to know the value of the id attribute on the element you want, it is the parameter of the method.
			getAttribute('class')(Method):
				gets the value of the attribute that was given as a	parameter of the method.

				METHOD							PROPERTY
			getAttribute()			gets the value of an attribute
			hasAttribute()			checks if the element node has a specified attribute
			setAttribute()			sets the value of an attribute
			removeAttribute()		removes an attribute from the element node

			PROPERTY					   DESCRIPTION
			className				gets or sets the value of the class attribute
			id						gets or sets the value of the id attribute
*/

/*
	hasAttribute() and getAttribute()
		JAVASCRIPT    c05/js/get-attribute.js
		var firstItem = document.getElementById('one');	// the DOM query getElementById() returns the element whose id attribute = 'one', and stores it in the firstItem variable
		if(firstItem.hasAttribute('class'))				// hasAttribute() is used to check whether the firstItem has a class attribute, and returns a Boolean
		{                 
			var attr = firstItem.getAttribute('class');	// getAttribute() returns the value of the class attribute, which is then written to the page.
			var el = document.getElementById('scriptResults');
			el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
		}
*/

/*
	setAttribute()
		JAVASCRIPT    c05/js/set-attribute.js
		var firstItem = document.getElementById('one'); // the DOM query getElementById() returns the element whose id attribute = 'one', and stores it in the firstItem variable
		firstItem.className = 'complete';
		var fourthItem = document.getElementsByTagName('li').item(3);
		el2.setAttribute('class', 'cool');
*/

/*
	removeAttribute()
	To remove an attribute from an element, first select the element, then call removeAttribute().
	It has one parameter: the name of the attribute to remove.
	Trying to remove an attribute that does not exist will not cause an error, but it is good practice to check for its existence before attempting to remove it.
	In this example, the getElementById() method is used to retrieve the first item from this list, which has an id attribute with a value of one:
		 JAVASCRIPT    c05/js/node-value.js
		var firstItem = document.getElementById('one'); // the DOM query getElementById() returns the element whose id attribute = 'one', and stores it in the firstItem variable
		if(firstItem.hasAttribute('class'))				// hasAttribute() is used to check whether the firstItem has a class attribute, and returns a Boolean
		{         
			firstItem.removeAttribute('class');			// removeAttribute() returns the value of the class attribute, which is then removed from the page.
		}
*/

/*
	EXAMINING THE DOM IN CHROME
Modern browsers come with tools that help you inspect the page loaded in the browser and understand the structure of the DOM tree.
The <li> element is highlighted and the Properties panel indicates that this is an:
	li element, with an id attribute whose value is one, and class whose value is hot.
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
		JAVASCRIPT    c05/js/example.js
		var list = document.getElementsByTagName('ul')[0];		// the node for this element is stored in the list variable
		var newItemLast = document.createElement('li');			// creating an <li> in the <ul>
		var newTextLast = document.createTextNode('cream');		// creating the text ('cream') in the <li>
		newItemLast.appendChild(newTextLast);					// adding/appending the text to the <li>, to the end of the <ul> using appendChild()
		list.appendChild(newItemLast);							// adding/appending the <li> to the <ul> using appendChild()
		var newItemFirst = document.createElement('li');		// creating an <li> in the <ul>
		var newTextFirst = document.createTextNode('kale');		// creating the text ('kale') in the <li>
		newItemFirst.appendChild(newTextFirst);					// adding/appending the text to the <li>, to the start of the <ul>
		list.insertBefore(newItemFirst, list.firstChild);		// adding/appending the <li> to the <ul> using insertBefore()
*/

/*
	GMetrix DOM Videos:
		DOM Tree:
			DOM (Document Object Model):
				1. Help to get an understanding of this model.
				2. How objects on a webpage relate to each other.
				3. How we can use this to learn about objects and their properties.

			Window:
				The first object we are going to look at is the	window, which represents a browser window:
				A DOM always starts with a window object.
					window
						properties: URL, name and specs
					function checkoutWindow()
					{
						checkWin = window.open("checkout.htm", "", "width=300, height=300");
					}

			Document:
				window
					properties: URL, name and specs
				document
					<html>
					<head>
						<meta />
						<title></title>
						<link />
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
					<input type="number" id="practiceHours()" name="Practice Hours:" onchange="getPracticeHours();" />

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

				onload:
					<body onload="alert("This is an example of the onload event.");">
						
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
					<link rel="stylesheet" type="text/css" href="styles/style.css" />
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
*/

/*
	Understanding the Document Object Model (DOM):
		<!DOCTYPE html>																	<!--Document Node-->
		<html lang="en">																<!--Root Element Node-->
		<head>																			<!--Element Node-->
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
				// Script tags at the end of the HTML page is best, it ensures the code above is loaded, processed & ready for JavaScript.
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
						let myButton = document.getElementById('myButton');
						myButton.addEventListener('click', function() { clickHandler('Hi from iife!') } );
					}
				)
				();
*/

/*
	Demonstration of Attaching an Event Handler to an Event:
		Example #1 (No Event Handlers):
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
				// The first onclick event always takes precedence above all other following events. 

		Example #2 (Event Handlers):
			<!DOCTYPE html>
			<html>
			<head>
				<title>Attaching Event Handlers</title>
			</head>
			<body>
				<h4>Click the button for an alert dialog box and some text!</h4>
				<button id="newButton">Click Me!</button> <br/>
				// The button above replaces: <button onclick="addText()" onclick="alertMe()">Click Me!</button>, the first onclick event always takes precedence above all other following events.
				<p id="textArea"></p>
				<script> 
					document.getElementById("newButton").addEventListener("click", alertMe); // adding the alertMe() to act as an event listener to the button's onclick event
					document.getElementById("newButton").addEventListener("click", addText); // adding the addText() to act as an event listener to the button's onclick event
					function alertMe()
					{
						alert("Hi - I am the Alert!");
					}
					function addText()
					{
						document.getElementById("textArea").innerHTML = "The New Text is Here!";
					}
				</script>

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
	Backgrounds and Buttons:
		Finding HTML Elements by ID:
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
					function colchg()
					{
						document.body.style.background = "#ffff66";
						document.getElementById("bgcol").innerHTML = document.body.style.background; // change the page background to a color other than white
					}
				</script>
				<script type="text/javascript">					
					function imgchg()
					{
						document.body.style.backgroundImage	= "url('bg.jpg')";
						document.getElementById("bgimg").innerHTML = document.body.style.backgroundImage; // change the page background to an image file
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
*/

/*
		Navigating to a URL with a Button:
			<input type="button" name="register" id="register" value="Register Now!" onclick="parent.location='registration.html'" />
			<input type="button" name="register" id="register" value="Register Now!" onclick="window.open('registration.html', '_blank')" />
			<input type="button" name="register" id="register" value="Register Now!" onclick="window.open('registration.html', '_self')" />
*/

/*
		Changing the Value of a Button:
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
							element.value = "Click on";
							document.getElementById("feedback").innerHTML = element.value;
						}
					}
				</script>
			</body>
*/

/*
		Changing the Properties of a Button:
			<body>
				Change this button: <br/>
				<input name="btn" id="btn" type="button" value="Click me" onclick="btnchg()" /> <br/>
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
*/

/*
	Working with DIV Containers:
		Removing a DIV Container using removeChild():
			<head>
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
*/

/*
		Adding a DIV Container using appendChild():
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
*/

/*
		Adding Content to a DIV:
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
*/

/*
		Adding an Image File to a DIV:
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
*/

/*
		Removing an Image File from a DIV:
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
*/

/*
		Finding and Changing HTML Elements by Class Name:
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
*/

/*
		Finding and Changing HTML Elements by Tag Name:
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
*/

/*
		Find, Add, or Change Form Elements:
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
*/

/*
		Adding HTML Elements using document.createElement:
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
*/

/*
	Page Manipulation:
		Selecting Files and Create Image Thumbnails:
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
*/

/*
		Capturing Data from a Form Field in Real Time:
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
*/

/*
		Creating an Automated Redirect:
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
*/

/*
		Creating a Countdown Timer:
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
*/