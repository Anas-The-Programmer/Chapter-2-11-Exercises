// Saylani Assignment # 3

// CHAPTER 2 EXERCISES  

// // Question # 1 ~ Declearing variable named username
// let username = prompt("Enter your Name:")
// document.write(username);

// // Question # 2 ~ Declearing variable named myName and representing my name
// let myName = "Muhammad Anas"
// document.write(myName);

// // Quesiton # 3 
// let message = "Hello World"
// alert(message);

// // Question #4
// let username=prompt("Enter your name:")
// let age = Number(prompt("Enter your age:"))
// let occupation = prompt("Enter your occupation:")
// let study = prompt("Enter your school or collage:")
// alert(username);
// alert(age);
// alert(occupation);
// alert(study);

// Question 5
// let word = "Pizza"

// alert(
//     word + "\n" +
//     word.slice(0 , 4)+"\n"+
//     word.slice(0 , 3)+"\n"+
//     word.slice(0 , 2)+"\n"+
//     word.slice(0 , 1)
// );

// //  Question 6 ~ Fortune Teller
// let no_of_childrens = Number(prompt("Enter the number of childrens:"))
// let partner = prompt("Enter the name of your partner:")
// let place = prompt("Enter your location:")
// let job = prompt("Enter your job:")

// alert(`You will be a ${job} in ${place}, and married with ${partner} with ${no_of_childrens} kids`)

// Question 7 ~ Email
// let email = "xyz@gmail.com";
// alert("Your email address is:   " + email + "   ");

// Question 8
// let book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the book '" + book + "'")

// Question 9
// // Taking variables from Excercise 4
// let username=prompt("Enter your name:")
// let age = Number(prompt("Enter your age:"))
// let occupation = prompt("Enter your occupation:")
// let study = prompt("Enter your school or collage:")

// document.write(`My name is ${username} , I am ${age} years old , I study in ${study} and I take ${occupation} classes`)

// Question 10
// document.write("Yah! I can write HTML content through JavaScript")


// CHAPTER 3 Excercises
// Question 1
// let age = 16
// alert(`I am ${age} years old`)

// Question 2
// let visits = 20;
// visits = visits + 1;
// alert("You have visited this site " + visits + " times");

// Question 3
// let birthYear = 2010
// document.write(`My birth year is ${birthYear} <br> Data type of my declared variable is ${typeof birthYear}`);

// Question 4
// let clothingStore = "XYZ Clothing Store"
// let visitor = prompt("Enter your Name");
// let product = prompt("Enter your product")
// let quantity = Number(prompt(`How many ${product} you want`))

// document.write(`${visitor} ordered ${quantity} ${product} on ${clothingStore}`)

// CHAPTER 4 EXCERCISES

// Question 1
// let name; let age; let occupation;

// Question 2 ~ 5 Legal and 5 Illegal variables name
// Legal
// let name;
// let name1;
// let name_2
// let $name;
// let NAME;

// ILLEGAL
// let 12;
// let @name;
// let typeof;
// let !age
// let false;

// Question 3
// A)
// document.write("<h1>Rules for naming JS variables</h1>")

// B)
// document.write("Variable name can only contain letter, digits, dollar sign ($) and underscore <br> For example $my_1stVariable")]

// C)
// document.write("Variable name must begin with a dollar sign ($), underscore(_), or digit <br> For example $name, _name or name")

// D)
// document.write("Variable name are case Sensitive")

// // E)
// document.write("<br>Variable name should not be JS Keywords")

// CHAPTER 5-7 EXCERCISES
//  Question 1
// Addition
// let a = Number(prompt("Enter the first number"))
// let b = Number(prompt("Enter the second number"))
// let add = a + b
// alert(`Sum of ${a} and ${b} is ${add}`)

// Question 2
// Subtraction
// let a = Number(prompt("Enter the first number"))
// let b = Number(prompt("Enter the second number"))
// let sub = a - b
// alert(`Subtraction of ${a} and ${b} is ${sub}`)

