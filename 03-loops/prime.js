// Prime Number - a number that is divisible only by itself and 1

// 3, 5, 7, 11, 13, 17,  - Prime Number
// 4, 6, 8, 10, 15 - Not a prime number
// WAP to determine if a number is prime or not

// Square of 5 = 5 * 5 = 25 
// Square root of 25 = 5
let n = 16;
let isPrime = true; // boolean
for(let i = 2; i < n; i++) {
    let remainder = n % i;
    console.log(i + " ==> " + remainder);
    if (remainder == 0) {
        console.log("Not a prime.. Quitting the loop");
        isPrime = false;
        break;
    }
}

if(isPrime == true) {
    console.log(`${n} is a prime number`);
}
else {
    console.log(`${n} is not a prime number`);
}

