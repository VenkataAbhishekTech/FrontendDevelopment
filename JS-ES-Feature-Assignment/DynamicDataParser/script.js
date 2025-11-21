"use strict";

function parseData() {
    const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
    const validNumbers = [];
    const invalidNumbers = [];

    console.log("=== Parsing Started ===");

    for (let item of apiData) {
        const asNumber = Number(item); 
        const asBoolean = Boolean(item);
        const asString = String(item);

        console.log(`Original: ${item} | Number: ${asNumber} | Boolean: ${asBoolean} | String: ${asString}`);

        if (!isNaN(asNumber) && item !== " " && item !== "100px") {
            validNumbers.push(asNumber);
        } else {
            invalidNumbers.push(item);
        }
    }

    console.log("=== Parsing Complete ===");

    const report =
        "VALID NUMBERS: " + JSON.stringify(validNumbers) +
        "\nINVALID ENTRIES: " + JSON.stringify(invalidNumbers);

    document.getElementById("output").innerText = report;

    console.log(report);
}
