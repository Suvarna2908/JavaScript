
console.log("Question1....Two function without argument and return values.");

var firstName ="suvarna";
var middleName="vikram";
var lastName = "jagtap";


function fullName(){

    console.log("The Name is ",firstName,middleName,lastName);
}

fullName(firstName,middleName,lastName);

var tel="Purander";
var dist="Pune";
var pin =412303;

function addressDetails(){
  
console.log('My Address is ',tel,dist,pin);

}
addressDetails(tel,dist,pin);



console.log("*****Question 2*****personalDetails(firstName,lastName,collegeName");

var firstName="suvarna";
var lastName ="jagtap";
var collgeName="MIT";

function personalDetails(val1,val2,val3){

    console.log("Personal details is",val1,val2,val3);
}

personalDetails(firstName,lastName,collgeName);

console.log("*******Question 3 *****Swap Values With 2 Arguments********");

var hubbyName ="Anushka";
var wifeName ="Virat";

var num1 =1000;
var num2 =2000;

function swapValuesDude(arg1,arg2){
    console.log("Before swap values becomes :",arg1,arg2);

    var temp=arg1;
    arg1=arg2;
    arg2=temp;

    console.log("after swap values becomes :",arg1,arg2);
}

swapValuesDude(hubbyName,wifeName);
swapValuesDude(num1,num2);

console.log("*******Question 4 ***** Addition of 3 values *******");

var value1 = 100;
var value2 = 200;
var value3 = 300;

var greetWord1 = "Hello";
var greetWord2 = " Good";
var greetWord3 = " Morning";

function addThreeValues(num1,num2,num3){

    let sum = num1+num2+num3;
    console.log("Result Becomes :",sum);
}

addThreeValues(value1,value2,value3);

addThreeValues(greetWord1,greetWord2,greetWord3);
