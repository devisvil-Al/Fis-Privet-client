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
    const dataHash = 'query_id=AAFCPbI6AAAAAEI9sjpkKRH0&user=%7B%22id%22%3A984759618%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22devisvil%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721492698&hash=c5c877983e0d790d0868f83006cf0f6c3305e0009b67de94266b5529ae711a9f'
    const user = {allows_write_to_pm :  true, first_name :  "Александр", id :  984759618, language_code :  "ru", last_name :  "", username :  "devisvil"}
    const check = await api.checkUser({data: tg.initData || dataHash, user: tg.initDataUnsafe.user || user })
    if(!check.ok){
        const res = await api.auth(window.Telegram.WebApp.initDataUnsafe.user.id)
        if(!res.ok){
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