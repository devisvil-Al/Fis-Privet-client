import { api } from "./Api.js";

const modalGreetings = document.querySelector('.modal__greetings')
const main = document.querySelector('.main')
const containerEvents = document.querySelector('.slider__events')
const sliderConfig = {
    prevCount : 0,
    count: 0
}

async function greethings(){
    window.Telegram.WebApp.expand() 
    const res = await api.getContact()
    const data = await api.checkUser(res.from.id)
    if(!data._id){
        window.location.href = '../Registry.html'
    }
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

containerEvents.addEventListener('mouseup', (e) => {

    console.log(e);
    const elementsWidth = Array.from(e.target.children).map(el => el)
    const scrollLeft = e.target.scrollLeft

    console.log(scrollLeft);

})






greethings()