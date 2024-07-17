export function scrollCommand(e, slides){
    const fullrange = e.target.scrollLeft
    const range = slides[0].clientWidth
    slides.forEach((el) => el.classList.remove('slide__active'))
    const countElement = Math.ceil((fullrange - 80) / range) 
    return countElement
}

export function selectSlide(el, sliderCommand){
    sliderCommand.scroll({
        left:   el.offsetLeft - (el.clientWidth / 2 + 10) ,
        behavior: 'smooth'
    })
}
