const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is an about us history');
    } else {
        // Only send the "Oops" page if the URL doesn't match the above routes
        res.end(`
            <h1> OOPS </h1>
            <p>We can't find the page you are looking for</p>
            <a href="/"> Home </a>
        `);
    }
})


server.listen(3000, 'localhost', () => {
    console.log('server listenening')
})