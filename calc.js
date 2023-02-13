
const express = require('express');
const app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/sum', function (req, res) {
    var firstNumber = parseInt(req.body.a);
   var secondNumber = parseInt(req.body.b);
    var sum = Number(firstNumber + secondNumber);
    res.send('The sum is: ' + Number(sum));

})
app.get('/product', function (req, res) {
    var firstNumber = parseInt(req.body.a);
   var secondNumber = parseInt(req.body.b);
    var sum = Number(firstNumber + secondNumber);
    res.send('The product is: ' + Number(sum));
})
