let temperature = 38; // in °C
let humidity = 75;    // in %
let windSpeed = 20;   // in km/h

// Step 2: Check for event safety conditions
if (temperature > 35 && humidity > 70) {
  console.log("Cancel: Heat Alert.");
} else if (temperature < 10 || windSpeed > 40) {
  console.log("Cancel: Cold/Windy Alert.");
} else {
  console.log("Event Approved.");
}

// Step 3: Give clothing/safety advice based on temperature
if (temperature < 20) {
  console.log("Wear Jacket.");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Comfortable.");
} else {
  console.log("Stay Hydrated.");
}
