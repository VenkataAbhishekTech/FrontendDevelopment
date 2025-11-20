function analyzeScores() {
  const scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
  );

  const highest = Math.max(...scores);
  const lowest = Math.min(...scores);
  const average = scores.reduce((a, b) => a + b, 0) / scores.length;
  const passed = scores.filter(s => s >= 50).length;

  document.getElementById("output").innerHTML = `
    Scores: ${scores.join(", ")}<br>
    Highest Score: ${highest}<br>
    Lowest Score: ${lowest}<br>
    Average Score: ${average.toFixed(2)}<br>
    Passed Students: ${passed}
  `;
}
