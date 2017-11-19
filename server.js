var express = require('express'),
bodyParser = require('body-parser'),
config = require('./config'),
app = express(),
router = require('./router');

app.use(function(req, res, next) {
    if(req.originalUrl != '/rides')
        res.send({'error': 'Bad Request'});
    next();
});
router(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(config.port, function(){
    console.log('Example app listening on port '+config.port+'!');
});