// Get all step sections
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const summaryStep = document.getElementById("summaryStep");

// Inputs
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const summaryText = document.getElementById("summaryText");


// Utility: show only one step
function showStep(step) {
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    summaryStep.style.display = "none";

    step.style.display = "block";
}


// Step 1 → Next
document.getElementById("next1").addEventListener("click", () => {
    if (nameInput.value.trim() === "") {
        alert("Name cannot be empty");
        return;
    }
    showStep(step2);
});

// Step 2 → Back
document.getElementById("back2").addEventListener("click", () => {
    showStep(step1);
});

// Step 2 → Next
document.getElementById("next2").addEventListener("click", () => {
    const email = emailInput.value.trim();

    // Basic email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email");
        return;
    }

    showStep(step3);
});

// Step 3 → Back
document.getElementById("back3").addEventListener("click", () => {
    showStep(step2);
});

// Step 3 → Finish
document.getElementById("finishBtn").addEventListener("click", () => {
    if (passwordInput.value.trim().length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Show summary
    summaryText.innerHTML = `
        <b>Name:</b> ${nameInput.value} <br>
        <b>Email:</b> ${emailInput.value} <br>
        <b>Password:</b> ${passwordInput.value}
    `;

    showStep(summaryStep);
});
