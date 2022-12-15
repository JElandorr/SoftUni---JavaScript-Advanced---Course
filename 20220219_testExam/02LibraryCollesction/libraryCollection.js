class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.emptySlots = capacity - this.capacity;
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= 0) {
            throw new Error("Not enough space in the collection.");
        }

        const newBook = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false,
        };

        this.books.push(newBook);
        this.capacity--;

        return `The ${newBook.bookName}, with an author ${newBook.bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this.books.find((b) => b.bookName == bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const book = this.books.find((b) => b.bookName == bookName);
        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!book.payed) {
            throw new Error(
                `${bookName} need to be paid before removing from the collection.`
            );
        }

        this.books.filter((book) => book.bookName !== bookName);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (bookAuthor) {
            const author = this.books.find((b) => b.bookAuthor == bookAuthor);
            if (author) {
                let bookPayed = "";

                this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

                this.books.map((book) => {
                    if (book.payed) {
                        bookPayed = `Has Paid`;
                    } else {
                        bookPayed = `Not Paid`;
                    }
                    return `${book.bookName}  == ${book.bookAuthor} - ${bookPayed}.`;
                });
                return `${this.books.join("\n")}`;
            } else {
                return `${bookAuthor} is not in the collection.`;
            }
        } else {
            let bookPayed = "";
            if (this.emptySlots <= 0) {
                this.emptySlots = 0;
            }

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            this.books.map((book) => {
                if (book.payed) {
                    bookPayed = `Has Paid`;
                } else {
                    bookPayed = `Not Paid`;
                }
                return `${book.bookName}  == ${book.bookAuthor} - ${bookPayed}.`;
            });

            return `The book collection has ${
                this.emptySlots
            } empty spots left.\n${this.books.join("\n")}`;
        }
    }
}

const library = new LibraryCollection(2);
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
console.log(library.removeBook("Don Quixote"));
console.log(library.removeBook("In Search of Lost Time"));
