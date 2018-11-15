'use strict';

require('dotenv').config(); //initialize environment variables

const port = process.env.PORT || 2031; //prefers port env variable if present

//npm dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
let server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const morgan = require('morgan');

//local dependencies
const data = require('./data');
const logger = require('./logger');

//express setup
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

//web socket setup
io.on('connection', function (socket) {
    socket.emit('data', data.toObject());
    data.on('changed', () => {
        socket.emit('data', data.toObject());
    });
});

//web route setup
var expressServer = server.listen(port, () => {
    require('./routes')(app);
    logger.info({ message: `ready on port ${server.address().port}` });
});

module.exports = expressServer;