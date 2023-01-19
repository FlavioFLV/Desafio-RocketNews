const rowTable = document.querySelectorAll("tr");
const modal = document.querySelectorAll(".modal-alert")
const buttonDelete = document.querySelectorAll('button.delete');
const buttonCancel = document.querySelectorAll('button.modal-cancel');

window.addEventListener('load', () => {
    buttonDelete.forEach((element, index) => {
        element.addEventListener('click', () => {
            modal[index].style.display = "flex"
        })
    })

    buttonCancel.forEach((element, index) => {
        element.addEventListener("click", () => {
            modal[index].style.display = "none"
        })
    })
})