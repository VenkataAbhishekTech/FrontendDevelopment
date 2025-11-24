// Max character limit
const MAX_CHAR = 100;

const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

// Update counter on every input
textBox.addEventListener("keydown", function (event) {
    const textLength = textBox.value.length;

    if (textLength >= MAX_CHAR && event.key !== "Backspace") {
        event.preventDefault();
    }
});

textBox.addEventListener("input", function () {
    const remaining = MAX_CHAR - textBox.value.length;

    counter.textContent = `${remaining} characters remaining`;
    if (remaining === 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "orange";
    } else {
        counter.style.color = "green";
    }
});

// Reset everything
resetBtn.addEventListener("click", () => {
    textBox.value = "";
    counter.textContent = `${MAX_CHAR} characters remaining`;
    counter.style.color = "green";
});
