import {api} from "/src/Components/Api.js"
import { check } from "/src/Components/init.js"
import {levelName} from "/src/Components/init.js"
import { createScene } from "/src/Components/Three.js"

const preloader = document.querySelector('.preloader')
const backbtn = document.querySelector('.nav__btn')
const navToggleBtns = document.querySelectorAll('.nav__toggle')
const sections = document.querySelectorAll('.section__container')
const stoneContainer = document.querySelector('.levels__info__container')
const cards = document.querySelectorAll('.card')
const levelsTitle = document.querySelector('.levels__title')
const levelsProgress = document.querySelector('.levels__progress')
const gradient = levelsProgress.querySelector('.gradient')
const levelLogo = document.querySelector('.levels__logo')
const descriptionLevel = document.querySelector('.description')
const activeBlock = document.querySelector('.nav__toggle__active_block')

activeBlock.style.width = navToggleBtns[0].offsetWidth + 'px'

const app = window.Telegram.WebApp;
app.ready()
app.isClosingConfirmationEnabled = true;

async function init (user){
    preloader.style.display = 'none'
    levelsTitle.textContent = levelName[user.level].name
    levelLogo.src = levelName[user.level].preloader
    descriptionLevel.textContent = levelName[user.level].text
    gradient.style = `box-shadow: #DA6713 0px 0px 20px ${(levelsProgress.clientWidth / 100 *(user.cristall / user.levelInfo.requirement * 100))}px`
    levelsProgress.querySelector('.progress').textContent = `${user.cristall} / ${user.levelInfo.requirement}`
    const {data} = await api.getProfileStatistics(user.telegramId)
    createScene(stoneContainer, levelName[user.level].modelName)
    if(!data) return 
    renderStatistics(data)
    
}


function renderStatistics(data){
    const keys = Object.keys(data)
    console.log(data)
    cards.forEach((card, index) => {
        const param = keys.find(key => card.id + 'Pay' === key)
        if(!param) return
        card.querySelector('.card__total span').innerText = data[param]
    })
    
    
}


backbtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})

navToggleBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    navToggleBtns.forEach(item =>  item.classList.remove('nav__toggle-active'))
    btn.classList.add('nav__toggle-active')
    sections.forEach(section => section.classList.remove('section-active'))
    sections[index].classList.add('section-active')
    activeBlock.style.left = navToggleBtns[index].offsetLeft + 'px'
    activeBlock.style.width = navToggleBtns[index].offsetWidth + 'px'
}))

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('card-active')
    })
})

document.addEventListener('DOMContentLoaded', () => {
    check(init, api)
})