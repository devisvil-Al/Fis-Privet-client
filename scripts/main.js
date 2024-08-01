import { api } from "./Api.js";
import {wheelScroll} from "./Slider.js"
import { check } from "./Components/init.js";

const modalGreetings = document.querySelector('.modal__greetings')
const main = document.querySelector('.main')
const containerEvents = document.querySelector('.slider__events')
const containerActions = document.querySelector('.slider__actions')
const preloader = document.querySelector('.preloader')
const cristall = document.querySelector('.point')
const profileBtn = document.querySelector('.point__description')
const friendBtn = document.querySelector('.friends__btn')
const btnOptions = document.querySelector('.point__container_options_btn')
const templateAction = document.querySelector('#action').content
const templateEvent = document.querySelector('#event').content

const configSliderEvents = {
    count : 0,
    container : containerActions
}
const configSliderActions = {
    count : 0,
    container : containerEvents
}

function init(user){
    cristall.textContent = user.cristall
    modalGreetings.querySelector('.modal__title').classList.add('modal__title-active')
    main.classList.remove('hidden__main')
    modalGreetings.classList.add('modal-visible')
    modalGreetings.querySelector('.modal__name') .textContent = user.firstName
    modalGreetings.querySelector('.modal__logo') .src = '../img/' + user.club + '.svg'
    preloader.style.display = 'none'
    setTimeout( () => {
        modalGreetings.classList.remove('modal-visible') 
    }, 2000)
}

api.getAppData()
    .then(res => {
        if(res.success){
            check(init, api)
            const {actions, sportEvents} = res
            console.log(actions);
            actions.forEach(renderAction)
            sportEvents.forEach(renderSportEvents)
        }
    })

function renderAction (action){
    const clone = templateAction.cloneNode(true)
    clone.querySelector('.slide__cri').textContent = action.price
    clone.querySelector('.slide__title').textContent = action.name
    const btn = clone.querySelector('.slide__btn')
    if(action.state === 'create'){
        btn.textContent = 'выполнить' 
    } else {
        btn.classList.add('slide__btn-active')
        btn.textContent = 'собрать'
    }
    configSliderEvents.container.append(clone)
}

function renderSportEvents (event, index){
    const clone = templateEvent.cloneNode(true)
    clone.querySelector('img').src = `../img/kristall${index + 1}.svg`
    clone.querySelector('.event__title').textContent = event.name
    clone.querySelector('.event__time').textContent = event.time
    clone.querySelector('.event__date').textContent = event.date
    clone.querySelector('.event__address').textContent = event.address  
    configSliderActions.container.append(clone)

}





containerActions.addEventListener('mousewheel', (e) =>  wheelScroll(e, configSliderEvents))
containerEvents.addEventListener('mousewheel', (e) => wheelScroll(e, configSliderActions))
profileBtn.addEventListener('click', () => window.location.href = '../ProfileInfo.html')
btnOptions.addEventListener('click', () => window.location.href = '../Profile.html')

friendBtn.addEventListener('click', () => window.location.href = '../Friends.html')
