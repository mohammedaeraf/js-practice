let sales = [90000, 10000, 25000];

let totalSales = 0;

for(let i = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i];
}
console.log(`Total Sales using For = ${totalSales}`);

// for-in
totalSales = 0;
for (let i in sales) {
    let index = parseInt(i) + 1;
    console.log(`Sales of Day ${index} = ${sales[i]}`);
    totalSales += sales[i];
}
console.log(`Total Sales using For In = ${totalSales}`);


// for-of
totalSales = 0;
for (let sale of sales) {
    totalSales += sale;
}
console.log(`Total Sales using For Of = ${totalSales}`);


// forEach
totalSales = 0;
let calcSales = (sale) => {

}
sales.forEach((sale,i) => {
    console.log(`Sales of Day ${i+1} = ${sale}`);
    totalSales += sale;
})
console.log(`Total Sales using For Each = ${totalSales}`);

