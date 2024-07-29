import {api} from "./Api.js"
import { check } from "./Components/init.js"
const preloader = document.querySelector('.preloader')
const backbtn = document.querySelector('.nav__btn')
const navToggleBtns = document.querySelectorAll('.nav__toggle')
const sections = document.querySelectorAll('.section__container')
const formProfile = document.querySelector('.profile__form')
const avatar = document.querySelector('.profile__avatar img')

function init (user){
    preloader.style.display = 'none'
    avatar.src = user.avatar
    const {firstName, lastName, country, day, month, year} = formProfile.elements
    firstName.value = user.firstName
    lastName.value = user.lastName
    country.value = user.country || ''
    day.value = user.birthday?.day || ''
    month.value = user.birthday?.month || ''
    year.value = user.birthday?.year || ''
}


backbtn.addEventListener('click', () => {
    window.location.href = '../index.html'
})

navToggleBtns.forEach(btn => btn.addEventListener('click', () => {
    navToggleBtns.forEach(btn => btn.classList.toggle('nav__toggle-active'))
    sections.forEach(section => section.classList.toggle('section-active'))
}))

check(init, api)