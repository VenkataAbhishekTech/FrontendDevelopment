function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

document.getElementById("calcBtn").addEventListener("click", () => {
    const multiplier = Number(document.getElementById("multiplierInput").value);
    const number = Number(document.getElementById("numberInput").value);

    if (!multiplier || !number) {
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }

    const multiply = makeMultiplier(multiplier);
    const result = multiply(number);

    document.getElementById("output").innerHTML = 
        `Result: ${number} × ${multiplier} = <strong>${result}</strong>`;
});
