class Product {
    constructor(title, price, description, quantity) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    display() {
        console.log(`Displaying info of Product ${this.title}`);
        console.log(`Title: ${this.title}`);
        console.log(`price: ${this.price}`);
        console.log(`description: ${this.description}`);
        console.log(`quantity: ${this.quantity}`);
        console.log();
    }
}

let products = [];
let product1 = new Product('iphone',60000,'some desc',10);
let product2 = new Product('macbook air',69000,'some desc',10);
let product3 = new Product('Asus Laptop',55000,'some desc',18);
let product4 = new Product('Acer Inspire',56000,'some desc',5);

products.push(product1, product2, product3, product4);

products.forEach(product => product.display())


// Assignment - Apply discount on all products where quantity is greater than 10
