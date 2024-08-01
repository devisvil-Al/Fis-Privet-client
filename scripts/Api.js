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

    async checkUser(data){
        const res = await fetch(this.url + 'user/check', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await res.json()
    }

    async auth(id){
        const res = await fetch(this.url + 'user/auth', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        return await res.json()
    }

    async getFriends(ids){
        const res = await fetch(this.url + 'user/getFriends', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({ids})
        })
        return await res.json()
    }

    async getCristalls(id){
        const res = await fetch(this.url + 'user/getCristalls/' + id)
        return await res.json()
    }

    updateProfile(data, id){
        return fetch(this.url + 'user/updateProfile/' + id , {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }


    getAppData (){
        return fetch(this.url + 'app/')
            .then(res => res.json())
    }
}


export const api = new Api()