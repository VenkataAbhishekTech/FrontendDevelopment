"use strict";

function generatePyramid() {
    const output = document.getElementById("output");
    output.textContent = "";
    let rows = Number(document.getElementById("rows").value);

    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += "* ";
        }
        output.textContent += line + "\n";
    }

    debugger;

    for (var a = 1; a <= rows; a++) {
        var line2 = "";
        for (var b = 1; b <= a; b++) {
            line2 += "* ";
        }
    }
}
