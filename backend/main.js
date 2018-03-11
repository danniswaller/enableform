var express = require('express');
var app = express();

app.get('/htmlTest', function (request, response) {
    var html = "<html><head></head><body><h1>hello</h1></body></html>"
    response.send(html);
});

app.get('/api/user/list', function (request, response) {
    let userList = [
        {username: 'tom', createDate: "2018-01-02"},
        {username: 'cat', createDate: "2018-01-02"}
    ];
    response.json(userList);
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});