

//1) Remove Duplicates from the array using Set() Method

console.log(`...... 1) Remove Duplicates from the array using Set() Method ......`);

const arrayNum=[11,3,4,11,4,7,3];

console.log("Given array is : ",arrayNum);

function removeDuplicates(arrayNum){

    return [... new Set(arrayNum)];
}

console.log("Array after removing duplicates : ");
console.log(removeDuplicates(arrayNum));


//2) Remove Duplicates from the array using indexOf() method

console.log(`...... 2) Remove Duplicates from the array using indexOf() method ......`);

function removeDuplicatesVal(arrayNum){

    let uniqueVal = [];

    for(i=0;i<arrayNum.length;i++)
    {
        if(uniqueVal.indexOf(arrayNum[i])===-1){

            uniqueVal.push(arrayNum[i]);

        }
    }
return uniqueVal;
    
}
console.log("Array after removing duplicates by using indexOf method : ");
    console.log(removeDuplicatesVal(arrayNum));



    //Given string value is  const str ="How are you mate?""
    //expected output : "HoW ArE YoU Mate?"


    const str="How are you mate";

    let newChar = "";

    const arrayWords = str.split(" ");

    for (const element of arrayWords) {
        
        for(let index=0; index<element.length; index++){

            let char="";

            if(index==0 || index == element.length-1){
                char=element[index].toUpperCase();
            }
            else{

                char = element[index];
            }

            newChar=newChar+char;
        }
        newChar=newChar+ " ";
   

    }
    console.log(newChar);