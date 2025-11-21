// Fetch product data from Fake Store API
async function loadProducts() {
    const container = document.getElementById("product-container");
    const errorMsg = document.getElementById("errorMessage");

    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Network error");
        }

        const products = await response.json();

        // Log each product in the console (as required)
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("--------------------------------");
        });

        // Create product cards
        products.forEach(product => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.log(error);
        errorMsg.textContent = "Failed to load products. Please try again.";
    }
}

loadProducts();
