const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home page')
    }
    else if (req.url === '/about') {
        res.end('about page')
    } else {
        res.end('Error page')
    }
})


server.listen(3000, () => {
    console.log('server listening on port 3000')
})

const getText = (path) => {
    return new Promise((res, rej) => {

        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
}

// getText('./content/first.txt')
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })


const start = async () => {
    try {
        const first = await getText('./content/first.txt')
        console.log(first)
    } catch (error) {
        console.log(error)
    }

}
start()