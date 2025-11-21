const output = document.getElementById("output");

function delay(step) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(step);
        }, 1000);
    });
}

document.getElementById("runCallback").addEventListener("click", () => {
    output.innerText = "Running Callback Hell...\n";

    design(function () {
        build(function () {
            test(function () {
                deploy(function () {
                    celebrate(function () {
                        output.innerText += "\n🎉 Completed using CALLBACK HELL!";
                    });
                });
            });
        });
    });
});

function design(next) {
    setTimeout(() => {
        output.innerText += "🎨 Designing UI...\n";
        next();
    }, 1000);
}

function build(next) {
    setTimeout(() => {
        output.innerText += "🏗️ Building project...\n";
        next();
    }, 1000);
}

function test(next) {
    setTimeout(() => {
        output.innerText += "🧪 Running tests...\n";
        next();
    }, 1000);
}

function deploy(next) {
    setTimeout(() => {
        output.innerText += "🚀 Deploying...\n";
        next();
    }, 1000);
}

function celebrate(next) {
    setTimeout(() => {
        output.innerText += "🎉 Celebrate! Build Successful!\n";
        next();
    }, 1000);
}

document.getElementById("runAsync").addEventListener("click", async () => {
    output.innerText = "Running Async/Await version...\n";

    try {
        output.innerText += await delay("🎨 Designing UI...\n");
        output.innerText += await delay("🏗️ Building project...\n");
        output.innerText += await delay("🧪 Running tests...\n");
        output.innerText += await delay("🚀 Deploying...\n");
        output.innerText += await delay("🎉 Celebrate! Build Successful!\n");

        output.innerText += "\n✔ Completed using ASYNC/AWAIT (clean & readable)";
    } catch (error) {
        output.innerText += "❌ Error in pipeline: " + error;
    }
});
