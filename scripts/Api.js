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
        console.log(id);
        const res = await fetch(this.url + 'user/auth' + id, {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        return await res


    }

}


export const api = new Api()