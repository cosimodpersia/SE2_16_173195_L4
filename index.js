//express module
var express = require('express');
//templeates
var bind = require('bind');
var employee = require('./employee.js');

var app = express();
app.use(express.static(__dirname + "/"));
app.set('port', (process.env.PORT || 1337));

app.use('/', function (request, response) {
    //bind to template
    bind.toFile('./home.tpl', {
            //set up parameters
            name: 'via Roma',
            id: 'Milano',
            surname: 'madonna'
        },
        function (data) {
            //write response
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});