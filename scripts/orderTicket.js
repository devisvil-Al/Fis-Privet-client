const btn = document.querySelector('.nextBtn')
const tribunes = document.querySelectorAll('.tribune')



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
    })
})