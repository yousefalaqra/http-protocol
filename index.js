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

            case '/csv'://read csv filr then convert to json
            fs.readFile('./data.csv', (error, content) => {
                let csv = content.toString();
                let lines = csv.split('\n');
                let json = [];
                lines.forEach(line => {
                    let row = line.split(',');
                    let obj = {
                        alphapet: row[0],
                        numbers: row[1]
                    }
                    json.push(obj);
                })
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(json), 'utf-8');
            })

            break;
        default:
            break;
    
}
}

server.listen(6200, () => {
    console.log('Server is running over http://localhost:6200')
})