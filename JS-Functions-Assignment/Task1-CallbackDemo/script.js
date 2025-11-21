"use strict";

function greetUser(name, callback) {
    const output = document.getElementById("output");
    output.textContent += `Hello ${name}\n`;
    callback();
}

function showEndMessage() {
    const output = document.getElementById("output");
    output.textContent += "Welcome to the course!\n";
}

document.getElementById("runBtn").addEventListener("click", function () {
    const output = document.getElementById("output");
    output.textContent = ""; 
    greetUser("Abhishek", showEndMessage);
});
