//array of book objects
let myLibrary = [];
let aNewBook = "";
//Object constructor to make books
function Book(title, author, pages,read){
    this.title = title
    this.author = author
    this.pages = pages + " Pages";
    this.haveRead = read
 }
   
 function createBook(){
    let bookTitle = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookPages = document.getElementById("book-pages").value;
    let read = "Read";
    //makes new book
    aNewBook = new Book(bookTitle,bookAuthor,bookPages,read);
    myLibrary.push(aNewBook);
 }

//takes user input and creates a book object with user input
function addBookToLibrary(){
    createBook();
    let booksLibrary = document.getElementById("library");
    let eachBookDiv = document.createElement("div");
    let pagesNum = document.getElementById("book-pages").value;
    let currentBook = myLibrary[myLibrary.length - 1];
    let error;
    if(pagesNum < 1){
        error = document.querySelector("#error"); 
        error.textContent ="Please enter a number!";
        setInterval(function(){
            error.textContent = " ";
        }, 2000)

    }else{
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("data-index", myLibrary.length - 1)
        deleteButton.classList.add("delete-button");
        eachBookDiv.classList.add("book-div");
        eachBookDiv.setAttribute("data-index", myLibrary.length - 1)
        console.log(currentBook);
    //loops through all the keys in currentBook and displays the values
        for(key in currentBook){
            let para = document.createElement("p");
            para.textContent = currentBook[key];
            console.log(currentBook[key]);
            eachBookDiv.appendChild(para);
            eachBookDiv.appendChild(deleteButton);
        //add class book so css styles will apply
            para.classList.add("book");
        }
    booksLibrary.appendChild(eachBookDiv);
    form.style.display = "none";
    form.reset();
    }
    
 }

//deletes when delete button is clicked
let deleteButton = document.querySelector(".delete-button");
deleteButton.addEventListener("click", function(){
   // let index = .getAttribute("data-index");
   let index = deleteButton.getAttribute("data-index");
  
})

//clears text fields
let form = document.getElementById("book-form");
form.style.display = "none";

//shows form when button is clicked
let newBookButton = document.getElementById("new-book-button");
newBookButton.addEventListener("click", function(){
    form.style.display = "block";
});
    

//adds the completed book to myLibrary when add book button is clicked
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", addBookToLibrary);

console.log(myLibrary);
