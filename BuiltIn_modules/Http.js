const http = require('http');
const url = require('url');
const cookies = require('cookie')

const server = http.createServer((req, res) => {
    if (req.url === '/?name=a') {

        req.on('data', (chunk) => {
            console.log(chunk)
            console.log(chunk.toString())
        })

        const parsedUrl = url.parse(req.url, true);
        console.log(parsedUrl.query);
        console.log(req.params)
        console.log(req.headers)
        console.log(req.headers.cookie);
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is an about us history');
    } else if (req.url === '/test') {
        let data = ''
        req.on('data', (chunk) => {
            data += chunk.toString();
            console.log('we got a chunk of data in json', chunk.toString())
        })

        req.on('end', () => {
            const parsedData = JSON.parse(data); // Parse JSON data
            console.log('Final JSON data:', parsedData);

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`We received your request from ${req.headers.host}, and we will send you something back.`);
        });
    }
    else {
        res.end(`
            <h1> OOPS !</h1>
            <p>We can't find the page you are looking for</p>
            <a href="/"> Home </a>
        `);
    }
})
const myreq = http.request({
    path: "/test",
    hostname: 'localhost',
    port: "3000",
    method: 'POST',
    headers: {
        "content-type": 'application/json'
    }
}, (res) => {
    console.log(res.statusCode);

    let data = "";
    res.on('data', (chunk) => {
        data += chunk.toString();
    });

    res.on('end', () => {
        console.log('Response:', data);
        console.log('Finished listening to this request');
    });

    res.on('error', (err) => {
        console.log("response errpr", err)
    })
})

myreq.on('error', (err) => {
    console.log('error happening while sending the request', err)
})

myreq.write(JSON.stringify({
    "this": "is",
    "JSON": "JSON",
    "Test": "Test",
    "data": "data"
}))

myreq.end()

server.listen(3000, 'localhost', () => {
    console.log('server listenening')
})