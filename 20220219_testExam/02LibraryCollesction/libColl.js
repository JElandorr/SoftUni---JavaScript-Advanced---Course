class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        const book = {
            name: bookName,
            author: bookAuthor,
            paid: false,
        };

        if (this.capacity <= this.books.length) {
            throw new Error("Not enough space in the collection.");
        }

        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let flagisFoundNotPaid = false;

        this.books.find((book) => {
            if (book.name === bookName) {
                if (book.paid) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    flagisFoundNotPaid = true;
                }
            }
        });

        if (flagisFoundNotPaid) {
            return `${bookName} has been successfully paid.`;
        } else {
            throw new Error(`${bookName} is not in the collection.`);
        }
    }

    removeBook(bookName) {
        let isFound = false;

        this.books.find((book) => {
            if (book.name === bookName) {
                if (book.paid) {
                    return `${bookName} remove from the collection.`;
                } else {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                }
            }
        });

        if (!isFound) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
    }
}

const library = new LibraryCollection(2);
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
console.log(library.removeBook("Don Quixote"));
console.log(library.removeBook("In Search of Lost Time"));
