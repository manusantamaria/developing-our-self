// Sign Up Button
const newAccount = document.querySelector(".main-SignUp--btn")
newAccount.addEventListener("click",function(e){
    e.preventDefault()
    const name = document.querySelector(".main-Sign__input--name").value
    const mail = document.querySelector(".main-Sign__input--email").value
    const password = document.querySelector(".main-Sign__input--password").value
    const language = document.querySelector(".main-Sign__input--language").value
    const user = [name, mail, password, language]
    localStorage.setItem(`Usuario ${mail}` , JSON.stringify(user))

    // window.location.href = "./home.html";
})

// Sign In Button
const checkAccount = document.querySelector(".main-SignIn--btn")
const formSMS = document.querySelector(".main-Sign__form--sms")
checkAccount.addEventListener("click",function(e){
    e.preventDefault()
    const mail = document.querySelector(".main-Sign__input--email").value
    const password = document.querySelector(".main-Sign__input--password").value
    const key = `Usuario ${mail}`
    if (localStorage.getItem(key)) {
        window.location.href = "./home.html"
        // tipo de mensaje de que existe la cuenta
    }else{
        formSMS.textContent = "Invalid user/password, try again or sign up "
        console.log("hola");
        setTimeout(()=>formSMS.textContent = "", 5000)    
        
        // tipo de mensaje de que no existe la cuenta
    }
    console.log("hola");

    // const user = [mail, password]
    // localStorage.setItem(`Usuario ${mail}` , JSON.stringify(user))
    
    // 
})
