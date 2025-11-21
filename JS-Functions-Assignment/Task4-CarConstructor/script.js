
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    return `Car: ${this.brand} - ${this.model}`;
};

document.getElementById("runBtn").addEventListener("click", function () {
    const car1 = new Car("Toyota", "Fortuner");
    const car2 = new Car("Tesla", "Model S");

    const output = document.getElementById("output");
    output.innerHTML = `
        <p>${car1.getDetails()}</p>
        <p>${car2.getDetails()}</p>
        <p><strong>Note:</strong> Both cars share the same prototype method <code>getDetails()</code>.</p>
    `;
});
