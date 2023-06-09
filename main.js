Assignment -1 


    <script>
        alert("Welcome to our website!");
    //</script>


//<h1>Hey</h1>

 //   <button onclick="showAlert()">click here</button>
// 1. Write a script to greet your website visitor using JS alert
// box:

alert("Welcome to our website!"); 
 
//  2. Write a script to display following message on your webpage:

alert ("Welcome to our Website!");
document.write("<h1>hello<h1>");
console.log(123);

// 3. Write a script to display following message on your web
// page: (Hint : Use line break):

// 4. Write a script to display following messages in sequence:

var Name = +prompt( "Your name Please")
var Name1 = +prompt( "Your Father name Please")
console.log( Name+ Name1)


// 5. Generate the following message through browser’s
// developer console:

console.log("Hello, Welcome to the developer console! We hope you have a great experience.");

  
// 6. Make use of alerts in your new/existing HTML & CSS
// project.


function showAlert() {
    alert("Nothing just fun!");
}

Assignment-2    
      //<h1 id="message"></h1>
    //<h1 id="myString"></h1>                                                                                       
       // 1. Declare a variable called username:  

var username = "Mutiba";
console.log(username);

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

var myName = "Mutiba";
console.log(myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

        var firstName = "Mutiba";
        var lastName = "Akram";
        var age = 18;

        alert("First Name: " + firstName);
        alert("Last Name: " + lastName);
        alert("Age: " + age);


// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var student = {
    firstName: "Mutiba",
    lastName: "Akram",
    age: 18,
    grade: "A"
};

alert("First Name: " + student.firstName);
alert("Last Name: " + student.lastName);
alert("Age: " + student.age);
alert("Grade: " + student.grade);

// 5. Write a script to display the following alert using one JS
// variable:
        
var alertMessage = "They don't really know you!";
alert(alertMessage);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "  theweekend@gmail.com";
var message = "Your email address is: " + email;
alert(message);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
var message = "I recommend reading the book: " + book;
alert(message);

// 8. Write a script to display this in browser through JS

window.onload = function() {
var message = "Hello, world!";
document.getElementById("message").innerText = message;
};

// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”


var myString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(myString);

window.onload = function() {
document.getElementById("myString").innerText = myString;
}; 

Assignment-3
    //<h1 id="visitCount"></h1>

    //<h1>Birth Year</h1>
    //<button onclick="showMessage()">Show Message</button>
    //<p id="output"></p>

    //<h1>Nisha's Clothing Store</h1>
    //<label for="name">Visitor's Name:</label>
    //<input type="text" id="name"><br><br>
    //<label for="product">Product Title:</label>
    //<input type="text" id="product"><br><br>
    //<label for="quantity">Quantity:</label>
    //<input type="number" id="quantity"><br><br>
    //<button onclick="placeOrder()">Place Order</button>
    //<p id="output"></p>
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

//var age = 18;
//alert("Your age is: " + age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

//var visitCount = 0;

//function incrementVisitCount() {
//visitCount++;
//document.getElementById("visitCount").innerText = "You have visited this site " + visitCount + " times";
//}

//window.onload = function() {
  //  incrementVisitCount();
//};

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

//var birthYear = 2004;
//var message = "My birth year is " + birthYear;

//function showMessage() {
//document.getElementById("output").innerHTML = message;
//}

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

//function placeOrder() {
  //  var visitorName = document.getElementById("name").value;
    //var productTitle = document.getElementById("product").value;
    //var quantity = document.getElementById("quantity").value;
    //var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) Nisha's Clothing store.";
    //document.getElementById("output").innerHTML = message;
// }

//<button onclick="displayVariables()">Display Variables</button>
   // <div id="output"></div>

Assignment-4
  //<button onclick="displayRules()">Display Rules</button>
  //<div id="output"></div>
    // 1. Declare 3 variables in one statement.

//var var1, var2, var3;

//var1 = "Hello";
//var2 = 42;
//var3 = true;

//function displayVariables() {
//document.getElementById("output").innerHTML =
  //    "var1: " + var1 + "<br>" +
      //"var2: " + var2 + "<br>" +
    //  "var3: " + var3;
  //}

// 2. Declare 5 legal & 5 illegal variable names.

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain __, __,
// __ and __.
// For example $my_1stVariable
// c) Variables must begin with a __, __ or
// ___. For example $name, _name or name
// d) Variable names are case ___
// e) Variable names should not be JS ___

function displayRules() {
  var output = document.getElementById("output");
  var heading = document.createElement("h1");
  heading.textContent = "Rules for naming JS variables";
  output.appendChild(heading);
  var ruleB = document.createElement("p");
  ruleB.textContent = "Variable names can only contain letters, digits, underscores, and dollar signs. For example, $my_1stVariable";
  output.appendChild(ruleB);
  var ruleC = document.createElement("p");
  ruleC.textContent = "Variables must begin with a letter, underscore, or dollar sign. For example, $name, _name, or name";
  var ruleD = document.createElement("p");
  ruleD.textContent = "Variable names are case-sensitive";
  output.appendChild(ruleD);
  var ruleE = document.createElement("p");
  ruleE.textContent = "Variable names should not be JavaScript reserved keywords";
  output.appendChild(ruleE);
    }

  // Assignment-5
   // <h1>Addition Program</h1>
  //<label for="num1">Number 1:</label>
  //<input type="number" id="num1" name="num1" /><br>
  //<label for="num2">Number 2:</label>
  //<input type="number" id="num2" name="num2" /><br>
  //<button onclick="addNumbers()">Add Numbers</button>
  //<div id="result"></div>

 // <button onclick="performOperations()">Perform Operations</button>
  //<div id="output1"></div>
  //<div id="output2"></div>
 // <div id="output3"></div>
  //<div id="output4"></div>
 // <div id="output5"></div>
  //<div id="output6"></div>

  //<button onclick="calculateTotal()">Calculate</button>

  //<button onclick="performArithmetic()">Perform Arithmetic</button>
  //<p id="result"></p>
  
  //<div id="result"></div>

  //<label for="birthYear">Enter birth year:</label>
  //<input type="number" id="birthYear">
 // <button onclick="calculateAge()">Calculate Age</button>
  //<p id="result"></p>

  //<label for="radius">Enter radius:</label>
  //<input type="number" id="radius">
  //<button onclick="calculateCircleProperties()">Calculate Properties</button>
  //<p id="result"></p>

  //<label for="favoriteSnack">Enter your favorite snack:</label>
  //<input type="text" id="favoriteSnack">
  //<label for="currentAge">Enter your current age:</label>
  //<input type="number" id="currentAge">
  //<label for="maximumAge">Enter your maximum age:</label>
  //<input type="number" id="maximumAge">
  //<label for="amountPerDay">Enter estimated amount per day:</label>
  //<input type="number" id="amountPerDay">
  //<button onclick="calculateLifetimeSupply()">Calculate Lifetime Supply</button>
  //<p id="result"></p>                                                                                                                    // 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser

function addNumbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerHTML = "The sum is: " + sum;
}

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

function performOperations() {
    var myVariable;
    document.getElementById("output1").innerHTML = "Value after variable declaration is: " + myVariable;
    myVariable = 5;
    document.getElementById("output2").innerHTML = "Initial value: " + myVariable;
    myVariable++;
    document.getElementById("output3").innerHTML = "Value after increment is: " + myVariable;
    myVariable += 7;
    document.getElementById("output4").innerHTML = "Value after addition is: " + myVariable;
    myVariable--;
    document.getElementById("output5").innerHTML = "Value after decrement is: " + myVariable;
    var remainder = myVariable % 3;
    document.getElementById("output6").innerHTML = "The remainder is: " + remainder;
}


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;
var numTickets = 5;
var totalCost = ticketPrice * numTickets;
document.write("<p>The cost of buying " + numTickets + " tickets is " + totalCost + " PKR.</p>");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var number = parseInt(prompt("Enter a number:"));
var table = document.createElement("table");
for (var i = 1; i <= 10; i++) {
    var row = document.createElement("tr");
    var multiplicandCell = document.createElement("td");
    multiplicandCell.textContent = number + " x " + i;
    row.appendChild(multiplicandCell);
    var productCell = document.createElement("td");
    productCell.textContent = number * i;
    row.appendChild(productCell);
    table.appendChild(row);
}

document.body.appendChild(table);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

var celsius = 28;
var fahrenheit = (celsius * 9/5) + 32;
document.write("<p>" + celsius + "°C is " + fahrenheit + "°F</p>");

var fahrenheit2 = 82;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write("<p>" + fahrenheit2 + "°F is " + celsius2 + "°C</p>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var priceItem1 = 1000;
var priceItem2 = 1500;
var quantityItem1 = 2;
var quantityItem2 = 1;

var subtotal = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2);
var shippingCharges = 200;

var totalCost = subtotal + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Subtotal: " + subtotal + " PKR</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var marksObtained = 430;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage + "%</h3>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

function calculateTotal() {
    var usDollars = 10;
    var saudiRiyals = 25;
    var exchangeRateUSD = 104.80;
    var exchangeRateSAR = 28;
    
    var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
    
    document.getElementById("result").innerHTML = "Total Amount in Pakistani Rupees: " + totalRupees.toFixed(2);
  }

//   10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

