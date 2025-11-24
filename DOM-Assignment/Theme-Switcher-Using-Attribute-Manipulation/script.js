// Buttons
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");

function applyTheme(themeName) {
    document.body.setAttribute("class", themeName);      
    document.body.setAttribute("data-theme", themeName);  
}

lightBtn.addEventListener("click", () => applyTheme("light"));
darkBtn.addEventListener("click", () => applyTheme("dark"));
blueBtn.addEventListener("click", () => applyTheme("blue"));
