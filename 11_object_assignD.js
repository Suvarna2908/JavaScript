

const professor ={

name : "Rohit Patil",
college : "MIT",
subject : "Networking",
joiningDate : "12Jun2022",
age:48,


degrees:{

    engineering :"CSC",
    phd :"Adv Computing",
    graduation:"Science",
    postGraduation : "MBA",

    
   
},

certificates:["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],

showDegrees : function() {
    let degrees =`Engineering : ${professor.degrees.engineering}, PHD: ${professor.degrees.phd}, Graduation : ${professor.degrees.graduation} , PostGraduation :${professor.degrees.postGraduation}`;
    return degrees;
}




};

console.log(`Array of certificates are :`);
console.log(professor.certificates);

const showDegree = professor.showDegrees();
console.log(`Teacher degrees are : ${showDegree}`);

console.log(`********** Adding new properties like experience***********`);
professor.experience = "14yrs";
console.table(professor);
console.log(professor);

console.log(`********** Modify the existing properties***********`);
professor.college="VIT";
console.log(`professor updated college is :${professor.college}`);
console.log(professor);
console.table(professor);

console.log(`Add one new certificates  are:`);
professor.certificates[3]="Oracle Certified";
console.log(professor.certificates);

console.log(`Last element of the array is : `);
console.log(professor.certificates[professor.certificates.length-1]);





