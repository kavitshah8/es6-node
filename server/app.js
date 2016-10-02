var express = require('express');
var app = express();

var server = require('http').createServer(app);
server.listen(9000, () => console.log('App'));

// (function main() {
// 	const f1 = () => console.log('App');
// 	f1();
// })();

