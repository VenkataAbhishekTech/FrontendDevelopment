function checkGoal() {
    let steps = document.getElementById("steps").value;

    let message = (steps >= 10000) ? "Goal Achieved 🎉" : "Keep Going 👣";

    document.getElementById("result").innerText = message;
}
