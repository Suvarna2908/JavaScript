
let map =new Map();
console.log(typeof map);


//key --> rollnum  value : student name
// set is used to add elements/values.

map.set(11,"Ram");
map.set(22,"Shyam");
map.set(33,"Siya");
map.set(44,"Jenny");

//size --> total number of elements in the map.

const mapSize = map.size;
console.log('Map Size',mapSize);

//Retrieve the value using key - get method.

const valueOfKey22 = map.get(22);
console.log('value of key 22 is',valueOfKey22);

//retrieve the value using key but that key doesn't exists

const valueOfKey99 = map.get(99);
console.log("value of key 99 is",valueOfKey99);

//adding duplicate key
map.set(33,"Billgates");

//adding duplicate value
map.set(55,"Jenny");

//delete entry
map.delete(22);

//key is exists or not
const isAvailable = map.has(44);
console.log("Is key 44 available :",isAvailable);

const keys = map.keys();
console.log(keys);

const values = map.values();
console.log(values);

console.log("Traversing Map ");
const keysOfMap = map.keys();

for (const key of keysOfMap) {
    const value = map.get(key);
    console.log(key,value);
}



console.log(map);
console.table(map);
