// Primitive Type

// 1. Number

console.log("***** Primitive Type : 1) Number ******");

var age = 31;
var weight = 78;
var height = 6.1;
var speckNumber = 0.50;
console.log(age, weight, height, speckNumber);

var typeOfAge = typeof age;
console.log(typeOfAge);
console.log(typeof age);

console.log("===============");

var typeOfspeckNumber = typeof speckNumber;
console.log(typeOfspeckNumber);
console.log(typeof speckNumber);

console.log("===============");

var typeOfWeight = typeof weight;
console.log(typeOfWeight);
console.log(typeof weight);

console.log("===============");

var typeOfHeight = typeof height;
console.log(typeOfHeight);
console.log(typeof height);

console.log("***** Primitive Type : 2)Boolean  ******");

var isMarried=true;
var knowAngular=true;
var isSoftwareEngineer = true;
var isBachelor = false;

console.log(isBachelor);
var typeOfIsMarried = typeof isMarried;
console.log("Type of isMarried :", typeOfIsMarried);

console.log(knowAngular);
var typeOfknowAngular = typeof knowAngular;
console.log("Type of knowAngular :", typeOfknowAngular);

console.log(isSoftwareEngineer);
var typeOfIsSoftwareEngineer = typeof isSoftwareEngineer;
console.log("Type of isSoftwareEngineer :", typeOfIsSoftwareEngineer);

console.log(isMarried);
var typeOfIsMarried = typeof isMarried;
console.log("Type of isMarried :", typeOfIsMarried);

console.log("***** Primitive Type : 3) String ******");
//String --> Sequence of character enclosed in ' ' or " "

var firstName = "Bill";
var position = 'Microsoft Co-founder';
var typeOfFirstName = typeof firstName;
var city ='';

console.log("Type of city -->", typeof city);
console.log("Type of variable --> firstName :", typeOfFirstName);
console.log("Type of position -->", typeof position);

console.log("***** Special Data Type : 1) Undefined ******");

var address;
console.log("Address : ",address);
console.log("Type of variable address is :", typeof address);

console.log("***** Special Data Type : 2) Null ******");

var pin=null;
console.log("Value of variable --> pin: ", pin);
console.log('Type of variable pin is : ',typeof pin);