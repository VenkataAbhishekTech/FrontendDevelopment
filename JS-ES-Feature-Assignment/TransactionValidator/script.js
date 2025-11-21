"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let t of transactions) {
    try {
        if (t === null) throw new Error("Null transaction entry");
        if (!t.id || t.amount === undefined) throw new Error("Missing id or amount");
        if (t.amount < 0) throw new Error("Negative amount detected");
        valid.push(t);
    } catch (err) {
        invalid.push({ transaction: t, error: err.message });
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Success Count:", valid.length);
console.log("Failed Count:", invalid.length);
