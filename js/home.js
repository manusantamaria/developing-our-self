const arrowLeft = document.querySelectorAll(".arrow-left")
const arrowRight = document.querySelectorAll(".arrow-right")

let counterA = 0, counterB = 0, counterC = 0, counterD = 0, counterE = 0;
const translate = (elem, px) => {
    if (elem.parentNode.classList.contains("bar-home__arrow")){
        elem.classList.contains("arrow-left__btn") ? (
            elem.parentNode.nextElementSibling.style.transform = "translateX(" + px + "px)"
        ) : elem.classList.contains("arrow-right__btn") ? (
            elem.parentNode.previousElementSibling.style.transform = "translateX(" + px + "px)"
        ) : null ;
    } else if(elem.parentNode.classList.contains("main-home__arrow1")){
        elem.classList.contains("arrow-left__btn") ? (
            elem.parentNode.nextElementSibling.style.transform = "translateX(" + px + "px)"
        ) : elem.classList.contains("arrow-right__btn") ? (
            elem.parentNode.previousElementSibling.style.transform = "translateX(" + px + "px)"
        ) : null ;
    } else if(elem.parentNode.classList.contains("main-home__arrow2")){
        elem.classList.contains("arrow-left__btn") ? (
            elem.parentNode.nextElementSibling.style.transform = "translateX(" + px + "px)"
        ) : elem.classList.contains("arrow-right__btn") ? (
            elem.parentNode.previousElementSibling.style.transform = "translateX(" + px + "px)"
        ) : null ;
    } else if(elem.parentNode.classList.contains("main-home__arrow3")){
        elem.classList.contains("arrow-left__btn") ? (
            elem.parentNode.nextElementSibling.style.transform = "translateX(" + px + "px)"
        ) : elem.classList.contains("arrow-right__btn") ? (
            elem.parentNode.previousElementSibling.style.transform = "translateX(" + px + "px)"
        ) : null ;
    } else if(elem.parentNode.classList.contains("main-home__arrow4")){
        elem.classList.contains("arrow-left__btn") ? (
            elem.parentNode.nextElementSibling.style.transform = "translateX(" + px + "px)"
        ) : elem.classList.contains("arrow-right__btn") ? (
            elem.parentNode.previousElementSibling.style.transform = "translateX(" + px + "px)"
        ) : null ;
    }

}
arrowLeft[0].addEventListener("click",(e)=>translate(e.target, counterA+=230))
arrowRight[0].addEventListener("click",(e)=>translate(e.target, counterA-=230))

arrowLeft[1].addEventListener("click",(e)=>translate(e.target, counterB+=357.5))
arrowRight[1].addEventListener("click",(e)=>translate(e.target, counterB-=357.5))

arrowLeft[2].addEventListener("click",(e)=>translate(e.target, counterC+=357.5))
arrowRight[2].addEventListener("click",(e)=>translate(e.target, counterC-=357.5))

arrowLeft[3].addEventListener("click",(e)=>translate(e.target, counterD+=357.5))
arrowRight[3].addEventListener("click",(e)=>translate(e.target, counterD-=357.5))

arrowLeft[4].addEventListener("click",(e)=>translate(e.target, counterE+=357.5))
arrowRight[4].addEventListener("click",(e)=>translate(e.target, counterE-=357.5))

const barBtns = document.querySelectorAll(".bar-home__btns--btn");
const asideBtns = document.querySelectorAll(".aside-home__li")
barBtns.forEach(btn => {
    let isStyled = false;
    btn.addEventListener("click", function(e){
        isStyled ? btn.setAttribute("style", "") : btn.setAttribute("style", "background-color:#ffe8b5;border-bottom: solid 1px #debe79");
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
