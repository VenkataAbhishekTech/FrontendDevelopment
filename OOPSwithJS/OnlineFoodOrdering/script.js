// Menu with item prices
const menu = {
  burger: 120,
  pizza: 250,
  fries: 60,
  coke: 40,
  sandwich: 90
};

// Function to calculate bill
function calculateBill(orderItems) {
  const prices = orderItems.map(item => {
    if (!menu[item]) {
      throw new Error(`Invalid item ordered: ${item}`);
    }
    return menu[item];
  });

  // reduce() to calculate total amount
  const total = prices.reduce((sum, price) => sum + price, 0);

  return total;
}

// UI handler for displaying output
document.getElementById("runBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = ""; 

  const order = ["burger", "fries", "coke"]; 

  try {
    const bill = calculateBill(order);
    output.innerHTML = `
      Order: ${order.join(", ")}<br>
      Total Bill: ₹${bill}
    `;
  } catch (error) {
    output.innerHTML = `
      <strong>Error:</strong> ${error.message}
    `;
  }
});
