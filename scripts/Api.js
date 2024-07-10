class Api {
    url = 'http://localhost:3000/'
    

    registry(body){
        return fetch(this.url + 'registry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    getContact(){
        return fetch(this.url + 'user')
            .then(res => res.json())
    }


}


export const api = new Api()