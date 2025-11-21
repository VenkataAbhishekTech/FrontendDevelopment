
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "divide":
            if (b === 0) throw new Error("DivideByZeroError");
            return a / b;
        case "power":
            return Math.pow(a, b);
        case "root":
            if (a < 0) throw new Error("NegativeRootError");
            return Math.sqrt(a);
        default:
            throw new Error("InvalidOperationError");
    }
}

let output = "";

for (let op of operations) {
    try {
        let result = calculate(op, num1, num2);
        output += `Operation: ${op}\nResult: ${result}\n\n`;
    } catch (err) {
        output += `Operation: ${op}\nError: ${err.message}\n\n`;
    }
}

document.getElementById("result").textContent = output;

debugger;
