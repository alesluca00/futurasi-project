var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('app'));

// viewed at http://localhost:800
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/persona', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/persona.html'));
});

app.listen(8000);