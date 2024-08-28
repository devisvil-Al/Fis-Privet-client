import {api} from "./Api.js"
import { check } from "./Components/init.js"

const preloader = document.querySelector('.preloader')
const backbtn = document.querySelector('.nav__btn')
const navToggleBtns = document.querySelectorAll('.nav__toggle')
const sections = document.querySelectorAll('.section__container')
const cards = document.querySelectorAll('.card')

async function init (user){
    preloader.style.display = 'none'
    console.log(user);
    
    const {data} = await api.getProfileStatistics(user.telegramId)
    if(!data) return 
    renderStatistics(data)
    
}


function renderStatistics(data){
    const keys = Object.keys(data)
    cards.forEach((card, index) => {
        console.log();
        
        const param = keys.find(key => card.id + 'Pay' === key)
        console.log(param);
        
        if(!param) return
        card.querySelector('.card__total span').innerText = data[param]
        
    })
    
    
}


backbtn.addEventListener('click', () => {
    window.location.href = '../index.html'
})

navToggleBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    navToggleBtns.forEach(item =>  item.classList.remove('nav__toggle-active'))
    btn.classList.add('nav__toggle-active')
    sections.forEach(section => section.classList.remove('section-active'))
    sections[index].classList.add('section-active')
}))

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('card-active')
    })
    
})

document.addEventListener('DOMContentLoaded', () => {
    check(init, api)
})