class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding method to prototype (not inside class)
MovieTicket.prototype.printTicket = function () {
    return `🎬 MOVIE TICKET
Movie: ${this.movieName}
Seat No: ${this.seatNo}
Price: ₹${this.price}`;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}
function runDemo() {
    const output = document.getElementById("output");
    output.textContent = ""; 
    const ticket1 = new OnlineTicket("Avengers: Endgame", "A12", 250, 30);
    const ticket2 = new OnlineTicket("KGF 2", "B7", 200, 25);

    output.textContent += "🎟 Online Ticket 1:\n";
    output.textContent += ticket1.printTicket() + "\n"; // Calling parent prototype method
    output.textContent += "Total Amount: ₹" + ticket1.getTotalAmount() + "\n\n";

    output.textContent += "🎟 Online Ticket 2:\n";
    output.textContent += ticket2.printTicket() + "\n"; // Prototype chain works
    output.textContent += "Total Amount: ₹" + ticket2.getTotalAmount() + "\n\n";

    output.textContent += "\n✔ Prototype chain demonstration successful!";
}
