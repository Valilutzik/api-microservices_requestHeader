var http = require("http");
var express = require("express");

var app = express();

app.use(function(req, res)
        {
            res.json({"Ip address":req.ip, "UserAgent":req.get("user-agent"), "language":req.acceptsLanguages()});
        })

http.createServer(app).listen(3020);