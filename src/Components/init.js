import granite from '/src/Assets/img/userStoun/granite.png'
import granitePreloader from '/src/Assets/img/userStoun/GranitPreloader.png'
import quarcite from '/src/Assets/img/userStoun/quarcite.png'
import quarcitePreloader from '/src/Assets/img/userStoun/QuarcitePreloader.png'
import agat from '/src/Assets/img/userStoun/agat.png'
import agatPrloader from '/src/Assets/img/userStoun/AgatPreloader.png'
import topaz from '/src/Assets/img/userStoun/topaz.png'
import saphire from '/src/Assets/img/userStoun/sapphire.png'

export async function check (init, api){
    // window.location.href = 'Registry.html'
    
    const preloader = document.querySelector('.preloader')
    console.log('start');
    const tg = window.Telegram.WebApp
    const dataHash = 'query_id=AAFCPbI6AAAAAEI9sjpkKRH0&user=%7B%22id%22%3A984759618%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22devisvil%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721492698&hash=c5c877983e0d790d0868f83006cf0f6c3305e0009b67de94266b5529ae711a9f'
    const user = {allows_write_to_pm :  true, first_name :  "Александр", id :  984759618, language_code :  "ru", last_name :  "", username :  "devisvil"}
    const check = await api.checkUser({data: tg.initData || dataHash, user: {...tg.initDataUnsafe.user} || {...user} })
    if(check.success){
        const data = await api.auth(tg.initDataUnsafe?.user?.id || user.id)
        if(!data.success){
            window.location.href = 'Registry.html'
            modalGreetings.classList.remove('modal-visible') 
        } else {
            init(data.user)
        }
    }
}

export const levelPoint = {
    1: 0,
    2: 350,
    3: 900,
    4: 2000,
    5: 4000,
}

export const levelName = {
    1: {modelName : 'granite', name : 'Гранит', img: granite, preloader: granitePreloader, text: ' Гранит – это основа, прочный и надежный фундамент. Этот камень является символом Санкт-Петербурга, города, известного своими гранитными набережными и прочными архитектурными сооружениями. Данный уровень представляет собой начальную стадию знакомства с клубом, закладывая крепкую основу в ваши дальнейшие взаимоотношения. Гранит – это символ вашей стойкости и верности, как прочного фундамента, на котором строятся великие победы.'},
    2: {modelName : 'quarcite', name : 'Кварцит', img: quarcite, preloader: quarcitePreloader, text: 'Кварцит — это символ роста и объединения. Как гранит обрастает кристаллами, так и ваша связь с клубом укрепляется и становится ярче. Кварцит олицетворяет процесс кристаллизации — постепенное превращение прочной основы в множество сверкающих граней. Каждый кристалл символизирует тех, кому не безразличен клуб, объединённых общей целью и фундаментальными ценностями. Этот уровень представляет собой развитие вашего участия, когда ваша приверженность и усилия становятся частью единого целого, укрепляя сообщество болельщиков и поддерживая клуб на пути к новым вершинам. Кварцит — это знак того, что вместе мы становимся сильнее и ярче.'},
    3: {modelName : 'agat', name : 'Агат', img: agat, preloader: agatPrloader, text: 'Агат — это камень, который отражает ваш уникальный путь в поддержке клуба. Его многослойная структура символизирует этапы, через которые вы прошли, и все эмоции, которые вы испытывали — от первых матчей до ярких побед. Каждая полоса на агате — это часть вашей истории, связанная с клубом. Агат напоминает, что за внешней красотой скрываются глубина и стойкость, как и в вашей приверженности. Этот уровень олицетворяет не только преданность, но и многослойность вашего вклада в команду. Ваша поддержка, как и сам агат, состоит из множества слоев — воспоминаний, эмоций и шагов, которые укрепляют вашу связь с клубом. Вы — часть этого уникального сообщества, которое делает клуб сильнее и ярче.'},
    4: {modelName : 'topaz', name : 'Топаз', img: topaz, preloader: granitePreloader, text: 'Топаз — это символ ясности, силы и стойкости. На этом уровне вы уже не просто болельщик — вы один из тех, кто освещает путь клубу. Топаз известен своей прозрачностью и прочностью, и эти качества олицетворяют вашу роль как человека, чья поддержка становится все более значимой. Ваше участие сияет ярче с каждым шагом, укрепляя клуб и его сообщество. Этот камень также символизирует гармонию и баланс, подчеркивая, что ваша поддержка является стабильной опорой для команды, особенно в трудные моменты. Как топаз преломляет свет, так и вы, через свою активность, приносите новую энергию и ясность в каждый момент жизни команды. Этот уровень символизирует ваше влияние, которое помогает клубу расти и достигать новых высот. Благодаря вам команда чувствует уверенность и стремится к новым победам.'},
    5: {modelName : 'saphire', name : 'Сапфир', img: saphire, preloader: granitePreloader, text: 'Сапфир — это символ мудрости, преданности и гармонии. Оранжевый сапфир с его множеством граней отражает ваш опыт и знания, которые вы накопили вместе с клубом. Каждая грань — это часть вашего многогранного вклада в жизнь команды. На этом уровне вы становитесь хранителем ценностей клуба, помогая ему расти и развиваться. Сапфир также олицетворяет постоянство и стойкость. Ваша поддержка остаётся непоколебимой даже в трудные моменты. Как сапфир преломляет свет через свои грани, так и вы привносите свет и энергию, поддерживая команду на пути к успеху. Этот уровень подчеркивает, что ваша поддержка — это осознанный и ценный вклад в будущее сообщества "Кристалл"'},
}

export function disableBtn (btn){
    btn.disabled = true
}

export function enableBtn (btn){
    btn.disabled = false
}

// Для блокировки сворачивания телеграмм окна
const data = JSON.stringify({
    eventType: 'web_app_setup_swipe_behavior',
    eventData: {
        allow_vertical_swipe : false,
    },
});
  
window.parent.postMessage(data, 'https://web.telegram.org');


