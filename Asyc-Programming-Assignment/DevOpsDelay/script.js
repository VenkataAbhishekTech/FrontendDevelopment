document.getElementById("startDeploy").addEventListener("click", () => {
    const output = document.getElementById("output");
    output.innerText = "Starting deployment...\n";

    function serverResponse(serverName, time) {
        return new Promise((resolve, reject) => {
            const shouldFail = Math.random() < 0.2; 

            setTimeout(() => {
                if (shouldFail) {
                    reject(`${serverName} failed during deployment!`);
                } else {
                    resolve(`${serverName} deployment successful in ${time / 1000}s`);
                }
            }, time);
        });
    }

    const serverA = serverResponse("Server A", 2000);
    const serverB = serverResponse("Server B", 3000); 
    Promise.race([serverA, serverB])
        .then(fastest => {
            output.innerText += `\n🚀 Fastest response:\n${fastest}\n`;
        })
        .catch(error => {
            output.innerText += `\n❌ Fastest failed:\n${error}\n`;
        });

    Promise.all([serverA, serverB])
        .then(results => {
            output.innerText += `\n✅ Deployment completed for all servers:\n`;
            results.forEach(res => {
                output.innerText += "- " + res + "\n";
            });
        })
        .catch(error => {
            output.innerText += `\n❌ Deployment failed:\n${error}\n`;
        });
});
