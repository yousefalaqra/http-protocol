var http = require('http');
var fs = require('fs');
var path = require('path');


let server = http.createServer((req, res) => {

    let requestedUrl = req.url;

    
    
})

server.listen(6200, () => {
    console.log('Server is running over http://localhost:6200')
})