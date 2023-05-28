
function stringHansOn(){

    var givenStringName = "     Hey you are doing good ,keep it up      ";

    console.log(`The given string is : ${givenStringName}`);
    console.log(`The length of the string :${givenStringName.length}`);
    console.log(`The trimmed string is :${givenStringName.trim()}`);
    console.log(`The trimmed string length is :${givenStringName.trim().length}`);
    console.log(`THe start trim string is :${givenStringName.trimStart()}`);
    console.log(`THe End trim string is :${givenStringName.trimEnd()}`);
    console.log(`The start character of the given string is :${givenStringName.trim().charAt(0)}`);
    console.log(`The End character of the given string is :${givenStringName.trim().charAt(givenStringName.trim().length-1)}`);

    var totalExtraSpacesRemove = givenStringName.length - givenStringName.trim().length
    console.log(`The length after removing the space :${totalExtraSpacesRemove}`);

    console.log(`The total number of words are :${givenStringName.trim().split(" ").length}`);
    console.log(`The words are after strim :${givenStringName.trim().split(" ")}s`);

    console.log(`The index of word good are :${givenStringName.search("good")}`);
    
    console.log(`The index of word good after trim are :${givenStringName.trim().search("good")}`);

 console.log(`The word of index 22 is :${givenStringName.trim().substring(22)}`);
 console.log(`The word of index 22 is :${givenStringName.trim().slice(22)}`);

 console.log(`The string starts with the word hey after trim :${givenStringName.trim().startsWith("Hey")}`);
 console.log(`The string ends with the word up after trim :${givenStringName.trim().endsWith("up")}`);





}

stringHansOn();
