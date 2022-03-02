var http = require('http');
var fs = require('fs');
var path = require('path');


let server = http.createServer((req, res) => {

    let method = req.method;

    switch (method) {
        case 'GET':
            getHandler(req, res)

            break;

        default:
            break;
    }

})


function getHandler(req, res) {
    let requestedUrl = req.url;

    switch (requestedUrl) {
        case '/':
            fs.readFile('./templates/jo.html', (error, content) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            })

            break;

            case '/random':
            fs.readFile('./images/index.jpg', (error, content) => {
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                res.end(content, 'utf-8');
            })
            break;

        default:
            break;
    }
}

server.listen(6200, () => {
    console.log('Server is running over http://localhost:6200')
})