function performArithmetic() {
    var number = 10;
    var result = ((number + 5) * 10) / 2;
      
      document.getElementById("result").innerHTML = "Result: " + result; 
    }
    
    // 11. The Age Calculator: Forgot how old someone is?
    // Calculate it!
    // a. Store the current year in a variable.
    // b. Store their birth year in a variable.
    // c. Calculate their 2 possible ages based on the stored
    // values.
    // Output them to the screen like so: “They are either NN or NN
    // years old”.   
    
    function calculateAge() {
        var currentYear = new Date().getFullYear(); 
        var birthYear = document.getElementById("birthYear").value;
        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;
        document.getElementById("result").innerHTML = "They are either " + age1 + " or " + age2 + " years old.";
    }
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

function calculateCircleProperties() {
    var radius = document.getElementById("radius").value; 

    var circumference = 2 * 3.142 * radius; 
    var area = 3.142 * radius * radius; 

    document.getElementById("result").innerHTML = "The circumference is " + circumference.toFixed(2) + " and the area is " + area.toFixed(2) + "."; // Display the calculated properties on the webpage
  }

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

function calculateLifetimeSupply() {
    var favoriteSnack = document.getElementById("favoriteSnack").value;
    var currentAge = document.getElementById("currentAge").value;
    var maximumAge = document.getElementById("maximumAge").value;
    var amountPerDay = document.getElementById("amountPerDay").value;
    var yearsRemaining = maximumAge - currentAge;
    var snacksPerLifetime = amountPerDay * 365 * yearsRemaining;
    document.getElementById("result").innerHTML = "You will need " + snacksPerLifetime + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".";
}

//<button onclick="displayVariables()">Display Variables</button>
  //  <div id="output"></div>

Assignment-4
  //<button onclick="displayRules()">Display Rules</button>
  //<div id="output"></div>
    // 1. Declare 3 variables in one statement.

var var1, var2, var3;

var1 = "Hello";
var2 = 42;
var3 = true;

function displayVariables() {
document.getElementById("output").innerHTML =
      "var1: " + var1 + "<br>" +
      "var2: " + var2 + "<br>" +
      "var3: " + var3;
  }

// 2. Declare 5 legal & 5 illegal variable names.

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain __, __,
// __ and __.
// For example $my_1stVariable
// c) Variables must begin with a __, __ or
// ___. For example $name, _name or name
// d) Variable names are case ___
// e) Variable names should not be JS ___

function displayRules() {
  var output = document.getElementById("output");
  var heading = document.createElement("h1");
  heading.textContent = "Rules for naming JS variables";
  output.appendChild(heading);
  var ruleB = document.createElement("p");
  ruleB.textContent = "Variable names can only contain letters, digits, underscores, and dollar signs. For example, $my_1stVariable";
  output.appendChild(ruleB);
  var ruleC = document.createElement("p");
  ruleC.textContent = "Variables must begin with a letter, underscore, or dollar sign. For example, $name, _name, or name";
  var ruleD = document.createElement("p");
  ruleD.textContent = "Variable names are case-sensitive";
  output.appendChild(ruleD);
  var ruleE = document.createElement("p");
  ruleE.textContent = "Variable names should not be JavaScript reserved keywords";
  output.appendChild(ruleE);
    }

    Assignment-5
    //<h1>Addition Program</h1>
  //<label for="num1">Number 1:</label>
  //<input type="number" id="num1" name="num1" /><br>
  //<label for="num2">Number 2:</label>
  //<input type="number" id="num2" name="num2" /><br>
  //<button onclick="addNumbers()">Add Numbers</button>
  //<div id="result"></div>

  //<button onclick="performOperations()">Perform Operations</button>
  //<div id="output1"></div>
  //<div id="output2"></div>
  //<div id="output3"></div>
  //<div id="output4"></div>
  //<div id="output5"></div>
  //<div id="output6"></div>

  //<button onclick="calculateTotal()">Calculate</button>

  //<button onclick="performArithmetic()">Perform Arithmetic</button>
  //<p id="result"></p>
  
  //<div id="result"></div>

  //<label for="birthYear">Enter birth year:</label>
  //<input type="number" id="birthYear">
  //<button onclick="calculateAge()">Calculate Age</button>
  //<p id="result"></p>

 // <label for="radius">Enter radius:</label>
  //<input type="number" id="radius">
  //<button onclick="calculateCircleProperties()">Calculate Properties</button>
  //<p id="result"></p>

  //<label for="favoriteSnack">Enter your favorite snack:</label>
  //<input type="text" id="favoriteSnack">
  //<label for="currentAge">Enter your current age:</label>
  //<input type="number" id="currentAge">
  //<label for="maximumAge">Enter your maximum age:</label>
  //<input type="number" id="maximumAge">
  //<label for="amountPerDay">Enter estimated amount per day:</label>
  //<input type="number" id="amountPerDay">
  //<button onclick="calculateLifetimeSupply()">Calculate Lifetime Supply</button>
  //<p id="result"></p>                                                                                                                    // 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser

//function addNumbers() {
  //  var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerHTML = "The sum is: " + sum;
//}

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

function performOperations() {
    var myVariable;
    document.getElementById("output1").innerHTML = "Value after variable declaration is: " + myVariable;
    myVariable = 5;
    document.getElementById("output2").innerHTML = "Initial value: " + myVariable;
    myVariable++;
    document.getElementById("output3").innerHTML = "Value after increment is: " + myVariable;
    myVariable += 7;
    document.getElementById("output4").innerHTML = "Value after addition is: " + myVariable;
    myVariable--;
    document.getElementById("output5").innerHTML = "Value after decrement is: " + myVariable;
    var remainder = myVariable % 3;
    document.getElementById("output6").innerHTML = "The remainder is: " + remainder;
}


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;
var numTickets = 5;
var totalCost = ticketPrice * numTickets;
document.write("<p>The cost of buying " + numTickets + " tickets is " + totalCost + " PKR.</p>");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var number = parseInt(prompt("Enter a number:"));
var table = document.createElement("table");
for (var i = 1; i <= 10; i++) {
    var row = document.createElement("tr");
    var multiplicandCell = document.createElement("td");
    multiplicandCell.textContent = number + " x " + i;
    row.appendChild(multiplicandCell);
    var productCell = document.createElement("td");
    productCell.textContent = number * i;
    row.appendChild(productCell);
    table.appendChild(row);
}

document.body.appendChild(table);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

var celsius = 28;
var fahrenheit = (celsius * 9/5) + 32;
document.write("<p>" + celsius + "°C is " + fahrenheit + "°F</p>");

var fahrenheit2 = 82;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write("<p>" + fahrenheit2 + "°F is " + celsius2 + "°C</p>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var priceItem1 = 1000;
var priceItem2 = 1500;
var quantityItem1 = 2;
var quantityItem2 = 1;

var subtotal = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2);
var shippingCharges = 200;

var totalCost = subtotal + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Subtotal: " + subtotal + " PKR</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var marksObtained = 430;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage + "%</h3>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

function calculateTotal() {
    var usDollars = 10;
    var saudiRiyals = 25;
    var exchangeRateUSD = 104.80;
    var exchangeRateSAR = 28;
    
    var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
    
    document.getElementById("result").innerHTML = "Total Amount in Pakistani Rupees: " + totalRupees.toFixed(2);
  }

//   10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

function performArithmetic() {
    var number = 10;
    var result = ((number + 5) * 10) / 2;
      
      document.getElementById("result").innerHTML = "Result: " + result; 
    }
    
    // 11. The Age Calculator: Forgot how old someone is?
    // Calculate it!
    // a. Store the current year in a variable.
    // b. Store their birth year in a variable.
    // c. Calculate their 2 possible ages based on the stored
    // values.
    // Output them to the screen like so: “They are either NN or NN
    // years old”.   
    
    function calculateAge() {
        var currentYear = new Date().getFullYear(); 
        var birthYear = document.getElementById("birthYear").value;
        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;
        document.getElementById("result").innerHTML = "They are either " + age1 + " or " + age2 + " years old.";
    }
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

function calculateCircleProperties() {
    var radius = document.getElementById("radius").value; 

    var circumference = 2 * 3.142 * radius; 
    var area = 3.142 * radius * radius; 

    document.getElementById("result").innerHTML = "The circumference is " + circumference.toFixed(2) + " and the area is " + area.toFixed(2) + "."; // Display the calculated properties on the webpage
  }

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

function calculateLifetimeSupply() {
    var favoriteSnack = document.getElementById("favoriteSnack").value;
    var currentAge = document.getElementById("currentAge").value;
    var maximumAge = document.getElementById("maximumAge").value;
    var amountPerDay = document.getElementById("amountPerDay").value;
    var yearsRemaining = maximumAge - currentAge;
    var snacksPerLifetime = amountPerDay * 365 * yearsRemaining;
    document.getElementById("result").innerHTML = "You will need " + snacksPerLifetime + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".";
}   <label for="inputNumber">Enter a number:</label>


Assignment-6                                          
   // <input type="number" id="inputNumber">
   // <button onclick="displayResult()">Display Result</button>
    //<p id="result"></p>
  
   // <button onclick="executeScript()">Execute Script</button>
    //<p id="output"></p>
  
   // <label for="inputName">Enter your name:</label>
    //<input type="text" id="inputName">
    //<button onclick="greetUser()">Greet User</button>
    //<p id="greetingMessage"></p>
  
    //<label for="inputNumber">Enter a number:</label>
    //<input type="number" id="inputNumber">
    //<button onclick="displayMultiplicationTable()">Display Multiplication Table</button>
    //<h3>Multiplication Table</h3>
    //<p id="multiplicationTable"></p>
  
    //<label for="subject1">English:</label>
    //<input type="text" id="subject1">
    //<br>
    //<label for="subject2">Maths:</label>
    //<input type="text" id="subject2">
    //<br>
    //<label for="subject3">Urdu:</label>
    //<input type="text" id="subject3">
    //<br>
    //<label for="obtainedMarks1">Enter obtained marks for English:</label>
    //<input type="number" id="obtainedMarks1">
    //<br>
    //<label for="obtainedMarks2">Enter obtained marks for Urdu:</label>
    //<input type="number" id="obtainedMarks2">
    //<br>
    //<label for="obtainedMarks3">Enter obtained marks for Maths:</label>
    //<input type="number" id="obtainedMarks3">
    //<br>
    //<button onclick="calculateResult()">Calculate Result</button>
    //<div id="result"></div>                                                                                               // 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

