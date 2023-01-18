const buttonSendEmail = document.querySelector(".send-email");
const inputEmail = document.querySelector("#email");
const inputFocus = document.querySelector(".input-focus");

window.addEventListener('load', function() {

    buttonSendEmail.addEventListener("click", (e) => {
        if (inputEmail.value == "") {
            e.preventDefault();
            inputFocus.style.backgroundColor = "red"
            inputFocus.style.width = "100%"
        }
    })
    
    inputEmail.addEventListener("input", () => {
        if(this.value != "") {
            inputFocus.style.backgroundColor = "#04D361"
            inputFocus.style.width = "100%"
        }
    })
    
    inputEmail.addEventListener("focus", () => {
        inputFocus.style.width = "100%"        
    })

    inputEmail.addEventListener("blur", () => {
        if (this.value == "") {
            this.style.backgroundColor = "red"
            inputFocus.style.width = "100%"
        } else {
            inputFocus.style.width = 0
        }
    })

})