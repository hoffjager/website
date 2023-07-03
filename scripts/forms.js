// Topic 5: HTML Forms

/*
	Creating HTML5 Forms
		<!DOCTYPE HTML>
		<html>
		<head>
			<meta charset="UTF-8">
			<title>Form</title>
		</head>
		<body>
			<form>
				<h1>Please fill out the form fields below</h1>
				<p>
					<input type="submit" value="Submit"/>
					<input type="reset" value="Reset"/>
				</p>
			</form>
		</body>
		</html>
*/

/*
	Form Actions: URL
		<form action="http://myURL/script.php" method="post or get">
		// form action parameters define what happens when a user clicks a Submit button
		  MailChimp: MailChimp provides a powerful e-list manager to collect e-mail addresses and send out e-newsletters.
				     The site provides forms and links to scripts to manage them.
				     You generate a form using WYSIWYG (what you see is what you get) tools at https://mailchimp.com, and you get HTML code for your form that
				     includes a defined form action parameter.
  thesitewizard.com: For do-it-yourself form management, thesitewizard.com (http://www.thesitewizard.com) generates scripts to manage	feedback forms.
				     This valuable resource generates server-side scripts that you upload and save at your website.
Google and FreeFind: Search boxes, linked to appropriate scripts, are available from Google (http://www.google.com/cse) and FreeFind (http://www.freefind.com).
		Google Docs: Forms to store data in databases can be generated from Google Docs (http://www.docs.google.com).
					 While working with a spreadsheet in Google Docs, open the Insert menu and choose Form.
*/

/*
	Form Actions: mailto:
		<form action="mailto:email@email.com>
	// mailto: form action tests the forms, as well as for limited data collection such as user comments
	// if you're looking for a more professional way to have form content e-mailed to your e-mail address, try the tools at http://thesitewizard.com
	// A downside to an e-mail form action is it exposes your e-mail (at least the one you elect to associate with the form) to your users, and	to "scrapers" that harvest e-mail addresses from websites.
*/

/*
	Label and Input Tags
		<label for="name">Name</label>		// provides text that is displayed above the associated <input> field
		<input type="text" name="name">		// the "text" input type is used for most form fields
	Documentation for all pre-HTML5 input parameters is available at w3.org: http://www.w3.org/TR/html-markup/input.html
*/

/*
	Placeholder Text
		<input type="text" name="fieldname" placeholder="text that appears in the field" /> // placeholder text can modify or replace a form label
		<input type="text" name="name" placeholder="Your name..." /> // a label that reads Name, supplemented with 'Please use your login name'.
*/

/*
	Defining and Implementing HTML5 Input Types
	The email input type, when applied, browsers test input to see if it looks like an e-mail address before allowing a user to submit a form, some mobile devices change keyboards depending on the input type.
	For example, some display an "@" symbol in the keyboard for e-mail input types, so to make this all happen, we define input types.
*/

/*
	Defining an Input Type for SEO
		<input type="type" name="fieldname">
	
		color				// comes with a helpful color palette
		date				// comes with a calendar for easy date selection
		datetime			// allows users to add a time zone to the date and time they enter
		datetime-local		// comes with an intuitive set of blank spaces that prompt users to enter a month, day, year, and time (based on user's time zone)
		email
		month				// auto-prompting to make month selection easy and accurate
		number				// comes with different forms of scrolling number pickers, depending on the browser and device
		range				// slider for choosing values, without resorting to the numbers keypad: <input type="range" value="x" min="x" max="x" name="range" />
		search				// searchbox-looking input field, displays the "hourglass" icon before a user enters search content, the "x" icon to clear the search content.
		tel					// prompting easy input for phone numbers, particularly on mobile devices
		time				// provides an intuitive format for entering hour, minute, and a.m./p.m. values.
		url
		week
*/

/*
	Defining a Datalist
		<p>
			Choose a set of letters
		</p>
		<input list="list" />
			<datalist id="list">		// presents a set of options, but the entire list doesn't appear at once
				<option value="aaa" />	// options are filtered by what a user enters into the field
				<option value="abc" />	// users can enter content not on the list
				<option value="bbb" />
			</datalist>
*/

