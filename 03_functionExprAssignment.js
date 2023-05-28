
console.log("***..Question 1 : WAF expression to get the square of the number ..***");

var squareOfNumber = function(num1){

     var resultSquare = num1*num1;

     console.log(`The square of ${num1} is : ${resultSquare}`);

}

squareOfNumber(5);
squareOfNumber(6);
squareOfNumber(25);
squareOfNumber(100);


console.log("***..Question 2 : check and log type of function ..***");
console.log(`The type of the given function is : ${typeof squareOfNumber}`);

console.log("***..Question 3 : WAF expression to get the area of rectangular plot [length =499 & width=177] ..***");

var areaOfRectangularPlot = function(width,height){

    var areaRectangle= width*height;
    console.log(`Area of rectangle is : ${areaRectangle}`);

}

areaOfRectangularPlot(499,177);


console.log("Question 4");

var swapValues = function(val1,val2){

    console.log(`before swap values becomes ${val1} and ${val2}`);

    var temp = val1;
    val1=val2;
    val2=temp;

    console.log(`after swap values becomes ${val1} and ${val2}`);

}

swapValues("virat","anushka");
swapValues(1000,2000);


console.log("******  Question 5 ******");

var  stringFunction = function(nameOfString){

    console.log(`Length of string ${nameOfString.length}`);
    
    console.log(`The char at index 6 is ${nameOfString.charAt(6)}`);

    console.log(`The char at index 6 is ${nameOfString.charAt(11)}`);

    console.log(`The last character of string is : ${nameOfString.charAt(nameOfString.length -1)}`);

    console.log(`The first character of string is : ${nameOfString.charAt(0)}`);

    console.log(`Total number of words in given string is: ${nameOfString.split(" ").length}`);

    var squareOfWords = nameOfString.split(" ").length * nameOfString.split(" ").length;

    console.log(`square of total no of words in given string is:${squareOfWords}`);
    

   

}

stringFunction("JS is the most popular language of internet");