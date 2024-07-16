import { api } from "./Api.js";

const modalGreetings = document.querySelector('.modal__greetings')
const modalName = document.querySelector('.modal__name')
const main = document.querySelector('.main')


async function greethings(){
    window.Telegram.WebApp.expand() 
    const res = await api.getContact()
    const data = await api.checkUser(res.from.id)
    if(!data._id){
        window.location.href = '../Registry.html'
    }
    modalGreetings.querySelector('.modal__name') .textContent = data.firstName
    modalGreetings.querySelector('.modal__logo') .src = '../img/' + data.club + '.svg'
    modalGreetings.querySelector('.modal__title').classList.add('modal__title-active')
    
    main.classList.remove('hidden__main')
    modalGreetings.classList.add('modal-visible')
    setTimeout( () => { 
        modalGreetings.classList.remove('modal-visible') 
    }, 2000)
}




// api.getContact()
// .then((res) => api.checkUser(res.from.id))
// .then((res) =>  {
//     if(res._id){
//         modalName.textContent = res.firstName
        
//     }
// })
// .catch((err) => {
//     console.log(err)
// })


greethings()