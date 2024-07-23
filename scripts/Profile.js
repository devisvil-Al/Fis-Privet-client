import {api} from "./Api.js"

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

(async () => {
    const tg = window.Telegram.WebApp
    const dataHash = 'query_id=AAFCPbI6AAAAAEI9sjpkKRH0&user=%7B%22id%22%3A984759618%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22devisvil%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721492698&hash=c5c877983e0d790d0868f83006cf0f6c3305e0009b67de94266b5529ae711a9f'
    const user = {allows_write_to_pm :  true, first_name :  "Александр", id :  984759618, language_code :  "ru", last_name :  "", username :  "devisvil"}
    const check = await api.checkUser({data: tg.initData || dataHash, user: {...tg.initDataUnsafe.user} || {...user} })
    if(check.success){
        const data = await api.auth(tg.initDataUnsafe?.user?.id || user.id)
        if(!data.success){
            window.location.href = '../Registry.html'
            modalGreetings.classList.remove('modal-visible') 
            preloader.style.display = 'none'
        } else {
            setTimeout(() => {
                init(data.user)
               
            }, 1000)
        }
    }
})()

backbtn.addEventListener('click', () => {
    window.location.href = '../index.html'
})

navToggleBtns.forEach(btn => btn.addEventListener('click', () => {
    navToggleBtns.forEach(btn => btn.classList.toggle('nav__toggle-active'))
    sections.forEach(section => section.classList.toggle('section-active'))
}))