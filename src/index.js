'use strict';

const port = process.env.PORT || 2031;
const express = require('express');
const app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const data = require('./data');
const logger = require('./logger');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));

io.on('connection', function (socket) {
    socket.emit('data', data.toObject());
    data.on('changed', () => {
        socket.emit('data', data.toObject());
    });
});

var expressServer = server.listen(port, () => {
    require('./routes')(app);
    logger.info({ message: `ready on port ${server.address().port}` });
});

module.exports = expressServer;