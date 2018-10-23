module.exports = (app) => {
    app.use('/iota', require('./iota'));
    app.use('/docs', require('./docs'));
    app.use('/', require('./base'));
};