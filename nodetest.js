var http = require('http');
var test = require('./test');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  //test.loop();
}).listen(8080);