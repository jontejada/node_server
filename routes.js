var fs = require('fs');

var routes = {
	'/index.html': function(req, res) {
		fs.readFile('./index.html', function (err, data) {
			if (err) {throw err;}
			res.setHeader("Content-Type","text/html");
			res.write(data);
			res.end();
		});
	},
	'/about.html': function(req, res) {
		fs.readFile('./about.html', function (err, data) {
			if (err) {throw err;}
			res.setHeader("Content-Type","text/html");
			res.write(data);
			res.end();
		});
	},
	'/': function(req, res) {
		res.setHeader("Content-Type","text/html");
		res.write("<link rel='stylesheet' type='text/css' href='style.css'><a href='index.html'>Home</a><br><a href='about.html'>About</a>");
		res.end();
	},
	'/style.css': function(req, res) {
		fs.readFile('./style.css', function (err, data) {
			console.log('css rf' + data);
			if (err) {throw err;}
			res.setHeader("Content-Type","text/css");
			res.write(data);
			res.end();
		});
	}
};

module.exports = routes;

