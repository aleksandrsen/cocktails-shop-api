const http = require('http');
const path = require('path');
const api = require("./api");
const bodyParser = require("body-parser");
const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyParser.json());
app.use("/api", api);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('Running');
});