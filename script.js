let myLibrary = [];
let inputTitle = "";
let inputAuthor = "";
let inputPages = 0;
let inputRead = Boolean(false);
let numInputs = 0;

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
let auxBook= new Book("The hobbiaasdt", "J.R.R.Tolkien", 255, false);
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

function introTable(_Book) {
  //Creamos una fila
  const bookTable = document.getElementById("table");
  const addRow = document.createElement("tr");
  bookTable.appendChild(addRow);
  //Añadimos el nombre.
  const addTitle = document.createElement("td");
  addTitle.innerHTML = _Book.title;
  bookTable.appendChild(addTitle);
  // Añadimos el autor
  const addAuthor = document.createElement("td");
  addAuthor.innerHTML = _Book.author;
  bookTable.appendChild(addAuthor);
  // Añadimos el numero de paginas
  const addPages = document.createElement("td");
  addPages.innerHTML = _Book.pages;
  bookTable.appendChild(addPages);
  // Añadimos el check-box de si se a leido
  const rowIsRead = document.createElement("td");
  const createCheckBox = document.createElement("input");
  createCheckBox.setAttribute("type", "checkbox");
//Pruebas 
  const hola = document.createElement("td");
  const caracola = document.createElement("button");
  
  hola.appendChild(caracola);
  bookTable.appendChild(hola);



  if (_Book.isRead) {
    createCheckBox.setAttribute("checked", "true");
  }
  rowIsRead.appendChild(createCheckBox);
  bookTable.appendChild(rowIsRead);
}
//Añadimos una entrada a la tabla
introTable(theHobbit);
//Funcion que almacena todos los objetos creados en el array
function saveBook(_Book){
    myLibrary[numInputs]=_Book;
}
    //Setea el atributo que a introducido el usuario al objeto auxiliar.
function getAttribute(id){
    const input = document.getElementById(id);
    let text =  input.value;
    return text;
}
//Crea objetos mediante un input del usuario y se añaden a la tabla.
document
    .getElementById('createNewEntry')
    .addEventListener('click',(_) =>{
            auxBook.title = getAttribute('title');
            auxBook.author = getAttribute('author');
            auxBook.isRead = getAttribute('isRead');
            auxBook.pages = getAttribute('pages');
          
           
            if (getAttribute('title').length===0||getAttribute('author').length===0||getAttribute('pages')===0) {
               alert("You have to enter all the information asked")
            }else{
                saveBook(auxBook);
                introTable(myLibrary[numInputs]);
                numInputs++;
    
            }

        });
    