const barBtns = document.querySelectorAll(".bar-home__btn");
barBtns.forEach(btn => {
    btn.addEventListener("click", function(e){
        btn.classList.toggle("selected")
    }  
    )
});