// Multiplication
// let a = Number(prompt("Enter the first number"))
// let b = Number(prompt("Enter the second number"))
// let mul = a * b
// alert(`Multiplication of ${a} and ${b} is ${mul}`)

// Division
// let a = Number(prompt("Enter the first number"))
// let b = Number(prompt("Enter the second number"))
// let div = a / b
// alert(`Division of ${a} and ${b} is ${div}`)

// Modulus
// let a = Number(prompt("Enter the first number"))
// let b = Number(prompt("Enter the second number"))
// let modulus = a % b
// alert(`Modulus of ${a} and ${b} is ${modulus}`)

// Question 3
// let value; 
// document.write("Value after variable declaration is: " + value + "<br>"); 

// value = 3; 
// document.write("Initial Value:" + value + "<br>"); 

// value = value + 1; 
// document.write("Value after increment is:" + value + "<br>");

// value = value + 7;
// document.write("Value after addition is:" + value + "<br>");

// value = value - 1;
// document.write("Value after decrement is:" + value + "<br>");

// value = value % 3;
// document.write("The remainder is:" + value + "<br>");

// Question 4
// let cost = 600
// document.write(`Total cost to buy 5 tickets is ${cost * 5}`)

// Question 5
// no = Number(prompt("Enter the number you want the multiplication table of:"))

// document.write(`Multiplication table of ${no}<br>`)
// document.write(`${no} X 1 = ${no * 1}<br>`)
// document.write(`${no} X 2 = ${no * 2}<br>`)
// document.write(`${no} X 3 = ${no * 3}<br>`)
// document.write(`${no} X 4 = ${no * 4}<br>`)
// document.write(`${no} X 5 = ${no * 5}<br>`)
// document.write(`${no} X 6 = ${no * 6}<br>`)
// document.write(`${no} X 7 = ${no * 7}<br>`)
// document.write(`${no} X 8 = ${no * 8}<br>`)
// document.write(`${no} X 9 = ${no * 9}<br>`)
// document.write(`${no} X 10 = ${no * 10}<br>`)

// Question 6
// let celsius = Number(prompt("Enter the temperature in celsius"));
// let fahrenheit = (celsius * 9/5) + 32;
// document.write(`${celsius}°C is ${fahrenheit}°F<br>`);

// let fahrenheit2 = Number(prompt("Enter the temperature in fahrenheit"));
// let celsius2 = (fahrenheit2 - 32) * 5/9;
// document.write(`${fahrenheit2}°F is ${celsius2}°C<br>`);

// // Question 7
// let item1_price = Number(prompt("Enter the price of item one"));
// let quantity_item1 = Number(prompt("Enter the quantity of item one"));

// let item2_price = Number(prompt("Enter the price of item two"));
// let quantity_item2 = Number(prompt("Enter the quantity of item two"));

// let shipping_charges = Number(prompt("Enter the shipping charges"));

// let total = item1_price * quantity_item1 + item2_price *quantity_item2 + shipping_charges

// document.write(`Price of item 1 is ${item1_price}<br>`);
// document.write(`Quantity of item 1 is ${quantity_item1}<br>`);
// document.write(`Price of item 2 is ${item2_price}<br>`);
// document.write(`Quantity of item 2 is ${quantity_item2}<br>`);
// document.write(`Shipping charges ${shipping_charges}<br>`);
// document.write(`Total Cost of your order is ${total} PKR <br>`);

// Question 8
// document.write("<h1>Mark Sheet</h1>")
// let total_marks = Number(prompt("Enter the total marks"));
// let marks_obtained = Number(prompt("Enter the obtained marks"));
// let percentage = marks_obtained / total_marks * 100;
// document.write(`Total Marks : ${total_marks}<br>`);
// document.write(`Marks Obtained : ${marks_obtained}<br>`);
// document.write(`Percentage : ${percentage}%<br>`);

// Question 9
// let us_dollar = 10
// let saudi_rupees = 25
// let pkr = 10 * 104 + 25 * 28
// document.write("<h1> Currency in PKR</h1>")
// document.write(`Total currency in PKR ${pkr}`)

