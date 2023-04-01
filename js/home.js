document.addEventListener("DOMContentLoaded", function() {
    // Call the local JSON file
    const url = "../json/data.json"
    fetch(url)
    .then(response => response.json())
    .then(data => {
    for (let i = 1; i <= 10; i++) {
        const books = data.books[i];
        const card = document.createElement('div');
        card.classList.add('main-home__recommended-boxes--box');
        card.innerHTML = `
            <div class="main-home__recommended--pic">
                <img class="main-home__recommended--pic-img" src="${books.img}" alt="${books.name}">
            </div>
            <div class="main-home__recommended--title">
                <p class="main-home__recommended--title-p">${books.name}</p>
            </div>
        `;
        document.querySelector(".main-home__recommended-boxes--books").appendChild(card);
    }
    for (let i = 1; i <= 10; i++) {
        const yTChannels = data.yTChannels[i];
        const card = document.createElement('div');
        card.classList.add('main-home__recommended-boxes--box');
        card.innerHTML = `
            <div class="main-home__recommended--pic main-home__recommended--pic">
                <img class="main-home__recommended--pic-img main-home__recommended--pic-img2" src="${yTChannels.img}" alt="${yTChannels.name}">
            </div>
            <div class="main-home__recommended--title">
                <p class="main-home__recommended--title-p">${yTChannels.name}</p>
            </div>
        `;
        document.querySelector(".main-home__recommended-boxes--yTChannels").appendChild(card);
    }
    for (let i = 1; i <= 9; i++) {
        const podcast = data.podcasts[i];
        const card = document.createElement('div');
        card.classList.add('main-home__recommended-boxes--box');
        card.innerHTML = `
            <div class="main-home__recommended--pic main-home__recommended--pic">
                <img class="main-home__recommended--pic-img main-home__recommended--pic-img2" src="${podcast.img}" alt="${podcast.name}">
            </div>
            <div class="main-home__recommended--title">
                <p class="main-home__recommended--title-p">${podcast.name}</p>
            </div>
        `;
        document.querySelector(".main-home__recommended-boxes--podcasts").appendChild(card);
    }
    for (let i = 1; i <= 5; i++) {
        const course = data.courses[i];
        const card = document.createElement('div');
        card.classList.add('main-home__recommended-boxes--box');
        card.innerHTML = `
            <div class="main-home__recommended--pic">
                <img class="main-home__recommended--pic-img" src="${course.img}" alt="${course.name}">
            </div>
            <div class="main-home__recommended--title">
                <p class="main-home__recommended--title-p">${course.name}</p>
            </div>
        `;
        document.querySelector(".main-home__recommended-boxes--courses").appendChild(card);
    }
    })
    .catch(error => console.error(error));
    
    // More Information (coming soon)
    // const box = document.querySelectorAll(".main-home__recommended-boxes--box")
});


// Choose your Preferences (coming soon)
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

// Carousel for inicio.js (coming soon) (used to be for this js)

// const arrowLeft = document.querySelectorAll(".arrow-left")
// const arrowRight = document.querySelectorAll(".arrow-right")

// let counterA = 0, counterB = 0, counterC = 0, counterD = 0, counterE = 0;
// const checkSide = (elem, px)=>{
//     if (elem.classList.contains("arrow-left__btn")) {
//         const currentTranslation = parseFloat(elem.parentNode.nextElementSibling.style.transform.split("(")[1])
//         currentTranslation == 0 ? null : elem.parentNode.nextElementSibling.style.transform = "translateX(" + px + "vw)"
//     } else if (elem.classList.contains("arrow-right__btn")){
//         elem.parentNode.previousElementSibling.style.transform = "translateX(" + px + "vw)"
//     // ) : null ;
//     }
// }

// const checkSide = (elem, px)=>{
//     elem.classList.contains("arrow-left__btn") ? (
//         elem.parentNode.nextElementSibling.style.transform = "translateX(" + px + "vw)"
//     ) : elem.classList.contains("arrow-right__btn") ? (
//         elem.parentNode.previousElementSibling.style.transform = "translateX(" + px + "vw)"
//     ) : null ;
// }

// const translate = (elem, px) => {
//     if (elem.parentNode.classList.contains("bar-home__arrow")){
//         checkSide(elem, px)
//     } else if(elem.parentNode.classList.contains("main-home__arrow1")){
//         checkSide(elem, px)
//     } else if(elem.parentNode.classList.contains("main-home__arrow2")){
//         checkSide(elem, px)
//     } else if(elem.parentNode.classList.contains("main-home__arrow3")){
//         checkSide(elem, px)
//     } else if(elem.parentNode.classList.contains("main-home__arrow4")){
//         checkSide(elem, px)
//     }

// }
// arrowLeft[0].addEventListener("click",(e)=>checkSide(e.target, counterA+=63))
// arrowRight[0].addEventListener("click",(e)=>checkSide(e.target, counterA-=63))

// arrowLeft[1].addEventListener("click",(e)=>checkSide(e.target, counterB+=91))
// arrowRight[1].addEventListener("click",(e)=>checkSide(e.target, counterB-=91))

// arrowLeft[2].addEventListener("click",(e)=>checkSide(e.target, counterC+=357.5))
// arrowRight[2].addEventListener("click",(e)=>checkSide(e.target, counterC-=357.5))

// arrowLeft[3].addEventListener("click",(e)=>checkSide(e.target, counterD+=357.5))
// arrowRight[3].addEventListener("click",(e)=>checkSide(e.target, counterD-=357.5))

// arrowLeft[4].addEventListener("click",(e)=>checkSide(e.target, counterE+=357.5))
// arrowRight[4].addEventListener("click",(e)=>checkSide(e.target, counterE-=357.5))
