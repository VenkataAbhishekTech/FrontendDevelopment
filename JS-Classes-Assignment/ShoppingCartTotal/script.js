"use strict";

class Cart {
    constructor() {
        this.items = [];
        this.discount = 0;
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        let total = this.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);

        if (this.discount > 0) {
            total = total - (total * this.discount) / 100;
        }

        return total.toFixed(2);
    }

    applyCoupon(code) {
        const regex = /^(SAVE|DISC)(\d{1,2})$/;

        if (!regex.test(code)) {
            return "Invalid coupon format";
        }

        const discountValue = Number(code.match(/\d+/)[0]);
        this.discount = discountValue;

        return `Coupon Applied: ${discountValue}% OFF`;
    }
}

const cart = new Cart();
const output = document.getElementById("output");

function displayCart() {
    output.textContent =
        "Items: " +
        JSON.stringify(cart.items, null, 4) +
        "\n\nDiscount: " +
        cart.discount +
        "%\n\nTotal: ₹" +
        cart.getTotal();
}

document.getElementById("cartForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("itemName").value;
    const price = Number(document.getElementById("itemPrice").value);
    const qty = Number(document.getElementById("itemQty").value);

    if (name && price && qty) {
        cart.addItem(name, price, qty);
        displayCart();
    }
});

document.getElementById("applyCoupon").addEventListener("click", function () {
    const code = document.getElementById("couponInput").value.trim();
    const message = cart.applyCoupon(code);
    alert(message);
    displayCart();
});

displayCart();
