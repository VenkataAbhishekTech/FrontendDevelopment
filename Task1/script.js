document.addEventListener('DOMContentLoaded', function () {
  const priceEl = document.getElementById('price');
  const qtyEl = document.getElementById('quantity');
  const btn = document.getElementById('calcBtn');
  const output = document.getElementById('output');
  const error = document.getElementById('error');

  btn.addEventListener('click', function () {
    error.textContent = '';
    output.textContent = '';

    const price = Number(priceEl.value);
    const quantity = Number(qtyEl.value);

    if (!isFinite(price) || price <= 0) {
      error.textContent = 'Please enter a valid positive price.';
      priceEl.focus();
      return;
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
      error.textContent = 'Please enter a valid positive integer quantity.';
      qtyEl.focus();
      return;
    }

    let total = price * quantity;

    if (total > 100) {
      total = total - (total * 0.10); // apply 10% discount
    }

    output.textContent = `Final Amount: ₹${total.toFixed(2)}`;
  });
});
