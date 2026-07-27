const inputPassword = document.querySelector("#inputPassword");
const eye = document.querySelector("#eye");

eye.addEventListener("click", () => {

    if (inputPassword.type === "password") {


        inputPassword.type = "text";

    } else {

        inputPassword.type = "password";

    }

});