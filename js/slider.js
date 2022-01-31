const box = document.querySelector('.slider')
const slidesBox = document.querySelector('.slider__list')
const slides = document.querySelectorAll('.slider__item')
const prevBtn = document.querySelector('.prev-arrow')
const nextBtn = document.querySelector('.next-arrow')
const dotsBox = document.querySelector('.dots')
const size = box.clientWidth

let index = 1, offset = (-index) * size

function position() {
    dotsBox.innerHTML = ''

    for (let i = 0; i < slides.length; i++) {
        if (i !== 0 && i !== slides.length - 1) {
            if (i === index) {
                dotsBox.innerHTML += `<span 
                class="dot active" 
                id="${i}"></span>`
            } else {
                dotsBox.innerHTML += `<span 
                class="dot" 
                id="${i}"></span>`
            }
        }
    }

    const dots = document.querySelectorAll('.dot')
    dots.forEach(dot => {
        dot.classList.remove('active')
        dot.addEventListener('click', (e) => {
            const timer = setInterval(() => jump(timer), 17);
            index = e.target.id
            position()
        })
    });
    
    dots[index-1].classList.add('active')
}

prevBtn.addEventListener('click', prewBtnClick)
nextBtn.addEventListener('click', nextBtnClick)

function prewBtnClick() {
    index <= 0 ? false : index--

    const timer = setInterval(() => jump(timer), 17);
}

function nextBtnClick() {
    const max = slides.length
    index >= max - 1 ? false : index++

    const timer = setInterval(() => jump(timer), 17);
}

function jump(timer) {
    let offsetClone = offset
    prevBtn.removeEventListener('click', prewBtnClick)
    nextBtn.removeEventListener('click', nextBtnClick)

    
    if (offsetClone === (-index * size)) {
        clearInterval(timer)
        prevBtn.addEventListener('click', prewBtnClick)
        nextBtn.addEventListener('click', nextBtnClick)
    } else {
        if (offsetClone <= -index * size) {

            if (slides[index].id === 'lastClone') {
                index = slides.length - 2
                offsetClone = (-index -1) * size
            }
            offset = offsetClone + 10

        } else {
            if (slides[index].id === 'firstClone') {
                index = 1
                offsetClone = 0
            } 
            offset = offsetClone - 10
        }
            slidesBox.style.left = `${offset}px`
            position()
    }    

}

position()