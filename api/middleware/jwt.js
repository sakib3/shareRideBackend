var jwt = require("json-web-token"); 
var config = require('../../config');

exports.encode = function(req,res,next){
    var user = res.locals.user;
    var payload = {
        id: user.id
    };
    
    jwt.encode(config.jwtSecret, payload, function(err,token){
        if(err)
            return res.status(400).send(err);
        res.locals.token = { token: token };
    });

    next();
};

exports.decode = function(req,res,next){
    jwt.decode(config.jwtSecret, res.locals.token.token, function (err, decodedPayload, decodedHeader) {
        if (err)
            return res.status(400).send(err);
    });
    next();
};