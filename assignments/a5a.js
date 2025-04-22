const products = [
    { name: "Laptop", price: 50000, stock: 15 },
    { name: "Mobile", price: 15000, stock: 8 },
    { name: "Headphones", price: 2000, stock: 20 },
    { name: "Keyboard", price: 1000, stock: 5 },
];
  
console.log('Original products:', products);

const highStockProducts = products.filter(product => product.stock > 10);

console.log('high Stock products:', highStockProducts);