/*
	Creating Form Output Elements
		<form oninput="x.value=parseInt(a.value)+parseInt(b.value)"> // defining two variables that are inputted by the user: a and b.
			<input type="number" id="a"> +
			<input type="number" id="b"> =
			<output name="x" for="a b"> </output>					 // defines addition to be performed, as well as defining the box where the output goes.
		</form>
*/

/*
	Input Types
		<input type="text"
		<input type="password"
		<input type="hidden"
		<input type="checkbox"
		<input type="radio"
		<input type="file"
		<input type="submit"
		<input type="image"
*/

/*
	Buttons vs Inputs
		<button type="button"
		<button type="submit"
		<button type="reset"
*/

/*
	Validating Input
		<input type="text" name="name" required>	// if a user submits the form with nothing in the name field, an error message appears, defined by the browser
		<input type="email" name="email" placeholder="Email address" size="60" /> // You can test the field by entering something that doesn't look like an e-mail address, the error message displays, varies by browser.
		<input type="number" name="age" />			// If a user submits content that is not a number, an error message displays, if you want to restrict input values to a set range, you can use the range input type, if you are collecting a user's age for a membership form that requires users to be 50 years or older, you can restrict valid input to values of >= 50.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			Staff ID: ! Please fill out this field.
			<Submit>

			<!DOCTYPE html>
			<html>
			<body>
				<form action="/process_page.php">
					Staff ID:
					<input type="text" required /> <br/> <br/> // the required attribute ensures that the text field must be filled out before the form is submitted.
					<button>Submit</button>
				</form>
			</body>
			</html>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			Upper and Lower Case:
				<input list="instruments" name="instrument" id="instrument" onchange="convertLower(this.value, 'instrument');" />
				<datalist id="instruments">
					<option value="guitar"></option>
					<option value="piano"></option>
					<option value="drums"></option>
					<option value="ukelele"></option>
				</datalist>
				<td>
					<label for="state">
						State
					</label>
				</td>
				<td>
					<input type="text" name="state" id="state" onchange="convertUpper(this.value, 'state');" />
				</td>
				<script>
					function convertUpper(text, field)
					{
						document.getElementById('field').value = text.toUpperCase();
					}
					function convertLower(text, field)
					{
						document.getElementById(field).value = text.toLowerCase();
					}
				</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
				<form>
					Password:
					<input type="password" id="password" name="password" /> <br/>
					<input type="submit" value="Submit" onclick="validatePassword()" />
				</form>
				<script>
					function validatePassword()
					{
						var passwordEntered = document.getElementById("password").value;
						var validPassword = "nevada";
						if(passwordEntered.toLowerCase() == validPassword)
						{
							alert("Login successful!");
						}
						else
						{
							alert("Invalid password entered!");
						}
					}
				</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			String Comparisons:
				<td>
					<label for="city">
						City
					</label>
				</td>
				<td>
					<input type="text" name="city" id="city" onchange="checkCity(this.value);" />
				</td>
			<script>
				function checkCity(city)
				{
					city = city.toUpperCase();
					if(city == 'LAS VEGAS' || city == 'NORTH LAS VEGAS' || city == 'HENDERSON')
							{
								document.getElementById('testResults').innerHTML = 'The Summerlin location will open in 2018.';
							}
				}
			</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			ZIP Code and Email:
				<tr>
					<td>
						<label for="zip">
							Zip
						</label>
					</td>
					<td>
						<input type="text" name="zip" id="zip" required />
					</td>
				</tr>
				<tr>
					<td>
						<label for="email">
							Email Address
						</label>
					</td>
					<td>
						<input type="email" name="email" id="email" />
					</td>
				</tr>
					<input type="number" size="3" value="hoursPlayed" id="hoursPlayed" />
				<input type="button" class="buttons" name="testForm" value="Test form" onclick="fillTestResults(); checkFields();" />
				<script>
					function checkFields()
					{
						if(document.getElementById('firstName').value == '' || document.getElementById('lastName').value == '')
						{
							alert('One or more required name fields are empty.');
						}
					}
				</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
				Zip Code: None
				<Submit>
			
				<!DOCTYPE html>
				<html>
				<body>
					<form action="/process_page.php">
						Zip Code:
						<input type="text" name="zipCode" value="None" /> <br/> <br/>
						<input type="submit" value="Submit" onclick="processForm()">
					</form>
				</body>
				</html>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			NaN (Not a Number):
			3		=	Correct
			three	=	NaN
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			value			provides a "default" value
			placeholder		a tip that is cleared upon any input
			required		field must be given a value
			maxlength		maximum number of characters
			min & max		works with numbers and dates
			pattern			used with regular expressions (regexp)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
	DOM Path:
		In the Developer Console:
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			document.forms
				<HtmlCollection length="1">
					<form id="contactForm" action="thankyou.htm" method="post">
							...
					</form>
				</HtmlCollection>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			document.forms[0].element
				<HtmlCollection length="16">
					<fieldset>...</fieldset>
					<select name="location" id="location">
						...
					</select>
					<input name="firstname" id="firstname" type="text" />
					<input name="lastname" id="lastname" type="text" />
					<input name="city" id="city" onchange="checkCity(this.value);" type="text" />
					<input name="state" id="state" onchange="convertUpper(this.value, 'state');" type="text" />
					<input name="zip" id="zip" type="text" />
					<input name="email" id="email" type="email" />
					<input name="password" id="password" type="text" />
					<fieldset>...</fieldset>
				</HtmlCollection>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			document.getElementById('firstName').value
				"Jason"
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
	Prepopulating Values:
		<select onchange="fillState(this.value);" name="location" id="location">
			<option value=""></option>
			<option value="Salt Lake City" onclick="fillState()"></option>
			<option value="Summerlin" onclick="fillState()"></option>
		</select>
		<script>
			function fillState(location)
			{
				var state = document.getElementById('state');
				if(state.value == '')
				{
					if(location == 'Salt Lake City')
					{
						state.value = 'UT';
					}
					else if(location == 'Summerlin')
					{
						state.value = 'NV';
					}
					else
					{
						state.value = null;
					}
				}
			}
		</script>
*/

