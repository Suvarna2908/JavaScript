


let person = {

    height:"6feet",
    name:"Bill gates",
    city:"Pune",
    age:54,
    isMarried:true
}

const keys = Object.keys(person);

for (const element of keys) {
    console.log(element);
}

console.log(keys);


const values = Object.values(person);
console.log(values);

const  entries = Object.entries(person);
console.log(entries);
console.table(entries);


console.log("----------   Entry  -------------");
//const entry = entries[0];
const entry = entries[1][1];
console.log(entry);
//console.log(entry[0]);


console.log("------Traversing an object --------");

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const value= person[key];
        console.log(`${key},${value}`);
        
    }
}