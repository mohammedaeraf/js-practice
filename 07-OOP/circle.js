class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        const area = Math.PI * this.radius * this.radius;
        return area;
    }

    calculatePerimeter() {
        const perimeter = 2 * Math.PI * this.radius;
        return perimeter;
    }
}

const circle = new Circle(5.0);
console.log(`Area of circle = ${circle.calculateArea().toFixed(2)} sq cm`);
console.log(`Perimeter of circle = ${circle.calculatePerimeter().toFixed(2)} cm`);

