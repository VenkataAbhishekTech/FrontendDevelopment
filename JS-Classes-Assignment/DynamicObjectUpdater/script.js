"use strict";

let user = { 
    name: "John",
    email: "john@mail.com",
    age: 21 
};

const form = document.getElementById("userForm");
const output = document.getElementById("output");

function displayUser() {
    output.textContent = JSON.stringify(user, null, 4);
}

displayUser();

form.addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value || user.name;
    user.email = document.getElementById("email").value || user.email;
    user.age = Number(document.getElementById("age").value) || user.age;

    displayUser();
});
