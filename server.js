var express = require('express'),
bodyParser = require('body-parser'),
config = require('./config'),
app = express(),
router = require('./router');

var requireAuthentication = function (req, res, next) {
    console.log('Accessing the secret section ...')
    next();
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('*', requireAuthentication);
app.use('/api',router);
app.listen(config.port, function(){
    console.log('App listening on port '+config.port+'!');
});