/*
	Masking Values:
			Password: ******
			<Submit>

			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8" />
				<title>Masking Password</title>
			</head>
			<body>
				<form action="/process_page.php">
					Password:
					<input type="password" name="password" /> <br/> <br/>
					<input type="submit" value="Submit">
				</form>
			</body>
			</html>
*/

/*
	Form Submission:
		onsubmit:
			<form action="thankyou.html" method="post" id="contactForm" onsubmit="checkFields();"> // method post will post information to a database, method get will get information from a database
					...
			</form>																				   // form submission will be to a server-side technology, such as ASP.NET, PHP, CGI, etc.
			<script>
				function convertUpper(text, field)
				{
					document.getElementById(field).value = text.toUpperCase();
				}
				function convertLower(text, field)
				{
					document.getElementById(field).value = text.toLowerCase();
				}
				function checkCity(city)
				{
					city = city.toUpperCase();
					if(city == 'LAS VEGAS' || city == 'NORTH LAS VEGAS' || city == 'HENDERSON')
					{
						document.getElementById('testResults').innerHTML = 'The Summerlin location will open in 2018.';
					}
				}
				function checkFields()
				{
					if(document.getElementById('firstName').value == '' || document.getElementById('lastName').value == '')
					{
						alert('One or more required name fields are empty.');
					}
				}
			</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			<form name="myForm" action="/process.php" onsubmit="validateForm()" method="post"> // The # value indicates that the form stays on the same page, this is good for practice if you don't have access to a server.
				 Name:
				 <input type="submit" value="Submit" />
			</form>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			<p>
				How did you hear about us?
			</p>
			<select name="found" id="found">
				<optgroup label="Media">
					<option value="TV">TV</option>
					<option value="Radio">Radio</option>
					<option value="Other">Other</option>
				</optgroup>
				<optgroup label="Web">
					<option value="Google">Google</option>
					<option value="Bing">Bing</option>
				</optgroup>
			</select>
			<script>
				function fillTestResults()
				{
					var testResults = document.getElementById('testResults');
					var firstName = document.getElementById('firstName').value;
					var lastName = document.getElementById('lastName').value;
					var found = document.getElementById('found').value;
					testResults.innerHTML = "You entered " + firstName + " " + lastName + " for a name. You found us via " + found + '.';
				}
			</script>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
	Understanding Potential Submission Targets:
		The most common targets for form data are defined in the action attribute of the <form> tag:
		<form action="thankyou.html" method="post" id="contactForm" onsubmit="checkFields();">
			Database:
				Data can be added to a database, or data can be used to look up a database to return matches.
			Script:
				The data can be directed to a script file for further processing.
				The script file is a go-between for a webpage submitting data to a data source, such as a database.
				Many of these are server-side scripts, and use a variety of programming languages, such as C# or Python.
			Webpage:
				The data can be processed on another webpage, and that webpage could have direct access to a database.
	HTTP Messages
		http post - encodes form data in the body of the http message
		http get - encodes form and other data in the URL
		http://en.wikipedia.org/wiki/POST_(HTTP)
*/

