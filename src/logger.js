const winston = require('winston');
const path = require('path');

let logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: path.join(__dirname, '..', 'temp/error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(__dirname, '..', 'temp/combined.log') }),
        new winston.transports.Console({ format: winston.format.simple() })
    ]
});

module.exports = logger;