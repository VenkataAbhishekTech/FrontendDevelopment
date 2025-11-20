function calculateDiscount() {
  const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
  ];

  let total = 0;
  let info = "";

  for (let p of cart) {
    let discount = 0;

    if (p.category === "electronics") discount = p.price * 0.10;
    else if (p.category === "fashion") discount = p.price * 0.05;

    let finalPrice = p.price - discount;
    total += finalPrice;

    info += `${p.item}: ₹${finalPrice}<br>`;
  }

  if (total > 50000) total -= total * 0.05;

  document.getElementById("details").innerHTML = info;
  document.getElementById("final").innerHTML = "Final Cart Total: ₹" + total.toFixed(2);
}