// Question 10
// let number = 5;
// let result =  ((number + 5) *10) / 2;
// alert(result);

//  Question 11 ~ Age Calculator
// document.write("<h1>Age Calculator</h1>")
// let current_year = Number(prompt("Enter the current year"));
// let birth_year = Number(prompt("Enter the birth year"));
// let age = current_year - birth_year
// document.write(`Current year : ${current_year}<br>`);
// document.write(`Birth year : ${birth_year}<br>`);
// document.write(`They are either ${age -1} or ${age} years old<br>`)

// Question 12
// let radius = 12
// let circumference = 2 * 3.142 * radius
// let area = 3.142 * (radius ** 2)
// document.write("<h1>The Geometrizer</h1>")
// document.write(`Radius of a circle : ${radius}<br>`)
// document.write(`The circumference is : ${circumference}<br>`)
// document.write(`The area is : ${area}<br>`)

// Question 13
// let a = 10
// document.write("Result:<br>")
// document.write(`The value of a is : ${a}<br>`)
// document.write(`The value of ++a is :${++a}<br>`)
// document.write(`Now the value of a is : ${a}<br>`)

// document.write(`The value of a++ is :${a++}<br>`)
// document.write(`Now the value of a is : ${a}<br>`)

// document.write(`The value of --a is :${--a}<br>`)
// document.write(`Now the value of a is : ${a}<br>`)


// document.write(`The value of a-- is :${a--}<br>`)
// document.write(`Now the value of a is : ${a}<br>`)

//  Question 14
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--; //


// document.write(`a is ${a}<br>`);
// document.write(`b is ${b}<br>`);
// document.write(`result is ${result}<br>`);

// Question 15
// let favourite_snake = prompt("Enter your favourite snake")
// let current_age = Number(prompt("Enter thr current age"))
// let estimated_max_age = Number(prompt("Enter your maximum estimated age"))
// let per_day_snake = Number(prompt("Enter the number of snake you would eat daily"))
// let total_snake = (estimated_max_age - current_age) * per_day_snake

// document.write("<h1>The Lifetime Supply Calculator</h1>")
// document.write(`Favourite snake ${favourite_snake}<br>`)
// document.write(`Current age : ${current_age}<br>`)
// document.write(`Estimated maximum age : ${estimated_max_age}<br>`)
// document.write(`Amount of snakes per day : ${per_day_snake}<br>`)
// document.write(`You will need ${total_snake} ${favourite_snake} to last you until the ripe of old age of ${estimated_max_age}<br>`)

// Chapter 8-11

// Question # 1
// user = prompt("Enter your name")
// alert(`Hi, ${user}`)

// Question # 2
// let no = prompt("Enter the number you want the multiplication table of:")

// if (no === null || no.trim() === "" || isNaN(no)) {
//     no = 5;
// } else {
//     no = Number(no);
// }

// document.write(`Multiplication table of ${no}<br>`)
// document.write(`${no} X 1 = ${no * 1}<br>`)
// document.write(`${no} X 2 = ${no * 2}<br>`)
// document.write(`${no} X 3 = ${no * 3}<br>`)
// document.write(`${no} X 4 = ${no * 4}<br>`)
// document.write(`${no} X 5 = ${no * 5}<br>`)
// document.write(`${no} X 6 = ${no * 6}<br>`)
// document.write(`${no} X 7 = ${no * 7}<br>`)
// document.write(`${no} X 8 = ${no * 8}<br>`)
// document.write(`${no} X 9 = ${no * 9}<br>`)
// document.write(`${no} X 10 = ${no * 10}<br>`)

//  Question # 3
// let city = prompt("Enter the city").toLowerCase();

// if (city == "karachi") {
//     alert("Welcome to city of lights")
// } else {
//     alert(`Welcome to ${city}`)
// }

// Question # 4
// let gender = prompt("Enter your gender")
// if (gender=="male"){
//     document.write("Good Morning Sir")
// }else if (gender=="female"){
//     document.write("Good Morning Mam")
// }else{
//     document.write("Enter your gender please")
// }

