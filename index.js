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
        case '/random':
            fs.readFile("black.jpg", function(err, data) {
                if (err) throw err
                http.createServer(function(req, res) {
                    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                    res.end(data)
                })
            })
            break;
        case '/csv':
            fs.readFile("C1.csv", function(err, data) {
                if (err) throw err
                http.createServer(function(req, res) {
                    res.writeHead(200, { 'Content-Type': 'text/csv' })
                    res.end(data)
                })
            })
            break;
        case '/json':
            fs.readFile("package.json", function(err, data) {
                if (err) throw err
                http.createServer(function(req, res) {
                    res.writeHead(200), { "Content-Type": "application/json" };
                    res.end(data);
                })
            })
            break;

        default:
            break;
    }
}
server.listen(8000, () => {
    console.log('Server is running over http://localhost:8000')
})