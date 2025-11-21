"use strict";

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x * 2;
}

document.getElementById("runBtn").addEventListener("click", function () {
    const output = document.getElementById("output");
    output.textContent = "";

    const nums = [1, 2, 3, 4];

    const doubled = applyOperation(nums, double);
    const squared = applyOperation(nums, x => x * x);

    output.textContent += `Original: ${nums}\n`;
    output.textContent += `Doubled: ${doubled}\n`;
    output.textContent += `Squared: ${squared}\n`;
});
