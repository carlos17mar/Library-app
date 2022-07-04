let myLibrary = [];
let inputTitle = "";
let inputAuthor = "";
let inputPages = 0;
let inputRead = Boolean(false);

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = Boolean(isRead);
  }
}
//Se me ocurre, crear un objeto base e ir almacenandolos en el array.
let theHobbit = new Book("The hobbit", "J.R.R.Tolkien", 255, false);
console.log(theHobbit.author);
myLibrary[0] = theHobbit;
console.log(myLibrary[0]);
theHobbit = new Book("The hola", "J.R.R.Tolkien", 255, false);
console.log(theHobbit.title);

//Creador de libros
/*
const newBook = document.querySelector(".newBookDisplay");
let descriptioon = document.createElement("p");

descriptioon.innerHTML = "Titulo: ";
newBook.appendChild(descriptioon);
let title = document.createElement("input");
title.innerHTML = "Titulo:";
newBook.appendChild(title);

/
*/

document
  .getElementById("myBtn")
  .addEventListener("click", _ => document.getElementById("popup").classList.add("visible"));

document
  .getElementById("popup")
  .addEventListener("click", e => e.target.classList.remove("visible"));
