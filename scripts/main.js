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
        api.getAppData(user.telegramId)
        .then(res => {
            if(res.success){
                const {actions, sportEvents} = res
                actions.forEach((action) => renderAction(action, user.telegramId))
                sportEvents.forEach(renderSportEvents)
            }
        })
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

check(init, api)
     

async function renderAction (action, id){
    const clone = templateAction.querySelector('.slide__actions').cloneNode(true)
    const price = clone.querySelector('.slide__cri')
    price.textContent = action.price
    clone.querySelector('.slide__title').textContent = action.name
    const btn = clone.querySelector('.slide__btn')
    if(action.state === 'create'){
        btn.textContent = 'выполнить' 
        btn.addEventListener('click', setStateEvent)
        async function setStateEvent(){
            const res = await api.setEventState(id, action.name)
            if(res.success){
                if(res.action.key === 'invite'){
                    const messageText = `Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=${user.telegramId}`;
                    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(messageText)}`;
                    window.Telegram.WebApp.openTelegramLink(telegramShareUrl);
                } else if (res.action.key === 'subscribe') {
                    window.Telegram.WebApp.openTelegramLink('https://t.me/+mzwM8nGyOnA0MmIy');
                }
                btn.classList.add('slide__btn-active')
                btn.textContent = 'собрать'
                btn.removeEventListener('click', setStateEvent)
                btn.addEventListener('click', checkSubscribe)
            }
        }
    } else if (action.state === 'start') {
        btn.classList.add('slide__btn-active')
        btn.textContent = 'собрать'
        btn.addEventListener('click', checkSubscribe)
    } else {
        btn.classList.add('slide__btn-closed')
        btn.textContent = 'завершено'
        price.textContent = ''
        price.classList.add('slide__cri-closed')
    }
    async function checkSubscribe(){
        const res = await api.checkEventSubscribe(id, action.name)
        if(res.success){
            btn.classList.remove('slide__btn-active')
            btn.classList.add('slide__btn-closed')
            btn.textContent = 'завершено'
            price.textContent = ''
            price.classList.add('slide__cri-closed')
            configSliderEvents.container.append(clone)
        }
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
