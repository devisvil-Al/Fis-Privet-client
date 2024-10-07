// import '../Assets/css/nullstyle.css'
// import '../Assets/css/profile.css'

import { check } from "/src/Components/init.js"
import { api } from "/src/Components/Api.js"
import { enableValidation } from "/src/Components/validation.js"



const backbtn = document.querySelector('.nav__btn-back')
const preloader = document.querySelector('.preloader')
const profileAvatar = document.querySelector('.profile__avatar img')
const allSections = document.querySelectorAll('.section__container')
const backbtnOptions = document.querySelector('.nav__btn-options')
const profileSection = document.querySelector('.profile')
const notificationSection = document.querySelector('.notification')
const preferencesSection = document.querySelector('.preferences')
const titleOptions = document.querySelector('.wrapper__options__title')
const profileForm = document.querySelector('.profile__form')
const preferencesForm = document.querySelector('.preferences__form') 
const notificationForm = document.querySelector('.notification__form') 
const profileBtn = document.querySelector('.profile_btn')
const notificationBtn = document.querySelector('.notification_btn')
const preferencesBtn = document.querySelector('.preferences_btn')
const toggles = document.querySelectorAll('.toggle')
const preferencesVariables = document.querySelectorAll('.preferences__variable')
const AppData = {}

function init(user){
    window.scrollTo(0, 0)
    AppData.user = user
    preloader.style.display = 'none'
    const {firstName, lastName, country, day, month, year} = profileForm.elements
    const {cristals} = notificationForm.elements
    cristals.checked = user.hubCristall.notification
    const variableTeam = [...preferencesForm.elements.team].find(item => item.value === user.team)
    variableTeam.checked = true
    profileAvatar.src = user.avatar
    if(!user.avatar) profileAvatar.remove()
    firstName.value = user.firstName
    lastName.value = user.lastName
    country.value = user.country || ''
    day.value = user.birthday?.day || ''
    month.value = user.birthday?.month || ''
    year.value = user.birthday?.year || ''
}

profileBtn.addEventListener('click', () => {
    titleOptions.textContent = 'Персональная информация'
    allSections.forEach(section => section.classList.remove('section-active'))
    profileSection.classList.add('section-active')
    window.scroll({
        top: window.outerHeight,
        behavior: 'smooth'
    })
})

notificationBtn.addEventListener('click', () => {
    titleOptions.textContent = 'Настройки уведомлений'
    allSections.forEach(section => section.classList.remove('section-active'))
    notificationSection.classList.add('section-active')
    window.scroll({
        top: window.outerHeight,
        behavior: 'smooth'
    })
})

preferencesBtn.addEventListener('click', () => {
    titleOptions.textContent = 'Ваши предпочтения'
    allSections.forEach(section => section.classList.remove('section-active'))
    preferencesSection.classList.add('section-active')
    window.scroll({
        top: window.outerHeight,
        behavior: 'smooth'
    })
})

profileForm.addEventListener('submit', async e => {
  e.preventDefault()
  const {firstName, lastName, country, day, month, year} = profileForm.elements
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    birthday: {
      day: day.value,
      month: month.value,
      year: year.value
    }
  }
    const res = await api.updateProfile(data, AppData.user.telegramId)
    console.log(res);
    if(res.success){
        window.location.reload()
    }
})

preferencesForm.addEventListener('submit', async e => {
    e.preventDefault()
    const {team} = preferencesForm.elements
    const data = {team: team.value}
    const res = await api.updatePreferences(data, AppData.user.telegramId)
    if(res.success){
        window.location.reload()
    }
})


notificationForm.addEventListener('submit', async e => {
    e.preventDefault()
    const {cristals} = notificationForm.elements
    const data = {cristals: cristals.checked}
    const res = await api.updateNotification(data, AppData.user.telegramId)
    if(res.success){
        window.location.reload()
    }
})




backbtnOptions.addEventListener('click', () =>  window.scroll({
    top: 0,
    behavior: 'smooth'
}) )

preferencesVariables.forEach((variable) => {
    variable.addEventListener('click', () => {
        variable.querySelector('input').checked = true
    })
})
backbtn.addEventListener('click', () =>  window.location.href = 'index.html')
toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.previousElementSibling.checked = !toggle.previousElementSibling.checked
    })
})

document.addEventListener('DOMContentLoaded', () => {
    check(init, api)
})
enableValidation('.profile__form .form__input', '.profile__form .submit__btn')
