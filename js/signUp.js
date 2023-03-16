// Sign Up Button
class Usuario{
    constructor(name, mail, password, language){
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.language = language;
    }
}

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const newAccount = document.querySelector(".main-SignUp--btn")
newAccount.addEventListener("click",(e)=>{
    e.preventDefault()
    const name = document.querySelector(".main-Sign__input--name").value
    const mail = document.querySelector(".main-Sign__input--email").value
    const password = document.querySelector(".main-Sign__input--password").value
    const language = document.querySelector(".main-Sign__input--language").value
    const usuario = new Usuario(name, mail, password, language)
    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    window.location.href = "./home.html";
})

// VISIBLE PASSWORD
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector(".main-Sign__input--password")
showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye")
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type")=== "password" ? "text" : "password";
    passwordField.setAttribute("type",type)
})