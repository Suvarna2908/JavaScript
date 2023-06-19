

const person={

     height : "6feet",
     name:"bill gates",
     city:"Pune",
     age:54,
     isMarried:true

}

console.log("===========Freezing an object==============");

Object.freeze(person);
person.age =67; // update not allowed as person object is freezed
delete person.city;//delete not allowed as person object is freezed.
person.pin=443322; // add not allowed as person object is freezed
console.table(person);

console.log("===========Freezing an Array==============");

const array = [22,33,44,55,66,77]
Object.freeze(array);
array[2]=100;
console.table(array);




