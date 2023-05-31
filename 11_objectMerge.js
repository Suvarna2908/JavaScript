
const person ={

    height : "6feet",
    name:"Bill gates",
    city:"Pune",
    age:54,
    isMarried:true

}

const address = {

    street:"Wakad road",
    landamrk:"Near Datt Mandir",
    city:"Pune",
    pin:431211,
    state:"MH",
    country:"India"

}

const marks = {

    english:95,
    programming:100,
    math:89


}

const newObject={


}

//Object.assign(targetObject,source1,source2,source3)

Object.assign(person,address);//Copy object-address into the person object.

const mergeObject = Object.assign({},address,marks); //copy adress and marks into the new object mergeObject

console.table(person);
console.table(address);
console.table(mergeObject);