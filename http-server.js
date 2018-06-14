var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/persona', function(req, res) {
    res.sendFile(path.join(__dirname + '/persona.html'));
});

app.listen(process.env.PORT || 8000); // viewed at http://localhost:800
