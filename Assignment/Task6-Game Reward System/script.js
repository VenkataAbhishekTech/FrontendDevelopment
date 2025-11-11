let level = 12;                // Player level
let performanceScore = 80;     // Player's performance score
let missionsCompleted = true;  // Whether all missions are completed

// Step 2: Calculate base coins using formula
let coins = (level * 50) + (performanceScore * 10);

// Step 3: Double coins if all missions completed
if (missionsCompleted === true) {
  coins *= 2;
}

// Step 4: Determine player rank
let rank = (coins > 1000) ? "Elite" : "Regular";

// Step 5: Display all results neatly
console.log("🎮 GAME REWARD SUMMARY 🎮");
console.log("--------------------------");
console.log("Player Level:", level);
console.log("Performance Score:", performanceScore);
console.log("Missions Completed:", missionsCompleted);
console.log("Total Coins Earned:", coins);
console.log("Player Rank:", rank);