function displayResult() {
    var number = document.getElementById("inputNumber").value;
    var result = (number + 5) * 10 / 2; 
    document.getElementById("result").innerHTML = "Result: " + result;
}

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

function executeScript() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;

    document.getElementById("output").innerHTML = "a: " + a + "<br>b: " + b + "<br>result: " + result;
  }


// 3. Write a program that takes input a name from user &
// greet the user.

function greetUser() {
    var name = document.getElementById("inputName").value;
    var greeting = "Hello, " + name + "!";
    document.getElementById("greetingMessage").innerHTML = greeting;
}

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

function displayMultiplicationTable() {
    var number = document.getElementById("inputNumber").value;
    if (number === "") {
        number = 5;
    }
    var table = "";
    for (var i = 1; i <= 10; i++) {
        var result = number * i; 
        table += number + " x " + i + " = " + result + "<br>"; 
    }

    document.getElementById("multiplicationTable").innerHTML = table;
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

function calculateResult() {
    var subject1 = document.getElementById("subject1").value; 
    var subject2 = document.getElementById("subject2").value; 
    var subject3 = document.getElementById("subject3").value; 

    var totalMarks = 100; 

    var obtainedMarks1 = parseInt(document.getElementById("obtainedMarks1").value); 
    var obtainedMarks2 = parseInt(document.getElementById("obtainedMarks2").value); 
    var obtainedMarks3 = parseInt(document.getElementById("obtainedMarks3").value); 

    var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3; 

    var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100; 

    
    var resultTable = "<table>";
    resultTable += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
    resultTable += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>";
    resultTable += "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>";
    resultTable += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>";
    resultTable += "<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>";
    resultTable += "<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>";
    resultTable += "</table>";

    document.getElementById("result").innerHTML = resultTable; 
  }
<label for="cityName">Enter your city name:</label>
  
  Assignment-7                                                                                                                      
  //<input type="text" id="cityName">
 // <button onclick="displayWelcomeMessage()">Submit</button>
  //<p id="welcomeMessage"></p>

  //<label for="gender">Enter your gender:</label>
  //<input type="text" id="gender">
  //<button onclick="displayGreetingMessage()">Submit</button>
  //<p id="greetingMessage"></p>

//  <label for="signalColor">Enter the color of the signal:</label>
  //<input type="text" id="signalColor">
  //<button onclick="displaySignalMessage()">Submit</button>
  //<p id="signalMessage"></p>

//  <label for="remainingFuel">Enter the remaining fuel in your car (in liters):</label>
  //<input type="number" id="remainingFuel">
  //<button onclick="checkFuelLevel()">Submit</button>
  //<p id="fuelMessage"></p>

  //<label for="subject1Marks">Marks obtained in Physics:</label>
  //<input type="number" id="subject1Marks"><br>

  //<label for="subject2Marks">Marks obtained in Computer:</label>
  //<input type="number" id="subject2Marks"><br>

  //<label for="subject3Marks">Marks obtained in Chemistry:</label>
  //<input type="number" id="subject3Marks"><br>

  //<label for="totalMarks">Total Marks:</label>
  //<input type="number" id="totalMarks"><br>

  //<button onclick="calculateGrade()">Calculate</button>

  //<p id="totalMarksDisplay"></p>
  //<p id="obtainedMarksDisplay"></p>
  //<p id="percentageDisplay"></p>
  //<p id="gradeDisplay"></p>
  //<p id="remarksDisplay"></p>

//  <label for="userGuess">Guess the secret number (1-10):</label>
//<input type="number" id="userGuess"><br>

//<button onclick="guessNumber()">Submit</button>

//<label for="number">Enter a number:</label>
//<input type="number" id="number"><br>

//<button onclick="checkDivisibility()">Check Divisibility</button>

//<label for="number">Enter a number:</label>
//<input type="number" id="number"><br>

//<button onclick="checkNumber()">Check Number</button>

//<label for="temperature">Enter the temperature:</label>
//<input type="number" id="temperature"><br>

//<button onclick="checkTemperature()">Check Temperature</button>

//<label for="firstNumber">Enter the first number:</label>
//<input type="number" id="firstNumber"><br>

//<label for="secondNumber">Enter the second number:</label>
//<input type="number" id="secondNumber"><br>

//<label for="operation">Select the operation:</label>
//<select id="operation">
 // <option value="+">+</option>
  //<option value="-">-</option>
  //<option value=""></option>
  //<option value="/">/</option>
  //<option value="%">%</option>
//</select><br>


<  //button onclick="calculate()">Calculate</button>  
                                                               
   // 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

function displayWelcomeMessage() {
  var cityName = document.getElementById("cityName").value; 

  if (cityName.toLowerCase() === "karachi") { 
    var welcomeMessage = "Welcome to the city of lights, Karachi!"; 
  } else {
    var welcomeMessage = "Welcome to " + cityName + "!"; 
  }

  document.getElementById("welcomeMessage").innerHTML = welcomeMessage; 
}

//   2. Write a program to take “gender” as input from user. If the
//   user is male, give the message: Good Morning Sir. If the
//   user is female, give the message: Good Morning Ma’am

function displayGreetingMessage() {
  var gender = document.getElementById("gender").value; 

  if (gender.toLowerCase() === "male") { 
    var greetingMessage = "Good Morning Sir.";
  } else if (gender.toLowerCase() === "female") { 
    var greetingMessage = "Good Morning Ma'am.";
  } else {
    var greetingMessage = "Good Morning."; 
  }

  document.getElementById("greetingMessage").innerHTML = greetingMessage; 
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

function displaySignalMessage() {
  var signalColor = document.getElementById("signalColor").value.toLowerCase(); 

  var message = ""; 

  switch (signalColor) {
    case "red":
      message = "Stop! The signal color is red.";
      break;
    case "yellow":
      message = "Get ready! The signal color is yellow.";
      break;
    case "green":
      message = "Go! The signal color is green.";
      break;
    default:
      message = "Invalid signal color entered.";
      break;
  }

  document.getElementById("signalMessage").innerHTML = message; 
}

//   4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

function checkFuelLevel() {
  var remainingFuel = parseFloat(document.getElementById("remainingFuel").value); 

  if (remainingFuel < 0.25) {
    var message = "Please refill the fuel in your car.";
  } else {
    var message = "You have enough fuel in your car.";
  }

  document.getElementById("fuelMessage").innerHTML = message; 
}

//   5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

alert("Output for the given script:");

var a = 4;
if (++a === 5) {
alert("Given condition for variable a is true.");
}

var b = 82;
if (b++ === 83) {
alert("Given condition for variable b is true.");
}

var c = 12;
if (c++ === 13) {
alert("Condition 1 is true.");
}
if (c === 13) {
alert("Condition 2 is true.");
}
if (++c < 14) {
alert("Condition 3 is true.");
}
if (c === 14) {
alert("Condition 4 is true.");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
alert("The cost equals.");
}

if (true) {
alert("True.");
}
if (false) {
alert("False."); 
}

if ("car" < "cat") {
alert("Car is smaller than cat.");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

function calculateGrade() {
  var subject1Marks = parseFloat(document.getElementById("subject1Marks").value);
  var subject2Marks = parseFloat(document.getElementById("subject2Marks").value);
  var subject3Marks = parseFloat(document.getElementById("subject3Marks").value);
  var totalMarks = parseFloat(document.getElementById("totalMarks").value);

  var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
  var percentage = (obtainedMarks / totalMarks) * 100;

  var grade = "";
  var remarks = "";

  if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Very Good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "Good";
  } else if (percentage >= 50) {
    grade = "C";
    remarks = "Satisfactory";
  } else if (percentage >= 40) {
    grade = "D";
    remarks = "Average";
  } else {
    grade = "Fail";
    remarks = "Poor";
  }

  document.getElementById("totalMarksDisplay").innerHTML = "Total Marks: " + totalMarks;
  document.getElementById("obtainedMarksDisplay").innerHTML = "Obtained Marks: " + obtainedMarks;
  document.getElementById("percentageDisplay").innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
  document.getElementById("gradeDisplay").innerHTML = "Grade: " + grade;
  document.getElementById("remarksDisplay").innerHTML = "Remarks: " + remarks;
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

function guessNumber() {
  var secretNumber = Math.floor(Math.random() * 10) + 1; 
  var userGuess = parseInt(document.getElementById("userGuess").value);

  if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
  } else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
    alert("Close enough to the correct answer");
  } else {
    alert("Wrong guess! The secret number was " + secretNumber);
  }
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

function checkDivisibility() {
  var number = parseInt(document.getElementById("number").value);

  if (number % 3 === 0) {
    alert(number + " is divisible by 3");
  } else {
    alert(number + " is not divisible by 3");
  }
}

//   9. Write a program that checks whether the given input is an
//   even number or an odd number

function checkNumber() {
  var number = parseInt(document.getElementById("number").value);

  if (number % 2 === 0) {
    alert(number + " is an even number");
  } else {
    alert(number + " is an odd number");
  }
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

function checkTemperature() {
  var temperature = parseInt(document.getElementById("temperature").value);

  if (temperature > 40) {
    alert("It is too hot outside.");
  } else if (temperature > 30) {
    alert("The Weather today is Normal.");
  } else if (temperature > 20) {
    alert("Today’s Weather is cool.");
  } else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
  } else {
    alert("The temperature is extremely cold!");
  }
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

function calculate() {
  var firstNumber = parseFloat(document.getElementById("firstNumber").value);
  var secondNumber = parseFloat(document.getElementById("secondNumber").value);
  var operation = document.getElementById("operation").value;
  var result;

  if (operation === "+") {
    result = firstNumber + secondNumber;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
  } else if (operation === "%") {
    result = firstNumber % secondNumber;
  }

  alert("Result: " + result);
}

Assignment-8                                                                                                                                              
//<label for="character">Enter a character:</label>
    //<input type="text" id="character"><br>
  
    //<button onclick="checkCharacter()">Check Character</button>

    //<label for="integer1">Enter the first integer:</label>
    //<input type="number" id="integer1"><br>
  
    //<label for="integer2">Enter the second integer:</label>
    //<input type="number" id="integer2"><br>
  
    //<button onclick="compareIntegers()">Compare Integers</button>

    //<label for="number">Enter a number:</label>
    //<input type="number" id="number"><br>
  
   // <button onclick="checkNumber()">Check Number</button>

    //<label for="character">Enter a character:</label>
    //<input type="text" id="character"><br>
  
    //<button onclick="checkVowel()">Check Vowel</button>

    //<label for="password">Enter your password:</label>
  //<input type="password" id="password"><br>

  //<button onclick="validatePassword()">Validate Password</button>

  //<label for="time">Enter time in 24-hour format:</label>
  //<input type="text" id="time"><br>

  //<button onclick="convertTime()">Convert Time</button>                                                   
    // 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

function checkCharacter() {
    var character = document.getElementById("character").value;

    // Get the ASCII code of the character
    var asciiCode = character.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
      alert("The given input is a number.");
    } else if (asciiCode >= 65 && asciiCode <= 90) {
      alert("The given input is an uppercase letter.");
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      alert("The given input is a lowercase letter.");
    } else {
      alert("The given input is neither a number, uppercase letter, nor lowercase letter.");
    }
  }

//   2. Write a JavaScript program that accept two integers and
//   display the larger. Also show if the two integers are equal.

function compareIntegers() {
    var integer1 = parseInt(document.getElementById("integer1").value);
    var integer2 = parseInt(document.getElementById("integer2").value);

    if (integer1 > integer2) {
      alert("The larger integer is: " + integer1);
    } else if (integer2 > integer1) {
      alert("The larger integer is: " + integer2);
    } else {
      alert("The two integers are equal.");
    }
  }

//   3. Write a program that takes input a number from user &
//   state whether the number is positive, negative or zero.

function checkNumber() {
    var number = parseInt(document.getElementById("number").value);

    if (number > 0) {
      alert("The number is positive.");
    } else if (number < 0) {
      alert("The number is negative.");
    } else {
      alert("The number is zero.");
    }
  }

//   4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

function checkVowel() {
    var character = document.getElementById("character").value.toLowerCase();

    var vowels = ["a", "e", "i", "o", "u"];

    if (character.length === 1 && vowels.includes(character)) {
      alert("The character is a vowel.");
    } else {
      alert("The character is not a vowel.");
    }
  }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

function validatePassword() {
    var correctPassword = "password";
    var enteredPassword = document.getElementById("password").value;

    if (enteredPassword === "") {
      alert("Please enter your password.");
    } else if (enteredPassword === correctPassword) {
      alert("Correct! The password you entered matches the original password.");
    } else {
      alert("Incorrect password.");
    }
  }

//   6. This if/else statement does not work. Try to fix it:
//   //var greeting;
//   //var hour = 13;
//  // if (hour < 18) {
//   greeting = "Good day";
//   else
//   greeting = "Good evening";
//   }

//var greeting;
    //var hour = 13;
    //if (hour < 18) {
      //greeting = "Good day";
    //} else {
      //greeting = "Good evening";
    //}
    //alert(greeting);

    // 7. Write a program that takes time as input from user in 24
    // hours clock format like: 1900 = 7pm. Implement the
    // following case using if, else & else if statements

    //function convertTime() {
        //var inputTime = document.getElementById("time").value;
        //var hour = parseInt(inputTime.slice(0, 2));
  
        //var convertedTime;
  
        //if (hour === 12) {
          //convertedTime = hour + "pm";
        //} else if (hour > 12) {
          //convertedTime = (hour - 12) + "pm";
        //} else {
          //convertedTime = hour + "am";
        //}
  
       // alert("Converted Time: " + convertedTime);
      //</br>}


      Assignment-9                                                                                                                                    
      //<h2>Education Qualifications in Pakistan:</h2>
      //<ul id="qualifications"></ul>
  
      //<table>
       //   <thead>
         //   <tr>
           //   <th>Student Name</th>
            //  <th>Score</th>
             // <th>Percentage</th>
            //</tr>
          //</thead>
          //<tbody id="table-body"></tbody>
        //</table>
  
       // <p id="result"></p>
  
    //<button onclick="addToBeginning()">Add to Beginning</button>
    //<button onclick="addToEnd()">Add to End</button>
    //<button onclick="addTwoAtBeginning()">Add Two at Beginning</button>
    //<button onclick="deleteFirst()">Delete First</button>
    //<button onclick="deleteLast()">Delete Last</button>
    //<button onclick="addAtIndex()">Add at Index</button>
    //<button onclick="deleteFromIndex()">Delete from Index</button>
  
    //<p id="result"></p>
  
   // <button onclick="addScore()">Add Score</button>
    //<button onclick="sortScores()">Sort Scores</button>
  
    //<p id="result"></p>
  
    //<p id="output"></p>
  
    //<p id="output"></p>                                                                                                                // 1. Declare an empty array using JS literal notation to store
  // student names in future.
  
  var studentNames = [];
  console.log(studentNames);
  
  // 2. Declare an empty array using JS object notation to store
  // student names in future.
  
  var studentNames = new Array();
      console.log(studentNames);
  
  // 3. Declare and initialize a strings array.
  
  var stringsArray = ["apple", "banana", "cherry", "date"];
      console.log(stringsArray);
  
  // 4. Declare and initialize a numbers array.
  
  var numbersArray = [1, 2, 3, 4, 5];
  console.log(numbersArray);
  
  // 5. Declare and initialize a boolean array.
  
  var booleanArray = [true, false, true, false];
      console.log(booleanArray);
  
  // 6. Declare and initialize a mixed array.
  
  var mixedArray = ["Mutiba", 18, true, "apple", false];
  console.log(mixedArray);
  
  // 7. Declare and Initialize an array and store available
  // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
  // BS, BCOM, MS, M. Phil., PhD). Show the listed
  // qualifications in your browser like:
  
  var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
  var qualificationsList = document.getElementById("qualifications");
  for (var i = 0; i < qualifications.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = qualifications[i];
    qualificationsList.appendChild(listItem);
  }
  
  // 8. Write a program to store 3 student names in an array.Take
  // another array to store score of these three students.
  // Assume that total marks are 500 for each student, display
  // the scores & percentages of students like:
  
  var studentNames = ["Ali", "Sarah", "Rahil"];
  var scores = [420, 380, 450];
  
  
  var totalMarks = 500;
  var percentages = [];
  
  for (var i = 0; i < scores.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    percentages.push(percentage);
  }
  
  var tableBody = document.getElementById("table-body");
  
  for (var i = 0; i < studentNames.length; i++) {
    var row = document.createElement("tr");
    
    var nameCell = document.createElement("td");
    nameCell.textContent = studentNames[i];
    row.appendChild(nameCell);
    
    var scoreCell = document.createElement("td");
    scoreCell.textContent = scores[i];
    row.appendChild(scoreCell);
    
    var percentageCell = document.createElement("td");
    percentageCell.textContent = percentages[i].toFixed(2) + "%";
    row.appendChild(percentageCell);
    
    tableBody.appendChild(row);
  }
  
  // 9. Initialize an array with color names. Display the array
  // elements in your browser.
  // a. Ask the user what color he/she wants to add to the
  // beginning & add that color to the beginning of the array.
  // Display the updated array in your browser.
  // b. Ask the user what color he/she wants to add to the end
  // & add that color to the end of the array. Display the
  // updated array in your browser.
  // c. Add two more color to the beginning of the array.
  // Display the updated array in your browser.
  // d. Delete the first color in the array. Display the updated
  // array in your browser.
  // e. Delete the last color in the array. Display the updated
  // array in your browser.
  // f. Ask the user at which index he/she wants to add a color
  // & color name. Then add the color to desired
  // position/index. . Display the updated array in your
  // browser.
  // g. Ask the user at which index he/she wants to delete
  // color(s) & how many colors he/she wants to delete. Then
  // remove the same number of color(s) from user-defined
  // position/index. . Display the updated array in your
  // browser.
      
  var colors = ["Red", "Green", "Blue"]; 
  
      function displayArray() {
        var result = document.getElementById("result");
        result.textContent = colors.join(", "); 
      }
  
      function addToBeginning() {
        var color = prompt("Enter a color to add to the beginning of the array:");
        colors.unshift(color);
        displayArray();
      }
  
      function addToEnd() {
        var color = prompt("Enter a color to add to the end of the array:");
        colors.push(color); 
        displayArray();
      }
  
      function addTwoAtBeginning() {
        var color1 = prompt("Enter the first color to add to the beginning of the array:");
        var color2 = prompt("Enter the second color to add to the beginning of the array:");
        colors.unshift(color2, color1); 
        displayArray();
      }
  
      function deleteFirst() {
        colors.shift(); 
        displayArray();
      }
  
      function deleteLast() {
        colors.pop(); 
        displayArray();
      }
  
      function addAtIndex() {
        var index = prompt("Enter the index at which you want to add a color:");
        var color = prompt("Enter the color to add at the specified index:");
        colors.splice(index, 0, color); 
        displayArray();
      }
  
      function deleteFromIndex() {
        var index = prompt("Enter the index from which you want to delete color(s):");
        var count = prompt("Enter the number of colors you want to delete:");
        colors.splice(index, count); 
        displayArray();
      }
  
      displayArray();
  
  // 10. Write a program to store student scores in an array &
  // sort the array in ascending order using Array’s sort
  // method.
  
  var scores = []; // Empty array to store student scores
  
  function addScore() {
    var score = prompt("Enter the student score:");
    scores.push(score); 
    displayScores();
  }
  
  function sortScores() {
    scores.sort(function(a, b) {
      return a - b;
    });
    displayScores();
  }
  
  function displayScores() {
    var result = document.getElementById("result");
    result.textContent = "Student Scores: " + scores.join(", "); 
  }
  
  displayScores(); 
  
  // 11. Write a program to initialize an array with city names.
  // Copy 3 array elements from cities array to selectedCities
  // array.
  
  var cities = ["London", "Paris", "Tokyo", "New York", "Sydney"]; 
  var selectedCities = []; 
  
  selectedCities = cities.slice(1, 4);
  
  function displaySelectedCities() {
    var result = document.getElementById("result");
    result.textContent = "Selected Cities: " + selectedCities.join(", ");
  }
  
  displaySelectedCities();
  
  // 12. Write a program to create a single string from the
  // below mentioned array:
  // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
  // (Use array’s join method)
  
  var arr = ["This", "is", "my", "cat"]; 
  var result = arr.join(" "); 
  
  function displayJoinedString() {
    var output = document.getElementById("output");
    output.textContent = "Joined String: " + result;
  }
  
  displayJoinedString();
  
  // 13. Create a new array. Store values one by one in such a way
  // that you can access the values in the order in which they
  // were stored. (FIFO-First In First Out)
  
  var queue = []; 
  
  function enqueue(element) {
    queue.push(element);
  }
  
  function dequeue() {
    return queue.shift();
  }
  
  function displayQueue() {
    var output = document.getElementById("output");
    output.textContent = "Queue: " + queue.join(", ");
  }
  
  enqueue("Apple"); 
  enqueue("Banana");
  enqueue("Orange");
  
  displayQueue(); 
  
  var dequeuedElement = dequeue(); 
  console.log("Dequeued Element: " + dequeuedElement);
  
  displayQueue();

  Assignment-10                                                                                                                              
    //<p id="output"></p>

    
   // <pre id="output"></pre>

  //    <pre id="output"></pre>

   // <label for="number">Enter the number:</label>
  //<input type="number" id="number"><br><br>
  //<label for="length">Enter the table length:</label>
  //<input type="number" id="length"><br><br>
  //<button onclick="printTable()">Print Table</button><br><br>
  //<pre id="output"></pre>

  //<button onclick="printArray()">Print Array</button><br><br>
  //<pre id="output"></pre>

  //<button onclick="generateSeries()">Generate Series</button><br><br>
  //<p id="counting"></p>
  //<p id="reverseCounting"></p>
  //<p id="even"></p>
  //<p id="odd"></p>
  //<p id="series"></p>

  //<button onclick="searchArray()">Search</button>

 // <button onclick="findLargestNumber()">Find Largest Number</button>

  //<button onclick="findSmallestNumber()">Find Smallest Number</button>

  //<button onclick="printMultiplesOf5()">Print Multiples of 5</button>                                     // 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)      

var multiArray = [];

    function displayArray() {
      var output = document.getElementById("output");
      output.textContent = "Multidimensional Array: " + JSON.stringify(multiArray);
    }

    displayArray();

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]; 
  function displayMatrix() {
    var output = document.getElementById("output");
    output.textContent = "Matrix:\n";
    for (var i = 0; i < matrix.length; i++) {
      output.textContent += matrix[i].join(" ") + "\n";
    }
  }

  displayMatrix();

//   3. Write a program to print numeric counting from 1 to 10.

function printCounting() {
    var output = document.getElementById("output");
    output.textContent = ""; 
    
    for (var i = 1; i <= 10; i++) {
      output.textContent += i + " ";
    }
  }

  printCounting();

//   4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

function printTable() {
    var tableNumber = parseInt(document.getElementById("number").value);
    var tableLength = parseInt(document.getElementById("length").value);
    var output = document.getElementById("output");
    output.textContent = ""; t
    
    for (var i = 1; i <= tableLength; i++) {
      var result = tableNumber * i;
      output.textContent += tableNumber + " x " + i + " = " + result + "\n";
    }
  }

//   5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

function printArray() {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    var output = document.getElementById("output");
    output.textContent = ""; 
    
    for (var i = 0; i < fruits.length; i++) {
      output.textContent += fruits[i] + "\n";
    }
  }

//   6. Generate the following series in your browser. See
//   example output.
//   a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//   b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//   c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//   d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//   e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

function generateSeries() {
    var counting = "";
    var reverseCounting = "";
    var even = "";
    var odd = "";
    var series = "";

    for (var i = 1; i <= 15; i++) {
      counting += i + ", ";
      reverseCounting = i + ", " + reverseCounting;
      
      if (i % 2 === 0) {
        even += i + ", ";
        series += i + "k, ";
      } else {
        odd += i + ", ";
      }
    }

    document.getElementById("counting").textContent = "Counting: " + counting;
    document.getElementById("reverseCounting").textContent = "Reverse counting: " + reverseCounting;
    document.getElementById("even").textContent = "Even: " + even;
    document.getElementById("odd").textContent = "Odd: " + odd;
    document.getElementById("series").textContent = "Series: " + series;
  }

//   7. You have an array
//   A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//   Write a program to enable “search by user input” in an
//   array.
//   After searching, prompt the user whether the given item is
//   found in the list or not. Example:

function searchArray() {
    var array = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userInput = prompt("Enter an item to search:");

    var found = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === userInput) {
        found = true;
        break;
      }
    }

    if (found) {
      alert(userInput + " is found in the list!");
    } else {
      alert(userInput + " is not found in the list.");
    }
  }

