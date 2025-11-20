let bonus = 5000;

function calculateSalary(isPermanent) {

    let salary = 40000;

    console.log("Inside function → isPermanent =", isPermanent);

    if (isPermanent === true) {
        salary += bonus;
    }
    document.getElementById("output").innerText =
        "Total Salary: ₹" + salary;
    console.log("Global bonus (unchanged):", bonus);
}
