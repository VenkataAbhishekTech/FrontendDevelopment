let report = "";

function runNonStrict() {
    function demo(a, a) {
        total = 10;
        //delete total;
    }
    try {
        demo(5, 10);
        return "Non-strict mode: Executed (but unsafe — duplicate parameters + implicit global).";
    } catch (e) {
        return "Non-strict mode error: " + e.message;
    }
}

function runStrict() {
    "use strict";
    function demo(a, a) {
        let total = 10;
        return total;
    }
    try {
        demo(5, 10);
        return "Strict mode: Corrected version executed safely.";
    } catch (e) {
        return "Strict mode error: " + e.message;
    }
}

function runTests() {
    report = "";
    report += "---- NON-STRICT RESULT ----\n" + runNonStrict() + "\n\n";
    report += "---- STRICT RESULT ----\n" + runStrict() + "\n";
    document.getElementById("output").textContent = report;
}
