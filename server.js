var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/ui/demo.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'demo.html'));
});

app.get('/ui/demo2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'demo2.html'));
});

app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/mydemo.java', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mydemo.java'));
});

app.get('/ui/image.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2exp.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/middle.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'middle.jpg'));
});

app.get('/ui/abie.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'abie.jpg'));
});

app.get('/ui/roshan.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan.jpeg'));
});

// not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