// Question # 5
// let traffic_colour = prompt("Enter the colour of traffic signal")

// if (traffic_colour == "red"){
//     document.write("Vechile Must Stop!")
// }else if (traffic_colour == "yellow"){
//     document.write("Vechile should get ready to move")
// }else if (traffic_colour == "green"){
//     document.write("Vechile can move now")
// }else{
//     document.write("Please enter the right colour (red,yellow or green)")
// }

// Question # 6
// let max_age = Number(prompt("Enter the max age"))
// let current_age =Number(prompt("Enter the current age"))
// if (current_age<=max_age){
//     alert("You are welcome")
// }

// Question # 7
// let current_fuel = parseFloat(prompt("Enter your current fuel in litres"));
// if (current_fuel<0.25){
//     alert("Please refill your fuel in the car");
// }

// Question # 8
// let a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }

// let b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }

// let c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }

// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }


// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");

// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Question # 9
// let english = +prompt("Enter the marks of English:");
// let mathematics = +prompt("Enter the marks of Mathematics:");
// let physics = +prompt("Enter the marks of Physics:");

// let total = 300;
// let obtained_marks = english + mathematics + physics;
// let percentage = obtained_marks / total * 100
// let grade;
// let remarks;
// if (percentage>=80){
//     grade = 'A+'
//     remarks = "Excellent"
// }else if (percentage >= 70){
//     grade = 'A'
//     remarks = "Good"
// }else if (percentage >= 60){
//     grade = 'B'
//     remarks = "You need to improve"
// }else{
//     grade = 'Fail'
//     remarks = "Sorry"
// }
// document.write("<h1>Mark Sheet</h1>")
// document.write(`Total marks ${total}<br>`)
// document.write(`Marks Obtained ${obtained_marks}<br>`)
// document.write(`Percentage ${percentage}%<br>`)
// document.write(`Grade ${grade}<br>`)
// document.write(`Remarks ${remarks}<br>`)

// Question # 10
// let item1 = prompt("Enter the name of item 1")
// let item2 = prompt("Enter the name of item 2")

// let item1_price = Number(prompt("Enter the price of item 1"))
// let item2_price = Number(prompt("Enter the price of item 2"))

// let item1_quantity = Number(prompt("Enter the quantity of item 1"))
// let item2_quantity = Number(prompt("Enter the quantity of item 2"))

// let shipping_charges = Number(prompt("Enter shipping charges"))

// // 1. Calculate the cost of items first (Subtotal)
// let subtotal = (item1_price * item1_quantity) + (item2_price * item2_quantity)

// let discount = 0

// // 2. Check the subtotal for the discount rule
// if (subtotal > 2000) {
//     discount = subtotal * 0.10
// } else {
//     discount = 0
// }

// // 3. Final total is subtotal minus discount, plus shipping
// let total = subtotal - discount + shipping_charges

// // 4. Display the receipt on the screen
// document.write("<h1>Shopping Cart</h1><br>")
// document.write(`Price of ${item1} is ${item1_price} PKR<br>`)
// document.write(`Quantity of ${item1} is ${item1_quantity}<br>`)

// document.write(`Price of ${item2} is ${item2_price} PKR<br>`)
// document.write(`Quantity of ${item2} is ${item2_quantity}<br><br>`)

// document.write(`Shipping Charges: ${shipping_charges} PKR<br>`)
// document.write(`Discount Offered: ${discount} PKR<br>`) // Fixed the spelling of discount here
// document.write(`<strong>Total cost of your order is ${total} PKR</strong><br>`)


// Question#11
// let secretNo = 3;
// let userGuess = Number(prompt("Guess the secret number:"));

// if (userGuess === secretNo) {
//     alert("Bingo! Correct Answer");
// } else if (userGuess + 1 === secretNo) {
//     alert("Close enough to the correct answer");
// } else if (userGuess - 1 === secretNo) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again!");
// }

