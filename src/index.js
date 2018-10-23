'use strict';

const port = process.env.PORT || 2031;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const data = require('./data');
const logger = require('./logger');

var server = require('http').createServer(app);
const io = require('socket.io')(server);

data.on('changed', () => console.log('changed')); //eslint-disable-line

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));


io.on('connection', function (socket) {
    data.on('changed', () => {
        socket.emit('data', data.toObject());
    });
});
var expressServer = server.listen(port, () => {

    require('./routes')(app);

    logger.info({ message: `ready on port ${server.address().port}` });
});

module.exports = expressServer;