//   8. Write a program to identify the largest number in the
//   given array.
//   A = [24, 53, 78, 91, 12].

function findLargestNumber() {
    var array = [24, 53, 78, 91, 12];
    var largestNumber = array[0];

    for (var i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) {
        largestNumber = array[i];
      }
    }

    alert("The largest number is: " + largestNumber);
  }

//   9. Write a program to identify the smallest number in the
//   given array.
//   A = [24, 53, 78, 91, 12]

function findSmallestNumber() {
    var array = [24, 53, 78, 91, 12];
    var smallestNumber = array[0];

    for (var i = 1; i < array.length; i++) {
      if (array[i] < smallestNumber) {
        smallestNumber = array[i];
      }
    }

    alert("The smallest number is: " + smallestNumber);
  }

//   10. Write a program to print multiples of 5 ranging 1 to
// 100.

function printMultiplesOf5() {
    var result = "";
    for (var i = 1; i <= 100; i++) {
      if (i % 5 === 0) {
        result += i + " ";
      }
    }
    alert("Multiples of 5 from 1 to 100: " + result);
  }





















//Assignment: 17 to 20: 
//Chap= 16
//Q.No= declare and initialize an empty multidimentional array.
//var matrix = [];
//QNo=2:-
//0 1 2 3
//1 0 1 2
//2 1 0 1


