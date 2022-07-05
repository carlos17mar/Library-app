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
theHobbit = new Book("The hola", "J.R.R.Tolkien", 255, true);
console.log(theHobbit.title);

//Creador de pop-up

document
  .getElementById("newBook")
  .addEventListener("click", (_) =>
    document.getElementById("popup").classList.add("visible")
  );

document
  .getElementById("popup")
  .addEventListener("click", (e) => e.target.classList.remove("visible"));

//Creador dinamico de entrdas en la tabla con objetos de tipo libro.

//function introTable (_Book){
let title = theHobbit.title;

//Creamos una fila

const bookTable = document.getElementById("table");
const addRow = document.createElement("tr");
bookTable.appendChild(addRow);
//Añadimos el nombre.
const addTitle = document.createElement("td");
addTitle.innerHTML = theHobbit.title;
bookTable.appendChild(addTitle);
// Añadimos el autor
const addAuthor = document.createElement("td");
addAuthor.innerHTML = theHobbit.author;
bookTable.appendChild(addAuthor);
// Añadimos el numero de paginas
const addPages = document.createElement("td");
addPages.innerHTML = theHobbit.pages;
bookTable.appendChild(addPages);
// Añadimos el check-box de si se a leido
const rowIsRead = document.createElement('td');
const createCheckBox = document.createElement('input');
createCheckBox.setAttribute('type','checkbox');

if (theHobbit.isRead) {
    createCheckBox.setAttribute('checked','true');

}
rowIsRead.appendChild(createCheckBox);
bookTable.appendChild(rowIsRead);

//  }
