
const arrowLeft = document.querySelector(".arrow-left")

const arrowRight = document.querySelector(".arrow-right")

const slides = document.querySelectorAll(".slider-image")

const bottom = document.getElementById("bottom")

const paginationCircle = []

let currentSlideIndex = 0;


function createPaginationCircle(){
    const div = document.createElement("div")
    div.className = "paginetion-circle";
    bottom.appendChild(div);
    paginationCircle.push(div)
}
function addPagination(){
    slides.forEach(createPaginationCircle)
    paginationCircle[0].classList.add("active")
}


function addActiveClass(){
    paginationCircle[currentSlideIndex].classList.add("active")
}
function removeActiveClass(){
    paginationCircle[currentSlideIndex].classList.remove("active")
}



function showSlide(){
    slides[currentSlideIndex].classList.add("block")
}

function hideSlide(){
    slides[currentSlideIndex].classList.remove("block")
}
function changeSlide(slideIndex){
    hideSlide()
    removeActiveClass()
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}
function nextSlide(){
    let newSlide = currentSlideIndex + 1;
    if(newSlide > slides.length - 1){
        newSlide = 0;
    }
    changeSlide(newSlide)
}

function previousSlide(){
    let newSlide = currentSlideIndex - 1;
    if(newSlide < 0){
        newSlide = slides.length - 1;
    }
    changeSlide(newSlide)
}

addPagination();
arrowRight.addEventListener("click", nextSlide)
arrowLeft.addEventListener("click", previousSlide)