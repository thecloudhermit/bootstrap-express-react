const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
//dependencies go above

// define app
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8090;

const router = express.Router();

// routes
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(__dirname, 'public/index.html');
});

app.use('/api/v1', router);


module.exports = app;