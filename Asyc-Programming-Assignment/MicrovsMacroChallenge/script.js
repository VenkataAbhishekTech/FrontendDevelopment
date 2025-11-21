document.getElementById("runBtn").addEventListener("click", () => {
    const output = document.getElementById("output");
    output.innerText = ""; 
    function log(msg) {
        output.innerText += msg + "\n";
        console.log(msg);
    }

    log("Start");

    setTimeout(() => {
        log("Macrotask: setTimeout executed");
    }, 0);

    Promise.resolve().then(() => {
        log("Microtask: Promise.then executed");
    });

    log("Synchronous Log");

    log("End");

});
