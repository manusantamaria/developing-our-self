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

