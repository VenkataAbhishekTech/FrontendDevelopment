// BankAccount class with private field
class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    // Deposit amount
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than 0");
        }
        this.#balance += amount;
        return this.#balance;
    }

    // Withdraw amount
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than 0");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

function runBankDemo() {
    const output = document.getElementById("output");
    output.textContent = ""; 

    const account = new BankAccount(1000);

    output.textContent += "Initial Balance: " + account.getBalance() + "\n\n";

    // Valid deposit
    try {
        account.deposit(500);
        output.textContent += "Deposited 500 → Balance: " + account.getBalance() + "\n";
    } catch (err) {
        output.textContent += "Deposit Error: " + err.message + "\n";
    }

    // Valid withdrawal
    try {
        account.withdraw(300);
        output.textContent += "Withdrew 300 → Balance: " + account.getBalance() + "\n";
    } catch (err) {
        output.textContent += "Withdraw Error: " + err.message + "\n";
    }

    // Invalid withdrawal (more than balance)
    try {
        account.withdraw(2000);
        output.textContent += "Withdrew 2000 → Balance: " + account.getBalance() + "\n";
    } catch (err) {
        output.textContent += "Withdraw Error: " + err.message + " ❌\n";
    }
    try {
        account.deposit(-100);
    } catch (err) {
        output.textContent += "Deposit Error: " + err.message + " ❌\n";
    }

    output.textContent += "\nFinal Balance: " + account.getBalance();
}
