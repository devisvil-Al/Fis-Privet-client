import { api } from "./Api.js"
import { selectSlide, scrollCommand } from "./Slider.js"
console.log(window.Telegram.WebApp.user)

const main = document.querySelector('.main')
const registryBtn = document.querySelector('.hello__registry')
const registry = document.querySelector('.form')
const sliderCommand = document.querySelector('.quiz__slider_container')
const quiz = document.querySelector('.quiz__container')
const leftBtn = document.querySelector('.left__btn')
const rightBtn = document.querySelector('.right__btn')
const slides =  Array.from(sliderCommand.children)
const formCheckInputs = quiz.querySelectorAll('label')
const quizIndicators = document.querySelectorAll('.quiz__indicator span')
const preloader = document.querySelector('.preloader')
const quizUserName = document.querySelector('.quiz__user_name')
const registryTelegramId = document.querySelector('.hello__telegram_id')
let count = 0

const data = {}

function validation(input, submit, inputs){
    submit.disabled = ![...inputs].every(inp=> inp.validity.valid)
}

function scrollMain(range){
    main.scroll({
        top: range,
        behavior: 'smooth'
    })
}

async function submitForm(e) {
    e.preventDefault()
    data.firstName = e.target.elements.firstName.value
    data.lastName = e.target.elements.lastName.value
    scrollMain(6000)
}
                
api.getContact()
.then((res) => api.checkUser(res.from.id))
.then((res) =>  {
    console.log(res);
    if(res._id){
        window.location.href = '../index.html'
    }
    data.ref = res.ref
    data.telegramId = res.from.id
    data.avatar = res.photo
    registryTelegramId.textContent = '@' + res.from.username
    registry.elements[0].value = res.from.first_name 
    quizUserName.textContent = res.from.first_name
})
.catch((err) => {
    console.log(err)
}).finally(() => {
    preloader.remove()
})

                
                
function enableValidation(selectorInput, selectorSubmit){
    const inputs = document.querySelectorAll(selectorInput)
    const submit = document.querySelector(selectorSubmit)
    inputs.forEach(input => input.addEventListener('input', () => validation(input, submit, inputs)))
}

function send(data){
    api.registry(data)
        .then(res =>  {
            if(res.ok) window.location.href = '../index.html'
        })
}

function activeBtn (elements, element){
    elements.forEach(item => item.classList.remove('active'))
    element.classList.add('active')
}



function enableVariant(el){
    el.previousElementSibling.checked = true
    data.team = [...formCheckInputs].filter((el) => el.previousElementSibling.checked).map((el) => el.textContent)[0]
    rightBtn.disabled = ![...formCheckInputs].some((el) => el.previousElementSibling.checked)
}

registry.addEventListener('submit', submitForm)
sliderCommand.addEventListener('scroll', (e) => {
    const countElement = scrollCommand (e, slides)
    if( slides[countElement] && !slides[countElement]?.classList.contains('disabled') ){
        slides[countElement].classList.add('slide__active')
       data['club'] = slides[countElement].querySelector('img').alt
       rightBtn.disabled = false
    } else {
        rightBtn.disabled = true
    }
})
registryBtn.addEventListener('click', () => scrollMain(700))

leftBtn.addEventListener('click', () => {
    if(quiz.scrollLeft === 0){
        scrollMain(700)
        return
    }
    quiz.scroll({left: 0, behavior: 'smooth'})
    leftBtn.disabled = false
    rightBtn.disabled = false
    count -= 1
    activeBtn(quizIndicators, quizIndicators[count])
})



rightBtn.addEventListener('click', () => {
    quiz.scroll({left: quiz.clientWidth + 20, behavior: 'smooth'})
    rightBtn.disabled = true
    leftBtn.disabled = false
    if(count < 1) count += 1
    activeBtn(quizIndicators, quizIndicators[count])
    if(Object.keys(data).length === 5){
        send(data)
    }
})


slides.forEach((el) => el.addEventListener('click', () => selectSlide(el, sliderCommand)))
formCheckInputs.forEach((el) => el.addEventListener('click', () => enableVariant(el)))
enableValidation('.form__container input', '.submit')