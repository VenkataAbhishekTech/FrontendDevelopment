// Assignment 3 — Cinema Ticketing System

// Input values
let showType = "evening";  // "morning" or "evening"
let numberOfTickets = 4;   // Number of tickets booked
let isStudent = false;     // true if student
let age = 65;              // Age of the customer

// Step 1: Determine base price per ticket
let ticketPrice = (showType === "morning") ? 120 : 180;

// Step 2: Calculate total base price
let basePrice = ticketPrice * numberOfTickets;

// Step 3: Apply discount
let discount = 0;
if (isStudent) {
    discount = 0.10; // 10% for students
} else if (age > 60) {
    discount = 0.20; // 20% for seniors
}

let discountedTotal = basePrice * (1 - discount);

// Step 4: Apply service fee if more than 3 tickets
let serviceFee = (numberOfTickets > 3) ? 50 : 0;

// Step 5: Calculate final amount
let finalAmount = discountedTotal + serviceFee;

// Step 6: Display results
console.log("Show Type:", showType);
console.log("Tickets Booked:", numberOfTickets);
console.log("Base Price: ₹" + basePrice);
console.log("Discount Applied:", (discount * 100) + "%");
console.log("Price After Discount: ₹" + discountedTotal.toFixed(2));
console.log("Service Fee: ₹" + serviceFee);
console.log("Final Amount to Pay: ₹" + finalAmount.toFixed(2));
