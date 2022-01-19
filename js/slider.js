let index = 1

let box = document.querySelector('.slider')
let slidesBox = document.querySelector('.slider__list')
let slides = document.querySelectorAll('.slider__item')
let prewBtn = document.querySelector('.prew')
let nextBtn = document.querySelector('.next')
let dotsBox = document.querySelector('.dots')
let size = box.clientWidth

function position() {
    dotsBox.innerHTML = ''
    let i

    slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';

    for (i = 0; i < slides.length; i++) {
        if (i !== 0 && i !== slides.length - 1) {
            if (i === index) {
                dotsBox.innerHTML += `<span 
                class="dot active" 
                id="` + i + `"></span>`
            } else {
                dotsBox.innerHTML += `<span 
                class="dot" 
                id="` + i + `"></span>`
            }
        }
    }

    let dots = document.querySelectorAll('.dot')
    dots.forEach(dot => {
        dot.classList.remove('active')
        dot.addEventListener('click', (e) => {
            index = e.target.id
            position()
        })
    });
    
    dots[index-1].classList.add('active')
}

prewBtn.addEventListener('click', () => {
    slidesBox.style.transition = 'all .3s ease-in-out'
    index <= 0 ? false : index--
    slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
    jump()
})

nextBtn.addEventListener('click', () => {
    slidesBox.style.transition = 'all .3s ease-in-out'
    let max = slides.length
    index >= max - 1 ? false : index++
    slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
    jump()
})
function jump() {
    slidesBox.addEventListener('transitionend', () => {
        slides[index].id === "firstClone" ? index = 1 : index
        slides[index].id === "lastClone" ? index = slides.length - 2 : index
        slidesBox.style.transition = "none"
        slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        position()
    })
}


position()