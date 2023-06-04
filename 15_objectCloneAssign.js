

const arrayNums=[20,3,4,56,90,400,49];

//Perform shallow clone on arrayNums ,update cloned array with values 55,66 using push() and log original & cloned array console.

const newArrayNums = arrayNums;

newArrayNums.push(55);
newArrayNums.push(66);

console.log("Shallow cloned array is :");
//console.log(`original array is :${arrayNums}`);
//console.log(`cloned array is :${newArrayNums}`);
console.log("Original array is :",arrayNums);
//console.log(arrayNums);
console.log("Shallow Cloned array is :",newArrayNums);
//console.log(newArrayNums);

//perform deep clone using spread operator update original array.

const newArrayDeepNums = [...arrayNums];

newArrayDeepNums.push(10);
newArrayDeepNums.push(25);

console.log("Deep cloned array is :");

console.log("Original array is :",arrayNums);
//console.log(arrayNums);
console.log("Deep Cloned array is :",newArrayDeepNums);
//console.log(newArrayDeepNums);


//Merge or concat array using the spread operator.

const arrayEven=[2,30,14,8];

const concatArrayIs = [...arrayNums,...arrayEven];
console.log("concat array is :",concatArrayIs);


console.log("================= Employee Info Object =================================");

const employee_info ={

    emp_id:27,
    emp_name:"John Doe",

    salary:{

        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        june_month : "66,0000INR",
        
    },

    address: {

        locality:{
            
            colony :"OM Vridavam Society",
            street :"Kanch Pokali,431202",
        },

        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },

    mobiles:["+91 8600 3456 88","+91 1800-4567 32","+91-9096 5678 77"]
}

console.log("===============================================================");


console.log("employee details is like : ");
const empAddressDetails = employee_info.address.locality;
console.log("Locality is:",empAddressDetails);

const empCity = employee_info.address.city;
console.log("City is:", empCity);

const empState = employee_info.address.state;
console.log("State is:",empState);

const empCountry = employee_info.address.country;
console.log("Country is:",empCountry);

console.log("Mobile No is:",employee_info.mobiles);


//const newJulyUpdateSal = JSON.parse(JSON.stringify(employee_info));

//console.log("Before cloning salary for july is :",employee_info.salary.july_month);
//employee_info.salary.july_month="80,0000INR";

//console.log("After cloning updated salary for july is :",employee_info.salary.july_month);


//Perform deep copy using JSON.stringify property.
//update property 'country to united kingdom' on original object

const updateCountryVal = employee_info.address;
employee_info.address.country = "United Kingdom";
console.log("updated country is :",employee_info.address.country );
console.log("country before clone is performed i.e. original",employee_info.address);
console.log("Updated country is :",updateCountryVal);