// Question #12
// let number = Number(prompt("Enter the number"))
// if (number%3==0){
//     alert("It is divisible by 3")
// }else{
//     alert("It is not divisible by 3")
// }

// Question # 13
// let teamA_score = Number(prompt("Enter the score of team A"))
// let teamB_score = Number(prompt("Enter the score of team B"))

// if (teamA_score > teamB_score){
//     alert("Team A Won")
// }else if (teamA_score < teamB_score){
//     alert("Team B Won")
// }else{
//     alert("It is Tie")
// }

// Question # 14
// let str = "Pakistan";
// let num = 92;
// let bool = true;

// if (typeof str === "string") {
//     alert(`${str} is a string`);
// }

// if (typeof num === "number") {
//     alert(`${num} is a number`);
// }

// if (typeof bool === "boolean") {
//     alert(`${bool} is a boolean`);
// }

// Question # 15
// let number = Number(prompt("Enter the number"))
// if (number % 2 == 0){
//     alert(`${number} is even Number`)
// }else{
//     alert(`${number} is odd Number`)
// }

// Question # 16
// karachi_temp = Number(prompt("Enter the karachi temperature"))
// if (karachi_temp>40){
//     alert("It is too hot outside")
// }else if (karachi_temp>30){
//     alert("The weather today is normal")
// }else if (karachi_temp>20){
//     alert("Today's weather is cool")
// }else if (karachi_temp>10){
//     alert( "OMG! Today's weather is so Cool.")
// }else{
//     alert("Please enter the Number")
// }

// Question # 17
// let first_no = Number(prompt("Enter the first Number"))
// let operator = prompt("Enter the operator : +,-,X,/")
// let second_no = Number(prompt("Enter the Second Number"))

// if (operator=="+"){
//     alert(`${first_no} + ${second_no} is ${first_no + second_no}`)
// }else if (operator=="-"){
//     alert(`${first_no} - ${second_no} is ${first_no - second_no}`)
// }else if (operator=="*"){
//     alert(`${first_no} X ${second_no} is ${first_no * second_no}`)
// }else if (operator=="/"){
//     alert(`${first_no} / ${second_no} is ${first_no / second_no}`)
// }else if (operator=="%"){
//     alert(`${first_no} % ${second_no} is ${first_no % second_no}`)
// }else{
//     alert("Enter the right number or operator")
// }

// Question # 18
// let day = prompt("Enter the day")
// if (day == "Monday"||day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day =="Friday"){
//     alert("It is week day")
// }else if (day == "Saturday"){
//     alert("It is weekend")
// }else if (day == "Sunday"){
//     alert("Yah! It's holiday")
// }else{
//     alert("Please enter the correct day")
// }

// Question # 19
// let user_score = Number(prompt("Enter your score"))
// if (user_score > 50){
//     alert("You are passed")
// }else if (user_score < 50){
//     alert("Try again !")
// }else{
//     alert("Please enter the score")
// }

// Question # 20
// let no_1 = Number(prompt("Enter the first Number"))
// let no_2 = Number(prompt("Enter the second Number"))

// if (no_1 == no_2){
//     alert("Both Numbers are equal")
// }else if (no_1 > no_2){
//     alert(`${no_1} is greater than ${no_2}`)
// }else if (no_1 < no_2){
//     alert(`${no_2} is greater than ${no_1}`)
// }else{
//     alert("Please enter the right number")
// }

// Question # 21

// let language_code = prompt("Enter the language code");
// if (language_code == "es"){
//     alert("Hola Mundo")
// }else if (language_code == "de"){
//     alert("Hallo Welt")
// }else if (language_code == "fr"){
//     alert("Bonjour, le Monde")
// }else{
//     alert("Hello World")
// }

// Question # 22
// let number = Number(prompt("Enter the number"))
// if (number > 0){
//     alert("It is the positive number")
// }else if (number < 0){
//     alert("It is negative number")
// }else{
//     alert("Please enter the number")
// }

// Question # 23
// let number = Number(prompt("Enter the number"))
// let noun = prompt("Enter the noun")
// alert(number+ " " +noun)