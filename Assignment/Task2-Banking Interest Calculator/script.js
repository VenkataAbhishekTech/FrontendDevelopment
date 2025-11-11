let accountType = "fixed"; // "savings" or "fixed"
let amount = 120000;       // Initial deposit amount in ₹
let years = 5;             // Number of years

// Determine base interest rate
let rate;
if (accountType === "savings") {
    rate = 4;
} else if (accountType === "fixed") {
    rate = 6.5;
} else {
    console.log("Invalid account type!");
    rate = 0;
}

// Add 1% bonus interest if deposit is above ₹1,00,000
if (amount > 100000) {
    rate += 1;
}

// Calculate final total using compound interest formula
let total = amount * Math.pow((1 + rate / 100), years);

// Output results
console.log("Account Type:", accountType);
console.log("Initial Amount: ₹" + amount);
console.log("Interest Rate Applied:", rate + "%");
console.log("Years:", years);
console.log("Final Balance after " + years + " years: ₹" + total.toFixed(2));
