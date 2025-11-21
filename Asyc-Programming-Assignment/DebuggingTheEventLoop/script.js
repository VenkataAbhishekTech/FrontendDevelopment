document.getElementById("runBtn").addEventListener("click", () => {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML = ""; 

  function log(msg) {
    console.log(msg);
    logDiv.innerHTML += msg + "<br>";
  }



  log("Script start");

  setTimeout(() => {
    log("Timeout callback");
  }, 0);

  Promise.resolve().then(() => {
    log("Promise callback");
  });

  log("Script end");

});
