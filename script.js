const dialogElement = document.querySelector("dialog");
const newBookBtnElement = document.querySelector("#add");
const closeBtnElement = document.querySelector("#close-dialog");

const bookListElement = document.querySelector(".book-list");
const bookListHeaderElement = document.querySelector(".book-list-header");

const titleInputElement = document.querySelector("#title");
const authorInputElement = document.querySelector("#author");
const pagesInputElement = document.querySelector("#pages");
const yesBtnElement = document.querySelector(".yes");
const noBtnElement = document.querySelector(".no");

const addBookBtnElement = document.querySelector("#add-the-book");

let alreadyReadIt = false;
let counter = 1;

newBookBtnElement.addEventListener("click", () => {
    dialogElement.showModal();
});

closeBtnElement.addEventListener("click", () => {
    dialogElement.close();
});

const myLibrary = [];

function Book(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

const makeNewObject = () => {
    const theTitle = titleInputElement.value;
    const theAuthor = authorInputElement.value;
    const numOfPages = pagesInputElement.value;
    return new Book(theTitle, theAuthor, numOfPages, alreadyReadIt);
};

const resetTheDialog = () => {
    titleInputElement.value = "";
    authorInputElement.value = "";
    pagesInputElement.value = "";
    noBtnElement.classList.remove("no-toggle");
    yesBtnElement.classList.remove("yes-toggle");
    alreadyReadIt = false;
    dialogElement.close();
};

const addNewBookToList = (element) => {
    const newBook = document.createElement("div");
    newBook.classList.add("new-book");
    bookListElement.appendChild(newBook);

    const newBookInfo = document.createElement("div");
    newBookInfo.classList.add("book-list-header");
    newBook.appendChild(newBookInfo);

    const numberIDOfBook = document.createElement("div");
    numberIDOfBook.textContent = (myLibrary.indexOf(element) + 1).toString();
    newBookInfo.appendChild(numberIDOfBook);

    const titleOfNewBook = document.createElement("div");
    titleOfNewBook.textContent = element.title;
    newBookInfo.appendChild(titleOfNewBook);

    const authorOfNewBook = document.createElement("div");
    authorOfNewBook.textContent = element.author;
    newBookInfo.appendChild(authorOfNewBook);

    const numOfPagesOfNewBook = document.createElement("div");
    numOfPagesOfNewBook.textContent = element.numOfPages;
    newBookInfo.appendChild(numOfPagesOfNewBook);

    const readReport = document.createElement("div");
    readReport.textContent = element.read
        ? "already read it"
        : "not read it yet";
    newBookInfo.appendChild(readReport);
};

const addBookToMyLibrary = () => {
    const newBook = makeNewObject();
    myLibrary.push(newBook);
    addNewBookToList(myLibrary[myLibrary.length - 1]);
    resetTheDialog();
};

yesBtnElement.addEventListener("click", () => {
    yesBtnElement.classList.add("yes-toggle");
    noBtnElement.classList.remove("no-toggle");
    alreadyReadIt = true;
});

noBtnElement.addEventListener("click", () => {
    noBtnElement.classList.add("no-toggle");
    yesBtnElement.classList.remove("yes-toggle");
    alreadyReadIt = false;
});

addBookBtnElement.addEventListener("click", addBookToMyLibrary);
