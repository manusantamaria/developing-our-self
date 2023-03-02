const barBtns = document.querySelectorAll(".bar-home__btn");
const asideBtns = document.querySelectorAll(".aside-home__li")
barBtns.forEach(btn => {
    btn.addEventListener("click", function(e){
        if (btn.getAttribute("style")) {
            btn.removeAttribute("style")
        }
        else{
            btn.setAttribute("style",'background-color:#ffb1b1b3;border-bottom: solid 1px #d99a9ab3')
        }
    }  
    )
});
asideBtns.forEach(btn => {
    btn.addEventListener("click", function(e){
        if (btn.getAttribute("style")) {
            btn.removeAttribute("style")
        }
        else{
            btn.setAttribute("style",'background-color:#ffd2d28f')
        }
    }  
    )
});