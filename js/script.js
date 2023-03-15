const barBtns = document.querySelectorAll(".bar-home__btn");
const asideBtns = document.querySelectorAll(".aside-home__li")
barBtns.forEach(btn => {
    let isStyled = false;
    btn.addEventListener("click", function(e){
        isStyled ? btn.setAttribute("style", "") : btn.setAttribute("style", "background-color:#ffdb8c;border-bottom: solid 1px #debe79");
        isStyled = !isStyled;
    });
    });

asideBtns.forEach(btn => {
    let isStyled = false;
    btn.addEventListener("click", function(e){
        isStyled ? btn.setAttribute("style", "") : btn.setAttribute("style", "background-color:#f6d794");
        isStyled = !isStyled;
    });
});


// VISIBLE PASSWORD
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector(".main-Sign__input--password")
showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye")
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type")=== "password" ? "text" : "password";
    passwordField.setAttribute("type",type)
})

// GO HOME
// const login = document.querySelector("main-Sign--btn")
// login.addEventListener("click", function(e){
//     e.preventDefault()
//     window.location.href="./pages/home.html";
// })