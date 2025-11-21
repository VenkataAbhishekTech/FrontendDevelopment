class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent) / 100;
    }
}

// Create 5 employee objects
let employees = [
    new Employee(1, "Abhishek", "HR", 30000),
    new Employee(2, "Kiran", "IT", 45000),
    new Employee(3, "Riya", "Finance", 50000),
    new Employee(4, "Arjun", "Sales", 35000),
    new Employee(5, "Meera", "Marketing", 40000)
];

function showEmployees() {
    let outputDiv = document.getElementById("output");

    // Apply bonus for each employee (5%)
    employees.forEach(emp => emp.applyBonus(5));

    // Display each employee's annual salary
    let html = "<h3>Employee Details</h3>";

    employees.forEach(emp => {
        html += `
            <p>
            <strong>ID:</strong> ${emp.id} <br>
            <strong>Name:</strong> ${emp.name} <br>
            <strong>Dept:</strong> ${emp.department} <br>
            <strong>Monthly Salary (with bonus):</strong> ₹${emp.salary} <br>
            <strong>Annual Salary:</strong> ₹${emp.getAnnualSalary()}
            </p>
            <hr>
        `;
    });

    // Total annual payout using reduce()
    let totalAnnualPayout = employees.reduce(
        (total, emp) => total + emp.getAnnualSalary(),
        0
    );

    html += `<h3>Total Company Annual Payout: ₹${totalAnnualPayout}</h3>`;

    outputDiv.style.display = "block";
    outputDiv.innerHTML = html;
}
