var http = require("http");
var express = require("express");
const requestIp = require('request-ip');

var app = express();
var port = process.env.PORT || 8080;

//middleware handler 
const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    req.ip = clientIp;
    next();
};

app.use(ipMiddleware);

app.use(function(req, res)
        {
            res.json({"Ip address":req.ip, "UserAgent":req.get("user-agent"), "language":req.acceptsLanguages()});
        })

http.createServer(app).listen(port);