/*
	Exam #5 Tips:
		Know how to retrieve form values.
		Use the getElementById method to retrieve the form value attribute of the element, even though different form elements exist. 
		Know that forms are a direct descendant of the document object in the Document Object Model (DOM): document.forms
		Know how to prepopulate fields, and how to mask a value typed in an input text box.
		Know the role of the toUpperCase() and toLowerCase() methods.
			Remember that for strings to compare accurately, convert the strings to compare to a consistent	casing: "Las Vegas" != "LAS VEGAS".
		Know how to use JavaScript to validate a form.
		Remember that NaN means Not a Number.
		For any validation code that needs to run when a form is submitted, add that function to the onsubmit event of the form.
		The action attribute in a form is used to direct where the form is going to go to get processed, that could be a script, webpage or database.

	Final Exam Tips:
		Make sure you know which code example to use given a situation: for loop, while loop, do loop
		Know when to use if(), else if(), nested if()
		For code examples, make sure you know the order in which the statements go in.
		Know the differences between the events: onclick, onmouseover, onmouseout, onload, onchange, onkeydown.
*/

/*
	Creating Forms:
		Mama Mia's Pizza Shop
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>Creating Forms</title>
			</head>
			<body>
				<h1>Creating Forms</h1>
				<form method="post" action="form.aspx">
					<p>
						<label>
							Customer name:
							<input type="text" id="customerName" name="customerName" maxlength="20" />
						</label>
					</p>
					<fieldset>
						<legend>
							Pizza Size
						</legend>
						<p>
							<label>								
								<input type="radio" name="size" value="small" />
								Small (10" inch)
							</label>
						</p>
						<p>
							<label>
								<input type="radio" name="size" value="medium" checked />
								Medium (12" inch)
							</label>
						</p>
						<p>
							<label>
								<input type="radio" name="size" value="large" />
								Large (14" inch)
							</label>
						</p>
					</fieldset>
					<fieldset>
						<legend>
							Pizza Topping
						</legend>
						<p>
							<label>
								<input type="checkbox" name="toppings" value="bacon" />
								Bacon
							</label>
						</p>
						<p>
							<label>
								<input type="checkbox" name="toppings" value="cheese" />
								Extra Cheese
							</label>
						</p>
						<p>
							<label>
								<input type="checkbox" name="toppings" value="onion" checked />
								Onion
							</label>
						</p>
						<p>
							<label>
								<input type="checkbox" name="toppings" value="mushroom" />
								Mushroom
							</label>
						</p>
					</fieldset>
					<p>
						Crust
						<select name="crust" multiple>
							<option value="c1">Normal</option>
							<option value="c2" selected>Chicago Deep Dish (+ €2)</option>
							<option value="c3">New York Thin</option>
						</select>
					</p>
					<p>
						<label for="comments">Delivery Instructions:</label>
							<textarea name="comments" cols="50" rows="5" maxlength="1000">
								How do we get to your house?
							</textarea>
					</p>
					<p>
						<input type="submit" value="Continue to Step 2" />
					</p>
					<p>
						<input type="reset" value="Reset Values" />
					</p>
				</form>
			</body>
			</html>
*/

