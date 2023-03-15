class Usuario{
    constructor(name, mail, password, language){
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.language = language;
    }
}

function validarUsuario(user, password) {
    if(user.password === password){
        return true
    } else {
        return false
    }
}
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

// Sign Up Button
const newAccount = document.querySelector(".main-SignUp--btn")
newAccount.addEventListener("click",(e)=>{
    e.preventDefault()
    const name = document.querySelector(".main-Sign__input--name").value
    const mail = document.querySelector(".main-Sign__input--email").value
    const password = document.querySelector(".main-Sign__input--password").value
    const language = document.querySelector(".main-Sign__input--language").value
    const usuario = new Usuario(name, mail, password, language)
    usuarios.push(usuario)
    localStorage.setItem('usuario', JSON.stringify(usuarios))
    window.location.href = "./home.html";
})

// Sign In Button
const checkAccount = document.querySelector(".main-SignIn--btn")
const formSMS = document.querySelector(".main-Sign__form--sms")
checkAccount.addEventListener("click",function(e){
    e.preventDefault()
    const mail = document.querySelector(".main-Sign__input--email").value
    const password = document.querySelector(".main-Sign__input--password").value

    const existe = usuarios.some(u => u.mail === mail);

    // const key = `Usuario ${mail}`
    if (existe) {
        const user = usuarios.find(u => u.mail === mail )
        const esValido = validarUsuario(user, password)
        if (esValido) {
            window.location.href = "./home.html"
        } else{
            formSMS.textContent = "Invalid password, try again"
            console.log("hola");
            setTimeout(()=>formSMS.textContent = "", 5000)    
            
            // tipo de mensaje de que no existe la cuenta
        }
        // tipo de mensaje de que existe la cuenta
    } else{
        formSMS.textContent = "Invalid user, try again or sign up "
    }
})

