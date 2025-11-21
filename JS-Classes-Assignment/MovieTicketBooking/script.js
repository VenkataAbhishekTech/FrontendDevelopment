document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let seats = document.getElementById("seats").value;

    // Regular Expressions
    let nameRegex = /^[A-Za-z ]+$/;
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Validations
    if (!nameRegex.test(name)) {
        alert("Name must contain alphabets only!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format!");
        return;
    }

    if (seats < 1 || seats > 10) {
        alert("Seats must be between 1 and 10!");
        return;
    }

    // Create booking object
    let booking = {
        name: name,
        email: email,
        seats: seats
    };

    // Display ticket
    let output = document.getElementById("ticketOutput");
    output.style.display = "block";
    output.innerHTML = `
        <h3>🎫 Ticket Details</h3>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Seats:</strong> ${booking.seats}</p>
    `;
});
