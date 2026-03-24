const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3007;

http.createServer((req, res) => {
  const file = req.url === '/' ? '/index.html' : req.url;
  const ext = path.extname(file);
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };

  fs.readFile(path.join(__dirname, file), (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Serving at http://localhost:${PORT}`));
