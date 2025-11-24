class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Dataset cannot be empty!");
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(entry => entry.steps > 7000);
    }

    getAverageCalories() {
        const total = this.data.reduce((sum, entry) => sum + entry.calories, 0);
        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(entry => {
            return `${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories.`;
        });
    }
}

function runAnalytics() {
    const output = document.getElementById("output");
    output.textContent = ""; // clear previous

    const workoutData = [
        { user: "A", steps: 8000, calories: 300 },
        { user: "B", steps: 12000, calories: 500 },
        { user: "C", steps: 4000, calories: 200 }
    ];

    try {
        const analytics = new FitnessAnalytics(workoutData);

        output.textContent += "🏃 ACTIVE USERS (steps > 7000):\n";
        output.textContent += JSON.stringify(analytics.getActiveUsers(), null, 2) + "\n\n";

        output.textContent += "🔥 AVERAGE CALORIES:\n";
        output.textContent += analytics.getAverageCalories() + "\n\n";

        output.textContent += "📄 USER SUMMARY:\n";
        output.textContent += analytics.getUserSummary().join("\n") + "\n\n";

        output.textContent += "✔ All analytics executed successfully!";
    } catch (err) {
        output.textContent += "❌ Error: " + err.message;
    }
}
