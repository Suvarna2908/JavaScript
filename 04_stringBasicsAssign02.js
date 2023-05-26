

function stringHandsOn(){

    var givenString="     Hey you are doing good , keep it up      ";

    console.log("The given string is :",givenString);

    var lengthOfGivenString = givenString.length;
    console.log("The length of the given string is :",lengthOfGivenString);
    //console.log("The length of the given string is :",givenString.length);



var trimGivenString = givenString.trim();
console.log("The trimmed string and it's length is  : ", trimGivenString,trimGivenString.length);

var totalextraspaceremove = givenString.length - trimGivenString.length;
console.log("Total number of extra spaces removes are : ",totalextraspaceremove);

var charAtFirstPosition = trimGivenString.charAt(0);
console.log("The first char of given string is :", charAtFirstPosition);

var charAtLastPosition = trimGivenString.charAt(trimGivenString.length-1);
console.log("The las character of given string is", charAtLastPosition);

}


stringHandsOn();