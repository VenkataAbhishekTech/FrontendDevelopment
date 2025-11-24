const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 50 },
    { id: 3, name: "Jeans", category: "Clothing", price: 1500, stock: 3 },
    { id: 4, name: "T-Shirt", category: "Clothing", price: 700, stock: 20 },
    { id: 5, name: "Watch", category: "Accessories", price: 2000, stock: 2 },
    { id: 6, name: "Bag", category: "Accessories", price: 1200, stock: 12 }
];

// 1. Get low stock products (stock < 5)
function getLowStockProducts() {
    return products.filter(item => item.stock < 5);
}

// 2. Sort products by price (ascending)
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory value (price * stock)
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group products by category
function groupByCategory() {
    return products.reduce((grouped, product) => {
        if (!grouped[product.category]) {
            grouped[product.category] = [];
        }
        grouped[product.category].push(product);
        return grouped;
    }, {});
}

function runInventory() {
    const output = document.getElementById("output");
    output.textContent = ""; 
    output.textContent += "📌 LOW STOCK PRODUCTS (< 5):\n";
    output.textContent += JSON.stringify(getLowStockProducts(), null, 2) + "\n\n";

    output.textContent += "📌 SORTED BY PRICE (ASCENDING):\n";
    output.textContent += JSON.stringify(sortProductsByPrice(), null, 2) + "\n\n";

    output.textContent += "📌 TOTAL INVENTORY VALUE:\n";
    output.textContent += calculateTotalInventoryValue() + "\n\n";

    output.textContent += "📌 GROUPED BY CATEGORY:\n";
    output.textContent += JSON.stringify(groupByCategory(), null, 2) + "\n\n";
}
