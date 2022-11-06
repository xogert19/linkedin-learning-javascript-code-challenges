class Book {
    constructor(title, author, isbn, numCopies) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
        this._numCopies = numCopies;
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if (this._numCopies >= 10) return "in stock";
        if (this._numCopies > 0) return "low stock";
        return "out of stock";
    }

    sell(numSold = 1) {
        this._numCopies -= numSold;
    }

    restock(numCopies = 5) {
        this._numCopies += numCopies;
    }
}

class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this._edition = edition;
    }

    getEdition() {
        return `The current version of this book is ${this._edition}.`;
    }
}