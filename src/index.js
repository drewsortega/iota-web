'use strict';

const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: path.join(__dirname, '..', 'temp/error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(__dirname, '..', 'temp/combined.log') }),
        new winston.transports.Console({ format: winston.format.simple() })
    ]
});

var server = app.listen(process.env.PORT || 2031, () => {

    require('./routes')(app);

    logger.info({message: `ready on port ${server.address().port}`});
});

module.exports = server;