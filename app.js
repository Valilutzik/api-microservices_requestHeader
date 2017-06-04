var http = require("http");
var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

app.use(function(req, res)
        {
            res.json({"Ip address":req.ip, "UserAgent":req.get("user-agent"), "language":req.acceptsLanguages()});
        })

http.createServer(app).listen(port);
