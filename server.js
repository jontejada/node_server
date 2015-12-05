var http = require('http');
var fs   = require('fs');
//var routes = require('./routes');
var PORT = 8000;
//var url = require('url');

function handleRequest(req, res) {
	var extension = req.url.split('.').pop();

	fs.readFile('.' + req.url, function (err, data) {
		if (err) {
			res.setHeader("Content-Type","text/html");
			res.statusCode = 404;
			res.write("<link rel='stylesheet' type='text/css' href='style.css'><h1>404! NOT FOUND</h1><img src='https://http.cat/404'><br><a href='index.html'>Home</a><br><a href='about.html'>About</a>");
	    	res.end();
	    	return;
		}
		res.setHeader("Content-Type","text/" + extension);
		res.write(data);
		res.end();
	});

 // 	if (routes[req.url]) {
	// 	routes[req.url](req, res);
	// } else {
	// 	res.statusCode = 404;
	// 	res.setHeader("Content-Type","text/html");
	// 	res.write("<link rel='stylesheet' type='text/css' href='style.css'><h1>404! NOT FOUND</h1><img src='https://http.cat/404'><br><a href='index.html'>Home</a><br><a href='about.html'>About</a>");
 //    	res.end();
 //    }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("I'm listening on port " + PORT);
});
