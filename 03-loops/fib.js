// Fibonacci Series uptill 10 numbers
// 1 1 2 3 5 8 13 21 34 55
// crux - central portion / main point

let n = 10;

let first = 1;
let second = 1;
console.log(first);
console.log(second);

for(let i = 3; i<=10; i++) {
    let sum = first + second;
    console.log(sum);
    first = second;
    second = sum;
}
