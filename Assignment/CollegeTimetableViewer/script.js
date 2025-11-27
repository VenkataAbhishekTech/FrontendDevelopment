const API = "http://localhost:3005/timetable";

document.getElementById("daySelect").addEventListener("change", function () {
  const day = this.value;
  document.getElementById("output").innerHTML = "";

  if (!day) return;

  fetch(`${API}?day=${day}`)
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        document.getElementById("output").innerHTML = `<p class="message">No classes today.</p>`;
        return;
      }

      data.forEach(item => {
        document.getElementById("output").innerHTML += `
          <div class="item">
            <h3>${item.subject}</h3>
            <p>Faculty: ${item.faculty}</p>
            <p>Time: ${item.time}</p>
          </div>
        `;
      });
    });
});
