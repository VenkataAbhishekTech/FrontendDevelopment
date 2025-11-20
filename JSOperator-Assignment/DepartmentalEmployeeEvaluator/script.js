function evaluate() {
  const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
  ];

  let result = "";

  for (let i = 0; i < departments.length; i++) {
    let name = departments[i][0];
    let score = departments[i][1];
    let status = "";

    if (score >= 90) status = "Excellent";
    else if (score >= 75) status = "Good";
    else if (score >= 60) status = "Average";
    else status = "Needs Improvement";

    result += `${name}: ${status}<br>`;
  }

  document.getElementById("output").innerHTML = result;
}
