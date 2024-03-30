const ENDPOINT = 'https://striveschool-api.herokuapp.com/api/product/'
const AUTORIZATIONKEY = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAyZDE3MWU2MDQ3YjAwMTlmYTVmZjQiLCJpYXQiOjE3MTE0NjA3MjEsImV4cCI6MTcxMjY3MDMyMX0.tEZKDtdOiBHQiCffb4EUIOih66GDd5w2YdCIAlcsT74'



/* GET */

const requestInfo = async () => {
    try {
        const request = await fetch(ENDPOINT, {
            headers: {
                Authorization: AUTORIZATIONKEY
            }
        })
        const resposnse = await request.json()
        return resposnse
    } catch (error) {
        console.log(error)
    }
}

/* POST */

const postRquest = async (element) => {
    try {
        const post = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTORIZATIONKEY
            },
            body: JSON.stringify(element)
        })
        const postJson = await post.json()
        if (post.ok) {
            console.log(postJson);
        } else {
            console.log('error')
        }
    } catch (error) {
        console.error(error.message)
    }
}

/* DEL */

const deleteRquest = async (id) => {
    try {
        const deleteRequest = await fetch(ENDPOINT + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTORIZATIONKEY
            },
        })
        const deleteJson = await deleteRequest.json()
        if (deleteRequest.ok) {
            console.log(deleteJson);
        } else {
            console.log('error')
        }
    } catch (error) {
        console.error(error.message)
    }
}

/* PUT */

const putRquest = async (id, element) => {
    try {
        const put = await fetch(ENDPOINT + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTORIZATIONKEY
            },
            body: JSON.stringify(element)
        })
        const putJson = await put.json()
        if (put.ok) {
            console.log(putJson);
        } else {
            console.log('error')
        }
    } catch (error) {
        console.error(error.message)
    }
}