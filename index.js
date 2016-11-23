//express module
var express = require('express');
//templeates
var bind = require('bind');
var url = require('url');
var employee = require('./employee.js');
//POST reader
var bodyParser = require('body-parser');
//util
var util = require('util');

var app = express();

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));
/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

/**
 * @brief let nodejs see the working directory
 */
app.use(express.static(__dirname + "/"));
/**
 * @brief set the listening port
 */
app.set('port', (process.env.PORT || 1337));

/**
 * @brief this method handles the requests concerning the search query
 * @param[1] '/search', get request
 * @param[2] function which has to take actions
 */
app.get('/search', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var obj;
    var id = url.parse(req.url, true).query.id;
    var emp = employee.getEmployee(id);
    if (emp == null) {
        obj = {
            id: -1
        }
    } else {
        obj = emp
    }
    res.end(JSON.stringify(obj));
});

/**
 * @brief this method handles the insert request which has to insert
 or update the employee with the id specified by the user.
 */
app.post('/insert', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    employee.addEmployee(req.body.id, req.body.name, req.body.surname, req.body.level, req.body.salary);
    res.end("done");
});

/**
 * @brief this method handles the delete request which has to delete from the database the 
 delete employee request. The id is inserted by the user. 
 */
app.post('/delete', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    employee.deleteEmployee(req.body.id);
    res.end("deleted");
});

/**
 * @brief the method is responsible for handle the home page requests.
 it returns the home page.
 */
app.use('/', function (request, response) {
    //bind to template
    bind.toFile('./home.tpl', {
            //set up parameters
            name: '',
            id: '',
            surname: '',
            salary: '0',
            level: '0'
        },
        function (data) {
            //write response
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
});

/**
 * @brief start nodejs server
 */
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});