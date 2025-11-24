class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is required!");
        }

        if (this.distance < 0) {
            throw new Error("Distance cannot be negative!");
        }

        const ratePerKm = 12; 
        return this.distance * ratePerKm;
    }
}

function runDemo() {
    const output = document.getElementById("output");
    output.textContent = "";

    try {
        const driver = new Driver("Rahul", 4.8, "Honda City");
        const trip = new Trip("Hyderabad", "Gachibowli", 15);

        const fare = trip.calculateFare();

        output.textContent += `Driver: ${driver.name} (${driver.vehicle})\n`;
        output.textContent += `Rating: ${driver.rating}\n`;
        output.textContent += `From: ${trip.fromLocation}\n`;
        output.textContent += `To: ${trip.toLocation}\n`;
        output.textContent += `Distance: ${trip.distance} km\n`;
        output.textContent += `Fare: ₹${fare}\n`;
    } 
    catch (error) {
        output.textContent += "❌ Error: " + error.message;
    }
}
