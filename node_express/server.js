var express = require('express')
var app = express()

app.get('/abc', function (req, res){
    res.send('Salut')
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Connecte",host, port)
})