/*
	Form Validation and Enhancements:
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<title>Validating & Enhancing Forms</title>
			<style type="text/css" media="all">
				span
				{
					width: 175px;
					display: block;
					float: left;
				}
				input
				{
					float: left;
				}
				p
				{
					padding-top: 10px;
					clear: all;
				}
				h2
				{
					padding-top: 20px;
					clear: all;
				}
				label
				{
					padding-right: 20px;
				}
			</style>
		</head>
		<body>
			<h1>Forms</h1>
			<form method="post" action="form.aspx">
				<h2>Email</h2>
				<p>
					<label>
						<span>
							Email Input:
						</span>
						<input type="email" name="emailInput" required />
					</label>
				</p>
				<h2>Telephone</h2>
				<p>
					<label>
						<span>
							Telephone Input:
						</span>
						<input type="tel" name="telInput" required />
							Oddly, the spec says the browser should	do nothing special. Hmm...
					</label>
				</p>
				<h2>URL</h2>
				<p>
					<label>
						<span>
							URL Input:
						</span>
						<input type="url" name="urlInput" required />
					</label>
				</p>
				<h2>Numeric Values</h2>
				<p>
					<label>
						<span>
							Number Input:
						</span>
						<input type="number" name="numberInput" required />
					</label>
				</p>
				<h2>Ranged Values</h2>
				<p>
					<label>
						<span>
							Range Input:
						</span>
						<input type="range" name="rangeInput" required value="42" />
							Value set to 42. By default, values are between 0 and 100.
					</label>
				</p>
				<h2>Data List</h2>
				<p>
					<label>
						<span>
							Data List:
						</span>
						<input type="text" list="someList" />
						<datalist id="someList">
							<option label=First Value="First">
							<option label=Second Value="Second">
							<option label=Third Value="Third">
						</datalist>
					</label>
				</p>
				<h2>Attributes</h2>
				<p>
					<label>
						<span>
							autofocus:
						</span>
						<input type="text" autofocus />
					</label>
				</p>
				<p>
					<label>
						<span>
							pattern:
						</span>
						<input type="text" pattern="^\d{5} (-\d{4})?$" />
							Hint: Use a valid/invalid zip code
					</label>
				</p>
				<p>
					<label>
						<span>
							placeholder:
						</span>
						<input type="text" placeholder="Hello world!" />
					</label>
				</p>
				<p>
					<label>
						<span>
							required:
						</span>
						<input type="text" required />
					</label>
				</p>
				<p>
					<label>
						<span>
							step:
						</span>
						<input type="number" step="5" />
							Hint: Must be divisible by 5
					</label>
				</p>
				<p>
					<button>
						Submit
					</button>
				</p>
			</form>
		</body>
		</html>
*/

