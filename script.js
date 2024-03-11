const dialogElement = document.querySelector("dialog");
const newBookBtnElement = document.querySelector("#add");
const closeBtnElement = document.querySelector("#close-dialog");

newBookBtnElement.addEventListener("click", () => {
    dialogElement.showModal();
});

closeBtnElement.addEventListener("click", () => {
    dialogElement.close();
});
