let delayedBooks = [3, 7, 12, 4, 9]; // Number of late days for each book

// Step 2: Initialize total fine and variables
let totalFine = 0;

// Step 3: Loop through each book to calculate fine based on rules
for (let i = 0; i < delayedBooks.length; i++) {
  let daysLate = delayedBooks[i];
  let finePerBook = 0;

  if (daysLate >= 1 && daysLate <= 5) {
    finePerBook = daysLate * 10;
  } else if (daysLate >= 6 && daysLate <= 10) {
    finePerBook = daysLate * 20;
  } else if (daysLate > 10) {
    finePerBook = daysLate * 50;
  } else {
    finePerBook = 0; // No fine if returned on time
  }

  console.log(`Book ${i + 1}: ${daysLate} days late → Fine: ₹${finePerBook}`);
  totalFine += finePerBook;
}

// Step 4: Additional penalty if more than 3 delayed returns
if (delayedBooks.length > 3) {
  console.log("Additional penalty of ₹200 applied (more than 3 late returns).");
  totalFine += 200;
}

// Step 5: Display final summary
console.log("---------------------------------------");
console.log("📚 LIBRARY FINE SUMMARY 📚");
console.log("Books returned late:", delayedBooks.length);
console.log("Total Fine Amount: ₹" + totalFine.toFixed(2));
console.log("---------------------------------------");
