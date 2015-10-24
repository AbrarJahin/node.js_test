var http = require('http');

http.createServer(function(request, responce)
{
	responce.writeHead(200,{'Content-Type' : 'text/html'});
	responce.end('<html> <body> <h1>My Node.js site</h1> </body> </html>');
}).listen(3000,'localhost');

console.log("Server running on 'http://localhost:3000'");

/*
var connect = require('connect');

var app = connect()
	.use(connect.static('public'))
	.use(function (req, res) {
		res.end("Couldn't find it.");
	})
	.listen(3000);

 */