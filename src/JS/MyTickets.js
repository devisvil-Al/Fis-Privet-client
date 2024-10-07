// import '../Assets/css/nullstyle.css'
// import '../Assets/css/orderTicket.css'

import { api } from "/src/Components/Api.js";
import { check } from "/src/Components/init.js";


const ticketContainer = document.querySelector('.container')
const templateTicket = document.querySelector('#ticket')
const getTicketBtn = document.querySelector('.getTicket')
const backBtn = document.querySelector('.nav__btn-back')
const navName = document.querySelector('.nav__name')
const preloader = document.querySelector('.preloader')

const appData = {
    user : null,
    tickets : []
}


function init (user){
    appData.user = user
    navName.textContent = user.firstName
    api.getTicketsByUser(user.telegramId).then(({tickets}) => {
        if(tickets.length === 0) return
        appData.tickets = tickets
        console.log(appData.tickets);
        
        appData.tickets.sort((a,b) => a.EventId - b.EventId)
        appData.tickets.forEach(renderTicket)
        console.log(appData.tickets)
        preloader.style.display = 'none'
    })
}

backBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})


function renderTicket(ticket) {
    const element = templateTicket.content.querySelector('.qr').cloneNode(true)
    const date = element.querySelector('.date span')
    const time = element.querySelector('.time span')
    const tribune = element.querySelector('.tribune span')
    const row = element.querySelector('.row span')
    const place = element.querySelector('.place span')
    const img = element.querySelector('.qr_img')
    const name = element.querySelector('.name')

    name.textContent = ticket.name
    date.textContent = ticket.date
    time.textContent = ticket.time
    tribune.textContent = ticket.tribune
    row.textContent = ticket.row
    place.textContent = ticket.place
    img.src = `${api.url}qr/${ticket._id}`
    ticketContainer.append(element)
}

document.addEventListener('DOMContentLoaded', () => {
    check(init, api)
})

getTicketBtn.addEventListener('click', async () => {
    try{
        const data = await api.sendTicketToTelegram(appData.tickets, appData.user.telegramId)
        console.log(data)
    } catch(e){console.log(e)}
})