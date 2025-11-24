const form = document.getElementById("userForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const successMsg = document.getElementById("successMsg");

function showError(input, message) {
    input.nextElementSibling.textContent = message;
}

function clearError(input) {
    input.nextElementSibling.textContent = "";
}

[nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener("input", () => {
        validateField(input);
    });
});

function validateField(input) {
    if (input === nameInput) {
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            return false;
        }
    }

    if (input === emailInput) {
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required");
            return false;
        }
        if (!emailInput.value.includes("@")) {
            showError(emailInput, "Invalid email address");
            return false;
        }
    }

    if (input === passwordInput) {
        if (passwordInput.value.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters");
            return false;
        }
    }

    clearError(input);
    return true;
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    successMsg.textContent = ""; 
    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isPasswordValid = validateField(passwordInput);

    if (isNameValid && isEmailValid && isPasswordValid) {
        successMsg.textContent = "Form Submitted Successfully ✔";
        form.reset();
    }
});
