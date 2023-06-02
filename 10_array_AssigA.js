
const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];

//Log the first element 
console.log(`Log the first element of array `);

const arrayFruitsFirstElement = arrayFruits[0];
console.log(`The first element of the array is :${arrayFruitsFirstElement}`);

//Log the last element 
console.log(`Log the Last element of array `);

 const lengthOfFruitArray = arrayFruits.length;
 const lastElementFruitArray = arrayFruits[lengthOfFruitArray-1];
 console.log(`Last element :${lastElementFruitArray}`);

//Add element "Papaya" before the element bnana

arrayFruits.unshift("Papaya");

console.log(arrayFruits);

//remove the mango from the array
console.log("remove the mango from the array");
 arrayFruits.splice(4,1);
 console.log(arrayFruits);

 //Removing last from the array
 console.log(`Remove last element from the array.`);
 //arrayFruits.pop();
 console.log(arrayFruits);

//insert an element "pineapple" at last position
console.log(`insert an element "pineapple" at last position`);

arrayFruits.push("Pineapple");
console.log(arrayFruits);

//insert an element "Dragon Fruit" before water melon
console.log(`insert an element "Dragon Fruit" before water melon`);
console.log(arrayFruits);

arrayFruits.splice(3,1,"Dragonfruit");
console.log(arrayFruits);

//replace element orange with kiwi
console.log(`replace element orange with kiwi`);
arrayFruits.splice(2,1,"kiwi");
console.log(arrayFruits);

//log the element starts from index 1 to 4
console.log(`log the element starts from index 1 to 4`);
const sliceArrayOfFruits=arrayFruits.slice(1,5);
console.log(sliceArrayOfFruits);


//select the last 3 elements from the array
console.log(`log the element starts from index 1 to 4`);
const lastThreeArrayOfFruits=arrayFruits.slice(-3);
console.log(lastThreeArrayOfFruits);
