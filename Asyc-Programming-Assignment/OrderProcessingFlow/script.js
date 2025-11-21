function submitOrder() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Order submitted successfully");
      } else {
        reject("Order submission failed");
      }
    }, 500);
  });
}
async function processOrder(maxRetries = 3) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML = ""; 
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await submitOrder();
      logDiv.innerHTML += `Attempt ${attempt}: Success ✅<br>`;
      return; 
    } catch (error) {
      logDiv.innerHTML += `Attempt ${attempt}: Failed ❌<br>`;
    }
  }

  throw new Error("Order could not be processed");
}

document.getElementById("processBtn").addEventListener("click", async () => {
  try {
    await processOrder();
  } catch (error) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<strong>${error.message}</strong>`;
  }
});
