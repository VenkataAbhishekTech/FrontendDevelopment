let count = 0;

function updateDisplay() {
  document.getElementById("value").innerText = "Count: " + count;
}

function increment() {
  function update() {
    count++;
    log("Increment → " + count);
  }
  update();
  updateDisplay();
}

function decrement() {
  function update() {
    count--;
    log("Decrement → " + count);
  }
  update();
  updateDisplay();
}

function log(text) {
  document.getElementById("log").innerText += text + "\n";
}

increment();
increment();
decrement();
