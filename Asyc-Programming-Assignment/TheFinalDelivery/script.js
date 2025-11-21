const logDiv = document.getElementById("log");

// Helper function to log messages both in console and page
function log(message) {
  console.log(message);
  logDiv.innerHTML += message + "<br>";
}

// Simulate a step with random delay (1-2s) and 80% chance of success
function simulateStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1-2s
    setTimeout(() => {
      const success = Math.random() < 0.8; // 80% chance success
      if (success) {
        resolve(`${stepName} completed`);
      } else {
        reject(`${stepName} failed`);
      }
    }, delay);
  });
}

// Delivery steps
function takeOrder() { return simulateStep("Order taken"); }
function prepare() { return simulateStep("Food prepared"); }
function pack() { return simulateStep("Package ready"); }
function dispatch() { return simulateStep("Out for delivery"); }
function deliver() { return simulateStep("Delivery completed!"); }

// Async pipeline using async/await
async function runPipeline() {
  logDiv.innerHTML = ""; // Clear previous logs
  log("Start Pipeline");

  try {
    const order = await takeOrder();
    log(`Step 1: ${order}`);

    const preparation = await prepare();
    log(`Step 2: ${preparation}`);

    const packaging = await pack();
    log(`Step 3: ${packaging}`);

    const outForDelivery = await dispatch();
    log(`Step 4: ${outForDelivery}`);

    const finalDelivery = await deliver();
    log(finalDelivery); // Delivery completed!
  } catch (error) {
    // If any step fails, we catch here
    log("Pipeline failed!");
    log(`Error: ${error}`);
  }
}

// Start button click
document.getElementById("startBtn").addEventListener("click", runPipeline);

/*
  Explanation:
  - Each step is asynchronous and returns a Promise.
  - Using async/await allows us to execute steps in order, despite random delays.
  - The event loop:
    1. The synchronous part runs first (button click, log "Start Pipeline").
    2. Each await pauses the async function and lets other events in the loop run.
    3. Once the Promise resolves, the code resumes at the next step.
  - If any Promise rejects, the try/catch block handles it gracefully.
*/
