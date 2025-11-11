let orderAmount = 450;    
let isPremium = false;    
let isRemote = true;      

let deliveryFee = 0;
let deliveryDays = 3; 

if (!isPremium && orderAmount < 500) {
   
    deliveryFee = 50;
}

if (isRemote) {
    deliveryDays += 2; 
}

let totalCost = orderAmount + deliveryFee;

console.log("=== E-Commerce Delivery Estimator ===");
console.log(`Order Amount: ₹${orderAmount}`);
console.log(`Premium Member: ${isPremium ? "Yes" : "No"}`);
console.log(`Remote Area: ${isRemote ? "Yes" : "No"}`);
console.log(`Delivery Fee: ₹${deliveryFee}`);
console.log(`Total Cost: ₹${totalCost}`);
console.log(`Estimated Delivery Time: ${deliveryDays} days`);
