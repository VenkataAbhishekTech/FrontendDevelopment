document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let user = document.getElementById("username");
    let pass = document.getElementById("password");

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");
    let successMsg = document.getElementById("successMsg");

    let isValid = true;

    const userRegex = /^.{5,}$/;

    if (!userRegex.test(user.value)) {
        user.classList.add("invalid");
        user.classList.remove("valid");
        userError.textContent = "Username must be at least 5 characters.";
        isValid = false;
    } else {
        user.classList.add("valid");
        user.classList.remove("invalid");
        userError.textContent = "";
    }

    const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if (!passRegex.test(pass.value)) {
        pass.classList.add("invalid");
        pass.classList.remove("valid");
        passError.textContent = 
            "Password must be 8+ chars (1 uppercase, 1 lowercase, 1 number, 1 special)";
        isValid = false;
    } else {
        pass.classList.add("valid");
        pass.classList.remove("invalid");
        passError.textContent = "";
    }

    if (isValid) {
        successMsg.textContent = "Login Successful!";
    } else {
        successMsg.textContent = "";
    }
});
