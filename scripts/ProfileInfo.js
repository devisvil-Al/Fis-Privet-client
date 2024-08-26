import {api} from "./Api.js"
import { check } from "./Components/init.js"
const preloader = document.querySelector('.preloader')
const backbtn = document.querySelector('.nav__btn')
const navToggleBtns = document.querySelectorAll('.nav__toggle')
const sections = document.querySelectorAll('.section__container')
const cards = document.querySelectorAll('.card')

function init (user){
    preloader.style.display = 'none'
 
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

check(init, api)