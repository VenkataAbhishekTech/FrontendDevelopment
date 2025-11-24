const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", (event) => {
    event.stopPropagation(); 
    dropdownMenu.classList.toggle("hidden");
});

dropdownMenu.addEventListener("click", (event) => {
    if (event.target.classList.contains("option")) {
        dropdownBtn.textContent = event.target.textContent + " ▼";
        dropdownMenu.classList.add("hidden");
    }
});
document.addEventListener(
    "click",
    () => {
        dropdownMenu.classList.add("hidden");
    },
    true 
);
