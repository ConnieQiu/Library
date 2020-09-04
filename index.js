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
   

//takes user input and creates a book object with user input
function addBookToLibrary(){
    let bookTitle = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookPages = document.getElementById("book-pages").value;
    let booksLibrary = document.getElementById("library");
    let error;
    let readOrNot;
    let inputText = document.querySelectorAll(".book-info");
    let readCheck = document.getElementById("have-read-check").checked;
    if(readCheck === true){
        readOrNot = "Read";
    }else{
        readOrNot = "Not Read";
    }
   //checks to make sure all fields are filled
    if(bookPages < 1 || bookTitle === "" || bookAuthor === "" || bookPages === ""){
        error = document.querySelector("#error"); 
        error.textContent ="Please fill in all fields!";
        setInterval(function(){
            error.textContent = " ";
        }, 2800)

    }else{
        aNewBook = new Book(inputText[0].value,inputText[1].value,inputText[2].value,inputText[3].value,readOrNot);
        myLibrary.push(aNewBook);
        let eachBookDiv = document.createElement("div");
    let currentBook = myLibrary[myLibrary.length - 1];
    let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("data-index", myLibrary.length - 1);
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click",function(){
            let index = deleteButton.getAttribute("data-index");
            let divToRemove = document.querySelector(`[data-index = "${index}"]`);
            divToRemove.remove();
        });

        eachBookDiv.classList.add("book-div");
        console.log(currentBook);
//adds book to display
        inputText.forEach(function(el){
            let para = document.createElement("p");
            para.textContent = el.value;
            para.classList.add("book");
            eachBookDiv.setAttribute("data-index", myLibrary.length - 1);
            eachBookDiv.appendChild(para);
            booksLibrary.appendChild(eachBookDiv);
            eachBookDiv.appendChild(deleteButton);
        })
        form.reset();
    }
   
    }
 

//deletes when delete button is clicked
let originalDeleteButton = document.querySelector(".delete-button")
originalDeleteButton.addEventListener("click", function(){
    let firstBook = document.querySelector("#first-book");
    firstBook.remove();
});


//hides form
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
