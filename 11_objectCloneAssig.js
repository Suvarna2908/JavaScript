


let bankSbi = {
     
    name : "state bank of india",
    accType: "Saving",
    ifsc:"SBIN12344490",
    branch:"Hadpsar",
    
};

let bankLocation ={

    street:"M G Road",
    city:"Pune",
    pin:412243
};

Object.assign(bankSbi,bankLocation);

console.log(`Cloned Object is :`);
console.log(bankSbi);
console.table(bankSbi);


let rateOfInterest = {

    homeLoanInterest:"15%",
    personalLoanInterest:"12%",
    dueInterest:"10%"

};

let sbiDetails={
    
}

Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest);

console.log(`merge sbiDetails is :`);
console.log(sbiDetails);
console.table(sbiDetails);

console.log("------Traversing a Merge object --------");

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value= sbiDetails[key];
        console.log(`${key}: ${value}`);
        
    }
}