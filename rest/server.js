const express = require('express')
const app = express()
const fs = require('fs')

app.get('/list-users', function(req, res){
    fs.readFile( __dirname + '/user.json', 'utf8', function (err, data){
        if (err) throw err
        console.log(data)
        res.end(data)
    })
})

app.get('/form', function (req, res){
    res.sendFile(__dirname + "/form.html")
})

var user = {
    "user4" : {
        "name" : "Marie",
        "Password" : "123456abc",
        "profession" : "Director"
    }
}

app.post('/add-user', function(req, res){
    //console.log('ok');
    fs.readFile(__dirname + '/user.json', 'utf8', function(err, data){
        if (err) throw err
        data = JSON.parse(data)
        data['user4'] = user['user4'];
        console.log(data)
        var newData = JSON.stringify(data)
        fs.writeFile('user.json', newData, err => {
            if (err) throw err
            console.log('Success')
        })
    })
})

app.get('/id=:id', function(req, res){
    fs.readFile(__dirname + '/user.json', 'utf8', function(err, data){
        if (err) throw err
        var users = JSON.parse(data)
        var user = users["user"+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})

app.get('/form-delete', function (req, res){
    res.sendFile(__dirname + "/form-delete.html")
})

app.delete('/delete-user', function(req, res){
    //console.log('ok');
    fs.readFile(__dirname + '/user.json', 'utf8', function(err, data){
        if (err) throw err
        data = JSON.parse(data)
        delete data['user1'];
        console.log(data)
        var newData = JSON.stringify(data)
        fs.writeFile('user.json', newData, err => {
            if (err) throw err
            console.log('Success')
        })
    })
})


const server = app.listen(8081, function (){
    const host = server.address().address
    const port = server.address().port
    console.log("Running ....", host, port)
})
