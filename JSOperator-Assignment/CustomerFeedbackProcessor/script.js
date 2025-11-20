function processFeedback() {
  let text = document.getElementById("feedback").value;
  let words = text.trim().split(" ").length;
  let negative = text.toLowerCase().includes("bad") || text.toLowerCase().includes("poor");
  document.getElementById("words").innerText = "Word Count: " + words;
  document.getElementById("result").innerText = negative ? "Needs Improvement" : "Positive Feedback";
}
