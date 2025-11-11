let marks = [85, 92, 78, 67, 55]; 
// Step 2: Initialize variables
let total = 0;
let failedSubjects = 0;

// Step 3: Calculate total and count failed subjects
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
  if (marks[i] < 40) {
    failedSubjects++;
  }
}

// Step 4: Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Step 5: Determine grade
let grade;
if (average >= 90) {
  grade = "A+";
} else if (average >= 75) {
  grade = "A";
} else if (average >= 60) {
  grade = "B";
} else if (average >= 40) {
  grade = "C";
} else {
  grade = "Fail";
}

// Step 6: Check for repeat condition
let resultMessage;
if (failedSubjects >= 2) {
  resultMessage = "Repeat Year";
} else if (average < 40) {
  resultMessage = "Fail";
} else {
  resultMessage = "Pass";
}

// Step 7: Display results
console.log("Marks:", marks);
console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
console.log("Failed Subjects:", failedSubjects);
console.log("Final Result:", resultMessage);
