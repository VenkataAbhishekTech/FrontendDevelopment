"use strict";

function outer() {
    output("Outer start");
    output(count);
    var count = 5;

    const inner = () => {
        output("Inner start");
        try {
            output(count);
            let count = 10;
        } catch (e) {
            output("Error: " + e.message);
        }
    };

    inner();
    output("Outer end");
}

function output(msg) {
    document.getElementById("output").innerText += msg + "\n";
}

function runCode() {
    document.getElementById("output").innerText = "";
    outer();
}
