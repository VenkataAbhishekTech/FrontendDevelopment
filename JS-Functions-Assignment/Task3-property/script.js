const user1 = {
name: "Abhishek",
showName: () => {
console.log("Arrow Function Output:", this.name);
}
};
const user2 = {
name: "Abhishek",
showName: function () {
console.log("Normal Function Output:", this.name);
}
};


function testUserObject() {
console.log("--- Testing user1 (Arrow Function) ---");
user1.showName(); 


console.log("--- Explanation ---");
console.log("Arrow functions do NOT bind their own 'this'. They take 'this' from the outer scope, which here is window.");


console.log("--- Testing user2 (Normal Function) ---");
user2.showName();
}