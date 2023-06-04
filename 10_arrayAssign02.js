


const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

//1)Find the total number of elements available and log on console.

const totalElementsArray = arrayNumbers.length;
console.log(`Total array elements is : ${totalElementsArray} `);

//2)Log the first and last element in arraynumbers and log on console

const firstElementArray = arrayNumbers[0];
console.log(`first element of array is : ${firstElementArray}`);

const lastElementArray = arrayNumbers[arrayNumbers.length-1];
console.log(`last element of array is : ${lastElementArray}`);

//3)Third last element in arraynumbers and log on console

const thirdLastElement = arrayNumbers.slice(-3,-2);
console.log(`third last element of array is : ${thirdLastElement}`);

// find all the even numbers using for in loop and log in console

console.log("find all the even numbers using for in loop and log in console");
const evenArrayNumbers=[];
for (const index in arrayNumbers) {
 
    if (arrayNumbers[index] % 2==0){

        //console.log(`${arrayNumbers[index]}`);
         evenArrayNumbers.push(arrayNumbers[index]);        

    }
}
console.log(evenArrayNumbers);

// find all the odd numbers using for in loop and log in console
console.log("find all the odd numbers using for in loop and log in console");

const oddArrayNumbers=[];
//let sum =0;

for (const index in arrayNumbers) {
   
    if(arrayNumbers[index]%2!=0){
        oddArrayNumbers.push(arrayNumbers[index]);
       // sum=sum+arrayNumbers[index];
    }
   
}
console.log(oddArrayNumbers);
//console.log(sum);


//6)find all the even positioned elements from arrayNumbers, sum it and log on console.

console.log("6)find all the even positioned elements from arrayNumbers, sum it and log on console.");

let evenPositionSum=0;

for (const index in arrayNumbers) {

    if(index%2==0){

        console.log(`${arrayNumbers[index]}`);

        evenPositionSum=evenPositionSum+arrayNumbers[index];
    }
}
console.log(`even position sum is :${evenPositionSum}`);


//7)find all the odd positioned elements from arrayNumbers, sum it and log on console.

console.log("7)find all the odd positioned elements from arrayNumbers, sum it and log on console.");

let oddPositionSum=0;

for (const index in arrayNumbers) {

    if(index%2!=0){

        console.log(`${arrayNumbers[index]}`);

        oddPositionSum=oddPositionSum+arrayNumbers[index];

    }

}
console.log(`odd position sum is :${oddPositionSum}`);


//8)find the sum of all the numbers in the array.
console.log("9)find the sum of all the numbers in the array.");

//const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

//for (let index = 0; index < arrayNumbers.Length; index++) {
    
   // sumAllElements = sumAllElements + arrayNumbers[index];   
    
//}
//console.log("sum is :" ,sumAllElements);

let sumAllElements = 0;

for (const index in arrayNumbers) {
   
    sumAllElements = sumAllElements+arrayNumbers[index];
}

console.log("Sum is :",sumAllElements);


//9) find the numbers which are multiple of 5.
console.log("9) find the numbers which are multiple of 5.");
const multipleOfFive = [];

for (const index in arrayNumbers) {
    if(arrayNumbers[index]%5==0) {
        
        multipleOfFive.push(arrayNumbers[index]);

    }
}

console.log(multipleOfFive);

//10) Is number 115 available in array
console.log(" Is number 115 available in array ");
arrayNumbers.includes(115);


//11) Is number 23 available in array
console.log(" Is number 23available in array ");
arrayNumbers.includes(23);



//12) insert numbers 55,66 before index 3 and log on array.

console.log("10) insert numbers 55,66 before index 3 and log on array.");
console.log("Original array :",arrayNumbers);
arrayNumbers.splice(2,0,55,66);
console.log("After insertion of 55 & 66 ",arrayNumbers);


//13) delete 3 elements starting from index 4 & log arrays on console.
console.log("13) delete 3 elements starting from index 4 & log arrays on console.");

var deleteThreeElement = arrayNumbers.splice(4,3);
console.log(deleteThreeElement);
console.log(arrayNumbers);