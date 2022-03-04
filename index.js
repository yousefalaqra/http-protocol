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

            case '/csv':
            fs.readFile('./csv/data.csv', (error, content) => {
                let csv = content.toString();
                
                let lines = csv.split('\n');
                let headers = lines[0].split(',');
                let jsonObj = [];
                for (let i = 1; i < lines.length; i++) {
                    let obj = {};
                    let currentline = lines[i].split(',');
                    for (let j = 0; j < headers.length; j++) {
                        obj[headers[j]] = currentline[j];
                    }
                    jsonObj.push(obj);
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(jsonObj), 'utf-8');
            })
                
            break;

            case '/sql': // get data from sql database and convert to json
            let sql = require('mysql');
            let con = sql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "register"
            });
            let sqlQuery = "SELECT * FROM users";
            con.query(sqlQuery, (err, result) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result), 'utf-8');
            })

        default:
            break;
    
}
}

server.listen(6200, () => {
    console.log('Server is running over http://localhost:6200')
})