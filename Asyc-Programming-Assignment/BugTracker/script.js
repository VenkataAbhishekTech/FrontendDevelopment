document.getElementById("loadBugs").addEventListener("click", () => {
    const output = document.getElementById("output");
    output.innerText = "Fetching bugs...\n";

    // 🔄 OLD CALLBACK VERSION (given in question)
    // function fetchBugs(callback) {
    //     setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
    // }

    // ✅ NEW PROMISE-BASED VERSION
    function getBugs() {
        return new Promise((resolve, reject) => {
            const shouldFail = Math.random() < 0.3; // 30% chance of failure

            setTimeout(() => {
                if (shouldFail) {
                    reject("API Error: Failed to fetch bugs!");
                } else {
                    resolve(["UI glitch", "API timeout", "Login failure"]);
                }
            }, 1000);
        });
    }

    // 🔍 USING THE PROMISE
    getBugs()
        .then(bugs => {
            output.innerText += "Bugs Fetched Successfully:\n";
            bugs.forEach(bug => {
                output.innerText += "- " + bug + "\n";
            });

            // Also show in console as table
            console.table(bugs);
        })
        .catch(error => {
            output.innerText += "\n❌ " + error;
            console.error(error);
        });
});
