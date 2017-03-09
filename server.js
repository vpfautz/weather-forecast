var http = require('http');
var express = require('express');
var request = require('request');

var app = express();
app.use(express.static(__dirname + '/frontend'));
const API_KEY = 'my_openweathermap_api_key';

app.get('/get_data', function(req, res){
    if(req.query.city === undefined) {
        res.send({})
        return;
    }

    var city = req.query.city;
    var url = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY + "&q=" + city;

    request(url, function (error, response, body) {
        res.send(body);
    });
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
