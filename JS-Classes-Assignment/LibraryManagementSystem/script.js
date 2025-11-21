"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return "This book is already issued.";
        }
        this.isIssued = true;
        return "Book issued successfully.";
    }

    returnBook() {
        this.isIssued = false;
        return "Book returned successfully.";
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "1111"),
    new Book("Atomic Habits", "James Clear", "2222"),
    new Book("Clean Code", "Robert C. Martin", "3333"),
    new Book("JavaScript Essentials", "Mark Myers", "4444")
];

function displayAvailableBooks() {
    const list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach(book => {
        if (!book.isIssued) {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
            list.appendChild(li);
        }
    });
}

displayAvailableBooks();

function issueBookByISBN() {
    const isbn = document.getElementById("isbnInput").value.trim();
    const msg = document.getElementById("message");

    const book = books.find(b => b.isbn === isbn);

    if (!book) {
        msg.textContent = "Book not found!";
        msg.style.color = "red";
        return;
    }

    const result = book.issueBook();
    msg.textContent = result;
    msg.style.color = result.includes("success") ? "green" : "red";

    displayAvailableBooks();
}
