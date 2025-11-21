"use strict";

try {
  const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
  ];

  const output = document.getElementById("output");

  employees.forEach(emp => {
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) throw new Error("Invalid numeric conversion");

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    const div = document.createElement("div");
    div.textContent = `${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus}`;
    output.appendChild(div);
  });
} catch (error) {
  console.error(error.message);
}
