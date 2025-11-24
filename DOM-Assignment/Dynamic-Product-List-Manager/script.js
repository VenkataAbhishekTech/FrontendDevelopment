const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

let currentlyEditing = null; 
addBtn.addEventListener("click", () => {
    const productName = productInput.value.trim();
    if (productName === "") return;

    addProductItem(productName);
    productInput.value = "";
});

function addProductItem(name) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span class="label">${name}</span>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    productList.appendChild(li);
}
productList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("delete")) {
        target.closest("li").remove();
    }

    if (target.classList.contains("edit")) {
        const li = target.closest("li");
        startEditing(li);
    }
});

function startEditing(li) {
    if (currentlyEditing && currentlyEditing !== li) {
        saveEditing(currentlyEditing);
    }

    currentlyEditing = li;

    li.classList.add("editing");

    const label = li.querySelector(".label");
    const oldText = label.textContent;

    label.innerHTML = `<input type="text" class="editInput" value="${oldText}" autofocus>`;
}

document.addEventListener("click", (event) => {
    if (!currentlyEditing) return;

    if (currentlyEditing.contains(event.target)) return;

    saveEditing(currentlyEditing);
});
function saveEditing(li) {
    const inputField = li.querySelector(".editInput");
    if (!inputField) return;

    const newText = inputField.value.trim();
    li.querySelector(".label").textContent = newText || "Unnamed Product";

    li.classList.remove("editing");
    currentlyEditing = null;
}
