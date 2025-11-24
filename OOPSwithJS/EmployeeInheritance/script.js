// Parent class
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} works in the ${this.department} department.`;
  }
}
class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }
  work() {
    return `${this.name} manages the ${this.department} team and oversees operations.`;
  }
}

// UI handler
document.getElementById("runBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";

  const emp = new Employee("Ravi", "Sales");
  const mgr = new Manager("Meera", "Marketing");

  // Polymorphism demonstration
  const employees = [emp, mgr];

  employees.forEach(person => {
    output.innerHTML += person.work() + "<br><br>";
  });

  output.innerHTML += `<strong>Polymorphism:</strong><br>
  The same method <code>work()</code> behaves differently based on the object type (Employee vs Manager).`;
});
