const API = "http://localhost:3004";

document.getElementById("usersCard").innerText = "Loading...";
document.getElementById("ordersCard").innerText = "Loading...";
document.getElementById("productsCard").innerText = "Loading...";

Promise.all([
  fetch(`${API}/users`).then(r => r.json()),
  fetch(`${API}/orders`).then(r => r.json()),
  fetch(`${API}/products`).then(r => r.json())
])
  .then(([users, orders, products]) => {
    document.getElementById("usersCard").innerText = `Users: ${users.length}`;
    document.getElementById("ordersCard").innerText = `Orders: ${orders.length}`;
    document.getElementById("productsCard").innerText = `Products: ${products.length}`;
  })
  .catch(() => {
    document.getElementById("warning").innerText = "Some data could not be loaded.";
    document.getElementById("usersCard").innerText = "Failed";
    document.getElementById("ordersCard").innerText = "Failed";
    document.getElementById("productsCard").innerText = "Failed";
  });
