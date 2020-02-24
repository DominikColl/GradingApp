const express = require('express');
const log = require('debug')('web:logging')
const error = require('debug')('web:error');
const bodyParser = require('body-parser');
const router = require('./routes')
const app = express();
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router)
// app.use(express.static('public'))
// app.use((req, res, next) => {
//     log('\nRUNS ONCE FOR EVERY REQUEST')
//     setTimeout(() => { next(); }, 2000);
// }, (req, res, next) => {
//     log('WILL RUN WHEN NEXT IS CALLED');
//     next();
// })
// app.use('/about', (req, res, next) => {
//     log('RUNS ONLY ON the /about page');
//     next(new Error('Not authorized'));
// });
app.use((err, req, res, next) => {
    error('ERROR FOUND:', err);
    res.sendStatus(500);
});

module.exports = app;