/*
	Capturing Form Data with JavaScript:
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<title>Capturing Form Data</title>
			<script>
				function formProcess()
				{
					var capture = document.forms["input"]["fname"].value + "<br/>";
					capture += document.forms["input"]["color"].value + "<br/>";
					capture += document.forms["input"]["iceCream"].value + "<br/>";
					if(document.forms["input"]["callMe0"]).checked
					{
						capture += document.forms["input"]["callMe0"].value + "<br/>";
					}
					else
					{
						capture += document.forms["input"]["callMe1"].value + "<br/>";
					}
					document.getElementById("outputDiv").innerHTML = capture;
				}
			</script>
		</head>
		<body>
			<div id="outputDiv" style="height:100px; border:1px solid;"> </div>
			<form id="input" name="myForm" enctype="multipart/form-data" onsubmit="return false">
			<p>
				Name:
				<input type="text" id="fname" name="fname" />
			</p>
			<p>
				Favourite Color:
				<input type="color" id="color" name="color" />
			</p>
			<p>
				Ice Cream:
				<select name="Ice Cream" id="iceCream">
					<option>Vanilla</option>
					<option>Chocolate</option>
					<option>Strawberry</option>
				</select>
			</p>
			<p>
				Call Me?
				<label>
					<input type="radio" name="callMe" value="Yes" id="callMe_0" />
						Yes
				</label>
				<label>
					<input type="radio" name="callMe" value="No" id="callMe_1" />
						No
				</label>
				<br/> <br/>
					<input type="submit" value="OK" onclick="formProcess()" />
			</p>
			</form>
		</body>
		</html>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
		How do you prefer to get to work?
				- Walk
				- Run
				- Cycle
				- Bus
				<Submit>
				= Cycle

			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8" />
				<title>Capturing Form Data</title>
			</head>
			<body>
				<h3>How do you prefer to get to work?</h3>
				<select id="myOptions" size="4">
					<option value="Walk">Walk</option>
					<option value="Run">Run</option>
					<option value="Cycle">Cycle</option>
					<option value="Take the bus">Take Bus</option>
				</select>
				<button onclick="funcTransport()">Submit</button>
				<p id="result"></p>
				<script>
					function funcTransport()
					{
						var found = document.getElementById("myOptions").value;
						document.getElementById("result").innerHTML = found;
					}
				</script>
			</body>
			</html>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			First name: Joe
			Last Name: Bloggs
			PPS No: 7648316S
		
			<Submit>
			= Joe Bloggs 7648316S

			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8" />
				<title>Capturing Form Data</title>
			</head>
			<body>
				<script>
					function processForm()
					{
						var firstName = document.getElementById("fName").value;
						var lastName = document.getElementById("lName").value;
						var ppsNo = document.getElementById("ppsNo").value;
						var testOutput = document.getElementById("testResults");
						testOutput.innerHTML = firstName + "" + lastName + "" + ppsNo;
					}
				</script>
				<form>
					First name:
					<input type="text" id="fName" name="firstname" /> <br/>	<br/>
					Last name:
					<input type="text" id="lName" name="lastname" /> <br/> <br/>
					PPS No: &nbsp; &nbsp;
					<input type="text" id="ppsNo" name="ppsNo" /> <br/> <br/>
					<input type="submit" value="Submit" onclick="processForm()"> <br/> <br/>
					<p id="testResults"></p>
				</form>
			</body>
			</html>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
			Age: 13		Name: Billy		<Click>
			= €5 admittance fee for teenagers!

			<body>
				Age:
				<input type="number" id="age" name="age" /> &nbsp;
				Name:
				<input type="text" id="name" name="name" />
				<button onclick="displayCustomGreeting()"> Click </button>
				<script>
					function displayCustomGreeting()
					{
						var ageEntered = document.getElementById("age").value;
						var nameEntered = document.getElementById("name").value;
						var message = "";
						if(ageEntered <= 12)
						{
							message = "€2 admittance fee for children!";
						}
						else if(ageEntered > 12 && ageEntered < 18)
						{
							message = "€5 admittance fee for teenagers!";
						}
						else
						{
							message = "€10 admittance fee for adults!";
						}
						document.getElementById("fee").innerHTML = message;
					}
				</script>
				<p id="fee"></p>
			</body>				
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
			<form onsubmit="validateUserInput()">
				Name:
				<input type="text" />
				Age:
				<input type="number" />
				<input type="submit" />
			</form>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
	 The name of the exam course code (MTA 98-382) was typed into a search engine (notice that the search terms show in the URL below):
		 https://www.google.ie/search?source=hp&ei=TYZgWvrJIOvFgAbknr7wAQ&q=MTA+98-382&oq=MTA+98-382&gs_l=psy-ab.3.....
			The HTTP "get" Request Method was used to facilitate the request-response between the client and server, to retrieve/get data from a server.
				With the get method, the data/search terms show in the URL, if you are processing secure data, you may not want to use the get method.
			The HTTP "post" method would be a better choice in that	scenario.
				The "post" method requests that a web server accept and store the enclosed data from the body of the request message.
				"post" is often used when uploading a file or when submitting a	completed web form.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/