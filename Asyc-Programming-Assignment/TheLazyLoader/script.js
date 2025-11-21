function mayFail(result) {
    return Math.random() < 0.3 
        ? Promise.reject(result + " FAILED ❌")
        : Promise.resolve(result + " ✅");
}

function loadProfile() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Profile Loaded"), 2000)
    ).then(mayFail);
}

function loadPosts() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Posts Loaded"), 1500)
    ).then(mayFail);
}

function loadMessages() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Messages Loaded"), 1000)
    ).then(mayFail);
}

function loadDashboard() {
    const output = document.getElementById("output");
    output.innerHTML = "<p>Loading modules...</p>";

    const startTime = Date.now();

    Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
        .then(results => {
            const totalTime = (Date.now() - startTime) / 1000;

            output.innerHTML = `<h3>Module Status:</h3>`;

            results.forEach((result, index) => {
                const moduleNames = ["Profile", "Posts", "Messages"];
                if (result.status === "fulfilled") {
                    output.innerHTML += `<p class="success">${moduleNames[index]}: ${result.value}</p>`;
                } else {
                    output.innerHTML += `<p class="fail">${moduleNames[index]}: ${result.reason}</p>`;
                }
            });

            output.innerHTML += `<hr><p><strong>Total Time Taken:</strong> ${totalTime} seconds</p>`;
        });
}
