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

export default Product;