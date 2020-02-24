const express = require('express');
const log = require('debug')('web:logging')
const error = require('debug')('web:error');
const app = express();
app.use(express.static('public'))
app.use((req, res, next) => {
    log('\nRUNS ONCE FOR EVERY REQUEST')
    setTimeout(() => { next(); }, 2000);
}, (req, res, next) => {
    log('WILL RUN WHEN NEXT IS CALLED');
    next();
})
app.use('/about', (req, res, next) => {
    log('RUNS ONLY ON the /about page');
    next(new Error('Not authorized'));
});
app.use((err, req, res, next) => {
    error('ERROR FOUND:', err);
    res.sendStatus(500);
});

module.exports = app;