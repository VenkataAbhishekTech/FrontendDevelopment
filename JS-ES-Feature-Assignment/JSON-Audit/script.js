const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];

function runAudit() {
    let report = "";

    for (let i = 0; i < rawData.length; i++) {
        try {
            report += `Line ${i + 1}: Reading data...\n`;
            let parsed = JSON.parse(rawData[i]);
            report += `  Parsed successfully.\n`;

            if (!parsed.user || !parsed.age) {
                report += `  ERROR: Missing required keys (user, age).\n`;
                continue;
            }

            parsed.age = Number(parsed.age);

            if (isNaN(parsed.age)) {
                report += `  ERROR: Age is not a valid number.\n`;
                continue;
            }

            if (parsed.age < 18) {
                report += `  FILTERED OUT: Under 18 user.\n`;
                continue;
            }

            cleanData.push(parsed);
            report += `  Added to cleanData.\n`;
        } catch (err) {
            report += `  ERROR: Invalid JSON -> ${err.message}\n`;
        }
        report += "-----------------------------\n";
    }

    report += `Final Clean Data: ${JSON.stringify(cleanData, null, 2)}`;

    document.getElementById("output").textContent = report;
}

document.getElementById("runBtn").addEventListener("click", runAudit);
