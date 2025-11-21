"use strict";
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

function runProductDemo() {
    const outputBox = document.getElementById("output");
    outputBox.innerText = "";

    const products = [
        new Product(1, "Laptop", 55000, "Electronics"),
        new Product(2, "Keyboard", 850, "Accessories"),
        new Product(3, "Chair", 1200, "Furniture"),
        new Product(4, "Mobile", 15000, "Electronics"),
        new Product(5, "Pen Set", 150, "Stationery")
    ];

    products.forEach(product => product.applyDiscount(10));

    const filteredProducts = products.filter(p => p.price > 1000);

    filteredProducts.forEach(p => {
        outputBox.innerText += p.getDetails() + "\n";
    });
}
