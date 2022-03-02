var http = require('http');
var fs = require('fs');
var path = require('path');
const csvjson = require('csvjson');
const createReadStream = fs.createReadStream;
const createWriteStream = fs.createWriteStream;






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
            const image = './img.jpg';
            fs.readFile(image ,(err, data) => {
                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                res.end(data);
            })
            break;
        case '/csv':
            fs.readFile('./data.csv', 'utf-8', (err, data) => {
                res.writeHead(200, {'Content-Type': 'application/json'});
                const toObject = csvjson.stream.toObject();
                const stringify = csvjson.stream.stringify();
                createReadStream('./data.csv', 'utf-8')
                .pipe(toObject)
                .pipe(stringify)
                .pipe(createWriteStream('./output.json'));
                res.end('done');
            })
            break;
        default:
            break;
    }
}

server.listen(6200, () => {
    console.log('Server is running over http://localhost:6200')
})