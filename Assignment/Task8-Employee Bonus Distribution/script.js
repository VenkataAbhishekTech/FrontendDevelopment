let baseSalary = 120000; // in rupees
let rating = 4;           // performance rating (1–5)
let experience = 6;       // in years

// Step 2: Determine base bonus percentage based on rating
let bonusPercent = 0;
if (rating === 5) {
  bonusPercent = 20;
} else if (rating === 4) {
  bonusPercent = 15;
} else if (rating === 3) {
  bonusPercent = 10;
} else {
  bonusPercent = 0;
}

// Step 3: Add extra 5% for experience > 5 years
if (experience > 5) {
  bonusPercent += 5;
}

// Step 4: Calculate total bonus
let calculatedBonus = (baseSalary * bonusPercent) / 100;

// Step 5: Apply bonus cap (₹25,000 maximum)
let finalBonus = calculatedBonus > 25000 ? 25000 : calculatedBonus;

// Step 6: Calculate total salary after bonus
let totalSalary = baseSalary + finalBonus;

// Step 7: Display results
console.log("💼 EMPLOYEE BONUS SUMMARY 💼");
console.log("----------------------------------");
console.log("Base Salary: ₹" + baseSalary.toFixed(2));
console.log("Performance Rating: " + rating);
console.log("Experience: " + experience + " years");
console.log("Calculated Bonus: ₹" + calculatedBonus.toFixed(2));
console.log("Capped Final Bonus: ₹" + finalBonus.toFixed(2));
console.log("----------------------------------");
console.log("Total Salary after Bonus: ₹" + totalSalary.toFixed(2));
