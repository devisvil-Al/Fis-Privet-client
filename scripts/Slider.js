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


export function wheelScroll (e, config){
    if(e.wheelDelta > 0){
        config.container.children.length > config.count ? config.count++ : config.count
    }else {
        0 < config.count ? config.count-- : config.count
    }
    config.container.scroll({left: config.container.clientWidth * config.count , behavior: 'smooth'})
}