//var matrix = [
  //[0, 1, 2, 3],
 // [1, 0, 1, 2],
  //[2, 1, 0, 1]
//];

//for (var i = 0; i < matrix.length; i++) {
  //for (var j = 0; j < matrix[i].length; j++) {
   // document.write(matrix[i][j] + " ");
  //}
  //document.write("<br>");
// }

  //QNo=3:-
  //writ a program to print numeric counting from 1 to 10
   
  //let number = 10;
  //for (i=1; i<=number;i++){
  //console.log(i);
  //}

  //QNo=4:-
  //Write a program to print multiplication table of any number using loop.Table number length should be taken as an input from user.
   //let number =10;
   //function table(number) {
    //for (let i = 1; i <= 10; i++) {
      //let result = number * i;
     // console.log(`${number} x ${i} = ${result}`);
    //}
  //}

 //QNo5 Write a program to print items  of the following array using loop                    
 
//var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

//console.log("The element at index 0 is: " + fruits[0]);

//for (var i = 0; i < fruits.length; i++) {
  //console.log("Element at index " + i + " is: " + fruits[i]);
//}

//QNo=Generate the following series in your browser. See example output.
//a) Counting 1 to 15

//for (let i = 1; i <= 15; i++) {
  //console.log(i);
//}

// b) Reverse Counting: 10 to 1

