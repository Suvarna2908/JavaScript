var num1 = 100;
var num2 = 200;

//output--> num1 =200 , num2 =100;

console.log("Before swap ...", "num1:",num1 , " num2:",num2);

var temp = num1;
num1 = num2;
num2 = temp;

console.log("num1 :",num1, " num2 :", num2);

console.log("*********************************");

function show(){
    console.log("Show Function");
}

console.log("Before function call");
show(); // function call or invoke
console.log("After function");
show();
show();
show();

var numOne = 100;
var numTwo = 200;

var name1 = "Billgates";
var name2 = "Elon Musk";

var fruitApple = "Apple";
var fruitMango= "Mango";

function swapVariables(valueOne, valueTwo){
console.log("Before Swap : ", valueOne, valueTwo);

var temp = valueOne;
valueOne = valueTwo;
valueTwo = temp;

console.log("After Swap : ",valueOne, valueTwo);
}

swapVariables(numOne, numTwo);
swapVariables(name1, name2);
swapVariables(fruitApple,fruitMango);


console.log("*************************************************************");

function addition(num1,num2){

 var result = num1+num2;   //result =300;
 return result;
}

var returnValue = addition(100,200);
console.log("Addition is :",returnValue);

var returnResult = addition(890.400,600.3456);
console.log("Addition is :",returnResult);