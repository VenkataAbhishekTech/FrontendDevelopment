let couponNumber = Math.floor(Math.random() * 100) + 1;
console.log("🎟️ Your Coupon Number:", couponNumber);

// Step 2: Determine discount message
let message = "";

if (couponNumber <= 30) {
  message = "You won a 10% discount!";
} else if (couponNumber <= 60) {
  message = "You won a 20% discount!";
} else if (couponNumber <= 90) {
  message = "You won a 30% discount!";
} else {
  message = "🎉 You won a 50% Mega Offer!";
}

console.log(message);

// Step 3: Check if number is prime
let isPrime = true;

if (couponNumber === 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(couponNumber); i++) {
    if (couponNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}

// Step 4: Display bonus if prime
if (isPrime) {
  console.log("✨ Prime number bonus applied!");
}

console.log("----------------------------------------");
