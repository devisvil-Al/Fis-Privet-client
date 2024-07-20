'http://localhost:3000/'
'https://fisprivet.onrender.com/'

class Api {
    url = 'https://fisprivet.onrender.com/'
    

    registry(body){
        return fetch(this.url + 'user/registry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    getContact(){
        return fetch(this.url + 'user/')
            .then(res => res.json())
    }

    checkUser(id){
        return fetch(this.url + 'user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        }).then(res => res.json())
    }

}


export const api = new Api()