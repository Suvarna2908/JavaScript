

let person={
   
    height:"6feet",
    name:"Bill gates",
    city:"Pune",
    age :54,
    isMarried:true,

    address:{
 
    street: "Wakad Road",
    landmark:"Near Datta Mandir",
    city:"Pune",
    PIN:431220,
    state:"MH",
    country:"India",
    },

    walk: function(totalWalk) {
        console.log(`${this.name} Yes...I can walk ${totalWalk}`);
    },

    details: function(){

        console.log(`Person Details: Name ${this.name}, city ${this.city},age ${this.age}`);
    },

    getDetails: function(){
   
        let details = `Name: ${this.name}, Age:${this.age}, City:${this.city}, IsMarried: ${this.isMarried}`

        return details;
    },
};

console.log(`Type of person is ${typeof person}`);

console.log(`---------------Accessing Object Properties-----------`);

//Dot(.) notation is used to access the object properties.

const personName=person.name;
const personHeight = person["height"];


console.log(`Person name is : ${personName}`);
console.log(`Person city is :${person.city}`);
console.log(`Person age is :${person.age}`);
console.log(`Person marital status is :${person.isMarried}`);

console.log(`Person height is : ${person['height']}`);

console.log(`--------------Updating Object Properties-----------`);
person.city = "Mumbai";
person.isMarried=false;
person.age=65;

console.log(`person city is :${person.city}`);
console.log(`person marital status is :${person.isMarried}`);
console.log(`person age is :${person.age}`);

console.log(`--------------Adding Object Properties-----------`);

person.gender="Male";
person.state="MH";

console.log(`----------Deleting Object Properties-----------`);

delete person.height;

console.log(`----------Invoking or calling Object Method-----------`);

person.walk("5KM");
person.details();
const details=person.getDetails();

console.log(`Details about person is : ${details}`);

console.log(`----------Accessing nested object properties-----------`);
let personCountry=person.address.country;
console.log(personCountry);
person.address.pin=556677;
console.log(person.address);

//console.log(person);
//console.table(person);

console.log(`----------Creating an  empty Object Properties-----------`);

let student ={

}
console.log(student);
student.marks="90";
console.log(student);

const isCityAvailable = "city" in student;
console.log(`Is City available in student :${isCityAvailable}`);
console.log(`Is marks available in  student object : ${"marks" in student}`);

const isAgeValid = "age" in student;
console.log(`Is age available in student object :${isAgeValid}`);

console.log(`Is gender avaialble in student object :${"gender" in student}`);