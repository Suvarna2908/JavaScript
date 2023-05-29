


/*
var firstName = "suvarna"s;
var firstNameLength = firstName.length;

console.log("Total number of character in given string is :",firstNameLength);
*/
var greet ="Good Morning";
var greetLength = greet.length;

console.log("Total number of character in given string is :",greetLength);

var charAtZeroIndex = greet.charAt(0);
console.log("Char at 0 index : ",charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char at last index :",charAtLastIndex);

var charAtTwentyIndex = greet.charAt(20);
console.log("Char at index 20 :", charAtTwentyIndex);

var firstName = "Suvarna";
var lastName =" Jagtap";

var concatString = firstName.concat(lastName);
console.log("Concat String is :",concatString);

var indexOfM = greet.indexOf("M");
console.log("Index of M is :", indexOfM);

var indexOfo = greet.lastIndexOf("o");
console.log("Index of o is: ",indexOfo);

var replaceValue = greet.replace("Morning","Afternoon");
console.log("After Replace :",replaceValue);

var firstName = "     suvarna     ";
var firstNameLength = firstName.length;
console.log("Before trim length is:", firstNameLength);

var trimmedFirstName= firstName.trim();
var lengthAfterTrim=trimmedFirstName.length;

console.log("After trim firstName is :", trimmedFirstName, trimmedFirstName.length);
console.log("Trimmed total spaces :", firstNameLength-lengthAfterTrim);

var lastName = "     Jagtap    ";
var trimEndResult =lastName.trimEnd();
var trimStartResult =lastName.trimStart()
console.log("Result after trim at End ",trimEndResult);
console.log("Result after trim at End ",trimStartResult);

var firstName="suvarna";

var firstNameUpperCase = firstName.toUpperCase();
console.log(firstNameUpperCase);

var lastName="JAGTAP";
var lastNameLowerCase=lastName.toLowerCase();
console.log(lastNameLowerCase);


console.log("================================================================================================");

//1)includes -- > checks whether given string is includes or not.

 var greet = "Good Morning";
 var includeResult = greet.includes("ing");
 console.log("Is ing string available inside the string : ",includeResult);

 var includeResult = greet.includes("ooo");
 console.log("Is ing string available inside the string : ",includeResult);

 var includeResult = greet.includes(" M");
 console.log("Is ing string available inside the string : ",includeResult);

 var includeResult = greet.includes("M");
 console.log("Is ing string available inside the string : ",includeResult);


 console.log("================================================================================================");

//2)Search -- > searches whether given string is present or not
//search result returns the index of particular word of start letter/char.

var greet = "Good Morning";

var searchResult =  greet.search("Mor");
console.log("Search Result :",searchResult);

var searchResult =  greet.search("gs");
console.log("Search Result :",searchResult);

console.log("================================================================================================");

//3)Slice -- > it returns the given word of mentioned start to end char except it excludes the last char.

var sliceResult = greet.slice(0,3);
console.log("The slice result is :",sliceResult);

var sliceResult = greet.slice(4,6);
console.log("The slice result is :",sliceResult);

var sliceResult = greet.slice(0,6);
console.log("The slice result is :",sliceResult);


var sliceResult = greet.slice(6,56);
console.log("The slice result is :",sliceResult);

var sliceResult = greet.slice(0,-6);
console.log("The slice result is --:",sliceResult);

console.log("================================================================================================");

//4)Substring -- > it returns the given word of mentioned start to end char except it excludes the last char.

var subStringResult = greet.substring(4,6);
console.log("The result of substring is ",subStringResult);

var subStringResult = greet.substring(0,5);

console.log("The result of substring is ",subStringResult);

var subStringResult = greet.substring(5,0);

console.log("The result of substring is ",subStringResult);


var subStringResult = greet.substring(-5,1);

console.log("The result of substring is ",subStringResult);




//5) Split() :- is divide the string into substring and returns in array

var greet = "Good Morning mate, How are you";

var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words :",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number of parts :",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of chars :",resultSplit.length);


