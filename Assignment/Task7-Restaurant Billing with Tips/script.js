let baseAmount = 2500;   // Base food cost
let diningIn = true;      // true = dining in, false = takeaway

// Step 2: Calculate taxes
let gst = baseAmount * 0.05;                     // 5% GST
let serviceTax = diningIn ? baseAmount * 0.10 : 0;  // 10% only for dine-in

// Step 3: Calculate subtotal
let subtotal = baseAmount + gst + serviceTax;

// Step 4: Add tip if total exceeds ₹2000
let tip = subtotal > 2000 ? subtotal * 0.08 : 0;

// Step 5: Final total (rounded to 2 decimals)
let finalTotal = (subtotal + tip).toFixed(2);

// Step 6: Print detailed summary
console.log("🍽️ RESTAURANT BILL SUMMARY 🍽️");
console.log("----------------------------------");
console.log("Base Amount: ₹" + baseAmount.toFixed(2));
console.log("GST (5%): ₹" + gst.toFixed(2));
console.log("Service Tax (10% if dining in): ₹" + serviceTax.toFixed(2));
console.log("Recommended Tip: ₹" + tip.toFixed(2));
console.log("----------------------------------");
console.log("Final Total: ₹" + finalTotal);
