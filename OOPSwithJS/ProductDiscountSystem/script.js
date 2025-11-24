// Constructor function for Product
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method to apply discount
Product.prototype.applyDiscount = function(percent) {
  const discountedPrice = this.price - (this.price * percent / 100);
  return discountedPrice;
};

document.getElementById("runBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";

  // Creating 3 products
  const p1 = new Product("Laptop", 50000);
  const p2 = new Product("Headphones", 2000);
  const p3 = new Product("Smartwatch", 7000);

  // Applying discounts
  const results = [
    `Laptop after 10% discount: ₹${p1.applyDiscount(10)}`,
    `Headphones after 25% discount: ₹${p2.applyDiscount(25)}`,
    `Smartwatch after 15% discount: ₹${p3.applyDiscount(15)}`
  ];

  results.forEach(line => {
    output.innerHTML += line + "<br>";
  });

  output.innerHTML += `
    <br><strong>Abstraction:</strong>  
    Complex discount calculation is hidden inside applyDiscount().  
    User only calls a simple method without worrying about logic.
  `;
});
