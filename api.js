"use strict"

//My libs
const express = require('express');
const bodyParser = require('body-parser');

//My routes. On a larger project, this must be in a separate file

var controllerRoute = require('./routes');

//My app
var api = express();

//My middlewares
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));



//the interesting stuff happens here
api.use('/evaluate', controllerRoute);

api.use('*', function (req, res, next) {
        res.send(`Usage : Call API (POST) at endpoint "/evaluate" \nwith json object {expression: <expression string>}`);
});


api.listen(3000, function() {
    console.log('API started')
})
