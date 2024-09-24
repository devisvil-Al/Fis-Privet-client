import { api } from "./Api.js";
import {wheelScroll} from "./Slider.js"
import { check } from "./Components/init.js";
import { levelName } from "./Components/init.js";

const modalGreetings = document.querySelector('.modal__greetings')
const main = document.querySelector('.main')
const mainLevel = document.querySelector('.point__level')
const containerEvents = document.querySelector('.slider__events')
const containerActions = document.querySelector('.slider__actions')
const preloader = document.querySelector('.preloader')
const cristall = document.querySelector('.point')
const profileBtn = document.querySelector('.point__description')
const friendBtn = document.querySelector('.friends__btn')
const btnOptions = document.querySelector('.point__container_options_btn')
const modalEvent = document.querySelector('.modal-event')
const backModalEvent = modalEvent.querySelector('.nav__btn-back')
const templateAction = document.querySelector('#action').content
const templateEvent = document.querySelector('#event').content
const modalEventBtn = document.querySelector('.modal-event_btn')

function addMessage(str){
    const modalMessage = document.querySelector('.modal-message')
    modalMessage.classList.add('modal-message--visible')
    modalMessage.textContent = str
    setTimeout(() => {
        modalMessage.classList.remove('modal-message--visible')
        modalMessage.textContent = ''
    }, 3000)
}

const app = window.Telegram.WebApp;
app.ready()
app.expand()
let open = false

app.onEvent('app:started', () => {
    console.log('open');
    open = true
})

app.isClosingConfirmationEnabled = true;

const appData = {sportEvent : {}, action : {}, user : {}}

const configSliderEvents = {
    count : 0,
    container : containerActions
}
const configSliderActions = {
    count : 0,
    container : containerEvents
}

function init(user){
    appData.user = user
    api.getAppData(user.telegramId)
    .then(res => {
        if(res.success){
            const {actions, sportEvents} = res
            actions.forEach((action) => renderAction(action, user.telegramId))
            sportEvents.forEach(renderSportEvents)
        }
    })
    cristall.textContent = user.cristall
    main.classList.remove('hidden__main')
    mainLevel.textContent = `${user.level} ур. ${levelName[user.level]}`
    modalGreetings.querySelector('.modal__title').classList.add('modal__title-active')
    modalGreetings.querySelector('.modal__name') .textContent = user.firstName
    modalGreetings.querySelector('.modal__logo') .src = '../img/' + user.club + '.gif'
    preloader.style.display = 'none'
    if(open){
        // if(document.referrer.includes('https://web.telegram.org/')){
            modalGreetings.classList.add('modal-visible')
            setTimeout( () => {
                modalGreetings.classList.remove('modal-visible') 
            }, 3000)
        // }
    }
}

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
                    const messageText = `Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=${id}`;
                    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(messageText)}`;
                    window.Telegram.WebApp.openTelegramLink(telegramShareUrl);
                } else if (res.action.key === 'subscribe') {
                    window.Telegram.WebApp.openTelegramLink('https://t.me/+mzwM8nGyOnA0MmIy');
                }
                setTimeout(() => {
                    btn.classList.add('slide__btn-active')
                    btn.textContent = 'собрать'
                    btn.removeEventListener('click', setStateEvent)
                    btn.addEventListener('click', checkSubscribe)
                }, 1000)
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
        try {
            const res = await api.checkEventSubscribe(id, action.name)
            if(res.success){
                btn.classList.remove('slide__btn-active')
                btn.classList.add('slide__btn-closed')
                btn.textContent = 'завершено'
                price.textContent = ''
                price.classList.add('slide__cri-closed')
                configSliderEvents.container.append(clone)
            } else {
                if(action.name === "Накопить 600 кр"){
                    addMessage('Вы не выполнили условия события')
                } else {
                    const messageText = `Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=${id}`;
                    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(messageText)}`;
                    window.Telegram.WebApp.openTelegramLink(telegramShareUrl);
                }
            }
        } catch (error) {
            console.log(error)
            addMessage('Вы не выполнили условия события')
        }
    }
    configSliderEvents.container.append(clone)
}

function openEvent(){
    window.location.href = '../orderTicket.html'
}

function listenTickets(){
    window.location.href = '../MyTickets.html'
}

function renderSportEvents (event, index){
    const clone = templateEvent.querySelector('.slide__event').cloneNode(true)
    clone.querySelector('img').src = `../img/kristall${index + 1}.svg`
    clone.querySelector('.event__title').textContent = event.name
    clone.querySelector('.event__time').textContent = event.time
    clone.querySelector('.event__date').textContent = event.date
    clone.querySelector('.event__address').textContent = event.address  
    configSliderActions.container.append(clone)    
    const currentEvent = appData.user.tickets.find((item => item.event === event._id))
    clone.addEventListener('click', () => {
        appData.sportEvent = event
        modalEvent.classList.add('modal-visible')
        modalEvent.querySelector('img').src = `../img/kristall${index + 1}.svg`
        modalEvent.querySelector('.nav__toggle_command').textContent = event.name
        modalEvent.querySelector('.nav__toggle_address').textContent = event.address 
        modalEvent.querySelector('.nav__toggle_date').textContent = event.date
        modalEvent.querySelector('.nav__toggle_time').textContent = event.time 
        modalEvent.querySelector('.modal-event_description').textContent = event.description
        localStorage.setItem('event', JSON.stringify(appData.sportEvent))
        if(currentEvent){
            modalEventBtn.removeEventListener('click', openEvent)
            modalEventBtn.addEventListener('click', listenTickets)
            modalEventBtn.textContent = 'Посмотреть билеты'
        } else {
            modalEventBtn.removeEventListener('click', listenTickets)
            modalEventBtn.addEventListener('click', openEvent)
            modalEventBtn.textContent = 'Посетить матч'
        }
    })
}



containerActions.addEventListener('mousewheel', (e) =>  wheelScroll(e, configSliderEvents))
containerEvents.addEventListener('mousewheel', (e) => wheelScroll(e, configSliderActions))
profileBtn.addEventListener('click', () => window.location.href = '../ProfileInfo.html')
btnOptions.addEventListener('click', () => window.location.href = '../Profile.html')
backModalEvent.addEventListener('click', () => {
    modalEvent.classList.remove('modal-visible')
    modalEvent.querySelector('img').src = ``
})
friendBtn.addEventListener('click', () => window.location.href = '../Friends.html')

document.addEventListener('DOMContentLoaded', () => {
    check(init, api)
})