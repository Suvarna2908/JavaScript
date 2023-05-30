


console.log(`*********** Q1. Square of the word length :*************`);


function squareOfWordLength(str){

    var strLength = str.length;
    console.log(`The length of the string is :${strLength}`);

    var squareOfString = strLength*strLength;
console.log(`The square of the string length is : ${squareOfString}`);



}

squareOfWordLength("Javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");



console.log(`************************************************************************`);

console.log(`*********** Q2. function with no argument and no return value *************`);

function strTotalWords() {

    var str = "I am Angular Developer";
    console.log(`Length of the given string is :${str.length}`);

    var strWords = str.split(" ");
    console.log(`The number of words are : ${strWords}`);
    console.log(`Total number of words are :${strWords.length}`);

    console.log(`Result after divide the length of the string and total words :${str.length/strWords.length}`);

    console.log(`Result after multiplication the length of the string and total words :${str.length*strWords.length}`);


}
strTotalWords();