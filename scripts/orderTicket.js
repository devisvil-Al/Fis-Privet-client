import { api } from "./Api.js"
import { check } from "./Components/init.js"





// Выбор трибуны
const toggle = document.querySelector('.toggle')
const radio = document.querySelector('.radio')
const preloader = document.querySelector('.preloader')
const sections = document.querySelectorAll('.section')
const btn = document.querySelector('.nextBtn')
const tribunes = document.querySelectorAll('.tribune')
const backBtn = document.querySelector('.nav__btn-back')
const placeContainer = document.querySelector('.scrollContainer')
const places = document.querySelector('.place__container')
const infoBlockContainer = document.querySelector('.place__info_container')
const prevBtn = document.querySelector('.choisePlace .prevBtn')
const nextBtn = document.querySelector('.choisePlace .nextBtn')
const navName = document.querySelector('.nav__name')
const navStepProgress = document.querySelectorAll('.nav__step_progress')
const total = document.querySelector('.money_total span')
const totalTRUE = document.querySelector('.money_total-true span')
const arrPlaces = []
const inpCristall = document.querySelector('.cri__input')
const appData = {
    user: null,
    event: JSON.parse(localStorage.getItem('event')),
}

console.log(appData);


function init(user){
    console.log(user);
    appData.user = user
    navName.textContent = user.firstName
    inpCristall.placeholder = `у вас ${user.cristall} кристаллов`
    preloader.style.display = 'none'
}

function switchHeaderPlace (index1, index2){
    navStepProgress[index1].classList.remove('nav__step_progress-active')
    navStepProgress[index2].classList.add('nav__step_progress-active')
    sections[index1].classList.remove('section-active')
    sections[index2].classList.add('section-active')
}


function getTickets (tribune) {
    if(places.children.length !== 0) return
    api.getTickets(tribune, '66abcfa211c56bce4ed9a76a').then(data => {
        const tribuneSchema = data.schemaTickets
        for(let i = 0; i < tribuneSchema.length; i++){
            console.log(tribuneSchema[i]);
            for(let j = 0; j < tribuneSchema[i].length; j++){
                renderTribune(tribuneSchema[i][j])
                
            }
        }
    })
}

function totalPrice() {
    const totalPrice = arrPlaces.reduce((acc, el) => acc + el.price, 0)
    total.textContent = totalPrice
    if(inpCristall.value.length === 0){
        totalTRUE.textContent = totalPrice
    }
}

function totalPriceTrue(value){
    totalTRUE.textContent = arrPlaces.reduce((acc, el) => acc + el.price, 0) - value
}


function renderTribune(data){    
    const placeElement = document.createElement('div')
    placeElement.className = 'place__container__item'
    if(!data) {
        placeElement.classList.add('none')
    }else {
        placeElement.dataset.row = data.row + 1
        placeElement.innerHTML = data.place
        placeElement.addEventListener('click', () => {    
            if(!placeElement.classList.contains('active')) {
                if(arrPlaces.length === 3) return
                arrPlaces.push(data)
                placeElement.classList.add('active')
            }else {
                placeElement.classList.remove('active')
                arrPlaces.splice(arrPlaces.indexOf(data), 1)
            }
            infoBlockContainer.innerHTML = ''
            arrPlaces.forEach(item => addTicketBlock({sector: item.tribune, row: item.row, place: item.place}))
            nextBtn.disabled = false
            if(arrPlaces.length === 0) {
                    addTicketBlock({sector: data.tribune, row: '', place: ''})
                    nextBtn.disabled = true
            }
            totalPrice()
      
        })
    }
    places.append(placeElement)  
}

// placeContainer.onfocus = () => {
//     placeContainer.classList.add('scrollContainer-scale')
// }

// placeContainer.onblur = () => {
//     placeContainer.classList.remove('scrollContainer-scale')
// }

// placeContainer.addEventListener('click', () => {
//     placeContainer.focus()
// })


toggle.addEventListener('click', () => {
    toggle.previousElementSibling.checked = !toggle.previousElementSibling.checked
    if(toggle.previousElementSibling.checked){
        placeContainer.classList.add('scrollContainer-scale')
    } else {
        placeContainer.classList.remove('scrollContainer-scale')
    }
})

function addTicketBlock(data){
    const div = document.createElement('div')
    div.className = 'place__container__item'
    div.innerHTML = `
        <div class="place__info">
            <div class="place__info_block">Сектор: <span>${data.sector}</span> </div>
            <div class="place__info_block">Ряд: <span>${data.row}</span> </div>
            <div class="place__info_block">Место: <span>${data.place}</span> </div>
        </div>
    `
    infoBlockContainer.append(div)
}

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('scrollContainer') 
        || e.target.classList.contains('place__container__item') || e.target.classList.contains('place__container')) {
        return
    }
    placeContainer.blur()
})


btn.addEventListener('click', () => {
    switchHeaderPlace(0, 1)
    const tribune = document.querySelector('.tribune-active').id
    getTickets(tribune)
})

prevBtn.addEventListener('click', () => {
    switchHeaderPlace(1, 0)
})

nextBtn.addEventListener('click', () => {})

backBtn.addEventListener('click', () => {
    window.location.href = '../index.html'
})

tribunes.forEach(tribune => {
    tribune.addEventListener('click', () => {
        tribunes.forEach(tribune => {
            tribune.classList.remove('tribune-active')
            tribune.style = ``
        })
        tribune.classList.toggle('tribune-active')
        const active = tribune.getAttribute('data-active')
        tribune.style.backgroundImage = `url(../img/${active}.svg)`
        btn.disabled = false
        infoBlockContainer.innerHTML = '<p>Выберите понравившееся место!</p>'
        places.innerHTML = ''
        arrPlaces.splice(0, arrPlaces.length)
        
    })
})


inpCristall.addEventListener('input', () => {
    const total = arrPlaces.reduce((acc, el) => acc + el.price, 0)
    if(appData.user.cristall < inpCristall.value){
        inpCristall.value = appData.user.cristall
    }
    if(inpCristall.value > total){
        inpCristall.value = total
    }
    const value = inpCristall.value / 10
    totalPriceTrue(value)
})

check(init, api)