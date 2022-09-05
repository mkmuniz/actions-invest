export async function get(url) {
    const resp = await fetch('http://localhost:3000/api/' + url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    const data = await resp.json();

    return {
        body: data
    }
}

export async function post(url, body) {
    const resp = await fetch('http://localhost:3000/api/' + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await resp.json();

    return {
        body: data
    }
}