//for (let i = 10; i>=1; i--){
   //console.log(i);
  //}

  // c) Even: 0,2,4,6,8,10,12,14,16,18,20
  //for (var i = 2; i <= 20; i +=2) {
    //console.log(i);
  //}
  // d) Odd: 1,3,5,7,9,l1,13,15,17,19
  
  //for (var i = 1; i <= 19;i+=2){
   // console.log(i);
  //}
  
  // e) Series 2k,4k,6k,8k,10k,12k,14k,16k,18k,20k

//for (var i = 1; i <=10 ;  i ++){
 // var number = i * 2 * 1000;  
 // console.log(number + "k" );
//}

//QNo= You have an array 
//A=["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable"search by user input" in an array.
//after seearching prompt the user whether the given item isfound in the list or Not.

//var items = ["cake", "apple pie", "cookie", "chips", "patties"];

//var userInput = prompt("Welcome To ABC Bakery. What do you want to order siri ma'am?");

//var found = false;

//for (let i = 0; i < items.length; i++) {
 // if (items[i] === userInput) {
   // found = true;
  //  break;
  //}
//}

//if (found) {
  //alert("cookkie is available at index 2 in our bakery!");
//} else {
 // alert("We are sorry.item is not available in our bakery.");
//}

 
// Qno=Write a program to identify the largest number in the given array.
// A=[24,53,78,91,12] 

//var numbers = [24, 53, 78, 91, 12];

//var largestNumber = numbers[0]; 

//for (var i = 1; i < numbers.length; i++) {
 // if (numbers[i] > largestNumber) {
   // largestNumber = numbers[i];
  //}
//}

//console.log("The largest number is: " + largestNumber);

// Qno=Write a program to identify the smallest number in the given array.
// A=[24,53,78,91,12]  

//var numbers = [24, 53, 78, 91, 12 ];

//var smallestNumber = numbers[0];

//for (var i = 1; i < numbers.length;i++) {
//if (numbers[i] < smallestNumber) {
  // smallestNumber = numbers [i]; 
//}

//}
//console.log("The smallest number is: " + smallestNumber);

//Qno = Write a program to print multiples of 5 ranging 1 to 100

//for (var i = 1; i <= 100; i++) {
//if (i% 5 == 0){
  //console.log(i);
//}
//}

//Assignment 21-25

//Qno1= Write a program that take two user input for first and last name using prompt and merge them in a new variable titled fullName.
//Greet the user using his full name.

//let firstName = prompt("Enter your first name:");
//let lastName = prompt("Enter your last name:");

//let fullName = firstName + " " + lastName;

//console.log("Hello, " + fullName + "! Welcome!");

//Q.no2= Write a program that takes a user input about his favourite mobile phone model. Find and display the length of user input in your browser.


//var userInput = prompt("Enter your favorite mobile phone model:");

//var inputLength = userInput.length;

//document.write("<br>My favorite phone is: " + userInput);
//document.write(" and Length of user input: " + inputLength);

//Q.no3= write a program to find the index of letter "n" in the word "Pakistan" and display the result in your browser.

//let word = "Pakistani";
//let letter = 'n';

//let index = word.indexOf(letter);

//document.write("String: " + word + "<br>");
//document.write("Index of '" + letter + "': " + index);

//Q.No=4 write a program to find a last index of letter "l" in the word "Hello World" and diplay the result in your browser.

//let word = "Hello World";
//let letter = 'l';

//let lastIndex = word.lastIndexOf(letter);

//document.write("String: " + word + "<br>");
//document.write("lastIndex of '" + letter + "': " + lastIndex);

//Q.No=5 Write a program to find a character at 3rd index in the word "Pakistani" and display the result in your browser.

//let word = "Pakistani";
//let index = 3;

//let character = word.charAt(index);

//document.write("String: " + word + "<br>");
//document.write("Character at index " + index  +  ": " + character);

//Q.No=6 Write a program to replace the "Hyder" to "Islam" in the word "Hyderabad" and display the result in your browser. 

//var word = "Hyderabad";
//var substringToReplace = "Hyder";
//var replacement = "Islam";

//var newWord = word.replace(substringToReplace, replacement);

//document.write("City: " + word + "<br>");
//document.write("After Replacement : " + newWord);

//Q.No=7 Write a program to replace all occurances of "and" in the string with "&" and display the result in your browser.
//       var message = "Ali and Sami are best friends. They play cricket and football together.";

//var message = "Ali and Sami are best friends. They play cricket and football together.";

//var replacedMessage = message.replace(/and/g, "&");

//document.write("Original message: " + message + "<br>");
//document.write("Replaced message: " + replacedMessage);

//Q.No=8 Write a program that converts a string "472" to a number 472. Display the values and types in your browser.

//let str = "472";
//let num = Number(str);

//document.write(" Value: " + str + "<br>");
//document.write(" Type: " + typeof str + "<br>");
//document.write(" Value: " + num + "<br>");
//document.write(" Type: " + typeof num);

//Q.No=9 Write a program that takes user input. Convert and show the input and capital letters. 
//User Input: Peanuts
//Upper case : PEANUTS

//var userInput = prompt("Enter your input:");

//var convertedInput = userInput.toLowerCase();
//var uppercaseInput = convertedInput.toUpperCase();

//document.write("User Input: " + userInput + "<br>");
//document.write("Upper case: " + uppercaseInput);

//Q.No=10 write a program that takes user input. Convert and show the input in title case.

//let userInput = prompt("Enter your input:");

//let titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

//document.write("User Input: " + userInput + "<br>");
//document.write("Title Case: " + titleCaseInput);

// Q.No= Write am program that converts the variable num to string.
    // var num= 35.36
    //remove the dot to display "3536"display in your browser.    

    var num = 35.36;  // Example number

//var numAsString = num.toString().replace(".", "");

//document.write("Original Number: " + num + "<br>");
//document.write("Number as String: " + numAsString);

//Q.No= Write a program to take user input and store username in avariable. If the username contains any special symbol among
// [@.,!], prompt the user to enter a valid username .
//For character codes of [@.

//var username = prompt("Enter your username:");

//var specialSymbols = ["@", ".", "!"];

//var isValid = true;

//for (var i = 0; i < username.length; i++) {
  //var charCode = username.charCodeAt(i);
  //if (charCode === 64 || charCode === 46 || charCode === 33) {
    //isValid = false;
    //break;
  //}
//}

//if (isValid) {
  //document.write("Username: " + username);
//} else {
  //alert("Invalid username! Please enter a valid username without special symbols [@.,!]");
//}

//Q.No= You have an array 
// A=["cake", "apple pie", "cookie", "chips", "patties"]
//Write a program to enable "search by user input" in an array after searching, prompt the user whether 
//the given item is found in the list or not.
//Note: Perform case insensitive search. whether the user enters cookie, Cookie, COOKIE or CooKIe, program 
//should inform about its availability:  

//var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//var userInput = prompt("Enter an item to search:");

//var found = false;

//for (var i = 0; i < A.length; i++) {
  //if (A[i].toLowerCase() === userInput.toLowerCase()) {
    //found = true;
    //break;
  //}
//}

//if (found) {
  //alert("The item '" + userInput + "' is found in the list.");
//} else {
 // alert("The item '" + userInput + "' is not found in the list.");
//}

//Q.No= Write a program to take a password as an input from muser. Them password must qualify 
//these requirements:
//a): It should contain Alphabet Numbers.
  
//var password = prompt("Enter a password:");

//var hasAlphabet = false;
//var hasNumber = false;

//for (var i = 0; i < password.length; i++) {
  //var char = password[i];

  //if (/[a-zA-Z]/.test(char)) {
   // hasAlphabet = true;
  //} else if (/[0-9]/.test(char)) {
    //hasNumber = true;
  //}

  //if (hasAlphabet && hasNumber) {
    //break;
  //}
//}

//if (hasAlphabet && hasNumber) {
  //alert("Password is valid.");
// } else {
  //alert("Password should contain both alphabets and numbers.");
//}

//b) It should not start with a number.

 //var password = prompt("Enter a password:");

// if (/^[^0-9]/.test(password)) {
 // alert("Password is valid.");
 // } else {
  // alert("Password should not start with a number.");
// }

//c) It must atleast 6 character long
 
 //var password = prompt("Enter a password:");

 //if (password.length >= 6) {
  //alert("Password is valid.");
 //} else {
  //alert("Password must be at least 6 characters long.");
//}

//Q.No=16= Write a program to convert the following, string to an array using string split method.
// var university = "University of Karachi".
//display the elements of array in browser

//var university = "University of Karachi";
//var array = university.split("");

//for (var i = 0; i < array.length; i++) {
  //document.write(array[i] + "<br>");
// }

//Q.No= Write a program to display the last character of a user input.

//var userInput = prompt("Enter a string:");
//var lastCharacter = userInput[userInput.length - 1];

//document.write("Last character: " + lastCharacter);

//Q.No = You have a string "the quick brown for jumps over the lazy dog". Wriite a program to count number of occurances 
//of word "the" in given string.

//var string = "The quick brown fox jumps over the lazy dog";
//var word = "the";
//var count = 0;

//var regex = new RegExp("\\b" + word + "\\b", "gi");
//var matches = string.match(regex);

//if (matches) {
  //count = matches.length;
//}

//document.write("Text: " + string + "<br>");
//document.write("There are " + count + " occurrences of the word '" + word + "'");

// MATH METHODS
                                      
//   1. Write a program that takes a positive integer from user &
//   display the following in your browser.
//   a. number
//   b. round off value of the number
//   c. floor value of the number
//   d. ceil value of the number    

