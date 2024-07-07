import { api } from "./Api.js"


const main = document.querySelector('.main')
const registryBtn = document.querySelector('.hello__registry')
const registry = document.querySelector('.form')


function validation(input, submit, inputs){
    submit.disabled = ![...inputs].every(inp=> inp.validity.valid)
}

function scrollMain(range){
    main.scroll({
        top: range,
        behavior: 'smooth'
    })
}

registryBtn.addEventListener('click', () => scrollMain(700))

async function submitForm(e) {
    e.preventDefault()
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
    scrollMain(4000)
}

// api.getContact()


function enableValidation(selectorInput, selectorSubmit){
    const inputs = document.querySelectorAll(selectorInput)
    const submit = document.querySelector(selectorSubmit)
    inputs.forEach(input => input.addEventListener('input', () => validation(input, submit, inputs)))
}

registry.addEventListener('submit', submitForm)


enableValidation('.form__container input', '.submit')