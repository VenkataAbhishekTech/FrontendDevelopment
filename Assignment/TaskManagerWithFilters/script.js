const API = "http://localhost:3003/tasks";

function loadTasks(filter = "") {
  let url = API;

  if (filter === "completed") url += "?completed=true";
  else if (filter) url += `?priority=${filter}`;

  $.get(url, data => {
    $("#taskList").empty();
    data.forEach(t => {
      $("#taskList").append(`
        <li class="${t.completed ? "completed" : ""}">
          <span>${t.title} (${t.priority})</span>
          <input type="checkbox" ${t.completed ? "checked" : ""} data-id="${t.id}">
        </li>
      `);
    });
  });
}

$(document).on("change", "input[type='checkbox']", function () {
  const id = $(this).data("id");
  const newStatus = this.checked;

  $.ajax({
    url: `${API}/${id}`,
    method: "PATCH",
    data: JSON.stringify({ completed: newStatus }),
    contentType: "application/json",
    success: () => loadTasks($("#filter").val())
  });
});

$("#filter").on("change", function () {
  loadTasks(this.value);
});

loadTasks();