function calculateValues() {
   
  var number = parseInt(document.getElementById("inputNumber").value);
  var roundOff = Math.round(number);
  var floorValue = Math.floor(number);
  var ceilValue = Math.ceil(number);
  document.getElementById("number").innerHTML = "Number: " + number;
  document.getElementById("roundOff").innerHTML = "Round Off: " + roundOff;
  document.getElementById("floorValue").innerHTML = "Floor Value: " + floorValue;
  document.getElementById("ceilValue").innerHTML = "Ceil Value: " + ceilValue;
}

//   2. Write a program that takes a negative floating point
//   number from user & display the following in your browser.
//   a. number
//   b. round off value of the number
//   c. floor value of the number
//   d. ceil value of the number

function calculateValues() {
  
  var number = parseFloat(document.getElementById("inputNumber").value);
  var roundOff = Math.round(number);
  var floorValue = Math.floor(number);
  var ceilValue = Math.ceil(number);
  document.getElementById("number").innerHTML = "Number: " + number;
  document.getElementById("roundOff").innerHTML = "Round Off: " + roundOff;
  document.getElementById("floorValue").innerHTML = "Floor Value: " + floorValue;
  document.getElementById("ceilValue").innerHTML = "Ceil Value: " + ceilValue;
}

//   3. Write a program that displays the absolute value of a
//   number.
//   E.g. absolute value of -4 is 4 & absolute value of 5 is 5

function calculateAbsoluteValue() {
  var number = parseFloat(document.getElementById("inputNumber").value);
  var absoluteValue = Math.abs(number);
  document.getElementById("result").innerHTML = "The absolute value of " + number + " is " + absoluteValue;
}

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

function rollDice() {
  var diceValue = Math.floor(Math.random() * 6) + 1;
  document.getElementById("result").innerHTML = "Dice value: " + diceValue;
}

// 5. Write a program that simulates a coin toss using random()
//   method of JS Math class. Display the value of coin in your
//   browser

function tossCoin() {
  var randomNumber = Math.random();
  var coinValue = randomNumber < 0.5 ? "Heads" : "Tails";
  document.getElementById("result").innerHTML = "Coin value: " + coinValue;
}

// 6. Write a program that shows a random number between 1
//   and 100 in your browser.

function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("result").innerHTML = "Random number: " + randomNumber;
}

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

function displayWeight() {
  var userInput = document.getElementById("weightInput").value;
  var weight = parseFloat(userInput);
  document.getElementById("result").innerHTML = "Weight: " + weight + " kgs";
}

// 8. Write a program that stores a random secret number from
//   1 to 10 in a variable. Ask the user to input a number
//   between 1 and 10. If the user input equals the secret
//   number, congratulate the user.

function checkGuess() {
  var secretNumber = Math.floor(Math.random() * 10) + 1;
  var userGuess = parseInt(document.getElementById("guessInput").value);
  if (userGuess === secretNumber) {
   
    document.getElementById("result").innerHTML = "Congratulations! You guessed the secret number.";
  } else {

    document.getElementById("result").innerHTML = "Sorry, your guess is incorrect. The secret number was " + secretNumber + ".";
  }
}

//DATE METHODS//

// 1. Write a program that displays current date and time in 
// your browser.

// var currentDate = new Date();
// var date = currentDate.toLocaleDate();
// var time = currentDate.toLocaleTime();
// document.write("Current date: " + date + "<br>");
// document.write("Current time: " + time);

// // 2. Write a program that alerts the current month in words. 
// For example December.

// var currentDate = new Date();
// var monthIndex = currentDate.getMonth();
// var monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var currentMonth = monthNames[monthIndex];
// alert("Current month: " + currentMonth);

// // 3. Write a program that alerts the first 3 letters of the current
// // day

// var currentDate = new Date();
// var dayIndex = currentDate.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = dayNames[dayIndex];
// alert("Current day: " + currentDay);

// // 4. Write a program that displays a message “It’s Fun day” if 
// // its Saturday or Sunday today.

// var currentDate = new Date();
// currentDate.toString;
// var dayindex = currentDate.toString();
// var day = dayindex.slice(0,3);
// if (day === "Sat"){
//     alert("It's Fun Day")
// }else if(c === "Sun"){
//     alert("It's Fun Day")
// }
// // 5. Write a program that shows the message “First fifteen 

// var currentDate = new Date();
// var date = currentDate.getDate();
// if (date < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// // 6. Write a program that determines the minutes since 
// // midnight, Jan. 1, 1970 and assigns it to a variable that 
// // hasn't been declared beforehand.

// var now = new Date();
// var millisecondsSince1970 = now.getTime();
// var minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
// console.log(minutesSince1970);

// // 7. Write a program that tests whether it's before noon and 
// // alert “Its AM” else “its PM”.

// var currentTime = new Date();
// var hour = currentTime.getHours();
// if (hour < 12) {
//   alert("IT'S AM");
// } else {
//   alert("IT'S PM");
// }

// // 8. Write a program that creates a Date object for the last day 
// // of the last month of 2020 and assigns it to variable named 
// // laterDate.

// var laterDate = new Date(2020, 11, 31);
// console.log(laterDate);

// // 9. Create a date object of the starting date of this Ramadan 
// // and alert the number of days past since 1st Ramadan?

// var startingDate = new Date(2023, 3, 18);
// var currentDate = new Date();
// var timeDiff = currentDate.getTime() - startingDate.getTime();
// var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


// // 10. Write a program that displays in your browser the 
// // seconds that elapsed between the reference date and the 
// // beginning of 2015.

// var referenceDate = new Date("January 1, 1970");
// var beginningOf2015 = new Date("January 1, 2015");
// var timeDiff = (beginningOf2015.getTime() - referenceDate.getTime()) / 1000;
// alert("Seconds elapsed between the reference date and the beginning of 2015: " + timeDiff + " seconds");

// // 11. Create a Date object for the current date and time. 
// // Extract the hours, reset the date object an hour ahead and 
// // finally display the date object in your browser.

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Updated Date and Time: " + currentDate);

// // 12. Write a program that creates a date object and show the 
// // date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date Reset To 100 Years Back: " + currentDate);

// // 13. Write a program to ask the user about his age. Calculate 
// // and show his birth year in your browser.

// var age = prompt("What is your age?");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// alert("Your birth year is: " + birthYear);

// // // 14. Write a program to generate your K-Electric bill in your
// // // browser. All the amounts should be rounded off to 2 
// // // decimal places.

// // a. Customer Name
// var customerName = prompt("Enter customer name:");
// // b. Current Month
// var currentMonth = prompt("Enter current month:");
// // c. Number of Units
// var numberOfUnits = parseFloat(prompt("Enter number of units:"));
// // d. Charges per Unit
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// // e. Net Amount Payable (within Due Date)
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// // f. Late Payment Surcharge
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
// // g. Gross Amount Payable (after Due Date)
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// // Where,
// // Net Amount Payable (within Due Date) = Number of units * Charges per unit
// // & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Current Month: " + currentMonth + "</p>");
// document.write("<p>Number of Units: " + numberOfUnits.toFixed(2) + "</p>");
// document.write("<p>Charges per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayableWithinDueDate + "</p>");
// document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");

//FUNCTION//

// 1. Write a function that displays current date & time in your 
// browser.

// function current() {
//   var Date = new Date();
//   document.write(Date);

// }

// // 2. Write a function that takes first & last name and then it 
// // greets the user using his full name.

// function greet() {
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     document.write('Welcome ' + firstName + '-' + lastName + '<br>');
//   }
//    var greetcall = greet();
//    Console.log(greetcall);
  
  // // 3. Write a function that adds two numbers (input by user) 
  // // and returns the sum of two numbers.
  
//   function add(a, b) {
//     var a, b;
//     var sum = parseInt(a) + parseInt(b);
//     document.write('the addition of the numbers you enterd is =' + sum);
//   }
//   var input1 = prompt("Enter num 1");
//   var input2 = prompt("Enter num 2");
//   add(input1, input2);
  
  // // 4. Calculator:
  
//   function desired_op(num1, num2, op) {
//     switch (op) {
//       case '+': return result = num1 + num2; break;
//       case '-': return result = num1 - num2; break;
//       case '*': return result = num1 * num2; break;
//       case '/': return result = num1 / num2; break;
//     }
//   }
//   var a = prompt("Input 1");
//   var b = prompt("Input 2");
//   var c = prompt("Input operator");
//   var result = desired_op(a, b, c);
//   alert(result);
  
 // 5. Write a function that squares its argument.
  
//   function square(x) {
//     return x * x;
//   }
//   var squareNum = prompt("Enter the number you want square of");
//   var answer = square(squareNum);
//   alert("The square of the number you entered is= " + answer);
  
  // // 6. Write a function that computes factorial of a number.
  
//   function factorial() {
//     var a, y, b = 1;
//     var y = prompt("Enter a number:");
//     for (a = y; a >= 1; a--)
//       b = a * b;
  
//     document.write("<br>The factorial is " + b);
//   }
//    var factorialcall =factorial();
  
  // // 7. Write a function that take start and end number as inputs 
  // // & display counting in your browser.
  
//   var a = prompt("Enter Start of the counting");
//   var b = prompt("Enter the end of the counting");
//   for (i = a; i < b; i++) {
//     document.write(i + "<br>");
//   }
  
  // // 8. Write a nested function that computes hypotenuse of a 
  // // right angle triangle. 

  // // Hypotenuse^2 = Base^2 + Perpendicular^2
 
//   var base = prompt("Enter base");
//   var perpendicular = prompt("Enter Perpendicular");
  
//   function hypotenuse(base, perpendicular) {
//     function calculateSquare(side) {
//       return side * side;
//     }
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
  
