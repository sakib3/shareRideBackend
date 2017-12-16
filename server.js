var express = require('express'),
bodyParser = require('body-parser'),
config = require('./config'),
app = express(),
router = require('./router');
jwt = require('./api/middleware/jwt');
var requireAuthentication = jwt.decode;
passportAuthenticate = require('./api/middleware/passport');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('/api/*', passportAuthenticate);

app.use('/',router.root);
app.use('/api',router.api);

app.listen(config.port, function(){
    console.log('App listening on port '+config.port+'!');
});
