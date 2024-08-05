'http://localhost:3000/'
'https://fisprivet.onrender.com/'

class Api {
    url = 'http://localhost:3000/'
    

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

    updatePreferences(data, id){
        return fetch(this.url + 'user/updatePreferences/' + id , {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    updateNotification(data, id){
        return fetch(this.url + 'user/updateNotification/' + id , {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }


    getAppData (id){
        return fetch(this.url + 'app/events/' + id)
            .then(res => res.json())
    }


    async setEventState(id, actionName){
        const res = await fetch(this.url + 'app/event-state/?id=' + id + '?actionName=' + actionName, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, actionName})
        })
        return await res.json()
    }

    async checkEventSubscribe(id, actionName){
        const res = await fetch(this.url + 'app/event-subscribe', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, actionName})
        })
        return await res.json()
    }
}


export const api = new Api()