//     document.write("Hypotenuse =" + hypotenuse);
//   }
//   var hypotenuse = hypotenuse(base, perpendicular);
  
  // // 9. Write a function that calculates the area of a rectangle.
  
//   var a = prompt("Enter Width Of The Rectangle");
//   var b = prompt("Enter Height Of the Rectangle");
//   function areaofrec(width, height) {
//     var A = width * height;
//     alert("Area of rectangle is= " + A);
//   }
//   var areaofrec = areaofrec(a, b);
  
  // //  10. Write a JavaScript function that checks whether a passed 
  // // string is palindrome or not?
  
//   function isPalindrome(string) {
//     var processedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     for (var i = 0; i < processedStr.length / 2; i++) {
//       if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   var input = prompt("Enter a word or phrase:");
//   var result = isPalindrome(input);
//   if (result) {
//     console.log("The Input Is A Palindrome.");
//   } else {
//     console.log("The Input Is Not A Palindrome.");
//   }
  
  // // 11. Write a JavaScript function that accepts a string as a 
  // // parameter and converts the first letter of each word of the 
  // // string in upper case. 
  
//   function capitalizeFirstLetter(str) {
//     var words = str.split(' '); // Split the string into an array of words
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       words[i] = capitalizedWord;
//     }
//     var result = words.join(' ');
//     return result;
//   }
//   var input = prompt("Enter A Sentence:");
//   var output = capitalizeFirstLetter(input);
//   document.write("Output:" + output);
  
  // // 12. Write a JavaScript function that accepts a string as a 
  // // parameter and find the longest word within the string. 

//   function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;
//   }
//   var input = prompt("Enter a sentence:");
//   var output = findLongestWord(input);
//   alert("Output:"+ output);
  
  // // 13. Write a JavaScript function that accepts two arguments, a 
  // // string and a letter and the function will count the number of 
  // // occurrences of the specified letter within the string. 

  
//   function char_count(str, letter) 
//   {
//    var letter_Count = 0;
//    for (var position = 0; position < str.length; position++) 
//    {
//       if (str.charAt(position) == letter) 
//         {
//         letter_Count += 1;
//         }
//     }
//     return letter_Count;
//   }
//   console.log(char_count('w3resource.com', 'o'));
  
  // // 14. The Geometrizer
  // // Create 2 functions that calculate properties of a circle
  // // Create a function called calcArea:
  // // Pass the radius to the function.
  // // Calculate the area based on the radius, and output "The area is NN".
  // // Circumference of circle = 2πr
  // // Area of circle = πr2

// FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

// function power(a, b) {
//   var result = 1;
//   for (var i = 0; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }
// var base = parseFloat(prompt("Enter the base number:"));
// var exponent = parseInt(prompt("Enter the exponent:"));
// var result = power(base, exponent);
// alert( base + " raised to the power of " + exponent + " is " + result);

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var year = parseInt(prompt("Enter a year:"));
// if (isLeapYear(year)) {
//   alert( year + " This is a leap year.");
// } else {
// alert(year + " This is not a leap year.");
// }

// // 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// // c, then area of triangle is given by
// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2
// // Calculate area of triangle using 2 functions

// function calculateArea(a, b, c) {
//   var s = calculateS(a, b, c);
//   var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }
// function calculateS(a, b, c) {
//   var s = (a + b + c) / 2;
//   return s;
// }
// var sideA = 6;
// var sideB = 6;
// var sideC = 6;
// var triangleArea = calculateArea(sideA, sideB, sideC);
// document.write("Area of the triangle:", triangleArea);

// // 4. Write a function that receives marks received by a student in 3 
// // subjects and returns the average and percentage of these
// // marks. there should be 3 functions one is the mainFunction 
// // and other are for average and percentage. Call those functions 
// // from mainFunction and display result in mainFunction.


// function calculateAverage(subject1, subject2, subject3) {
//   var totalMarks = subject1 + subject2 + subject3;
//   var average = totalMarks / 3;
//   return average;
// }
// function calculatePercentage(subject1, subject2, subject3) {
//   var totalMarks = subject1 + subject2 + subject3;
//   var totalMarksOutOf = 300;
//   var percentage = (totalMarks / totalMarksOutOf) * 100;
//   return percentage;
// }
// function mainFunction() {
//   var subject1Marks = parseFloat(prompt("Enter marks for subject 1:"));
//   var subject2Marks = parseFloat(prompt("Enter marks for subject 2:"));
//   var subject3Marks = parseFloat(prompt("Enter marks for subject 3:"));
//   var averageMarks = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
//   var percentageMarks = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
//   document.write("Average marks:"+ averageMarks);
//   document.write("Percentage marks:"+ percentageMarks);
// }
// var mainFunction = mainFunction();

// // 5. You have learned the function indexOf. Code your own custom 00
// // function that will perform the same functionality. You can code 
// // for single character as of now.

// function customIndexOf(str, searchChar) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === searchChar) {
//       return i;
//     }
//   }
//   return -1;
// }
// var str = "Hello, World!";
// var searchChar = "o";
// var index = customIndexOf(str, searchChar);
// alert("i" + index);

// // 6. Write a function to delete all vowels from a sentence. Assume 
// // that the sentence is not more than 25 characters long.

// function deleteVowels(sentence) {
//   var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O'];
//   var result = '';
//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i].toLowerCase();

//     if (vowels.indexOf(char) === -1) {
//       result += sentence[i];
//     }
//   }
//   return result;
// }
// var sentence = "HI, how aRe you I'm Fine?";
// var modifiedSentence = deleteVowels(sentence);
// alert(modifiedSentence);

// // 7. Write a function with switch statement to count the number of 
// // occurrences of any two vowels in succession in a line of text. 
 
// function disemvowel(string) {

//   let vowels = {
//     'a': true,
//     'e': true,
//     'i': true,
//     'o': true,
//     'u': true
//   };

//   let result = "";

//   for (let i = 0; i < string.length; i++) {
//     let letter = string[i].toLowerCase();
//     if (!vowels[letter]) {
//       result += string[i];
//     }
//   };
//   return result;
// }
// var sentence = "Pleases read this application and give me gratuity";
// var occurrences = disemvowel(sentence);
// document.write("Number of occurrences: " + occurrences);

// // 8. The distance between two cities (in km.) is input through the 
// // keyboard. Write four functions to convert and print this 
// // distance in meters, feet, inches and centimeters.

// function convertToMeters(distanceInKm) {
//   return distanceInKm * 1000;
// }
// function convertToFeet(distanceInKm) {
//   return distanceInKm * 3280.84;
// }
// function convertToInches(distanceInKm) {
//   return distanceInKm * 39370.1;

//EVENTS
// 1. Show an alert box on click on a link.
// function showAlert() {
//     alert("Link clicked!");
// }

// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.

// function showAlert(message) {
//     alert(message);
// }
// // 3. Display 10 student records in table and each row should contain a delete
// // button. If you click on a button to delete a record, entire row should be 
// // deleted. 

// function deleteRow(row) {
//     var i = row.parentNode.parentNode.rowIndex;
//     document.getElementById("studentTable").deleteRow(i);
// }
// // 4. Display an image in browser. Change the picture on mouseover and set the
// // first picture on mouseout.

// function changeImage(imageId, newImage) {
//     var image = document.getElementById(imageId);
//     image.src = newImage;
// }
// function restoreImage(imageId, originalImage) {
//     var image = document.getElementById(imageId);
//     image.src = originalImage;
// }

// // 5. Show a counter in browser. Counter should increase on click on increase 
// // button and decrease on click on decrease button. And show updated counter 
// // value in browser.

// var counter = 0;
// function increaseCounter() {
//     counter++;
//     updateCounter();
// }
// function decreaseCounter() {
//     if (counter > 0) {
//         counter--;
//         updateCounter();
//     }
// }
// function updateCounter() {
//     var counterElement = document.getElementById("counter");
//     counterElement.innerHTML = counter;
// }
//Q-1 Consider you have following code snippet: (Copy it in your HTML file)
 //<div>
 //<h1> DOM </h1>
 //<div id=”form-content” class=”content”>
 //<label for=”first-name”>First Name</label>
 //<input type=”text” id=”first-name” />
 //<label for=”last-name”>Last Name</label>
 //<input type=”text” id=”last-name” />
 //<label for=”email”>Email</label>
 //<input type=”text” id=”email” />
 //</div>
 //<div id=”main-content” class=”content”>
 //<p class=”render”> First Name : Alex</p>
 //<p class=”render” id=”lastName”>Last Name: Bank</p>
 //<p class=”render”> Email : alexbank@example.com</p>
 //<p class=”render”> Country : Pakistan </p>
 ///<p class=”render”> contact : +92 300 1234567</p>
 //</div>
 //</div>


// i. Get element of id “main-content” and assign them in a variable.

var content= document.getElementById('main-content');
console.log(content);

 //ii. Display all child elements of “main-content” element.

 var child_Elements = mainContent.children;
 console.log(child_Elements);

 //iii. Get all elements of class “render” and show their innerHTML  in browser.

 var render_Elements = document.getElementsByClassName("render");
for (var i = 0; i < render_Elements.length; i++) {
console.log(render_Elements[i].innerHTML);
}

//iv. Fill input value whose element id first-name using javascript.

var firstName = document.getElementById("first-name");
firstName.value = "John";

 //v. Repeat part iv for id ”last-name” and “email”.

 var lastName= document.getElementById("last-name");
 var email = document.getElementById("email");
 lastName.value = "Doe";

 