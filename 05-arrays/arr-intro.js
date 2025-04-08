let numbers = [];
numbers.push(92);
numbers.push(80);
numbers.push(70);
console.log(numbers);

console.log(numbers[1]);
console.log(`Length of numbers array = ${numbers.length}`);

let sales = [90000, 10000, 25000];
let totalSales = 0;
for(let i = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i];
}
console.log(`Total Sales = ${totalSales}`);

