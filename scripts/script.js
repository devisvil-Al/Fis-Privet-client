import { api } from "./Api.js"


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
let count = 0

const data = {
    profile: {}
}


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
    data.profile.firstName = e.target.elements.firstName.value
    data.profile.lastName = e.target.elements.lastName.value
    //    try{ 
        
    //         const {firstName, lastName} = e.target.elements
    //         const body = {
        //             firstName: firstName.value,
        //             lastName: lastName.value
        //         }
        //         const res = await api.registry(body)
        //         if (res.ok) {
            //             const data = await res.json()
            //         }else {
                //             alert('Error')
                //         }
                //     } catch (e) {
                    //         alert('Error')
                    //     }
                    scrollMain(6000)
}
                
// api.getContact()
                
                
function enableValidation(selectorInput, selectorSubmit){
    const inputs = document.querySelectorAll(selectorInput)
    const submit = document.querySelector(selectorSubmit)
    inputs.forEach(input => input.addEventListener('input', () => validation(input, submit, inputs)))
}

function scrollCommand(e){
    const elements = e.target.children
    const fullrange = e.target.scrollLeft
    const range = elements[0].clientWidth
    slides.forEach((el) => el.classList.remove('slide__active'))
    const countElement = Math.ceil((fullrange - 80) / range) 
    elements[countElement].classList.add('slide__active')
}

function activeSlide(el){
    slides.forEach((el) => el.classList.remove('enableSlide'))
    el.classList.add('enableSlide')
    data['team'] = el.querySelector('img').alt
    rightBtn.disabled = false
}

function enableVariant(el){
    el.previousElementSibling.checked = !el.previousElementSibling.checked
    data.teams = [...formCheckInputs].filter((el) => el.previousElementSibling.checked).map((el) => el.textContent)
    rightBtn.disabled = ![...formCheckInputs].some((el) => el.previousElementSibling.checked)
}

registry.addEventListener('submit', submitForm)
sliderCommand.addEventListener('scroll', scrollCommand)
registryBtn.addEventListener('click', () => scrollMain(700))
leftBtn.addEventListener('click', () => {
    quiz.scroll({left: 0, behavior: 'smooth'})
    leftBtn.disabled = true
    rightBtn.disabled = false
    count -= 1
    quizIndicators.forEach(item => item.classList.remove('active'))
    quizIndicators[count].classList.add('active')
})
rightBtn.addEventListener('click', () => {
    quiz.scroll({left: quiz.clientWidth + 20, behavior: 'smooth'})
    rightBtn.disabled = true
    leftBtn.disabled = false
    console.log(data);
    if(count < 1)count += 1
    quizIndicators.forEach(item => item.classList.remove('active'))
    quizIndicators[count].classList.add('active')
})
slides.forEach((el) => el.addEventListener('click', () => activeSlide(el)))
formCheckInputs.forEach((el) => el.addEventListener('click', () => enableVariant(el)))
enableValidation('.form__container input', '.submit')