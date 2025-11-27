$(document).ready(function () {
    // Set initial greeting based on time
    const hour = new Date().getHours();
    let greet = "";
    if (hour < 12) greet = "Good Morning!";
    else if (hour < 17) greet = "Good Afternoon!";
    else greet = "Good Evening!";
    $("#greeting").text(greet);

    // Change greeting on button click
    $("#change-greet").click(function () {
        $("#greeting").text("Stay positive, work hard, and make it happen!");
    });

    // Toggle welcome message
    $("#toggle-msg").click(function () {
        $("#welcome-msg").toggle();
    });

    // Show alert on greeting click
    $("#greeting").click(function () {
        alert("Greeting clicked!");
    });
});
