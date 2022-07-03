let myLibrary = [];

class Book {
  
    constructor(title,author,pages,isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead =Boolean(isRead);
    }
}
const theHobbit = new Book("The hobbit",'J.R.R.Tolkien',255,false);
console.log(theHobbit.author);
myLibrary[0] = theHobbit;
console.log(myLibrary[0]);