import { api } from "./Api.js"
import { check } from "./Components/init.js"
import { levelPoint } from "./Components/init.js"


const preloader = document.querySelector('.preloader')
const backbtn = document.querySelector('.nav__btn')
const friendsContainer = document.querySelector('.friends__container')
const addFriends = document.querySelector('.addFriend')
const btnAddCristall = document.querySelector('.nav__btn-getCri')
const userName = document.querySelector('.noFriends__userName')


console.log(document.referrer);


async function init(user){
    preloader.style.display = 'none'
    if(user.hubCristall.cristall){
        btnAddCristall.innerHTML = `Cобрать <br> ${user.hubCristall.cristall} кр`
        btnAddCristall.classList.add('nav__btn-getCri-active')
        btnAddCristall.addEventListener('click', async () => {
            const res = await api.getCristalls(user.telegramId)
            if(res.success){
                btnAddCristall.innerHTML = `пригласи друзей и получай 20%`
                btnAddCristall.classList.remove('nav__btn-getCri-active')
              
                eventFriends(res.user)
            }
        })
    }

    eventFriends(user)
    addFriends.addEventListener('click', () => {
        const messageText = `Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=${user.telegramId}`;
        const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(messageText)}`;
        window.Telegram.WebApp.openTelegramLink(telegramShareUrl);
    })
}

async function eventFriends (user){
    const {friends} = await api.getFriends(user.friends)
    if(friends.length !== 0){
        friendsContainer.innerHTML = ''
        friends.push(user)
        friends.sort((a, b) => (b.cristall + levelPoint[b.level]) -(a.cristall + levelPoint[a.level]))
        friends.forEach(renderFriends)
    } else {
        userName.textContent = user.firstName
    }
}


function renderFriends (data, index){
    console.log(data);
    const friendElement = document.createElement('div')
    friendElement.classList.add('friend__block')
    friendElement.innerHTML = `
        <div class='avatar__container'>
            <img class="friend__avatar" src="${data.avatar ? data.avatar : '' }" alt="">
        </div>
        <p class="name">${data.firstName} <br> ${data.lastName}</p>
        <div class="friend__info_container">
            <div class="block__info cristal">кр <br> ${data.cristall}</div>
            <div class="block__info level">ур <br> ${data.level}</div>
            <div class="block__info raiting ${index < 3 ? 'cupe' : 'normal'}">${index + 1}</div>
        </div>  
    `
    friendsContainer.append(friendElement)
}

backbtn.addEventListener('click', () => {
    window.location.href = '../index.html'
})

document.addEventListener('DOMContentLoaded', () => {
    check(init, api)
})