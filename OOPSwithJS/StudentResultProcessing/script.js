// Student Class with name + marks[]
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Calculate average using reduce()
  calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  // Determine Grade
  getGrade() {
    const avg = this.calculateAverage();

    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 50) return "C";
    else return "F";
  }
}

// Test 3 students
function displayResults() {
  const output = document.getElementById("output");
  output.innerHTML = ""; 
  const s1 = new Student("Abhi", [85, 90, 92]);
  const s2 = new Student("Riya", [60, 55, 70]);
  const s3 = new Student("Karan", [30, 45, 40]);

  const students = [s1, s2, s3];

  students.forEach((student) => {
    output.innerHTML += `
      Student: ${student.name}<br>
      Marks: ${student.marks.join(", ")}<br>
      Average: ${student.calculateAverage().toFixed(2)}<br>
      Grade: ${student.getGrade()}<br><br>
    `;
  });
}

// Button click event
document.getElementById("runBtn").addEventListener("click", displayResults);
