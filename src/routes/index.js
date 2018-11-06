module.exports = (app) => {

    //prefix all subroutes in designated files with specified prefix
    app.use('/iota', require('./iota'));
    app.use('/docs', require('./docs'));
    app.use('/', require('./base'));
};