import { api } from "./Api.js";
import {wheelScroll} from "./Slider.js"


const modalGreetings = document.querySelector('.modal__greetings')
const main = document.querySelector('.main')
const containerEvents = document.querySelector('.slider__events')
const containerActions = document.querySelector('.slider__actions')
const configSliderEvents = {
    count : 0,
    container : containerActions
}
const configSliderActions = {
    count : 0,
    container : containerEvents
}

async function greethings(){
    window.Telegram.WebApp.expand() 
    const tg = window.Telegram.WebApp
    const check = await api.checkUser({data: tg.initData, user: tg.initDataUnsafe.user })
    if(check.ok){
        const res = await api.auth(window.Telegram.WebApp.initDataUnsafe.user.id)
        console.log(res);
        if(!res.success){
            window.location.href = '../Registry.html'
        }
        const data = await res.json()
        modalGreetings.querySelector('.modal__name') .textContent = data.firstName
        modalGreetings.querySelector('.modal__logo') .src = '../img/' + data.club + '.svg'
        modalGreetings.querySelector('.modal__title').classList.add('modal__title-active')
        
        main.classList.remove('hidden__main')
        setTimeout( () => { 
            modalGreetings.classList.add('modal-visible')
        }, 1000)
        setTimeout( () => {
            modalGreetings.classList.remove('modal-visible') 
        }, 2000)
        
    }
    
}





containerActions.addEventListener('mousewheel', (e) =>  wheelScroll(e, configSliderEvents))
containerEvents.addEventListener('mousewheel', (e) => wheelScroll(e, configSliderActions))

containerActions.addEventListener('scroll', (e) =>  {
    console.log(e);
})

greethings()