

function primeNum(num) {

   let isPrime = true;

     for (let index = 2; index < num; index++) {

      if(num % index ==0){

        isPrime = false;
        console.log(`${num} Not a prime number as it is divisible by ${index}`);
        break;

      }
     }

       if(isPrime) {
        console.log(`${num} is prime number`);
       } else {
        console.log(`${num} Is not prime number `);
       }

    }

primeNum(4);
primeNum(5);
primeNum(9);
primeNum(11);
