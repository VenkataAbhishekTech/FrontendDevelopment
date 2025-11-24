const searchBox = document.getElementById("searchBox");
const tableRows = document.querySelectorAll("#studentTable tbody tr");
const noResultMsg = document.getElementById("noResult");

// Listen to real-time typing
searchBox.addEventListener("input", function () {
    const searchText = searchBox.value.toLowerCase();
    let matchFound = false;

    tableRows.forEach(row => {
        const rowText = row.innerText.toLowerCase();

        if (rowText.includes(searchText)) {
            row.style.display = "";
            matchFound = true;
        } else {
            row.style.display = "none";
        }
    });

    // Show "No results found" if nothing matches
    if (!matchFound) {
        noResultMsg.classList.remove("hidden");
    } else {
        noResultMsg.classList.add("hidden");
    }
});
