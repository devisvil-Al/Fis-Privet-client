import { check } from "./Components/init.js"
import { api } from "./Api.js"
import { enableValidation } from "./Components/validation.js"

const backbtn = document.querySelector('.nav__btn-back')
const allSections = document.querySelectorAll('.section__container')
const backbtnOptions = document.querySelector('.nav__btn-options')
const profileSection = document.querySelector('.profile')
const notificationSection = document.querySelector('.notification')
const titleOptions = document.querySelector('.wrapper__options__title')
const preloader = document.querySelector('.preloader')
const profileForm = document.querySelector('.profile__form')
const profileBtn = document.querySelector('.profile_btn')
const notificationBtn = document.querySelector('.notification_btn')
const toggles = document.querySelectorAll('.toggle')
const AppData = {}

function init(user){
    AppData.user = user
  preloader.style.display = 'none'
  const {firstName, lastName, country, day, month, year} = profileForm.elements
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

backbtnOptions.addEventListener('click', () =>  window.scroll({
    top: 0,
    behavior: 'smooth'
}) )
backbtn.addEventListener('click', () =>  window.location.href = '../index.html')
toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('toggle-active')
    })
})

check(init, api)
enableValidation('.profile__form .form__input', '.profile__form .submit__btn')
