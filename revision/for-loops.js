let sales = [12000, 15000, 18000];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i];
}
console.log(totalSales);

// for-in
totalSales = 0;
for (let i in sales) {
    totalSales += sales[i];
}
console.log(totalSales);

// for-of
totalSales = 0;
for (let sale of sales) {
    totalSales += sale;
}
console.log(totalSales);

totalSales = 0;
sales.forEach( sale => totalSales += sale);
console.log(totalSales);


