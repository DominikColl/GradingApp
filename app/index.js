const express = require('express');
const log = require('debug')('web:logging')
const error = require('debug')('web:error');
// body parser required to read body will get undefined if not used!!!
const bodyParser = require('body-parser');
const router = require('./routes')
const app = express();
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);
// very important for req.body!!!!!!!
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router)

app.use((err, req, res, next) => {
    error('ERROR FOUND:', err);
    res.sendStatus(500);
});

module.exports = app;