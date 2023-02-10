const express = require('express')
const app = express()
const fs = require('fs')
const request = require('request')
//const config = require('./config.js')
//config.PORT
const { PORT } = require('./config')
const { API_KEY } = require('./config')

app.get('/ticker=:id', function(req, res){
        ticker = req.params.id
        console.log(ticker)
        
        var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+ticker+'&interval=5min&apikey='+API_KEY;

            request.get({
                url: url,
                json: true,
                headers: {'User-Agent': 'request'}
            }, (err, res, data) => {
                if (err) {
                console.log('Error:', err);
                } else if (res.statusCode !== 200) {
                console.log('Status:', res.statusCode);
                } else {
                // data is successfully parsed as a JSON object:
                var newData = JSON.stringify(data)
                    fs.writeFile(ticker+'.json', newData, err => {
                    if(err) throw err;
                    console.log("success");
                    })
                }
            })
        res.end()
})


app.listen(PORT || 4001 , () => { console.log("Server running ", PORT)})
