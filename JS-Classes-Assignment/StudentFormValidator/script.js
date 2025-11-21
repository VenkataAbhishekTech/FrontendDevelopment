"use strict";

function validateForm() {
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
}

function setError(element, message) {
    element.classList.add("error");
    element.classList.remove("success");
    const small = element.nextElementSibling;
    small.innerText = message;
    small.classList.add("show");
}

function setSuccess(element) {
    element.classList.add("success");
    element.classList.remove("error");
    const small = element.nextElementSibling;
    small.classList.remove("show");
}

function validateName() {
    const name = document.getElementById("name");
    const regex = /^[A-Za-z ]+$/;
    if (!regex.test(name.value)) {
        setError(name, "Name must contain only alphabets");
    } else {
        setSuccess(name);
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
        setError(email, "Invalid email format");
    } else {
        setSuccess(email);
    }
}

function validatePhone() {
    const phone = document.getElementById("phone");
    const regex = /^[0-9]{10}$/;
    if (!regex.test(phone.value)) {
        setError(phone, "Phone must be 10 digits");
    } else {
        setSuccess(phone);
    }
}

function validatePassword() {
    const password = document.getElementById("password");
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (!regex.test(password.value)) {
        setError(password, "Password must contain 1 uppercase, 1 number, 1 special character");
    } else {
        setSuccess(password);
    }
}
