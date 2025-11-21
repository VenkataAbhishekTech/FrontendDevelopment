function asyncStep(message) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;

        setTimeout(() => {
            const failed = Math.random() < 0.2;
            if (failed) {
                reject(message + " failed!");
            } else {
                resolve(message + " completed.");
            }
        }, delay);
    });
}

function boilWater() {
    return asyncStep("Boiling water");
}

function brewCoffee() {
    return asyncStep("Brewing coffee");
}

function pourCoffee() {
    return asyncStep("Pouring coffee into cup");
}

document.getElementById("makeCoffeeBtn").addEventListener("click", () => {
    const logBox = document.getElementById("logBox");
    logBox.innerText = "Starting coffee process...\n";

    boilWater()
        .then(res => {
            logBox.innerText += res + "\n";
            return brewCoffee();
        })
        .then(res => {
            logBox.innerText += res + "\n";
            return pourCoffee();
        })
        .then(res => {
            logBox.innerText += res + "\n";
            logBox.innerText += "\n☕ Coffee ready for the team!";
        })
        .catch(err => {
            logBox.innerText += "\nProcess stopped: " + err;
        });
});
