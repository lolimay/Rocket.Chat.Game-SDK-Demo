const http = require('http')
const url = require('url')

const port = 30030
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.end(JSON.stringify({ success: true, text: 'Hello, World!' }));
}).listen(port)
